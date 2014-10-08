---
layout: default
title: Sine waves with hue shifting
updated_at: Sep 29, 2014

description: Shifting hues using yesterday's sine wave.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0003">
  view.element.style.backgroundColor = '#111111';

  var y = view.size.height / 2;
  var width = view.size.width * 0.9;
  var vector = new Point({
        angle: 45,
        length: width / 5
        });
  var offset = width / 30;
  var color = new Color('#0074d9')

  for (var i = 0; i < 40; i+=3) {
    var path = new Path();
    vector.length += i;
    path.segments = [
      [[offset, y], null, vector.rotate(-90-i)],
      [[width / 2, y], vector.rotate(-180+i), vector.rotate(i)],
      [[width - offset, y], vector.rotate(90-i), null]
    ];
    path.strokeColor = color;
    path.strokeColor.hue += i * 10;
  }
  project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0003" height="300"></canvas>
