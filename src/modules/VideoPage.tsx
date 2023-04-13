import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPage = () => {
  const containerVideo = useRef(null);
  const isVideoVisible = useInView(containerVideo, { once: true });

  return (
    <div
      className="relative mb-10 flex h-fit w-full items-center justify-center lg:mb-0 lg:h-screen lg:pt-20"
      ref={containerVideo}
    >
      <div className="flex h-full w-full flex-col justify-center gap-10 lg:flex-row lg:gap-0">
        <div className="flex items-center justify-center lg:flex-1">
          <p className="font-serif text-3xl sm:text-5xl lg:rotate-180 lg:[writing-mode:vertical-rl]">
            Your Promise
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative aspect-video w-[90vw] overflow-hidden rounded-3xl sm:w-[75vw]">
            <ReactPlayer
              url="https://www.youtube.com/embed/v4l8FVil0eY"
              volume={1}
              playing={isVideoVisible}
              muted={true}
              controls={true}
              width={"100%"}
              height={"100%"}
              loop
              style={{ position: "absolute", top: "0", left: "0" }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-1">
          <p className="font-serif text-3xl sm:text-5xl lg:[writing-mode:vertical-rl]">
            Promotional Video
          </p>
        </div>
      </div>
    </div>
  );
};
export default VideoPage;
