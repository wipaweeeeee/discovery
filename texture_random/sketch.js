var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var angle = 0;
var noise = new Rune.Noise();
var noiseStep = 0;

r.rect(0,0,600,600).fill(255).stroke(false)

function drawPath(startX,startY,moveInc,stepInc,radius) {
	for(var i=90; i<345; i++) {
	var sinPath = r.path(startX,startY)
	.fill(false).stroke(30)
	.strokeWidth(1).strokeCap('round')

	var x = i+angle
	var y = 0.5*Math.sin(Rune.radians(i+angle)*3) * radius 
			+ noise.get(noiseStep)*100;

	var yNoise = noise.get(noiseStep)*100;
	sinPath.moveTo(x+moveInc,yNoise);
	sinPath.lineTo(x,y);
	noiseStep += stepInc;
	}
}

drawPath(-130,0,80,0.03,300)
drawPath(150,300,100,0.05,500)












r.draw();
