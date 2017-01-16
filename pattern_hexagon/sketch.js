var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 600
});

r.rect(0,0,600,800).stroke(false).fill('hsv',350,30,100);
var numPoints = 6;
var degree = 360 / numPoints;
for(var w = 100; w<401; w = w+150) {
for(var k = 0; k<r.height+87; k = k+87) {
    var poly = r.polygon(w,k).fill(false).stroke(false)

  for(var i = 1; i < numPoints+2; i++) {
    var x = Math.cos(Rune.radians(degree * i)) * 50;
    var y = Math.sin(Rune.radians(degree * i)) * 50;
    poly.lineTo(x, y); }

  var randomCenter = Rune.random(-20,20);

  for(var i = 1; i < poly.vars.vectors.length; i++) {
    var last = poly.vars.vectors[i-1];
    var cur = poly.vars.vectors[i];
    var diff = cur.sub(last);
    var cX = poly.vars.x - randomCenter;
    var cY = poly.vars.y - randomCenter;
      for(var j = 0; j < 8; j++) {
        var btw = diff.multiply(j / 8).add(last);
        r.line(cX, cY, poly.vars.x + btw.x, poly.vars.y + btw.y)
         .stroke('hsv',340,100,100).strokeCap("round") }
  }}}
for(var w = 175; w<476; w = w+150){
for(var k = 44; k<r.height; k = k+87) {
    var poly = r.polygon(w,k).fill(false).stroke(false)

  for(var i = 1; i < numPoints+2; i++) {
    var x = Math.cos(Rune.radians(degree * i)) * 50;
    var y = Math.sin(Rune.radians(degree * i)) * 50;
    poly.lineTo(x, y); }

  var randomCenter = Rune.random(-20,20);

  for(var i = 1; i < poly.vars.vectors.length; i++) {

    var last = poly.vars.vectors[i-1];
    var cur = poly.vars.vectors[i];
    var diff = cur.sub(last);
    var cX = poly.vars.x - randomCenter;
    var cY = poly.vars.y - randomCenter;
      for(var j = 0; j < 8; j++) {
        var btw = diff.multiply(j / 8).add(last);
        r.line(cX, cY, poly.vars.x + btw.x, poly.vars.y + btw.y)
         .stroke('hsv',340,100,100).strokeCap("round") }
  }}}

  





r.draw();