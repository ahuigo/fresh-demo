import { FFmpeg } from 'npm:@ffmpeg/ffmpeg';
// import { fetchFile, toBlobURL } from 'npm:@ffmpeg/util';
import { useRef, useState } from "preact/hooks";

export default function() {
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef<HTMLVideoElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const load = async () => {

      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
      const ffmpeg = ffmpegRef.current;
      ffmpeg.on('log', ({ message }:any) => {
          messageRef.current!.innerHTML = message;
          console.log(message);
      });
      // toBlobURL is used to bypass CORS issue, urls with the same
      // domain can be used directly.
      await ffmpeg.load({
          coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
          wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
      setLoaded(true);
  }

  const transcode = async () => {
      const ffmpeg = ffmpegRef.current;
      await ffmpeg.writeFile('input.webm', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'));
      await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
      const data = await ffmpeg.readFile('output.mp4');
      videoRef.current!.src =
          URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
  }

  return (loaded
      ? (
          <>
              <video ref={videoRef} controls></video><br/>
              <button onClick={transcode}>Transcode webm to mp4</button>
              <p ref={messageRef}></p>
              <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
          </>
      )
      : (
          <button onClick={load}>Load ffmpeg-core (~31 MB)</button>
      )
  );
}