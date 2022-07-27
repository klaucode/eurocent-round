/**
 * Function to round value to rounder value
 * (using to round e.g. euro money to 0.5 or 0.05)
 * @param {Number} value Value to round
 * @param {Number} rounder Rounder to which value will be rounded
 * @returns {Number} Rounded number to rounder
 */
function round(value, rounder = 0.5) {
  var m = 1 / (rounder || 1); // Multiplier
  return Math.round(value * m) / m;
}

module.exports = round;
