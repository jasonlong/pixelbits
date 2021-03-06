---
layout: post
title: Raster circles

description: Getting colors from raster image. Basically copied from the Paper.js Mona Lisa example.
tags:
  - paperjs
---

<script type="text/paperscript" canvas="canvas-0001">
  var raster = new Raster('/pixelbits/assets/starry-night.jpg');

  // Hide the original image
  raster.visible = false;

  var gridSize = 13;

  // Space the cells by 120%:
  var spacing = 1.2;

  // As the web is asynchronous, we need to wait for the raster to load
  // before we can perform any operation on its pixels.
  raster.on('load', function() {
    // Resize image to a manageable size
    raster.size = new Size(50, 32);

    for (var y = 0; y < raster.height; y++) {
      for(var x = 0; x < raster.width; x++) {
        // Get the color of the pixel:
        var color = raster.getPixel(x, y);

        // Create a circle shaped path:
        var path = new Path.Circle({
          center: new Point(x, y) * gridSize,
          radius: gridSize / 2 / spacing
        });

        // Set the fill color of the path to the color
        // of the pixel:
        path.fillColor = color;
      }
    }
  });

  // Move the active layer to the center of the view:
  project.activeLayer.position = view.center;

</script>

<canvas id="canvas-0001"></canvas>
