var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var blue = new Rune.Color('hsv',240,80,80);
var red = new Rune.Color('hsv',0,100,100);
var lightred = new Rune.Color('hsv',0,100,80);
var orange = new Rune.Color('hsv',20,100,100);
var pink = new Rune.Color('hsv',300,40,100);
var yellow = new Rune.Color('hsv',60,80,100);

for(var k = 0; k<720; k = k+120) {
for(var j = 0; j<720; j = j+120) {
for(var i = 0; i<360; i = i+90) {
var shape1 = r.polygon(j,k)
			 .lineTo(0,0)
			 .lineTo(60,0)
			 .lineTo(0,60)
			 .fill('hsv',i,90,100).stroke(false).rotate(i,j,k);
var shape2 = r.polygon(j,k)
			 .lineTo(60,0)
			 .lineTo(60,60)
			 .lineTo(0,60)
			 .fill('hsv',i+90,90,100).stroke(false).rotate(i,j,k);
}}}

for(var k = 0; k<600; k = k + 120) {
for(var j = 0; j<600; j = j + 120) {
for(var i = 0; i<360; i = i + 90) {
var line1 = r.path(j,k).fill(false).stroke(blue)
			 .strokeWidth(8).strokeCap("square")
			 .lineTo(60,0)
			 .lineTo(60,60)
			 .rotate(i,j+60,k+60)
var line2 = r.path(j,k+20).fill(false).stroke(blue)
			 .strokeWidth(8).strokeCap("square")
			 .lineTo(40,0)
			 .lineTo(40,40)
			 .rotate(i,j+60,k+60)
var line3 = r.path(j,k+40).fill(false).stroke(blue)
			 .strokeWidth(8).strokeCap("square")
			 .lineTo(20,0)
			 .lineTo(20,20)
			 .rotate(i,j+60,k+60)
}}}





r.draw();



