import DetailSkeleton from "@/components/DetailSkeleton";

const loading = () => {
  return (
    <div className="flex justify-center items-center">
      <DetailSkeleton />
    </div>
  );
};

export default loading;
