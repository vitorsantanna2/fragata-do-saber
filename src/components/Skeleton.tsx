export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-paper ${className}`} />
  )
}

export function SkeletonText({ className = '' }: { className?: string }) {
  return (
    <div className={`h-4 animate-pulse rounded-md bg-paper ${className}`} />
  )
}

export function SkeletonCircle({ className = '' }: { className?: string }) {
  return (
    <div className={`h-8 w-8 animate-pulse rounded-full bg-paper ${className}`} />
  )
}
