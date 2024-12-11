import AppItemSkeleton from './app-item-skeleton';

export default function AppListSkeleton({
  count,
}: {
  count: number;
}) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => (
      <AppItemSkeleton key={`app-item-skeleton-${idx}`} />
    ));
}
