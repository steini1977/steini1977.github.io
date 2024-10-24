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
  createCanvas(250,250);
 
 
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
      pout = pout + String(y+100)+'print ' + char(34)
      for(let x = 0;x < 25;x+=1){     
      noFill();rect(x*(width/25),y*(height/25),width/25,height/25);
      dice[0]=get(x*(width/25)+width/25/6*2,y*(height/25)+height/25/6*2);
      dice[1]=get(x*(width/25)+width/25/6*5,y*(height/25)+height/25/5*2);
      dice[2]=get(x*(width/25)+width/25/6*3,y*(height/25)+height/25/6*3);
      dice[3]=get(x*(width/25)+width/25/6*2,y*(height/25)+height/25/6*5);
      dice[4]=get(x*(width/25)+width/25/6*5,y*(height/25)+height/25/6*5);      
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
      if (SumRed < 101 && SumGreen < 101 && SumBlue < 101){CharCol=[0,0,0];cout = cout + '<font color="black"> -</font>'}
      if (SumRed > 100 && SumGreen < 101 && SumBlue < 101){CharCol=[200,0,0];cout = cout + '<font color="red"> *</font>'}
      if (SumRed < 101 && SumGreen > 100 && SumBlue < 101){CharCol=[0,200,0];cout = cout + '<font color="green"> *</font>'}
      if (SumRed < 101 && SumGreen < 101 && SumBlue > 100){CharCol=[0,0,200];cout = cout + '<font color="blue"> *</font>'}
      if (SumRed > 100 && SumGreen > 100 && SumBlue < 101){CharCol=[200,200,0];cout = cout + '<font color="pink"> *</font>'}
      if (SumRed > 100 && SumGreen < 101 && SumBlue > 100){CharCol=[200,0,200];cout = cout + '<font color="orange"> *</font>'}
      if (SumRed < 101 && SumGreen > 100 && SumBlue > 100){CharCol=[0,200,200];cout = cout + '<font color="cyan"> *</font>'}
      if (SumRed > 100 && SumGreen > 100 && SumBlue > 100){CharCol=[200,200,200];cout = cout + '<font color="grey"> *</font>'}
      byte = 0;
      if (test[0] > 32){byte += 1}
      if (test[1] > 32){byte += 2}
      if (test[2] > 32){byte += 4}
      if (test[3] > 32){byte += 8}
      if (test[4] > 32){byte += 16}
      

      Blank = true;
      if(byte == 1 || byte == 5){ Blank = false; pout = pout + 'a'; fill(CharCol);rect(x*(width/25),y*(height/25),width/25/2,height/25/2);}
      if(byte == 2 || byte == 6){ Blank = false; pout = pout +'b';fill(CharCol);rect(width/25/2+(x*(width/25)),y*(height/25),width/25/2,height/25/2)}
      if(byte == 3 || byte == 7){Blank = false; pout = pout + 'c';fill(CharCol);rect((x*(width/25)),y*(height/25),width/25,height/25/2);}
      if(byte == 8 || byte == 12 ){Blank = false;pout = pout + 'd';fill(CharCol);rect(x*(width/25),height/25/2+y*(height/25),width/25/2,height/25/2);}
      if(byte == 9 || byte == 13){ Blank = false;pout = pout + 'e';fill(CharCol);rect((x*(width/25)),y*(height/25),width/25/2,height/25);}
      if(byte == 10|| byte == 14){Blank = false;pout = pout + 'f';fill(CharCol);
                                   rect(width/25/2+x*(width/25),x*(width/25),y*(height/25),width/25/2,height/25/2);
                                   rect(x*(width/25),height/25/2+y*(height/25),width/25/2,height/25/2);
                                  }
      if(byte == 11 || byte == 15){Blank = false;pout = pout + 'g';fill(CharCol);
                                   triangle(x*(width/25),y*(height/25),
                                            width/25+x*(width/25),y*(height/25),
                                            x*(width/25),height/25+y*(height/25));
                                  }
      if(byte == 16 || byte == 20){Blank = false;pout = pout + 'h';fill(CharCol);
                                   rect(width/25/2+x*(width/25),+y*(height/25),width/25/2,height/25/2);
                                  }
      if(byte == 18 || byte == 22){Blank = false;pout = pout + 'i';fill(CharCol);
                                   rect(width/25/2+(x*(width/25)),y*(height/25),width/25/2,height/25);
                                  }
      if(byte == 17 || byte == 21){Blank = false;pout = pout + 'j';fill(CharCol);
                                   rect(x*(width/25),y*(height/25),width/25/2,height/25/2);
                                   rect(width/25/2+x*(width/25),height/25/2+y*(height/25),width/25/2,height/25/2);
                                  }
      if(byte == 19 || byte == 23){pout = pout + 'k';Blank = false;fill(CharCol);
                                   triangle(x*(width/25),y*(height/25),
                                            width/25+x*(width/25),height/25+y*(height/25),
                                            width/25+x*(width/25),height/25+y*(height/25)+(height/25)); 
                                  }
      if(byte == 24 || byte == 28){Blank = false;pout = pout + 'l';fill(CharCol);
                                   rect(x*(width/25),height/25/2+y*(height/25),width/25,height/25/2);
                                  }
      if(byte == 26 || byte == 30){ pout = pout + 'm';Blank = false;fill(CharCol);
                                   triangle(width/25+x*(width/25),y*(height/25),
                                            x*(width/25),height/25+y*(height/25),
                                            width/25+x*(width/25),height/25+y*(height/25));
                                  }
      if(byte == 25 || byte == 29){pout = pout + 'n';Blank = false;fill(CharCol);
                                   triangle(x*(width/25),y*(height/25),
                                            width/25+x*(width/25),height/25+y*(height/25),
                                            x*(width/25),height/25+y*(height/25)); 
      }
      if(byte == 31){Blank = false;pout = pout + 'o';fill(CharCol);rect(x*(width/25),y*(height/25),width/25,height/25);}      
        
      if(Blank == true){
        pout = pout + 'p'         
        byte = 0;     
        fill(CharCol);
        rect(x*(width/25),y*(height/25),width/25,height/25); 
      }
    }
    pout = pout + char(34)+';<br>';
    cout = cout + '<br>';
  }  
  document.getElementById("dump").innerHTML = cout+'<br>';   
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
