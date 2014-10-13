---
layout: post
title: Animated woofer

description: Animated woofer. The frequency is so low you probably can't even hear it.
tags:
  - paperjs
  - animation
---

<script type="text/paperscript" canvas="canvas-0011">
  var wooferSize = view.size.height * 0.4;

  var outerRing = new Path.Circle({
    center: view.center,
    radius: wooferSize *= 1.1,
    fillColor: '#111111'
  });

  var cone = new Path.Circle({
    center: view.center,
    radius: wooferSize * 0.97
  });

  cone.fillColor = {
      gradient: {
          stops: [['#1d1d1d', 0.3 ], ['#444444', 1]],
          radial: true
      },
      origin: cone.bounds.topCenter + [0, 30],
      destination: cone.bounds.rightCenter
  };

  var centerRing = new Path.Circle({
    center: view.center,
    radius: wooferSize / 3
  });

  centerRing.fillColor = {
      gradient: {
          stops: [['#444444', 0.3 ], ['#111111', 1]],
          radial: true
      },
      origin: centerRing.bounds.topCenter + [0, 30],
      destination: centerRing.bounds.rightCenter
  };

  var center = new Path.Circle({
    center: view.center,
    radius: wooferSize / 3.2
  });

  center.fillColor = {
      gradient: {
          stops: [['#aaaaaa', 0.1], ['#3f3f3f', 0.5], ['#222222', 1]],
          radial: true
      },
      origin: center.bounds.topCenter + [0, 30],
      destination: center.bounds.rightCenter
  };

  // Build the woofer group
  var woofer = new Group(cone, centerRing, center);
  var wooferBounds = woofer.bounds;
  var frameCount = 0;

  function onFrame(event) {
    // 60 fps, so hit a bass note every 2/3 of a
    // second or 90 bpm
    if (frameCount++ == 40) {
      woofer.scale(1.04);
      frameCount = 0;
    }
    else if (event.count % 2) {
      woofer.fitBounds(wooferBounds);
    }
    else {
      woofer.scale(1.005, woofer.center);
    }
  }
</script>

<canvas id="canvas-0011" height="250"></canvas>
