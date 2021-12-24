/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export function newDate(date) {
  if (!date) return '';
  const [day, hour] = date.split(' ');
  const [y, m, d] = day.split('-');
  let [h, mi, s] = [0, 0, 0];
  if (hour) [h, mi, s] = hour.split(':');
  return new Date(y, m - 1, d, h || 0, mi || 0, s || 0);
}
