# eurocent-round

Only single function `round` to round money value to 0.5 eurocent or any other required rounder.

*How to use:*
```
const round = require('eurocent-round');

const eurValue = 124.27;

const eurValueRounded = round(eurValue); // Return 124.5

```

*With the same way you can round to 0.05 with using second parameter of `round` function:*

```
const eurValue = 124.27;

// Set second rounder parameter to 0.05
const eurValueRounded = round(eurValue, 0.05); // Return 124.25
```

*Inside package is also available a mocha test:*
```
npm test
```
