

function draw() {
  background(0);
  translate (width/2,height/2);
	var spectrum = fft.analyze();
	var freq = map(mouseX, 0, width, 0, spectrum.length);
	freq = floor(freq);
	var amplitude = spectrum[freq];
	let mx = amplitude;
  for (let x = -70; x < 70; x++) {
    let r = random(height);
    let n = noise((x + frameCount) / 500);
    let g = map(n*-4, -20, x*-2, n, x);
    let f = rotate (radians (-20)/-4)
    let s = rotate (radians(-90)/-2)
    stroke(n*-r*100, g*-2,x*5,390);
    line(n*-s,n*-mx*-3, g*s, n * height / mx);
    stroke(200,mx, n);
    line(n*-x,n*mx*-3, mx*f, n * height / mx);
    stroke(x/-2,f*x,r,10);
    line(s*-x,n*-f*-3, g*f, n * height / mx);
    stroke(200,40,10,40);
    line(n,mx, r, n * height / mx);
        stroke(20,200,70,40);
    line(200,n*-mx*-3, g, n * height / mx);



    //stroke(50, 50,20,100);
    //line(n, 320,x, n * height / 10*10);
  }
}
