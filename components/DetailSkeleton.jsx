const DetailSkeleton = () => {
  return (
    <div className="max-w-6xl p-4 w-full">
      <div className="flex flex-col items-start animate-pulse">
        <div className="py-10">
          <div className="h-8 w-96 rounded-full bg-skeleton dark:bg-skeleton-dark" />
          <div className="mt-3 h-5 w-64 rounded-full bg-skeleton dark:bg-skeleton-dark" />
        </div>
        <div className="object-cover self-center w-11/12 h-[34rem] rounded-xl bg-skeleton dark:bg-skeleton-dark mx-10" />
        <div className="flex flex-row items-center gap-2 m-10">
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
