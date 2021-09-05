import { Refresh } from "./Array";
let m = 0,
  j = 0;

function Bubble(a, color, setVal, setColor, setProgress, mm) {
  if (m !== a.length) {
    let temp;
    if (j < a.length - m - 1) {
      if (a[j] > a[j + 1]) {
        temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        color[j] = "red";
        color[j + 1] = "red";
        setVal([...a]);
        setColor([...color]);
        color[j] = "pink";
        color[j + 1] = "pink";
      } else {
        color[j] = "green";
        color[j + 1] = "green";
        setColor([...color]);
        color[j] = "pink";
        color[j + 1] = "pink";
      }
      j += 1;
    } else {
      color[j] = "#F59665";
      j = 0;
      m += 1;
    }
  } else {
    color[j] = "#F59665";
    color[j + 1] = "#F59665";
    setColor([...color]);
    clearInterval(mm);
    Refresh();
    setProgress({ color: "default", disabled: false });
  }
}
const ClearBubble = () => {
  m = 0;
  j = 0;
};
export default Bubble;
export { ClearBubble };
