import RelatedVideo from "../relatedVideo/relatedVideos";
import VideoDescription from "./videoDescription";

const SingleVideo = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <iframe
                width="100%"
                className="aspect-video"
                src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                title="Some video title"
                frameBorder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <VideoDescription />
            </div>
            <RelatedVideo />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVideo;
