let input;// browser image chooser (stay to jpg)
let img;// the image container
let catchimage = [];// image array
let sprite = [];// sprite array
let bit = 7;// bit counter - reverse
let scnt = 0;// sprite array counter
let x = 0;// sprite colum 
let y = 0;// sprite row
let z = 0;// counter
let a = 0;
let b = 0;
let rd = 0;// pixel read, red value
let gr = 0;// pixel read, green value
let bl = 0;// pixel read, blue value
let dt = 0;// data value
let n = 0;// desision threshold value
let cnt=0;// sprite array counter
function setup() {  
    var cvs = createCanvas(240*2, 210); // Create Canvas of given size   
    button = createButton('calculate');
    button.position(cvs.width+20, cvs.height);
    button.mousePressed(calcSprite);
    background(200,200,200); // Set the background color         
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
	z=0;
	for(y = 0;y<21;y++){// sprite y color picker vector
	 for(x = 0;x<12;x++){// sprite x color picker vector	
	
		rd =   red(get(10+x*20,5+y*10));
		gr = green(get(10+x*20,5+y*10));
		bl =  blue(get(10+x*20,5+y*10));
	
		n = 0;dt=0
		if (rd>64){n = n + pow(2,0);}
		if (gr>64){n = n + pow(2,1);}
		if (bl>64){n = n + pow(2,2);}			
		if (n == 1){dt=1;}
		if (n == 2){dt=2;}
		if (n == 4){dt=3;}
		if (n == 3){dt=1;}
		if (n == 5){dt=2;}
		if (n == 6){dt=3;}
		if (n == 0){dt=0;}
		if (n == 7){dt=3;}
		catchimage[z] = dt;z+=1;
		}
	}	
	for (scnt = 0;scnt<63;scnt+=1){sprite[scnt] = 0;}
	scnt = 0;
	bit = 7;
	ncnt = 0;
	dcnt = 100;                  //#2  
	pout = String(Lcnt)+' data '; //#1
	hout = 'byte ';
    z=0;
    for (y = 0;y<21;y+=1){
		for (x = 0;x<12;x+=1){
			if(catchimage[z] == 0){stroke(255,255,255);fill(255,255,255);}
			if(catchimage[z] == 1){stroke(200,0,0);fill(200,0,0);sprite[scnt] = sprite[scnt] + pow(2,bit);}
			if(catchimage[z] == 2){stroke(0,200,0);fill(0,200,0);sprite[scnt] = sprite[scnt] + pow(2,bit-1);}
			if(catchimage[z] == 3){stroke(0,0,200);fill(0,0,200);sprite[scnt] = sprite[scnt] + pow(2,bit)+pow(2,bit-1);}		
			rect(width/2+x * 10 * 2,y*10,20,10);
			bit = bit - 2;
			if (bit <= 0){
				bit = 7;
				ncnt = ncnt + 1;
				if (ncnt != 8 && y != 21){pout = pout + String(sprite[scnt])+',';hout = hout + hex(sprite[scnt],2)+',';}
				if (ncnt == 8 && y < 20){
					pout = pout + String(sprite[scnt])+'<br>';
					hout = hout + hex(sprite[scnt],2)+'<br>';
					ncnt = 0;
					dcnt += 1; //#3
					pout = pout + String(dcnt) + 'data ';hout = hout + 'byte ';} //#4
				scnt = scnt +1;
			}
			z +=1;
		}			  		
	}
	stroke(255,255,0);
	strokeWeight(4);
	noFill();
	rect(0,0,240,210);
	pout = pout + '.';hout = hout + '.';
	pout = splitTokens(pout,',.');
	hout = splitTokens(hout,',.');
        document.getElementById("dump").innerHTML = pout;
	document.getElementById("dump2").innerHTML = hout;
	}
