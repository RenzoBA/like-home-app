const CardSkeleton = () => {
  return (
    <div className="rounded-lg bg-white dark:bg-dark shadow-md border border-stone-500 overflow-hidden pb-5 w-72 h-[410px]">
      <div className="animate-pulse">
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full h-52 bg-skeleton dark:bg-skeleton-dark" />
        </div>
        <div className="mt-4 w-1/4 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark mx-5" />
        <div className="mt-4 w-1/2 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark mx-5" />
        <div className="mt-6 flex flex-col items-center gap-4 justify-center px-5">
          <div className="w-2/3 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="w-2/3 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
        <div className="flex justify-between items-center mt-6 px-5">
          <div className="flex flex-row items-center justify-start gap-1">
            <div className="rounded-full shadow w-9 h-9 bg-skeleton dark:bg-skeleton-dark" />
            <div className="h-3 w-24 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          </div>
          <div className="w-1/4 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
