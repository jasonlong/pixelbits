---
layout: default
title: Sine waves
updated_at: Sep 28, 2014

description:
---

<script type="text/paperscript" canvas="canvas-0002">

  var y = view.size.height / 2;
  var width = view.size.width * 0.9;
  var vector = new Point({
        angle: 45,
        length: width / 5
        });
  var offset = width / 30;

  for (var i = 0; i < 40; i+=3) {
    var path = new Path();
    vector.length += i;
    path.segments = [
      [[offset, y], null, vector.rotate(-90-i)],
      [[width / 2, y], vector.rotate(-180+i), vector.rotate(i)],
      [[width - offset, y], vector.rotate(90-i), null]
    ];
    path.strokeColor = '#0074d9';
  }

  project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0002" height="300"></canvas>
