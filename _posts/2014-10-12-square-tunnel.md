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
  while (i < view.size.width * 1.5) {
    var rect = new Rectangle({
                  center: view.center,
                  size: i
                });
    var path = new Path.Rectangle(rect);
    path.strokeWidth = 0.2 * i;
    path.rotate((view.size.width - i) * 0.17);

    if (color == 'dark') {
      path.strokeColor = '#111111';
      color = 'light';
    }
    else {
      path.strokeColor = '#ffffff';
      color = 'dark';
    }
    i *= 1.1;
  }
</script>

<canvas id="canvas-0010" height="250"></canvas>
