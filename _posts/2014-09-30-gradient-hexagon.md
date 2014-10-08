---
layout: post
title: Gradient hexagon

description: Overly verbose code for a continuous gradient hexagon.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0004">
  view.element.style.backgroundColor = '#111111';

  var color = new Color('#0074d9');
  var strokeWidth = view.size.height * 0.04;

  var c = view.size.height / 3;
  var a = c/2;
  var b = Math.sin(60 * Math.PI / 180) * c;

  path = new Path.Line([0, b], [a, 0]);
  var color1 = color.clone();
  var color2 = color.clone();
  color2.hue += 60;
  var gradient = new Gradient([color1, color2]);
  path.strokeColor = new Color(gradient, [0, b], [a, 0]);
  path.strokeWidth = strokeWidth;
  path.strokeCap = 'round';

  path = new Path.Line([a, 0], [a+c, 0]);
  var color1 = color.clone();
  var color2 = color.clone();
  color1.hue += 60;
  color2.hue += 120;
  var gradient = new Gradient([color1, color2]);
  path.strokeColor = new Color(gradient, [a, 0], [a+c, 0]);
  path.strokeWidth = strokeWidth;
  path.strokeCap = 'round';

  path = new Path.Line([a+c, 0], [2*c, b]);
  var color1 = color.clone();
  var color2 = color.clone();
  color1.hue += 120;
  color2.hue += 180;
  var gradient = new Gradient([color1, color2]);
  path.strokeColor = new Color(gradient, [a+c, 0], [2*c, b]);
  path.strokeWidth = strokeWidth;
  path.strokeCap = 'round';

  path = new Path.Line([2*c, b], [a+c, 2*b]);
  var color1 = color.clone();
  var color2 = color.clone();
  color1.hue += 180;
  color2.hue += 240;
  var gradient = new Gradient([color1, color2]);
  path.strokeColor = new Color(gradient, [2*c, b], [a+c, 2*b]);
  path.strokeWidth = strokeWidth;
  path.strokeCap = 'round';

  path = new Path.Line([a+c, 2*b], [a, 2*b]);
  var color1 = color.clone();
  var color2 = color.clone();
  color1.hue += 240;
  color2.hue += 300;
  var gradient = new Gradient([color1, color2]);
  path.strokeColor = new Color(gradient, [a+c, 2*b], [a, 2*b]);
  path.strokeWidth = strokeWidth;
  path.strokeCap = 'round';

  path = new Path.Line([a, 2*b], [0, b]);
  var color1 = color.clone();
  var color2 = color.clone();
  color1.hue += 300;
  color2.hue += 360;
  var gradient = new Gradient([color1, color2]);
  path.strokeColor = new Color(gradient, [a, 2*b], [0, b]);
  path.strokeWidth = strokeWidth;
  path.strokeCap = 'round';

  project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0004"></canvas>
