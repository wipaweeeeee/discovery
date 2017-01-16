var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var noise = new Rune.Noise();
var noiseStep = 0;
noise.noiseDetail(3);

r.rect(0,0,600,600).fill(30).stroke(false)

for(var j = 0; j < 35; j++) {
var circ = r.path(r.width/2,r.height/2)
			.stroke(255)
			.strokeWidth(3)
			.fill(false)

for(var i = 0; i <181; i++) {
	var pointX1 = Math.cos(Rune.radians(i)) * 8 * j;
	var pointY1 = Math.sin(Rune.radians(i)) * 8 * j;

	if ( i == 0) {
		circ.moveTo(pointX1,pointY1)
	} else {
		circ.lineTo(pointX1,pointY1)
	}
}

for(var i = 180; i <361; i++) {
	var pointX = Math.cos(Rune.radians(i)) * 8 * j;
	var pointY = Math.sin(Rune.radians(i)) * 44 * j 
				 * noise.get(noiseStep)*0.3;

	if ( i == 180) {
		circ.moveTo(pointX,pointY)
	} else {
		circ.lineTo(pointX,pointY)
	}
	noiseStep += 0.01;
}}













r.draw();
