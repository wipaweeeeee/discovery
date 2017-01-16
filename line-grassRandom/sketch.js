var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

for(var i=0; i<1000; i++) {
	var strokeSize = Math.floor(Rune.random(1,3));
	var randomXposition = Rune.random(0,600);
	var randomYposition = Rune.random(0,600);
	var randomX = Rune.random(-10,10);
	var randomYup = Rune.random(-2,10);
	var randomYdown = Rune.random(-5,5);
	r.line(randomXposition,randomYposition-randomYdown,
		randomXposition+randomX,randomYposition+5+randomYup)
	 .fill(false)
	 .stroke(30)
	 .strokeWidth(strokeSize)
	 .strokeCap("ROUND")
}

for(var i=0; i<1000; i++) {
	var strokeSize = Math.floor(Rune.random(1,5));
	var randomXposition = Rune.random(200,400);
	var randomYposition = Rune.random(200,400);
	var randomX = Rune.random(-10,10);
	var randomYup = Rune.random(-2,10);
	var randomYdown = Rune.random(-5,5);
	r.line(randomXposition,randomYposition-randomYdown,
		randomXposition+randomX,randomYposition+5+randomYup)
	 .fill(false)
	 .stroke(30)
	 .strokeWidth(strokeSize)
	 .strokeCap("ROUND")
}



r.draw();







