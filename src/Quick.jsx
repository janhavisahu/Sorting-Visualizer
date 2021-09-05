import { Refresh } from "./Array";
let top = 100,
  stack = [],
  low = 0,
  high,
  x,
  i,
  j;
function Quick(a, color, setVal, setColor, setProgress, mm) {
  if (top === 100) {
    high = a.length - 1;
    low = 0;
    top = -1;
    stack[++top] = low;
    stack[++top] = high;
    j = low;
    i = low - 1;
    x = a[high];
  }
  if (top >= 0) {
    let temp;
    if (j === high) {
      high = stack[top--];
      low = stack[top--];
      x = a[high];
      i = low - 1;
      j = low;
    }
    if (j <= high - 1) {
      for (let k = j; k <= high - 1; k++) color[k] = "#74DB25";
      if (a[j] <= x) {
        i++;
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        color[i] = "red";
        color[j] = "red";
      } else {
        color[j] = "green";
      }
      j += 1;
    }
    if (j === high) {
      temp = a[i + 1];
      a[i + 1] = a[high];
      a[high] = temp;
      let p = i + 1;
      if (p - 1 > low) {
        stack[++top] = low;
        stack[++top] = p - 1;
      }
      if (p + 1 < high) {
        stack[++top] = p + 1;
        stack[++top] = high;
      }
    }
    setColor([...color]);
    color[i] = "pink";
    color[j - 1] = "pink";
    setVal([...a]);
  } else {
    for (let k = 0; k <= a.length - 1; k++) color[k] = "#F59665";
    setColor([...color]);
    Refresh();
    clearInterval(mm);
    setProgress({ color: "default", disabled: false });
  }
}
const ClearQuick = () => {
  top = 100;
  stack = [];
  low = 0;
  high = 0;
  x = 0;
  i = 0;
  j = 0;
};
export default Quick;
export { ClearQuick };
