var attractors = [];
var particles = [];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 50; i += 1) {
		particles.push(new Particle(random(width), random(height)));
		//particles.push(new Particle(width / 2, height / 2));
	}

}

function mousePressed() {
	attractors.push(createVector(mouseX, mouseY));
}

function draw() {
	background(51);
	stroke(255);
	strokeWeight(4);
	for (var i = 0; i < particles.length; i += 1) {
		for (var j = 0; j < attractors.length; j += 1) {
			stroke(0, 255, 0);
			point(attractors[j].x, attractors[j].y);
			particles[i].attract(attractors[j]);
		}
		particles[i].update();
		particles[i].show();
	}

}
