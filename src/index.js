import "./move-rt.css";
import "./move-lf.css";
import "./move-up.css";
import "./move-dn.css";
import "./clockwise.css";
import "./counter-clockwise.css";
import "./ball.css";
const SECOND = 1000;
document.getElementById("stripes").className = "dn";

var directions = ["up", "lf", "rt", "clockwise", "counter-clockwise", "dn"];
var myCycle = [];

function cycleDirections() {
  if (myCycle.length === 0) {
    myCycle = directions.slice();
  }
  document.getElementById("stripes").className = myCycle.shift();
}

window.setInterval(cycleDirections, 60 * SECOND);
