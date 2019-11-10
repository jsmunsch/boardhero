export default function compare(a, b) {
  if (a.date_added > b.date_added) {
    return -1;
  }
  if (a.date_added < b.date_added) {
    return 1;
  }
  return 0;
}
