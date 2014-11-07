---
layout: post
title: Sine wave dots

description: Derping around with sine wave phasing.
tags:
  - paperjs
---
<script type="text/paperscript" canvas="canvas-0017">
view.element.style.background = "linear-gradient(to bottom, #3a1d3a 0%,#e7584c 100%)";

width = view.size.width;
yMid = view.size.height / 2;

for (var i=0; i<18; i++) {
  for (var x=0; x<width; x+=3) {
    _x = (x + 500) * Math.PI/180 / 20;
    y = (Math.sin(_x*(8 - i/12)*Math.PI) +
        Math.sin(_x*(9 + i/13)*Math.PI) +
        Math.sin(_x*(10 - i/14)*Math.PI)) * 50;
    var shape = new Shape.Circle(new Point(x, y), 1);
    shape.fillColor = '#fff';
    shape.opacity = 0.7;
  }
}

project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0017"></canvas>
