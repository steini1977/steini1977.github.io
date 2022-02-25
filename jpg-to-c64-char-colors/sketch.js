let inp; // button object
let img; // image object
let pout = ""; // data char points
let cout = ""; // data color points
let dice = []; // dice test points 5 point array
let byte = 0; // byte to test dice-points
let Red = 0; // color rgb 
let Green = 0; // color rgb
let Blue = 0; // color rgb
let Blank = Boolean; // is no char
let test = []; // tests the 5 dice points
let written = Boolean; // line draw rounds
let roundCount; // rounds 
let prg = ''; // program printout
let SumRed = 0; // amount of red in dice collection
let SumGreen = 0; // amount of green in dice collection
let SumBlue = 0; // amount of blue in dice collection
let CharCol = []; // java rgb display
function setup() {  
  createCanvas(400,250);
  prg = prg + '200 poke 53281,1:print chr$(19);<br>'
  prg = prg + '201 dim line$(49)<br>'
  prg = prg + '205 for y = 0 to 49<br>'
  prg = prg + '206 read line$(y):next<br>'
  prg = prg + '207 for y = 0 to 24<br>'
  prg = prg + '210 for x=0 to 39<br>'
  prg = prg + '215 ch$=mid$(line$(y),x+1,1)<br>'
  prg = prg + '216 co$=mid$(line$(y+25),x+1,1)<br>'
  prg = prg + '217 poke 55296+x+40*y,asc(co$)-65<br>'
  prg = prg + '220 if ch$="a" then poke1024+x+40*y,126<br>'
  prg = prg + '225 if ch$="b" then poke1024+x+40*y,124<br>'
  prg = prg + '230 if ch$="c" then poke1024+x+40*y,226<br>'
  prg = prg + '235 if ch$="d" then poke1024+x+40*y,123<br>'
  prg = prg + '240 if ch$="e" then poke1024+x+40*y,97<br>'  
  prg = prg + '245 if ch$="f" then poke1024+x+40*y,255<br>'
  prg = prg + '250 if ch$="g" then poke1024+x+40*y,105<br>'
  prg = prg + '255 if ch$="h" then poke1024+x+40*y,108<br>'
  prg = prg + '260 if ch$="i" then poke1024+x+40*y,225<br>'
  prg = prg + '265 if ch$="j" then poke1024+x+40*y,127<br>'
  prg = prg + '270 if ch$="k" then poke1024+x+40*y,95<br>'
  prg = prg + '275 if ch$="l" then poke1024+x+40*y,98<br>'
  prg = prg + '280 if ch$="m" then poke1024+x+40*y,233<br>'
  prg = prg + '285 if ch$="n" then poke1024+x+40*y,223<br>'
  prg = prg + '290 if ch$="o" then poke1024+x+40*y,160<br>'
  prg = prg + '295 if ch$="p" then poke1024+x+40*y,32<br>'
  prg = prg + '998 next:next<br>'
  prg = prg + '999 goto 999<br>rem'
 
  //
  roundCount = 0;
  inp = createFileInput(handleFile);
  inp.position(0, canvas.Height);
  
}

