---
layout: post
title: Rotating square tunnel

description: Rotating square tunnel inspired by Albert Omoss' <a href="http://albertomoss.com/work/pivot">Pivot</a> project.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0010">
  var i = 1;
  var color = 'dark';
  while (i < view.size.width / 2) {
    var rect = new Rectangle({
                  center: view.center,
                  size: i * 1.5
                });
    var path = new Path.Rectangle(rect);
    path.strokeWidth = 0.2 * i;

    // I tried to rotate the furthest away and nearest squares for a
    // a nice twisting effect, but the furthest away squares are so
    // small that they aren't even visible.
    path.rotate(Math.pow(Math.abs(i - view.size.width/2), 2) * 0.0008);

    if (color == 'dark') {
      path.strokeColor = '#111111';
      color = 'light';
    }
    else {
      path.strokeColor = '#ffffff';
      color = 'dark';
    }
    // Simulate perspective with top squares appearing closer
    i *= 1.1;
  }
</script>

<canvas id="canvas-0010" height="250"></canvas>
