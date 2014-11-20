---
layout: post
title: Ron Burgundy

description: I tried to recreate the background effect from this <a href="https://medium.com/ux-ui-design-2/dear-ticketmaster-271977289b41">Ticketmaster redesign concept</a>. This was the first time I've tried masking paths using boolean intersections.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0020">
var raster = new Raster('/pixelbits/assets/ron-burgundy.jpg');
raster.visible = false;

var boxSize = view.size.width / 50;

raster.on('load', function() {
  // Resize image to a manageable size
  raster.size = new Size(50, 50);

  for (var y = 0; y < raster.height; y++) {
    for(var x = 0; x < raster.width; x++) {
      var color = raster.getPixel(x, y);

      // bounding box
      var box = new Rectangle(new Point(x * boxSize, y * boxSize), new Size(boxSize, boxSize));
      var pathBox = new Path.Rectangle(box);

      // fill line
      var lineWidth = map(color.brightness, 0, 1, boxSize/2, 1);
      var line = new Rectangle(new Point(x * boxSize, y * boxSize - boxSize / 2), new Size(lineWidth, boxSize * 2));
      var pathLine = new Path.Rectangle(line);
      pathLine.rotate(45, new Point(x * boxSize, (y + 1) * boxSize));

      // mask the rotated fill line by the bounding box using the intersection
      newPath = pathBox.intersect(pathLine);
      newPath.fillColor = '#84184b';
      newPath.opacity = 0.5;

      pathBox.remove();
      pathLine.remove();
    }
  }
});

project.activeLayer.position = view.center;

function map(value, vMin, vMax, dMin, dMax) {
  var vValue = parseFloat(value);
  var vRange = vMax - vMin;
  var dRange = dMax - dMin;
  return (vValue - vMin) * dRange / vRange + dMin;
}

</script>

<canvas id="canvas-0020" height="300"></canvas>
