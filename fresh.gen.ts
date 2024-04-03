// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $deno_import from "./routes/deno/import.tsx";
import * as $deno_os from "./routes/deno/os.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $mapbox_draw_polygon from "./routes/mapbox/draw/polygon.tsx";
import * as $mapbox_plot_plot_point from "./routes/mapbox/plot/plot-point.tsx";
import * as $react_hello from "./routes/react/hello.tsx";
import * as $react_play_index from "./routes/react/play/index.tsx";
import * as $react_signal from "./routes/react/signal.tsx";
import * as $video_ffmpeg_wasm from "./routes/video/ffmpeg-wasm.tsx";
import * as $mapbox_draw_draw_control from "./islands/mapbox/draw/draw-control.tsx";
import * as $mapbox_draw_polygon_1 from "./islands/mapbox/draw/polygon.tsx";
import * as $mapbox_lib from "./islands/mapbox/lib.ts";
import * as $mapbox_plot_plot_point_1 from "./islands/mapbox/plot/plot-point.tsx";
import * as $react_hello_1 from "./islands/react/hello.tsx";
import * as $react_load_cdn from "./islands/react/load-cdn.tsx";
import * as $react_play_index_1 from "./islands/react/play/index.tsx";
import * as $signal_Counter from "./islands/signal/Counter.tsx";
import * as $signal_SignalCompute from "./islands/signal/SignalCompute.tsx";
import * as $video_ffmpeg_wasm_1 from "./islands/video/ffmpeg-wasm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/deno/import.tsx": $deno_import,
    "./routes/deno/os.tsx": $deno_os,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/mapbox/draw/polygon.tsx": $mapbox_draw_polygon,
    "./routes/mapbox/plot/plot-point.tsx": $mapbox_plot_plot_point,
    "./routes/react/hello.tsx": $react_hello,
    "./routes/react/play/index.tsx": $react_play_index,
    "./routes/react/signal.tsx": $react_signal,
    "./routes/video/ffmpeg-wasm.tsx": $video_ffmpeg_wasm,
  },
  islands: {
    "./islands/mapbox/draw/draw-control.tsx": $mapbox_draw_draw_control,
    "./islands/mapbox/draw/polygon.tsx": $mapbox_draw_polygon_1,
    "./islands/mapbox/lib.ts": $mapbox_lib,
    "./islands/mapbox/plot/plot-point.tsx": $mapbox_plot_plot_point_1,
    "./islands/react/hello.tsx": $react_hello_1,
    "./islands/react/load-cdn.tsx": $react_load_cdn,
    "./islands/react/play/index.tsx": $react_play_index_1,
    "./islands/signal/Counter.tsx": $signal_Counter,
    "./islands/signal/SignalCompute.tsx": $signal_SignalCompute,
    "./islands/video/ffmpeg-wasm.tsx": $video_ffmpeg_wasm_1,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
