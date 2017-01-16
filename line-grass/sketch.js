var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

// var strokeSize = 1;

for(var y=30; y<570; y = y+10) {
	var strokeSize = Math.floor(Rune.random(1,6));

	for(var x=30; x<570; x = x+5) {
	var randomX = Rune.random(-5,5);
	var randomYup = Rune.random(-2,10);
	var randomYdown = Rune.random(-5,5);
	r.line(x,y-randomYdown,x+randomX,y+5+randomYup)
	 .fill(false)
	 .stroke(30)
	 .strokeWidth(2)
	 .strokeCap("ROUND")
	}
}


r.draw();







