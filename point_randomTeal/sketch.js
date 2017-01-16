var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600
});

for(var x=60; x<r.width - 10; x = x+80) {
  for(var y=60; y<r.height - 10; y = y+80) {

    var color = Rune.random(270,300);
    var cyan = Rune.random(150,180);
    var ranNum = Rune.random(0,1);

    if(ranNum < 0.8) {
      r.circle(x+Rune.random(-2,2),y+Rune.random(-2,2),Rune.random(15,30))
       .stroke('hsv',color,70,100)
       .fill(false)
       .strokeWidth(2)
    }

    r.circle(x,y,5).stroke('hsv',cyan,30,100).fill(false).strokeWidth(2)

    r.circle(x,y,10).stroke('hsv',cyan,60,80).fill(false).strokeWidth(4)

    r.circle(x+Rune.random(-20,20),y+Rune.random(-20,20),Rune.random(8,25))
     .stroke('hsv',cyan,80,100).fill(false).strokeWidth(4)

    r.circle(x+Rune.random(-20,20),y+Rune.random(-20,20),Rune.random(8,25))
     .stroke('hsv',cyan,100,70).fill(false).strokeWidth(4)

    r.circle(x+Rune.random(-2,2),y+Rune.random(-2,2),Rune.random(15,25))
     .stroke('hsv',cyan,50,100).fill(false).strokeWidth(2)    
  } 
}



r.draw();






