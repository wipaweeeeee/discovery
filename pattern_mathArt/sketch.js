var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 600
});

//Adapt from Matthias Wandel's Shingles
r.rect(0,0,600,800).stroke(false).fill('hsv', 0, 80, 100);
var line = r.path(0,0).fill(false).stroke(255);

for(var theta = 0; theta<450; theta = theta + 0.01) {
  var xt = Math.sin(theta)*theta + 300; 
  var yt = Math.cos(theta)*theta + 300; 
  var nthet = xt/30 + yt/30;
  var othet = xt/30 - yt/30;
  var yp = yt+Math.sin(nthet)*15 + Math.sin(othet)*15;
  var xp = xt+Math.cos(nthet)*15 + Math.cos(othet)*15;

  if(theta == 0) {
    line.moveTo(xp,yp);
  } else {
    line.lineTo(xp,yp)
  }
}


r.draw();







