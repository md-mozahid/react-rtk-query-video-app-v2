import { Link } from "react-router-dom";

const VideoGrid = () => {
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
              <div className="w-full flex flex-col">
                <div className="relative">
                  <Link to="single-video">
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      className="w-full h-auto"
                      alt="Some video title"
                    />
                  </Link>
                  <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    12:10
                  </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                  <a href="#" className="shrink-0">
                    <img
                      src="assets/logo192.png"
                      className="rounded-full h-6 w-6"
                      alt="image"
                    />
                  </a>

                  <div className="flex flex-col">
                    <a href="video.html">
                      <p className="text-slate-900 text-sm font-semibold">
                        Video title
                      </p>
                    </a>
                    <a
                      className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                      href="#"
                    >
                      Video creator
                    </a>
                    <p className="text-gray-400 text-xs mt-1">
                      3200 views . Aug 9, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;
