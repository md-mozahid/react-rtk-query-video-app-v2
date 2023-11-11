import React from "react";
import RelatedSingleVideo from "./relatedSingleVideo";

const RelatedVideos = () => {
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        <RelatedSingleVideo />
      </div>
    </>
  );
};

export default RelatedVideos;
