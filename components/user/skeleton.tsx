import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLayout = () => {
  return (
    <header className="mb-5">
      <div className="container max-sm:p-0">
        <div className="relative aspect-[360/100] overflow-hidden bg-gray-100 bg-cover bg-center dark:bg-gray-900 sm:aspect-[620/100] sm:rounded-b-2xl">
          <div className="absolute inset-0 h-full w-full"></div>
        </div>
        <div className="flex flex-col items-center gap-1  px-5 [--profile-picture-size:128px] sm:flex-row sm:gap-3 sm:px-10">
          {/* profile picture */}
          <div className="relative">
            <div className="absolute z-0 -mt-3 h-[--profile-picture-size] w-[--profile-picture-size] flex-none overflow-hidden rounded-full border-4 border-[hsl(var(--background))] bg-[hsl(var(--background))] sm:-mt-[calc(var(--profile-picture-size)/3)]"></div>
            <Skeleton className="relative z-10 -mt-3 h-[--profile-picture-size] w-[--profile-picture-size] flex-none overflow-hidden rounded-full border-4 border-[hsl(var(--background))] sm:-mt-[calc(var(--profile-picture-size)/3)]"></Skeleton>
          </div>
          {/* profile content */}
          <div className="flex flex-auto flex-col justify-center gap-2 py-1 text-center sm:text-left">
            <Skeleton className="h-5 w-[30%]"></Skeleton>
            <Skeleton className="h-3 w-[100%]"></Skeleton>
          </div>
        </div>
      </div>
    </header>
  );
};
export default SkeletonLayout;
