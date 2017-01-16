var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var grid = r.grid({
	x: 30,
	y: 30,
	width: r.width-60,
	height: r.height-60,
	gutter: 0,
	columns: 15,
	rows: 15
})

var midX = grid.vars.moduleWidth/2;
var midY = grid.vars.moduleHeight/2;

for(var row = 1; row < 16; row++) {
	var color = Math.floor(Rune.random(150,180));
	for(var col = 1; col < 16; col++) {
	var size = Rune.random(1,18);
	var ranNum = Rune.random(0,1);
	var dot = r.circle(midX,midY,size)
			   .stroke(false)
			   // .fill('hsv',0,100,100-4*row)

	// if(size < 15) {
	// 	dot.fill('hsv',240,100,100)
	// } else {
	// 	dot.fill('hsv',0,100,100)
	// }

	if(ranNum < 0.5) {
		dot.fill('hsv',240,100,100)
	} else {
		dot.fill('hsv',0,100,100)
	}

	grid.add(dot,col,row)
	
	}
}



r.draw();
