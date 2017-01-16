var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var grid = r.grid({
	x: 30, y: 30,
	width: r.width-60,
	height: r.height-60,
	gutter: 15,
	columns: 5, rows: 5
})
var color = 30;

for(var j=1; j<7;j = j+2) {
for (var i=0;i<10;i++) {
var thick =	r.rect(0+10*i,grid.vars.moduleHeight/2,5,grid.vars.moduleHeight/2)
 			 .stroke(false).fill(color)	
grid.add(thick,1,j)}}

for(var j=2; j<5;j = j+2) {
for (var i=0;i<10;i++) {
var thick =	r.rect(0,0+10*i,grid.vars.moduleWidth*2+grid.vars.gutter,5)
 			 .stroke(false).fill(color)	
grid.add(thick,j,5)}}

for (var i=0;i<10;i++) {
var thick =	r.rect(0+10*i,0,5,grid.vars.moduleHeight*3+(grid.vars.gutter*2))
 			 .stroke(false).fill(color)	
grid.add(thick,3,1)}

for (var i=0;i<10;i++) {
var thick =	r.rect(0,0+10*i,grid.vars.moduleWidth*2+grid.vars.gutter,5)
 			 .stroke(false).fill(color)	
grid.add(thick,4,3)}

for (var i=0;i<10;i++) {
var thick =	r.rect(grid.vars.moduleWidth/2,0+10*i,grid.vars.moduleWidth,5)
 			 .stroke(false).fill(color)	
grid.add(thick,1,2)}

for(var j=1; j<6;j++){
for (var i=0;i<10;i++) {
	var thick =	r.rect(0+10*i,0,5,grid.vars.moduleHeight)
	 			 .stroke(false).fill(color)	
	grid.add(thick,j,4)}}

for(var j=4;j<6;j++) {
for (var i=0;i<11;i++) {
	var thick =	r.rect(0,0+10*i,grid.vars.moduleWidth,5)
     			 .stroke(false).fill(color)	
	grid.add(thick,j,1)}}


r.draw();
