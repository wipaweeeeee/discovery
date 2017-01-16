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

var centerX = grid.vars.moduleWidth;
var centerY = grid.vars.moduleHeight;

for(var row = 1; row < 15; row++) {
	var color = Math.floor(Rune.random(150,180));
	
	for(var col = 1; col < 15; col++) {
	var size = Rune.random(1,20);
	var ranNum = Rune.random(0,1);
	var dot = r.circle(centerX,centerY,size)
			   .stroke(false)
			   .fill('hsv',240,100,100)
	grid.add(dot,col,row)

	var colLine = r.line(centerX,centerY,centerX,centerY+470)
				   .stroke('hsv',240,100,100)
	grid.add(colLine,col,1)
	
	var rowLine = r.line(centerX,centerY,centerX+470,centerY)
				   .stroke('hsv',240,100,100)
	grid.add(rowLine,1,row)
	}
}



r.draw();
