var mic;
var fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 256);
  fft.setInput(mic);

}
