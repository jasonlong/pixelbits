---
layout: post
title: Rotating square tunnel

description: Rotating square tunnel inspired by Albert Omoss' <a href="http://albertomoss.com/work/pivot">Pivot</a> project.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0009">
  for (i = view.size.width; i = 0; i--) {
  console.log(i);
    var rect = new Rectangle(view.center, i);
    var path = new Path.Rectangle(rect, 6);
    path.strokeWidth = 6;
    path.strokeColor = (i % 2) ? '#111' : '#fff';
  }
</script>

<canvas id="canvas-0009" height="250"></canvas>
