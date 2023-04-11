import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPage = () => {
  const containerVideo = useRef(null);
  const isVideoVisible = useInView(containerVideo, { once: true });

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center pt-20"
      ref={containerVideo}
    >
      <div className="flex h-full w-full">
        <div className="flex flex-1 items-center justify-center">
          <p
            className="rotate-180 font-serif text-5xl"
            style={{ writingMode: "vertical-rl" }}
          >
            Your Promise
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative aspect-video w-[75vw] overflow-hidden rounded-3xl">
            <ReactPlayer
              url="sample.mp4"
              volume={1}
              playing={isVideoVisible}
              muted={false}
              controls={true}
              width={"100%"}
              height={"100%"}
              loop
              style={{ position: "absolute", top: "0", left: "0" }}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p
            className="font-serif text-5xl"
            style={{ writingMode: "vertical-rl" }}
          >
            Promotional Video
          </p>
        </div>
      </div>
    </div>
  );
};
export default VideoPage;
