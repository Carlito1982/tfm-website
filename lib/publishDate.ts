// A publish date is "in the future" if it's after the current UK calendar day.
// Used to keep unsent issues and not-yet-live articles out of the sitemap and
// out of Google's index until the date arrives, without unpublishing the page.
export function isFutureDate(dateStr: string): boolean {
  const parsed = Date.parse(dateStr)
  if (isNaN(parsed)) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return parsed > today.getTime()
}
