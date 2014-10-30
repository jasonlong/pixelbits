---
layout: post
title: Smoke effect

description: I recreated the smoke effect I made for <a href="https://bounty.github.com">http://bounty.github.com</a> with Paper.js. It is a fairly straightforward particle emitter using circles whereas the Bounty site uses a png image. The effect here isn't quite as nice, but could probably be made better with some further variable tweaking.
tags:
  - paperjs
  - animation
---

<script type="text/paperscript" canvas="canvas-0013">
  view.element.style.backgroundColor = '#111111';

  var NUM_PARTICLES  = 100;
  var EMITTER_X      = view.size.width / 2;
  var EMITTER_Y      = view.size.height - view.size.height * 0.2;
  var MIN_SIZE       = 1.5;
  var MAX_SIZE       = 2.5;
  var MIN_VELOCITY_Y = 0.2;
  var MAX_VELOCITY_Y = 0.8;
  var VELOCITY_X     = 0;
  var MIN_ALPHA      = 0.25;
  var MAX_ALPHA      = 0.45;
  var FADE_SPEED     = 0.001;
  var GROWTH_SPEED   = 1.005;
  var WIND_SPEED     = 0.13;

  var particles      = [];

  function SmokeParticle(x, y, visible) {
    this.circle = new Shape.Circle({
      center: [x, y],
      radius: (Math.random()*(MAX_SIZE - MIN_SIZE)) + MIN_SIZE,
      fillColor: '#333',
      shadowColor: '#777',
      shadowBlur: 70,
      visible: visible
    });

    this.circle.fillColor.alpha = (Math.random()*(MAX_ALPHA - MIN_ALPHA)) + MIN_ALPHA;

    this.velX      = VELOCITY_X;
    this.velY      = (Math.random()*(MAX_VELOCITY_Y - MIN_VELOCITY_Y)) + MIN_VELOCITY_Y;
    this.reborn    = false;

    this.isDead = function() {
      return this.circle.fillColor.alpha === 0;
    }

    this.update = function() {
      this.circle.position.x  += this.velX + WIND_SPEED;
      this.circle.position.y  -= this.velY;
      this.circle.radius  *= GROWTH_SPEED;
      this.circle.fillColor.alpha -= FADE_SPEED;
      if (this.circle.fillColor.alpha < 0) this.circle.fillColor.alpha = 0;
    }
  }

  cig = new Shape.Circle({
    center: [EMITTER_X, EMITTER_Y+2],
    radius: 2,
    fillColor: '#ee6f37',
    strokeColor: '#f00',
    shadowColor: '#f00',
    shadowBlur: 12
  });

  for (var i = 0; i < NUM_PARTICLES; i++) {
    var particle = new SmokeParticle(EMITTER_X, EMITTER_Y, false);
    particles.push(particle);
  }

  function onFrame(event) {
    for (var i = 0; i < NUM_PARTICLES; i++) {
      p = particles[i];

      if (p.isDead()) {
        p.circle.remove();
        particles[i] = new SmokeParticle(EMITTER_X, EMITTER_Y, true);
      }

      p.update();
    }
  }
</script>

<canvas id="canvas-0013"></canvas>
