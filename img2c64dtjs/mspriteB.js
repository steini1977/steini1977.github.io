let input;// brows files on device (jpg).
let img;// image display container. 

let catchimage = [];// pixel read.
let sprite = [];let bit = 7;// sprite cell value. and bit calc variable.
let scnt = 0;// sprite cell counter
let x = 0;let y = 0;let z = 0;// sprite x counter (width) y counter (hight)
let rd = 0;let gr = 0;let bl = 0;// red pixel value, green pixel value, blue pixel value.
let dt = 0;//data counter.
let n = 0;// desision maker.
function setup() {
    var cvs = createCanvas(240*2, 210);  // Create Canvas of given size  
    background(200,200,200); // Set the background color 
    button = createButton('calculate');
    button.position(cvs.width+10, cvs.height);
    button.mousePressed(calcSprite);
    background(200,200,200);
	input = createFileInput(handleFile);
	input.position(width+10, +40);
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
function draw() {if (img) {image(img, 0, 0, width/2,height)};}
function calcSprite(){
		z=0;c=0;
		for(y = 0;y<21;y++){// row count
			for(x = 0;x<12;x++){//colum count
				rd = red(get(10+(10*2)*x,5+(10*y)));//read rgb, get red value
				gr= green(get(10+(10*2)*x,5+(10*y)));//read rgb, get green value
				bl = blue(get(10+(10*2)*x,5+(10*y)));//read rgb, get blue value
				c = (rd+gr+bl)/3;// make it to croma value
				dt=0;n = 0;//data and n as a choise picker
                                if (c<48){n=0;}
			        if (c>47 & c<94){n = 1;}
				if (c>93 & c<141){n =2;}
				if (c>140) {n = 4;}
				if (n == pow(2,0)){dt=1;}
				if (n == pow(2,1)){dt=2;}
				if (n == pow(2,2)){dt=3;}
				catchimage[z] = dt;        
			z+=1;
			}// end of for (x)
		}// end of for y
		for (scnt = 0;scnt<63;scnt+=1){sprite[scnt] = 0;}// a sprite contains 63 bytes of value
		scnt = 0;// sprite index number
		bit = 7;// a way to make a byte of bits
		ncnt = 0;
		pout = 'data ';
		hout = 'byte ';
		z=0;
		for (y = 0;y<21;y++){
			for (x = 0;x<12;x++){
				if(catchimage[z] == 0){stroke(255,255,255);fill(255,255,255);}
				if(catchimage[z] == 1){stroke(200,0,0);fill(200,0,0);sprite[scnt] = sprite[scnt] + pow(2,bit);}
				if(catchimage[z] == 2){stroke(0,200,0);fill(0,200,0);sprite[scnt] = sprite[scnt] + pow(2,bit-1);}
				if(catchimage[z] == 3){stroke(0,0,200);fill(0,0,200);sprite[scnt] = sprite[scnt] + pow(2,bit)+pow(2,bit-1);}
				rect(12*10*2+x * 10 * 2,y*10,20,10);
				bit = bit - 2;
				if (bit <= 0){bit = 7;
					ncnt = ncnt + 1;
					if (ncnt == 1 && y == 0){pout = String(100+y)+ ' data ';}
					if (ncnt !=9 && y != 21 ){pout = pout + String(sprite[scnt])+',';hout = hout + hex(sprite[scnt],2)+',';}
					if (ncnt ==9){pout = pout + String(sprite[scnt])+'<br>';hout = hout + hex(sprite[scnt],2)+'<br>';ncnt = 0;pout = pout + String(100+y) +' data ';hout = hout + 'byte ';}
					
					scnt = scnt +1;
				}//end of if bit
				z+=1;
			}//end of for (x)
		}//end of for (y)
        /*pout = pout + String(0)+'<br>';
		hout = hout + hex(0,2)+'<br>';
		stroke(255,255,0);*/
		strokeWeight(4);
		noFill();
		rect(0,0,240,210);
		pout = pout + '.';hout = hout + '.'// to make a delete marker of last comma in the string
		pout = splitTokens(pout,',.')
		hout = splitTokens(hout,',.')
		document.getElementById("dump").innerHTML = pout;//output to HTML page
		document.getElementById("dump2").innerHTML = hout;//output to HTML page 
}
