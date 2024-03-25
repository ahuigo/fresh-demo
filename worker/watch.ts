import { debounce as _debounce } from "$std/async/debounce.ts";
import { dirname, fromFileUrl } from "$std/path/mod.ts";
import { existsSync as fileExists } from "$utils/fs/dir.ts";
function getRootPath() {
  const dir = dirname(fromFileUrl(import.meta.url));
  return dirname(dir);
}

function mkdir(filepath: string) {
  const path = filepath;
  try {
    Deno.statSync(path);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      Deno.mkdirSync(path, { recursive: true });
    } else {
      throw error;
    }
  }
  return true;
}

let watchCount = 0;
async function watchIslands() {
  const rootDir = getRootPath();
  console.log(
    `%c Watching(${++watchCount}) islands(${rootDir})...`,
    "color: gray; background-color: orange;",
  );

  // debounce(fn,1000);
  const islandHandler = (event: Deno.FsEvent) => {
    const filepath = event.paths[0];
    if (
      filepath.match(".tsx") && filepath.startsWith(rootDir) &&
      !filepath.includes(" ")
    ) {
      console.log("[%s] %s", event.kind, filepath);
      const relpath = filepath.slice((rootDir + "/islands/").length);
      const importIslandPath = "@/islands/" + relpath;
      const routeFile = rootDir + "/routes/" + relpath;
      const routeDir = dirname(routeFile);
      mkdir(routeDir);
      if (event.kind === "create" || event.kind == "modify") {
        if (fileExists(filepath)) {
          if (fileExists(routeFile)) {
            return;
          }
          console.log(`write to file ${routeFile}`);
          const content = `export {default} from  "${importIslandPath}";`;
          Deno.writeTextFileSync(routeFile, content);
        } else {
          if (fileExists(routeFile)) {
            console.log("remove file", routeFile);
            Deno.removeSync(routeFile);
          }
        }
      } else if (event.kind === "remove") {
        console.log("remove file", routeFile);
        // Deno.removeSync(routeFile);
      }
    }
  };

  const watcher = Deno.watchFs("./islands");
  for await (const event of watcher) {
    islandHandler(event);
  }
}
watchIslands();