function draw() {  
  background(127);
  if (img) {   
    roundCount += 1; 
    pout = '';
    cout = '';
    noFill();
    stroke(255,255,255);           
    image(img, 0, 0, width, height);   
    for(let y = 0;y < 25;y+=1){
      pout = pout + String(y+100)+'data ' + char(34)
      cout = cout + String(y+130)+'data ' + char(34)
      for(let x = 0;x < 40;x+=1){     
      noFill();rect(x*(width/40),y*(height/25),width/40,height/25);
      dice[0]=get(x*(width/40)+width/40/6*2,y*(height/25)+height/25/6*2);
      dice[1]=get(x*(width/40)+width/40/6*5,y*(height/25)+height/25/5*2);
      dice[2]=get(x*(width/40)+width/40/6*3,y*(height/25)+height/25/6*3);
      dice[3]=get(x*(width/40)+width/40/6*2,y*(height/25)+height/25/6*5);
      dice[4]=get(x*(width/40)+width/40/6*5,y*(height/25)+height/25/6*5);      
      SumRed = 0;
      SumGreen = 0;
      SumBlue = 0;
      for(cnt = 0;cnt < 5;cnt +=1){
        Red = red(dice[cnt]);
        Green = green(dice[cnt]);
        Blue = blue(dice[cnt]);         
        test[cnt] = floor((Red + Green + Blue)*(1/3));
        SumRed +=Red
        SumGreen +=Green
        SumBlue +=Blue
      }
      SumRed = floor(SumRed * (1/5));
      SumGreen = floor(SumGreen * (1/5));
      SumBlue = floor(SumBlue * (1/5));
      CharCol=[255,255,255]
      if (SumRed < 101 && SumGreen < 101 && SumBlue < 101){CharCol=[0,0,0];cout = cout + 'a'}
      if (SumRed > 100 && SumGreen < 101 && SumBlue < 101){CharCol=[200,0,0];cout = cout + 'c'}
      if (SumRed < 101 && SumGreen > 100 && SumBlue < 101){CharCol=[0,200,0];cout = cout + 'f'}
      if (SumRed < 101 && SumGreen < 101 && SumBlue > 100){CharCol=[0,0,200];cout = cout + 'g'}
      if (SumRed > 100 && SumGreen > 100 && SumBlue < 101){CharCol=[200,200,0];cout = cout + 'h'}
      if (SumRed > 100 && SumGreen < 101 && SumBlue > 100){CharCol=[200,0,200];cout = cout + 'e'}
      if (SumRed < 101 && SumGreen > 100 && SumBlue > 100){CharCol=[0,200,200];cout = cout + 'd'}
      if (SumRed > 100 && SumGreen > 100 && SumBlue > 100){CharCol=[200,200,200];cout = cout + 'p'}
      byte = 0;
      if (test[0] > 32){byte += 1}
      if (test[1] > 32){byte += 2}
      if (test[2] > 32){byte += 4}
      if (test[3] > 32){byte += 8}
      if (test[4] > 32){byte += 16}
      

      Blank = true;
      if(byte == 1 || byte == 5){ Blank = false; pout = pout + 'a'; fill(CharCol);rect(x*(width/40),y*(height/25),width/40/2,height/25/2);}
      if(byte == 2 || byte == 6){ Blank = false; pout = pout +'b';fill(CharCol);rect(width/40/2+(x*(width/40)),y*(height/25),width/40/2,height/25/2)}
      if(byte == 3 || byte == 7){Blank = false; pout = pout + 'c';fill(CharCol);rect((x*(width/40)),y*(height/25),width/40,height/25/2);}
      if(byte == 8 || byte == 12 ){Blank = false;pout = pout + 'd';fill(CharCol);rect(x*(width/40),height/25/2+y*(height/25),width/40/2,height/25/2);}
      if(byte == 9 || byte == 13){ Blank = false;pout = pout + 'e';fill(CharCol);rect((x*(width/40)),y*(height/25),width/40/2,height/25);}
      if(byte == 10 || byte == 14){Blank = false;pout = pout + 'f';fill(CharCol);
                                   rect(width/40/2+x*(width/40),x*(width/40),y*(height/25),width/40/2,height/25/2);
                                   rect(x*(width/40),height/25/2+y*(height/25),width/40/2,height/25/2);
                                  }
      if(byte == 11 || byte == 15){Blank = false;pout = pout + 'g';fill(CharCol);
                                   triangle(x*(width/40),y*(height/25),
                                            width/40+x*(width/40),y*(height/25),
                                            x*(width/40),height/25+y*(height/25));
                                  }
      if(byte == 16 || byte == 20){Blank = false;pout = pout + 'h';fill(CharCol);
                                   rect(width/40/2+x*(width/40),+y*(height/25),width/40/2,height/25/2);
                                  }
      if(byte == 18 || byte == 22){Blank = false;pout = pout + 'i';fill(CharCol);
                                   rect(width/40/2+(x*(width/40)),y*(height/25),width/40/2,height/25);
                                  }
      if(byte == 17 || byte == 21){Blank = false;pout = pout + 'j';fill(CharCol);
                                   rect(x*(width/40),y*(height/25),width/40/2,height/25/2);
                                   rect(width/40/2+x*(width/40),height/25/2+y*(height/25),width/40/2,height/25/2);
                                  }
      if(byte == 19 || byte == 23){pout = pout + 'k';Blank = false;fill(CharCol);
                                   triangle(x*(width/40),y*(height/25),
                                            width/40+x*(width/40),height/25+y*(height/25),
                                            width/40+x*(width/40),height/25+y*(height/25)+(height/25)); 
                                  }
      if(byte == 24 || byte == 28){Blank = false;pout = pout + 'l';fill(CharCol);
                                   rect(x*(width/40),height/25/2+y*(height/25),width/40,height/25/2);
                                  }
      if(byte == 26 || byte == 30){ pout = pout + 'm';Blank = false;fill(CharCol);
                                   triangle(width/40+x*(width/40),y*(height/25),
                                            x*(width/40),height/25+y*(height/25),
                                            width/40+x*(width/40),height/25+y*(height/25));
                                  }
      if(byte == 25 || byte == 29){pout = pout + 'n';Blank = false;fill(CharCol);
                                   triangle(x*(width/40),y*(height/25),
                                            width/40+x*(width/40),height/25+y*(height/25),
                                            x*(width/40),height/25+y*(height/25)); 
      }
      if(byte == 31){Blank = false;pout = pout + 'o';fill(CharCol);rect(x*(width/40),y*(height/25),width/40,height/25);}      
        
      if(Blank == true){
        pout = pout + 'p'         
        byte = 0;     
        fill(CharCol);
        rect(x*(width/40),y*(height/25),width/40,height/25); 
      }
    }
    pout = pout + char(34)+'<br>';
    cout = cout + char(34)+'<br>';
  }  
  document.getElementById("dump").innerHTML = pout+cout+prg+'<br>';   
  }
if(roundCount == 3){noLoop();}
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    roundCount = 0;
    loop();
  } else {
    img = null;
  }
}
