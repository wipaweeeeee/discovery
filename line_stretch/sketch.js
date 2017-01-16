var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true,
});

var color = Rune.random(0,30);

// background
r.rect(0, 0, 800, 800)
 .fill(255)
 .stroke(false);

//top
for(var i=0; i<250; i++) {
r.line(Rune.random(r.width/4+100,r.width/4*3), 0, Rune.random(r.width/4*3+90, r.width/4*3+120), r.height+100)
 .stroke(30,0.2);
}

//bottom
for(var i=0; i<200; i++) {
r.line(Rune.random(r.width/4*2), r.height, 800, Rune.random(r.height/2+60,r.height/2+80))
 .stroke(30, 0.2);
}

//left
for(var i=0; i<80; i++) {
r.line(0, Rune.random(r.height/4, r.height/4+150), 800, Rune.random(r.height/4*3+90,r.height/4*3+100))
 .stroke(30, 0.3);
}

r.draw();
