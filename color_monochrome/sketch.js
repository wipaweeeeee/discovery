var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

for(var y = 0; y<660; y = y+120) {
for(var x = 0; x<660; x = x+120) {
var sat1 = Rune.random(0,100);
var sat2 = Rune.random(0,50);

for(var i = 0; i<360; i = i + 90) {
r.rect(x,y,60,60).fill('hsv',0,50,100).stroke(false).rotate(0+i,x,y);
var line1 = r.polygon(x,y)
			 .lineTo(10,0)
			 .lineTo(20,0)
			 .lineTo(0,20)
			 .lineTo(0,10)
			 .fill('hsv',0,sat2,100).stroke(false).rotate(0+i,x,y);
var line2 = r.polygon(x,y)
			 .lineTo(30,0)
			 .lineTo(40,0)
			 .lineTo(0,40)
			 .lineTo(0,30)
			 .fill('hsv',0,sat2,100).stroke(false).rotate(0+i,x,y);
var line3 = r.polygon(x,y)
			 .lineTo(50,0)
			 .lineTo(60,0)
			 .lineTo(0,60)
			 .lineTo(0,50)
			 .fill('hsv',0,sat2,100).stroke(false).rotate(0+i,x,y);
var line4 = r.polygon(x,y)
			 .lineTo(60,10)
			 .lineTo(60,20)
			 .lineTo(20,60)
			 .lineTo(10,60)
			 .fill('hsv',0,sat1,100).stroke(false).rotate(0+i,x,y);
var line5 = r.polygon(x,y)
			 .lineTo(60,30)
			 .lineTo(60,40)
			 .lineTo(40,60)
			 .lineTo(30,60)
			 .fill('hsv',0,sat1,100).stroke(false).rotate(0+i,x,y);
var line6 = r.polygon(x,y)
			 .lineTo(60,50)
			 .lineTo(60,60)
			 .lineTo(50,60)
			 .fill('hsv',0,sat1,100).stroke(false).rotate(0+i,x,y);
}}}



r.draw();
