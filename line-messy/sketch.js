var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});


for(var y = 30; y<570; y = y + 100) {
r.line(60,y,540,y).fill(false).stroke(30,0.1)
 .strokeWidth(1).strokeCap("ROUND")

for(var i=0; i<500; i++) {
	var startX = Rune.random(60,540);
	var endX = Rune.random(60,540);
	if(y<500) {
		r.line(startX,y,endX,y+100)
		 .fill(false).stroke(30,0.8)
		 .strokeWidth(1).strokeCap("ROUND")
	}		
}
}




r.draw();
