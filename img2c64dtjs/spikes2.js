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
		cnt = 0;
		for(y = 0;y<24;y+=1){
			for(x = 0;x<24;x+=1){
			cnt+=1;				
			pout=pout+'translate(['+String(x*3)+','+String((24-y)*3)+',0])cube([3,3,'+String(floor(brightness(get(5+x*10,5+y*10))*0.07)+1)+']);'
			if(cnt == 8){pout=pout+'<br>';cnt = 0;}
			}//end of for(x)
		}//end of for (y)
		document.getElementById("dump").innerHTML = pout;
}