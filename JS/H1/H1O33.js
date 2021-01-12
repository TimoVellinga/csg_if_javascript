function setup() {
  canvas = createCanvas(1000,450);
  canvas.parent('processing');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      tekenTegel(kolom,rij,1);
    }
  }
  translate(100,0);
  tekenTegel(50,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill('yellow');
  triangle(25,25,50,0,50,50);  
  fill('darkred');
  triangle(25,25,0,0,50,0);
  fill('gold');
  triangle(0,0,25,25,0,25);
  fill('blue');
  rect(25,25,25,25);
  pop();
}