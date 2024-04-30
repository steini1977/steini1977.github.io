function setup(){ 
 createCanvas(400, 400);
  background(127);
  let d = '1';// str(day());
  let m = '5';//str(month());
  print(d);
  print(d.length);
  if (d.length < 2) d = concat("0", d);
  print(d);
  print(char(65 + int(d[0])));
  print(char(65 + int(d[1])));
  print(char(65 + int(m)));
  st=concat(char(65 + int(d[0])),
            char(65 + int(d[1])));
  st=concat(st,char(65 + int(m)));
  textSize(160);
  text(st, 60,240);
}
