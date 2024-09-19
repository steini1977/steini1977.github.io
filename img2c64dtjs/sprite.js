let input;// file browser for image input
let img;// image container (jpg)
let catchimage = []; // array for the sprite
let sprite = []; // array for the value of sprite pixel
let bit = 7;// bit counter 
let scnt = 0;// step variable
let x = 0;// row
let y = 0;// coloum
let z = 0;// counter
let rd = 0;// pixel read, red value
let gr = 0;// pixel read, green value
let bl = 0;// pixel read ,blue value
let dt = 0;// sprite value
let lum = 0;// lumency treshold control
function setup() {  
    var cvs = createCanvas(480, 210); // Create Canvas of given size    
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
	if (img) {image(img, 0, 0, width/2, height);}
	}   
function calcSprite(){
		z=0;
		for(y = 0;y<21;y++){
			for(x = 0;x<24;x+=1){			
				rd = red(get(5+(x*10),5+y*10));
				gr= green(get(5+(x*10),5+y*10));
				bl = blue(get(5+(x*10),5+y*10));
				lum = (rd + gr + bl)/3
				dt=0;n = 0;
				if (lum < 92){dt = 1;}
				if (lum > 91){dt = 0;}
				catchimage[z] = dt;        
				z+=1;
			}//end of for(x)
		}//end of for (y)
		for (scnt = 0;scnt<64;scnt+=1){sprite[scnt] = 0;}
		scnt = 0;
		bit = 7;
		ncnt = 0;
		pout = String(100+scnt)+' data '; 		
		hout = 'byte ';
		poutR = String(200+scnt)+' data ';
		houtR ='byte ';
		z=0;
		img = null;
		for (y = 0;y<21;y+=1){
			for (x = 0;x<24;x+=1){
				if(catchimage[z] == 0){stroke(255,255,255);fill(255,255,255);}
				if(catchimage[z] == 1){stroke(0,0,0);fill(0,0,0);sprite[scnt] = sprite[scnt] + pow(2,bit);} 	  
				rect(x * 10,y*10,10,10);
				if(catchimage[z] == 1){stroke(255,255,255);fill(255,255,255);}
				if(catchimage[z] == 0){stroke(0,0,0);fill(0,0,0);} 	  
				rect(24*10+x * 10,y*10,10,10);
				bit = bit - 1;
				if (bit < 0){bit = 7;ncnt = ncnt + 1;
			
                         if (ncnt !=8 /*&& y != 21*/){
						pout = pout + String(sprite[scnt])+',';
						hout = hout + hex(sprite[scnt],2)+',';
						poutR = poutR + String(255-sprite[scnt])+',';
						houtR = houtR + hex(255-sprite[scnt],2)+',';
						}
					if (ncnt == 8 && y< 20){
						pout = pout + String(sprite[scnt])+'<br>';
						hout = hout + hex(sprite[scnt],2)+'<br>';
						ncnt = 0;pout = pout + String(100+y)+' data ';
						hout = hout + 'byte '
						poutR = poutR + String(255-sprite[scnt])+'<br>';
						houtR = houtR + hex(255-sprite[scnt],2)+'<br>';
						poutR = poutR + String(200+y)+' data ';houtR = houtR + 'byte '}
						scnt = scnt +1;}
		z +=1;
		}//end of for(x)
		}//end of for(y)
		pout = pout + ",0"
	    hout = hout + hex(0,2);
		poutR = poutR + ",0";
		houtR = houtR + hex(0,2);
		
		pout = pout + '.';hout = hout + '.'
		poutR = poutR +'.';houtR = houtR +'.'
		pout = splitTokens(pout,',.');hout = splitTokens(hout,',.')
		poutR = splitTokens(poutR,',.');houtR = splitTokens(houtR,',.')
		document.getElementById("dump").innerHTML = pout;
		document.getElementById("dump2").innerHTML = hout;
		document.getElementById("dumpR").innerHTML = poutR;
		document.getElementById("dumpR2").innerHTML = houtR;
}
