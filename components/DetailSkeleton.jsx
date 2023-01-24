const DetailSkeleton = () => {
  return (
    <div className="max-w-6xl p-4 w-full">
      <div className="flex flex-col items-start animate-pulse">
        <div className="mb-4">
          <div className="h-7 w-96 rounded-full bg-skeleton" />
          <div className="mt-3 h-4 w-64 rounded-full bg-skeleton" />
        </div>
        <div className="grid self-center grid-cols-[2fr_1fr] grid-rows-2 gap-1 relative rounded-xl w-9/12 h-[28rem] overflow-hidden mb-2">
          <div className="z-10 h-10 w-20 rounded-lg bg-white absolute left-2 top-2 shadow" />
          <div className="h-9 w-52 rounded-lg bg-white absolute bottom-2 left-2 shadow" />
          <div className="row-span-full object-contain w-full h-full bg-skeleton" />
          <div className="row-span-1 object-contain w-full h-full bg-skeleton" />
          <div className="row-span-1 object-contain w-full h-full bg-skeleton" />
        </div>
        <div className="flex flex-row items-center gap-2 mb-2">
          <div className="rounded-full shadow border w-10 h-10 bg-skeleton" />
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="h-4 w-48 rounded-full bg-skeleton" />
            <div className="h-3 w-24 rounded-full bg-skeleton" />
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 mt-2 w-full">
          <div className="h-4 w-1/2 rounded-full bg-skeleton" />
          <div className="h-4 w-1/2 rounded-full bg-skeleton" />
          <div className="h-4 w-1/2 rounded-full bg-skeleton" />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
