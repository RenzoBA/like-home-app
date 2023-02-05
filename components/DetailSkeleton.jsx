const DetailSkeleton = () => {
  return (
    <div className="max-w-6xl w-full">
      <div className="flex flex-col animate-pulse">
        <div className="pb-10">
          <div className="flex md:hidden h-8 w-16 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="h-8 w-40 md:w-96 rounded-full bg-skeleton dark:bg-skeleton-dark my-3" />
          <div className="mt-3 h-5 w-24 md:w-64 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="flex md:hidden mt-1 h-5 w-24 md:w-64 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
        <div className="object-cover self-center w-full md:w-11/12 h-60 md:h-[34rem] rounded-xl bg-skeleton dark:bg-skeleton-dark mx-10" />
        <div className="flex flex-row items-start gap-2 my-10 w-full">
          <div className="rounded-full shadow w-12 h-12 bg-skeleton dark:bg-skeleton-dark" />
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="h-5 w-60 rounded-full bg-skeleton dark:bg-skeleton-dark" />
            <div className="h-5 w-60 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3 px-10 w-full">
          <div className="h-4 w-full rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="h-4 w-full rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="h-4 w-full rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
