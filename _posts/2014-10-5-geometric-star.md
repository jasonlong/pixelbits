---
layout: post
title: Geometric star

description: Copying and rotating shape groups.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0007">
  var bgColor = "#2f325c";
  var fgColor = "#405e7d";

  view.element.style.backgroundColor = bgColor;

  var center = new Point(0, 0);
  var points = 4;
  var radius1 = view.size.height / 12;
  var radius2 = view.size.height / 3;

  var star = new Path.Star(center, points, radius1, radius2);
  star.strokeColor = fgColor;
  star.rotate(45);
  var lineH = new Path.Line({
      from: [0, -radius2],
      to: [0, radius2],
      strokeColor: fgColor
  });

  var lineV = new Path.Line({
      from: [-radius2, 0],
      to: [radius2, 0],
      strokeColor: fgColor
  });

  var starGroup = new Group();
  starGroup.addChildren([star, lineH, lineV]);

  // Stars
  for (i = 0; i < 90; i += 22.5) {
      var newStar = starGroup.clone();
      newStar.rotate(i);
  }
  starGroup.remove();

  // Circles
  for (i = radius1; i <= radius2; i += radius1) {
      var circle = new Path.Circle(new Point(0, 0), i);
      circle.strokeColor = fgColor;
  }

  project.activeLayer.position = view.center;
</script>

<canvas id="canvas-0007" height="250"></canvas>
