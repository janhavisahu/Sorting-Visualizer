import React, { useState } from "react";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import { Button, MenuItem, Select } from "@material-ui/core";
import "./front.css";
import Array, { shuffle_array } from "./Array";
import Merge, { ClearMerge } from "./Merge";
import Heap, { ClearHeap } from "./Heap";
import Insertion, { ClearInsertion } from "./Insertion";
import Bubble, { ClearBubble } from "./Bubble";
import Selection, { ClearSelection } from "./Selection";
import Quick, { ClearQuick } from "./Quick";
import "bootstrap/dist/css/bootstrap.min.css";
let mm = null;
const Chart = () => {
  const [progress, setProgress] = useState({
    color: "default",
    disabled: false,
  });
  let [a, setVal] = useState([30, 120, 10, 31, 39, 80, 20, 49, 36, 55]);
  let filledArray = [
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
  ];
  let [color, setColor] = useState(filledArray);
  const [algo, selectAlgo] = useState("bubble");
  function check() {
    let interval;
    if (progress.disabled === false) {
      for (let i = 0; i < a.length; i++) color[i] = "pink";
      setColor([...color]);
      document.getElementById("button").innerText = "Stop!";
      document.getElementById("size").disabled = true;
      document.getElementById("speed").disabled = true;
      setProgress({ color: "secondary", disabled: true });
      let val = document.getElementById("speed").value;
      if (val <= 10) interval = 300;
      else if (val <= 20) {
        interval = 200;
      } else if (val <= 30) interval = 100;
      else if (val <= 40) {
        interval = 50;
      } else {
        interval = 25;
      }

      if (algo === "bubble") {
        ClearBubble();
        mm = setInterval(() => {
          Bubble(a, color, setVal, setColor, setProgress, mm);
        }, interval);
      } else if (algo === "selection") {
        ClearSelection();
        mm = setInterval(() => {
          Selection(a, color, setVal, setColor, setProgress, mm);
        }, interval);
      } else if (algo === "insertion") {
        ClearInsertion();
        mm = setInterval(() => {
          Insertion(a, color, setVal, setColor, setProgress, mm);
        }, interval);
      } else if (algo === "quick") {
        ClearQuick();
        mm = setInterval(() => {
          Quick(a, color, setVal, setColor, setProgress, mm);
        }, interval);
      } else if (algo === "merge") {
        ClearMerge();
        mm = setInterval(() => {
          Merge(a, color, setVal, setColor, setProgress, mm);
        }, interval);
      } else {
        ClearHeap();
        mm = setInterval(() => {
          Heap(a, color, setVal, setColor, setProgress, mm);
        }, interval);
      }
    } else {
      document.getElementById("button").innerText = "Sort";
      document.getElementById("size").disabled = false;
      document.getElementById("speed").disabled = false;
      setProgress({ color: "default", disabled: false });
      clearInterval(mm);
      for (let i = 0; i < a.length; i++) color[i] = "pink";
      setColor([...color]);
    }
  }
  function chooseAlgo(event) {
    selectAlgo(event.target.value);
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
        <InsertChartIcon
          style={{ height: "50px", width: "50px" }}
        ></InsertChartIcon>
        <a class="navbar-brand">Sorting Visualizer</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link">
                <Button
                  className="ml-4 mt-3"
                  variant="contained"
                  id="shuffle"
                  color="default"
                  style={{
                    marginTop: "5px",
                    marginLeft: "110px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    for (let o = 0; o < a.length; o++) color[o] = "pink";
                    setColor([...color]);
                    shuffle_array(a, setVal);
                  }}
                  disabled={progress.disabled}
                >
                  Shuffle Array
                </Button>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
                <p className="ml-5">Set Array Length</p>
                <input
                  className="ml-5"
                  type="range"
                  id="size"
                  defaultValue="10"
                  min="5"
                  max="150"
                  onChange={(event) => Array(a, color, setVal, setColor, event)}
                ></input>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
                <p className="ml-5">Set Speed</p>
                <input
                  className="ml-5"
                  type="range"
                  id="speed"
                  defaultValue="10"
                  min="1"
                  max="50"
                  style={{ background: "red", color: "#13bba4" }}
                ></input>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link ">
                <Select
                  className="mt-3 ml-4"
                  style={{ width: "130px" }}
                  onChange={chooseAlgo}
                  defaultValue="bubble"
                >
                  <MenuItem value="bubble">Bubble Sort</MenuItem>
                  <MenuItem value="insertion">Insertion Sort</MenuItem>
                  <MenuItem value="selection">Selection Sort</MenuItem>
                  <MenuItem value="quick">Quick Sort</MenuItem>
                  <MenuItem value="merge">Merge Sort</MenuItem>
                  <MenuItem value="heap">Heap Sort</MenuItem>
                </Select>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link ">
                <Button
                  className="ml-4 mt-3"
                  variant="contained"
                  id="button"
                  color={progress.color}
                  onClick={check}
                >
                  Sort
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        {a.map((val, i) => (
          <div
            id="bars"
            key={i}
            style={{
              margin: "0.1%",
              height: `${val * 0.5}%`,
              width: `${1275 / a.length}px`,
              background: `${color[i]}`,
              alignSelf: "flex-end",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default Chart;
