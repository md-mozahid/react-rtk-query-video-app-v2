const FilterTag = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          <div className="bg-blue-200 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            react
          </div>
          <div className="bg-blue-500 text-white px-4 py-1 rounded-full cursor-pointer">
            redux
          </div>
          <div className="bg-blue-200 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            next
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterTag;
