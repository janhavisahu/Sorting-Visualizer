import { Refresh } from "./Array";
let m = 0,
  n = -1,
  t = 0,
  j = 0,
  i = 0;
function Insertion(a, color, setVal, setColor, setProgress, mm) {
  if (m < a.length) {
    if (n === 1) {
      if (t < j) {
        a[i] = j;
        j = a[i - 2];
        a[i - 1] = t;
        color[i - 1] = "green";
        color[i] = "red";
        i -= 1;
      } else {
        n = -1;
        a[i] = t;
      }
      setColor([...color]);
      color[i + 1] = "#F59665";
      color[i] = "#F59665";
    } else if (a[m] > a[m + 1]) {
      t = a[m + 1];
      j = a[m];
      a[m] = j;
      i = m + 1;
      n = 1;
    } else {
      m += 1;
      color[0] = "#F59665";
      color[m] = "#F59665";
      setColor([...color]);
    }
    setVal([...a]);
  } else {
    Refresh();
    setProgress({ color: "default", disabled: false });
    clearInterval(mm);
  }
}
const ClearInsertion = () => {
  m = 0;
  n = -1;
  t = 0;
  j = 0;
  i = 0;
};
export default Insertion;
export { ClearInsertion };
