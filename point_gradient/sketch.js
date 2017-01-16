var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600
});


for(var x=30; x<r.width; x = x+30) {
  for(var y=30; y<r.height; y = y+30) {
    if(y<r.height/2) {
        r.circle(x,y,(y/20))
         .stroke(false).fill(30)
    } else {
        r.circle(x,y,30-(y/20))
         .stroke(false).fill(30)
    }
  }
}








r.draw();