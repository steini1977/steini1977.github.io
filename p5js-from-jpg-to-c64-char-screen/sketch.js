let inp;
let img;
let pout = "";
let dice = [];
let byte = 0;
let Red = 0;
let Green = 0;
let Blue = 0;
let Blank = Boolean;
let test = [];
let written = Boolean;
let roundCount;
let prg = '';
function setup() {  
  createCanvas(400,250);
  prg = prg + '200 for y=0 to 24<br>'
prg = prg + '205 read d$<br>'
prg = prg + '210 for x=0 to len(d$)-1<br>'
prg = prg + '215 ch$=mid$(d$,x+1,1)<br>'
prg = prg + '220 if ch$="a" then poke1024+x+40*y,126<br>'
prg = prg + '225 if ch$="b" then poke1024+x+40*y,124<br>'
prg = prg + '230 if ch$="c" then poke1024+x+40*y,108<br>'
prg = prg + '235 if ch$="d" then poke1024+x+40*y,123<br>'
prg = prg + '240 if ch$="e" then poke1024+x+40*y,226<br>'
prg = prg + '245 if ch$="f" then poke1024+x+40*y,225<br>'
prg = prg + '250 if ch$="g" then poke1024+x+40*y,98<br>'
prg = prg + '255 if ch$="h" then poke1024+x+40*y,97<br>'
prg = prg + '260 if ch$="i" then poke1024+x+40*y,105<br>'
prg = prg + '265 if ch$="j" then poke1024+x+40*y,95<br>'
prg = prg + '270 if ch$="k" then poke1024+x+40*y,233<br>'
prg = prg + '275 if ch$="l" then poke1024+x+40*y,223<br>'
prg = prg + '280 if ch$="m" then poke1024+x+40*y,255<br>'
prg = prg + '285 if ch$="n" then poke1024+x+40*y,127<br>'
prg = prg + '290 if ch$="o" then poke1024+x+40*y,160<br>'
prg = prg + '295 if ch$="p" then poke1024+x+40*y,32<br>'
prg = prg + '999 next:next<br>'
  roundCount = 0;
  inp = createFileInput(handleFile);
  inp.position(0, canvas.Height);
  
}

function draw() {  
  background(127);
  if (img) {   
    roundCount += 1; 
    pout = '';
    noFill();
    stroke(255,255,255);           
    image(img, 0, 0, width, height);   
    for(let y = 0;y < 25;y+=1){
      pout = pout + String(y+100)+'data ' + char(34)
      for(let x = 0;x < 40;x+=1){     
      noFill();rect(x*(width/40),y*(height/25),width/40,height/25);
      dice[0]=get(x*(width/40)+width/40/6*2,y*(height/25)+height/25/6*2);
      dice[1]=get(x*(width/40)+width/40/6*5,y*(height/25)+height/25/5*2);
      dice[2]=get(x*(width/40)+width/40/6*3,y*(height/25)+height/25/6*3);
      dice[3]=get(x*(width/40)+width/40/6*2,y*(height/25)+height/25/6*5);
      dice[4]=get(x*(width/40)+width/40/6*5,y*(height/25)+height/25/6*5);      
      for(cnt = 0;cnt < 5;cnt +=1){
        Red = red(dice[cnt]);
        Green = green(dice[cnt]);
        Blue = blue(dice[cnt]);
        test[cnt] = floor((Red + Green + Blue)/3);
      }
      byte = 0;
      if (test[0] > 60){byte += 1}
      if (test[1] > 60){byte += 2}
      if (test[2] > 60){byte += 4}
      if (test[3] > 60){byte += 8}
      if (test[4] > 60){byte += 16}
      Blank = true;
      if(byte == 30){
        pout = pout + 'k';
        Blank = false;
        fill(50,100,200);
        triangle(width/40+x*(width/40),y*(height/25),x*(width/40),height/25+y*(height/25),width/40+x*(width/40),height/25+y*(height/25)); 
      }
      if(byte == 29){
        pout = pout + 'l';
        Blank = false;
        fill(50,100,200);
        triangle(x*(width/40),y*(height/25),width/40+x*(width/40),height/25+y*(height/25),x*(width/40),height/25+y*(height/25)); 
      }
      if(byte == 25){
        pout = pout + 'n';
        Blank = false;
        fill(50,100,200);
        triangle(x*(width/40),y*(height/25),width/40+x*(width/40),height/25+y*(height/25),width/40+x*(width/40),y*(height/25)); 
      }
      if(byte == 15){
        Blank = false;
        pout = pout + 'i';
        fill(50,100,200);
        triangle(x*(width/40),y*(height/25),width/40+x*(width/40),y*(height/25),x*(width/40),height/25+y*(height/25));
      }
      if(byte == 1){
        Blank = false;
        pout = pout + 'a';
        fill(50,100,200);
        rect(x*(width/40),y*(height/25),width/40/2,height/25/2);
      }
      if(byte == 2){
        Blank = false;
        pout = pout +'b';
        fill(50,100,200);
        rect(width/40/2+(x*(width/40)),y*(height/25),width/40/2,height/25/2)         
      }
      if(byte == 3 || byte == 7){
        Blank = false;
        pout = pout + 'e';
         fill(50,100,200);
         rect((x*(width/40)),y*(height/25),width/40,height/25/2);
      }
      if(byte == 8 || byte == 12 ){
        Blank = false;
        pout = pout + 'd';
        fill(50,100,200);
        rect(x*(width/40),height/25/2+y*(height/25),width/40/2,height/25/2);
      }
      if(byte == 9 || byte == 13){
        Blank = false;
        pout = pout + 'h';
        fill(50,100,200);
        rect((x*(width/40)),y*(height/25),width/40/2,height/25);         
      }
      if(byte == 16 || byte == 20){        
        Blank = false;
        pout = pout + 'c';
        fill(50,100,200);
        rect(width/40/2+x*(width/40),+y*(height/25),width/40/2,height/25/2);         
      }
        if(byte == 18 || byte == 22){
          Blank = false;
          pout = pout + 'f';
        fill(50,100,200);
        rect(width/40/2+(x*(width/40)),y*(height/25),width/40/2,height/25);         
      }
      if(byte == 21 || byte == 17){
        Blank = false;
        pout = pout + 'n';
        fill(50,100,200);
        rect(x*(width/40),y*(height/25),width/40/2,height/25/2);        
        rect(width/40/2+x*(width/40),height/25/2+y*(height/25),width/40/2,height/25/2);       
      }
      if(byte == 24 || byte == 28){
         Blank = false;
         pout = pout + 'g';
         fill(50,100,200);
         rect(x*(width/40),height/25/2+y*(height/25),width/40,height/25/2);
        }
      if(byte == 31){
        Blank = false;
        pout = pout + 'o';
        fill(50,100,200);rect(x*(width/40),y*(height/25),width/40,height/25); 
      }      
      if(Blank == true){pout = pout + 'p';} 
      byte = 0;     
    }
    pout = pout + char(34)+'<br>';
  }  
  document.getElementById("dump").innerHTML = pout+prg;   
  }
/* if(written == true){
written = false;
} */
if(roundCount == 3){noLoop();}
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    roundCount = 0;
    loop();
  //  written = true;
  } else {
    img = null;
  }
}
