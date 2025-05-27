function LoadingSkeleton() {
  return (
    <div className="animate-pulse bg-candy-pink dark:bg-dark-candy-pink w-full max-w-225 
                    rounded-xl shadow m-6 overflow-hidden outline-1 outline-charcoal-gray justify-center">
      
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">

        <div className="w-full max-w-[410px] md:w-[400px] p-4 space-y-4">
          
          <div className="h-100 w-100 bg-gray-200 dark:bg-gray-700 rounded-lg" />

          <div className="space-y-2">
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>

          <div className="flex items-center justify-between w-full max-w-[400px]">
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          </div>

          <div className="flex items-center w-full max-w-[400px] gap-3">
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>

        <div className="w-full md:flex-1 border-t md:border-t-0 md:border-l 
                        border-beige dark:border-dark-beige p-6 space-y-4">

          <div className="h-6 w-1/6 bg-gray-200 dark:bg-gray-700 rounded" />

          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="h-4 w-3/5 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;