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

window.setInterval(cycleDirections, 5 * SECOND);
