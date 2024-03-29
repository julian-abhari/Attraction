function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  //this.vel = p5.Vector.random2D();
  this.vel = createVector();
  //this.vel.setMag(random(2, 5));
  this.accel = createVector(0, 0);

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.accel);
    this.accel.mult(0);
  }

  this.show = function() {
    //stroke(255, 15);
    stroke(255);
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y
  }

  this.attract = function(target) {
    var force = p5.Vector.sub(target, this.pos);
    var distanceSquared = force.mag();
    distanceSquared = constrain(distanceSquared, 5, 50);
    var G = 2.5;
    var strength = G / distanceSquared;
    force.setMag(strength);
    this.accel.add(force);
  }
}
