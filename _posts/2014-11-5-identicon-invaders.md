---
layout: post
title: Identicon invaders

description: This uses a similar algorithm to our GitHub identicons. The colors stay the same, but the identicon shapes are random each time this page loads. (BTW, if you're a GitHub user, did you know that everyone has an identicon – even if you use an avatar? Just swap in your user name in this URL <a href="https://github.com/identicons/jasonlong.png">https://github.com/identicons/jasonlong.png</a>.
tags:
  - paperjs
  - random
---
<script src="/pixelbits/js/rhill-voronoi-core.min.js"></script>
<script type="text/paperscript" canvas="canvas-0015">
  // Colors from http://clrs.cc/
  var colors = ['#0074d9', '#01ff70', '#f012be', '#ff851b', '#ffdc00'];
  var perRow = 10;
  var spriteSize = 5;
  // leave room for side gutters and spacing in between
  var pixelSize = view.size.width / ((perRow + 2) + (perRow / 2)) / 5;
  var marginSize = spriteSize * pixelSize / 2;

  view.element.style.backgroundColor = '#111';

  for (y = 0; y < colors.length; y++) {
      identicon = generateIdenticon(pixelSize, spriteSize);
      identicon.fillColor = colors[y];
      identicon.shadowColor = colors[y];
      identicon.shadowBlur = 25;

      for (x = 0; x < perRow; x++) {
          newIdenticon = identicon.clone();
          newIdenticon.position.x = x * ((pixelSize * spriteSize) + marginSize);
          newIdenticon.position.y = y * ((pixelSize * spriteSize) + marginSize);
      }
      identicon.remove();
  }

  project.activeLayer.position = view.center;

  // build ship
  var ship = new Group();
  var base = new Rectangle(
                  new Point(view.size.width / 2, view.size.height - pixelSize * 5),
                  new Size(pixelSize * 5, pixelSize));
  var turret = new Rectangle(
                  new Point(view.size.width / 2 + (pixelSize * 2), view.size.height - pixelSize * 6),
                  new Size(pixelSize, pixelSize * 2));

  ship.addChildren([new Shape.Rectangle(base), new Shape.Rectangle(turret)]);
  ship.fillColor = '#eee';

  function generateIdenticon(pixelSize, spriteSize) {
      var identicon = new Group();
      var halfAxis = (spriteSize -1) / 2;
      var i = 0;
      var x = halfAxis * pixelSize;

      while (x >= 0) {
        var y = 0;
        while (y < spriteSize * pixelSize) {
          if (Math.floor(Math.random() * 100) % 2) {
              var rect = new Rectangle(
                  new Point(x, y),
                  new Size(pixelSize, pixelSize));
              var pixel = new Shape.Rectangle(rect);
              identicon.addChild(pixel);

              if (x != halfAxis * pixelSize) {
                  xStart = 2 * halfAxis * pixelSize -x;
                  var rect = new Rectangle(
                      new Point(xStart, y),
                      new Size(pixelSize, pixelSize));
                  var pixel = new Shape.Rectangle(rect);
                  identicon.addChild(pixel);
              }
          }
          i += 1;
          y += pixelSize;
        }
        x -= pixelSize;
      }
      return identicon;
  }
</script>

<canvas id="canvas-0015" height="250"></canvas>
