import "./move-rt.css";
import "./move-lf.css";
document.getElementById("stripes").className = "rt";

var directions = ["rt", "lf"];
var myCycle = [];

function cycleDirections() {
  if (myCycle.length === 0) {
    myCycle = directions.slice();
  }
  document.getElementById("stripes").className = myCycle.shift();
}

window.setInterval(cycleDirections, 30000);
