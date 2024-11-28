'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1
  const rad = parseFloat(req.params.r);
  const area = rad * rad * Math.PI;
  const circ =  2 * Math.PI * rad;
  const result = {
    "area": area,
    "circumference": circ,
  }
  res.json(result);
});

//TODO2
app.get('/math/rectangle/:w/:h', (req, res) => {
  //TODO1
    const w = parseFloat(req.params.w);
    const h = parseFloat(req.params.h);
    const area = w * h;
    const circ =  2 * (w + h);
    const result = {
      "area": area,
      "perimeter": circ,
    }
    res.json(result);
  });

//TODO3

app.get('/math/power/:base/:exponent', (req, res) => {
  //TODO1
    const base = parseFloat(req.params.base);
    const exp = parseFloat(req.params.exponent);
    if (isNaN(base) || isNaN(exp)){
      return res.status(400).json({ error: 'Invalid input' })
    }
    const x = Math.pow(base, exp);
    const rt = Math.sqrt(base,exp);
    const result = {
      "result": x,
    }
    const {root} = req.query;
    if (root === 'true'){
      result.root = rt;
    }
    res.json(result);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});