import { Refresh } from "./Array";
let m = 0,
  j = 0,
  i = 0;
function Selection(a, color, setVal, setColor, setProgress, mm) {
  if (m < a.length) {
    if (j === a.length) {
      j = m + 1;
      let temp = a[m];
      a[m] = a[i];
      a[i] = temp;
      color[m] = "#F59665";
      setVal([...a]);
      if (m !== i) color[i] = "pink";
      m += 1;
      i = m;
      setColor([...color]);
    }
    color[i] = "red";
    if (a[j] < a[i]) {
      color[i] = "pink";
      i = j;
      color[i] = "red";
    }
    color[j] = "green";
    j += 1;
    setColor([...color]);
    color[j - 1] = "pink";
  } else {
    Refresh();
    setProgress({ color: "default", disabled: false });
    clearInterval(mm);
  }
  console.log("running");
}
const ClearSelection = () => {
  m = 0;
  j = 0;
  i = 0;
};
export default Selection;
export { ClearSelection };
