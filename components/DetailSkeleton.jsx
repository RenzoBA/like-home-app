const DetailSkeleton = () => {
  return (
    <div className="max-w-6xl p-4 w-full">
      <div className="flex flex-col items-start animate-pulse">
        <div className="py-10">
          <div className="h-7 w-96 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="mt-3 h-4 w-64 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
        <div className="object-cover w-full h-[35rem] rounded-xl bg-skeleton dark:bg-skeleton-dark mx-10" />
        <div className="flex flex-row items-center gap-2 m-10">
          <div className="rounded-full shadow w-10 h-10 bg-skeleton dark:bg-skeleton-dark" />
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="h-4 w-48 rounded-full bg-skeleton dark:bg-skeleton-dark" />
            <div className="h-3 w-24 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 m-10 w-full">
          <div className="h-4 w-1/2 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="h-4 w-1/2 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="h-4 w-1/2 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
