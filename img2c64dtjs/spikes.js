let input;// file browser for image input
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
			if(x < 23){pout = pout + '&#09'}
			if(x == 23){pout = pout + '<br>'}
			
			}//end of for(x)
		}//end of for (y)
		document.getElementById("dump").innerHTML = pout;
}
