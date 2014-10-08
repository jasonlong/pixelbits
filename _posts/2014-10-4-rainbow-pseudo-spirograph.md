---
layout: post
title: Rainbow pseudo-spirograph

description: Pseudo-spirograph made of rotating rounded squares.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0006">
  view.element.style.backgroundColor = '#111111';

  var rectSize = view.size.width * 0.3;
  var cornerRadius = rectSize * 0.1;

  var color = new Color('#0074d9');
  var rect = new Rectangle(new Point(0, 0), new Size(rectSize, rectSize));
  var cornerSize = new Size(cornerRadius, cornerRadius);
  var shape = new Shape.Rectangle(rect, cornerSize);
  shape.strokeColor = color;

  for (i = 0; i < 360; i += 10) {
      var newShape = shape.clone();
      newShape.strokeColor.hue += i;
      newShape.rotate(i, [rectSize/4, rectSize/4]);
  }

  shape.remove();
  project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0006" height="250"></canvas>
