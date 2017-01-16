var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var noise = new Rune.Noise();
var noiseStep = 0;
var sinPath;
noise.noiseDetail(3);

r.rect(0,0,600,800).fill(255).stroke(false);

function drawPath(x,y,radius,noiseMult) {
	sinPath = r.path(x,y)
		       .fill(false)

for(var j=0; j<600; j = j + 30) {
	for(var i=0; i<110; i++) {
		var x = i*6
		var y = radius + noise.get(noiseStep)*noiseMult;

		if(x==0) {
			sinPath.moveTo(x,y+j);
		} else {
			sinPath.lineTo(x,y+j).stroke(0).strokeWidth(10)
		}
		noiseStep += 0.01; //the less the smoother
	}
}
}

drawPath(0,-300,0,600);





r.draw();
