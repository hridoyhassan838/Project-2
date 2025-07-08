export function getTodayDate() {
  return new Date().toLocaleDateString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}