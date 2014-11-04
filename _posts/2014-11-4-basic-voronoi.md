---
layout: post
title: Voronoi diagram

description: An initial experiment with <a href="http://en.wikipedia.org/wiki/Voronoi_diagram">Voronoi diagrams</a>. The points for the cells are randomly generated and each cell has a random color brightness applied.
tags:
  - paperjs
  - random
  - voronoi
---
<script src="../../../js/rhill-voronoi-core.min.js"></script>
<script type="text/paperscript" canvas="canvas-0014">
  var voronoi =  new Voronoi();

  var bbox = {
    xl: 0,
    xr: view.bounds.width,
    yt: 0,
    yb: view.bounds.height
  };

  var sites       = generateRandomPoints(70);
  var diagram     = voronoi.compute(sites, bbox);
  var baseColor   = new Color('#3d9970');
  var strokeColor = new Color(0, 0, 0, 0.2);

  if (diagram) {
    for (var i = 0, l = sites.length; i < l; i++) {
	    var cell = diagram.cells[sites[i].voronoiId];
        if (cell) {
          var halfedges = cell.halfedges,
          length = halfedges.length;
        if (length > 2) {
          var points = [];
          for (var j = 0; j < length; j++) {
            v = halfedges[j].getEndpoint();
            points.push(new Point(v));
          }
          createPath(points);
        }
      }
    }
  }

  function generateRandomPoints(count) {
    var points = [];
    for (var i=0; i<count; i++) {
      x = getRandomInt(0, view.size.width);
      y = getRandomInt(0, view.size.height);
      points[i] = {'x':x, 'y':y};
    }
    return points;
  }

  function createPath(points) {
    var path = new Path();
    path.fillColor = generateColor(baseColor);
    path.strokeColor = strokeColor;
    path.closed = true;

    for (var i=0, l=points.length; i < l; i++) {
      path.add(points[i]);
    }
    return path;
  }

  function generateColor(baseColor) {
    var newColor = baseColor;
    var adjustment = getRandomInt(0, 10);
    newColor.brightness += adjustment / 1000;
    return newColor;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

</script>

<canvas id="canvas-0014"></canvas>
