---
layout: post
title: Animated blending modes

description: Animated circles shifting hues and cycling between color blending modes.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0009">
  var radius = view.size.width / 4;
  var start1 = new Point(radius, view.size.height / 2);
  var start2 = new Point(view.size.width - radius, view.size.height / 2);

  var modes = ['multiply', 'screen', 'overlay', 'soft-light', 'hard-light', 'color-dodge'];

  var modeIndex = 0;

  var circle1 = new Path.Circle({
    center: start1,
    radius: radius,
    fillColor: '#0074d9',
    blendMode: modes[modeIndex]
  });
  var circle2 = new Path.Circle({
    center: start2,
    radius: radius,
    fillColor: '#ff4136',
    blendMode: modes[modeIndex]
  });

  function onFrame(event) {
    var vector1 = start2 - circle1.position;
    var vector2 = start1 - circle2.position;

    if (vector1.length == 0) {
      // swap directions
      var tmpStart = start1;
      start1 = start2;
      start2 = tmpStart;

      if (modes.length - 1 == modeIndex) {
        modeIndex = 0;
      }
      else {
        modeIndex++;
      }

      circle1.blendMode = modes[modeIndex];
      circle2.blendMode = modes[modeIndex];
    }

    circle1.position.x += (vector1.x < 0) ? -2 : 2;
    circle2.position.x += (vector2.x < 0) ? -2 : 2;

    circle1.fillColor.hue += 1;
    circle2.fillColor.hue += 1;
  }
</script>

<canvas id="canvas-0009" height="250"></canvas>
