function shuffle_array(a, setVal) {
  var tmp,
    current,
    top = a.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = a[current];
      a[current] = a[top];
      a[top] = tmp;
    }
  setVal([...a]);
}
function Array(a, color, setVal, setColor, event) {
  let x;
  console.log(event);
  const len = event.target.value;
  a = [];
  color = [];
  if (len <= 10) x = 17;
  else if (len <= 20) x = 10;
  else if (len <= 30) x = 5;
  else if (len < 100) x = 2;
  else if (len > 100) x = 1.3;
  else x = 1.1;
  for (let i = 0; i < len; ++i) {
    a[i] = (1 + i) * x;
    color[i] = "pink";
  }
  shuffle_array(a, setVal);
  setColor([...color]);
}
function Refresh() {
  document.getElementById("button").innerText = "Sort";
  document.getElementById("size").disabled = false;
  document.getElementById("speed").disabled = false;
}
export default Array;
export { shuffle_array, Refresh };
