'use client';

/**
 * Skeleton card matching shop product layout (4:5 image, platform, title, price).
 * Used while loading Passio products for better perceived performance.
 */
export default function ShopCardSkeleton() {
  return (
    <div className="break-inside-avoid rounded-2xl p-3 shadow-sm border border-gray-100 bg-white animate-pulse">
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-200 mb-3" />
      <div className="flex justify-between items-start mb-1">
        <div className="h-4 w-16 rounded bg-gray-200" />
        <div className="h-4 w-8 rounded bg-gray-200" />
      </div>
      <div className="space-y-2 mb-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="space-y-1">
          <div className="h-3 w-12 rounded bg-gray-200" />
          <div className="h-5 w-20 rounded bg-gray-200" />
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
