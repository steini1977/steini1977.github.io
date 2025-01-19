// Define canvasText as a global variable.
let canvasText = 'Drag an image file onto the canvas.';

function setup() {
  // Assign the dropArea variable to the canvas.
  let dropArea = createCanvas(710, 400);

  // Add the drop() method to the canvas. Call the gotFile
  // function when a file is dropped into the canvas.
  dropArea.drop(gotFile);
  noLoop();
}

function draw() {
  background(100);

  // Add instructions for dropping an image file in the canvas.
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text(canvasText, width / 2, height / 2);

  describe(`Grey canvas with the text "${canvasText}" in the center.`);
}

function gotFile(file) {
  // If the file dropped into the canvas is an image,
  // create a variable called img to contain the image.
  // Remove this image file from the DOM and only
  // draw the image within the canvas.
  if (file.type === 'image') {
    // Pass in an empty string for the alt text. This should only be done with
    // decorative photos.
    let img = createImg(file.data, '').hide();
    image(img, 0, 0, width, height);
  } else {
    // If the file dropped into the canvas is not an image,
    // change the instructions to 'Not an image file!'
    canvasText = 'Not an image file!';
    redraw();
  }
}
/*let input;// file browser for image input
let img;// image container (jpg)
let catchimage = []; // array for the sprite
let sprite = []; // array for the value of sprite pixel
let bit = 7;// bit counter 
let scnt = 0;// step variable
let x = 0;// row
let y = 0;// coloum
function setup() {  
    var cvs = createCanvas(240, 240); // Create Canvas of given size    
    background(200,200,200); // Set the background color 
    button = createButton('calculate');// to calculate the jpg-image 
    button.position(cvs.width+10, cvs.height);// button possision
    button.mousePressed(calcSprite);
	input = createFileInput(handleFile);// action 
	input.position(width, 0);
}
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function draw() {
	if (img) {image(img, 0, 0, width, height);}
	}   
function calcSprite(){
		pout = '';
		for(y = 0;y<23;y++){
			for(x = 0;x<24;x+=1){			
			pout=pout+String(floor(brightness(get(5+x*10,5+y*10))*0.07)+1);				
			if(x < 23){pout = pout + ' '}
			if(x == 23){pout = pout + '<br>'}
			
			}//end of for(x)
		}//end of for (y)
		document.getElementById("dump").innerHTML = pout;
}
*/
