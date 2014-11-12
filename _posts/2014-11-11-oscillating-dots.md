---
layout: post
title: Oscillating dots

description: Trying out some polar coordinates to make oscillating dots. The circle sizing here is linear and would be nicer if it followed a sine wave.

tags:
  - paperjs
  - animation
---
<script type="text/paperscript" canvas="canvas-0018">
RADIUS_MIN = 1;
RADIUS_MAX = 4;

function Ball(p, r) {
  this.radius           = r;
  this.point            = p;
  this.growing          = false;
  this.circle           = Shape.Circle(p, r);
  this.circle.fillColor = '#ed25bc';
}

Ball.prototype = {
  iterate: function() {
    if (this.growing) {
      if (this.circle.radius >= RADIUS_MAX) {
        this.growing = false;
      }
      else {
        this.circle.radius += 0.1;
        this.circle.fillColor.hue += 1;
      }
    }
    else {
      if (this.circle.radius <= RADIUS_MIN) {
        this.growing = true;
      }
      else {
        this.circle.radius -= 0.1;
        this.circle.fillColor.hue -= 1;
      }
    }
  }
}

var balls = [];

view.element.style.background = "#111";

width  = view.size.width;
height = view.size.height;
radius = RADIUS_MIN;

for (i=3; i<12; i++) {
  for (a=0; a<360; a+=15) {
    var x = Math.cos(radians(a + (i*7.5))) * (20 * i);
    var y = Math.sin(radians(a + (i*7.5))) * (20 * i);
    balls.push(new Ball(new Point(x, y), radius));
  }
  radius += 1;
}

project.activeLayer.position = view.center;

function radians(angle) {
  return (angle / 180) * Math.PI;
}

function onFrame(event) {
  for (var i = 0, l = balls.length; i < l; i++) {
    balls[i].iterate();
  }
}
</script>

<canvas id="canvas-0018" height="250"></canvas>

