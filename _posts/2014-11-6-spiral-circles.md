---
layout: post
title: Spiral circles

description: Simple spiral experiment with circles and radians.
tags:
  - paperjs
---
<script type="text/paperscript" canvas="canvas-0016">
for (var i=15; i<100; i++) {
  var f = i * 0.8;
  var x = Math.cos(radians(i * 5)) * f;
  var y = Math.sin(radians(i * 5)) * f;
  var r = i * 1.6;
  var shape = new Shape.Circle(new Point(x, y), r);
  shape.strokeColor = '#aaa';
}

project.activeLayer.position = view.center;

function radians(angle) {
  return (angle / 180) * Math.PI;
}
</script>

<canvas id="canvas-0016"></canvas>
