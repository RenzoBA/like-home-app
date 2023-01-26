const CardSkeleton = () => {
  return (
    <div className="rounded-lg bg-white dark:bg-dark shadow-md border border-dark dark:border-white overflow-hidden pb-5">
      <div className="animate-pulse">
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full h-52 bg-skeleton dark:bg-skeleton-dark" />
          <div className="w-[87px] h-8 rounded-lg bg-white absolute inset-3" />
          <div className="flex items-center justify-around gap-4 p-[10px] rounded-lg w-3/5 absolute inset-y-[80%] bg-white h-7" />
        </div>
        <div className="mt-4 w-1/4 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark mx-5" />
        <div className="mt-4 w-1/2 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark mx-5" />
        <div className="mt-6 flex flex-col items-center gap-4 justify-center px-5">
          <div className="w-2/3 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="w-2/3 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
        <div className="flex justify-between items-center mt-6 px-5">
          <div className="flex flex-row items-center justify-start gap-1">
            <div className="rounded-full shadow border w-9 h-9 bg-skeleton dark:bg-skeleton-dark" />
            <div className="h-3 w-24 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          </div>
          <div className="w-1/4 h-3 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
