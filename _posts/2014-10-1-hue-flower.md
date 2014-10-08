---
layout: post
title: Hue flower

description: Rotating paths, hue shifting, and blending modes.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0005">
  var color = new Color('#0074d9');
  color.alpha = 0.6;

  var circle = new Path.Circle({
        center: [100, 100],
        radius: 20,
        fillColor: color
      });

  circle.scale(1.5, 3.5);

  for (i = 0; i < 360; i += 60) {
    var newCircle = circle.clone();
    newCircle.fillColor.hue += i;
    newCircle.blendMode = 'screen';
    newCircle.rotate(i, [100, 150]);
  }

  circle.remove();

  project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0005" height="250"></canvas>
