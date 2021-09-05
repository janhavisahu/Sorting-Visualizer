import { Refresh } from "./Array";
let curr_size = 1,
  l = 0,
  j = 0,
  i = 0,
  k = 0,
  x = 0,
  y = 0;
let L = [];
let R = [];
function min(x, y) {
  return x < y ? x : y;
}
function Merge(arr, color, setVal, setColor, setProgress, mm) {
  let n = arr.length;
  if (curr_size <= n - 1) {
    if (l < n - 1) {
      let m = min(l + curr_size - 1, n - 1);
      let r = min(l + 2 * curr_size - 1, n - 1);

      let n1 = m - l + 1;
      let n2 = r - m;
      if (i < n1) {
        L[i] = arr[l + i];
        color[l + i] = "#74DB25";
        i++;
        k = l;
      }
      if (j < n2) {
        R[j] = arr[m + 1 + j];
        color[m + 1 + j] = "#74DB25";
        j++;
        k = l;
      }
      if (i === n1 && j === n2) {
        if (x < n1 && y < n2) {
          if (L[x] <= R[y]) {
            arr[k] = L[x];
            color[k] = "pink";
            x++;
          } else {
            arr[k] = R[y];
            color[k] = "pink";
            y++;
          }
          k++;
        } else {
          if (x < n1) {
            arr[k] = L[x];
            color[k] = "pink";
            x++;
            k++;
          }
          if (y < n2) {
            arr[k] = R[y];
            color[k] = "pink";
            y++;
            k++;
          }
          if (x === n1 && y === n2) {
            i = 0;
            j = 0;
            x = 0;
            y = 0;
            l += 2 * curr_size;
          }
        }
      }
    } else {
      l = 0;
      curr_size = 2 * curr_size;
      L = [];
      R = [];
    }
  } else {
    for (i = 0; i < arr.length; i++) color[i] = "#F59665";
    Refresh();
    setProgress({ color: "default", disabled: false });
    clearInterval(mm);
  }
  setVal([...arr]);
  setColor([...color]);
}
const ClearMerge = () => {
  curr_size = 1;
  l = 0;
  j = 0;
  i = 0;
  k = 0;
  x = 0;
  y = 0;
  L = [];
  R = [];
};
export default Merge;
export { ClearMerge };
