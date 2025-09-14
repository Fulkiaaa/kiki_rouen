export function isOpenNow(openingHours, now = new Date()) {
  // Map JS getDay 0..6 to our order (Lundi..Dimanche)
  const jsDay = now.getDay() // 0=Sun,..6=Sat
  const map = [6,0,1,2,3,4,5] // Sun->6, Mon->0...
  const i = map[jsDay]
  const today = openingHours[i]
  if (!today) return false
  const [hourO, minO] = today.open.split(':').map(Number)
  const [hourC, minC] = today.close.split(':').map(Number)
  const open = new Date(now); open.setHours(hourO, minO, 0, 0)
  const close = new Date(now); close.setHours(hourC, minC, 0, 0)
  return now >= open && now <= close
}
