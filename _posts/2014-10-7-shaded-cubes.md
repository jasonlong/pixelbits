---
layout: post
title: Shaded cubes

description: Isometric cubes with faux shadows.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0008">
  var columns = 12;
  var isoSize = view.size.width / columns;
  var isoWidth = isoSize * Math.sqrt(3) / 2;
  var row = 0;
  var lightFalloff = 0.0008;

  for (var y = 0; y <= view.size.height + isoSize; y += isoSize - isoSize / 4) {
    row++;
    for (var x = 0; x <= view.size.width + isoWidth; x += isoWidth) {

      var group = new Group();
      var dx = (row % 2) ? isoWidth / 2 : 0;
      var hexagon = new Path.RegularPolygon([x-dx,y], 6, isoSize / 2);
      group.addChild(hexagon);

      for (var i = 0; i < 2; i++) {
        var path = new Path();
        for (var j = 0; j < 3; j++) {
          var index = (i * 2 + j) % hexagon.segments.length;
          path.add(hexagon.segments[index].clone());
        }
        path.add(hexagon.bounds.center);
        group.addChild(path);
      }

      var color = "#b10dc9";

      group.children[0].fillColor = color;
      group.children[1].fillColor = color;
      group.children[2].fillColor = color;
      group.children[0].fillColor.brightness *= 0.75 - (y * lightFalloff);
      group.children[1].fillColor.brightness *= 1 - (y * lightFalloff);
      group.children[2].fillColor.brightness *= 0.55 - (y * lightFalloff);
    }
  }
</script>

<canvas id="canvas-0008" height="250"></canvas>
