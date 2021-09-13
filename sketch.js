var tela = 1;
var questão = ["questão1","questão2","questão3"];
var largura = 303;
var altura = 50;
var largura2 = 303;
var altura2 = 35;
var xCorpo1, xCorpo2, yCorpo1, yCorpo2, rCorpo1, rCorpo2, velocidade1, massa1, velocidade2, massa2;
var xMenu, xMenu2, xMenu3, yMenu1, yMenu2, yMenu3, xMenu4, yMenu4; 
var tempo = 0;
let img1, img2, img3, educador, programador, gif1, snd;

function preload(){
  img1 = loadImage("teoria da colisão.jpeg");
  img2 = loadImage("colisão 1.jpeg");
  img3 = loadImage("colisão2.jpeg");
  gif1 = loadImage("gif1.gif");
  educador = loadImage("pp2.jpeg");
  programador = loadImage("pp (1).jfif");
  soundFormats('mp3');
  snd = loadSound("musica1.mp3");
  
  
  xMenu = 120;
  xMenu2 = 10;
  xMenu3 = 230;
  xMenu4 = 455;
  xMenu5 = -190;
  xMenu6 = -220;
  xMenu7 = -190;
  xMenu8 = -190;
  xMenu9 = -190;
  xMenu10 = 440;
  xMenu11 = 432;
  xMenu12 = 265;
  xMenu13 = 455;
  xMenu15 = 438;
  xMenu16 = -120;
  xMenu17 = -150;
  xMenu18 = -150;
  xMenu19 = -40;
  xMenu20 = -150;
  xMenu21 = -150;
  xMenu22 = -150;
  xMenu23 = -40;
  xMenu24 = -150;
  xMenu25 = -150;
  yMenu1 = 25;
  yMenu2 = 155;
  yMenu3 = 265;
  yMenu4 = 240;
  yMenu5 = 300;
  yMenu6 = 300;
  yMenu7 = 400;
  yMenu8 = 300;
  yMenu9 = 300;
  yMenu10 = 280;
  yMenu11 = 280;
  yMenu12 = 415;
  yMenu13 = 35;
  yMenu14 = 330;
  yMenu15 = 260;
  yMenu16 = 395;
  yMenu17 = 400;
  yMenu18 = 112;
  yMenu19 = 150;
  yMenu20 = 189;
  yMenu21 = 228;
  yMenu22 = 112;
  yMenu23 = 150;
  yMenu24 = 189;
  yMenu25 = 228;
  
  xCorpo1 = 80;
  yCorpo1 = 200;
  rCorpo1 = 30;
  
  xCorpo2 = 450;
  yCorpo2 = 200;
  rCorpo2 = 30;
  
  xCorpo3 = 80;
  yCorpo3 = 200;
  rCorpo3 = 30;
  
  xCorpo4 = 450;
  yCorpo4 = 200;
  rCorpo4 = 30;
}

function setup() {
  createCanvas(550, 450);
  snd.play();
}

function draw() {
  background(img1);
  
  
  if(tela == 1){
    background(img1);
    textAlign(CENTER);
    textSize(25);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){ 
  stroke(90);
  fill("white");
  rect(xMenu, yMenu1, largura, altura, 5, 90);
    if(mouseIsPressed){
      tela = 6; 
    }
}
  fill("black");
  noStroke(0);
  text("Iniciar", 274, 60);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(90);
  fill("white");
  rect(xMenu2, yMenu2, largura, altura, 5, 90);
    if(mouseIsPressed){
      tela = 3;       
    }
  }
  fill("black");
  noStroke(0);
  text("Instruções", 163, 190);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
  stroke(90);
  fill(290);
  rect(xMenu3, yMenu3, largura, altura, 5, 90);
    if(mouseIsPressed){
      tela = 4;
    }
  }
  fill(0,250);
  noStroke(0);
  textFont('Cursive');
  text("Créditos", 384, 300);
}
  else if(tela == 2){
    background("white");
    stroke(20);
    
    fill("blue");
    ellipse(xCorpo1, yCorpo1, rCorpo1, rCorpo1);
      xCorpo1 = xCorpo1 + 1;
    
    fill("green");
    ellipse(xCorpo2, yCorpo2, rCorpo2, rCorpo2);
      xCorpo2 = xCorpo2 - 1;
   
    line(80, 215, 490, 215);
    
    fill("white"); 
    rect(80, 30, 160, 130);
    fill("white");
    rect(360, 30, 160, 130);
    
    fill("blue");
    noStroke(5);
    textSize(20);
    text("V = 2 m/s", 80, 63, 130, 100);
    text("M = 3 kg", 80, 93, 130, 100);
    
    fill("green");
    noStroke(5);
    textSize(20);
    text("V = -2 m/s", 360, 63, 130, 100);
    text("M = 3 kg", 360, 93, 130, 100);
    
    if(dist(xCorpo1, yCorpo1, xCorpo2, yCorpo2) == 2*rCorpo1 - rCorpo2){
      xCorpo1 = xCorpo1 - 1;
      xCorpo2 = xCorpo2 + 1;
      fill("black");
      textSize(22);
      noStroke(5);
      text("O tipo de colisão em que os dois corpos permanecem parados é a perfeitamente inelástica, com toda a energia cinética dissipada.", 90, 240, 360, 260);
      fill("red");
      textSize(22);
      noStroke(5);
      text("E =", 10, 380, 100, 260);
      textSize(17);
      noStroke(5);
      text("Vrel de afastamento", 60, 370, 200, 260);
      text("_______________", 60, 375, 200, 260);
      text("Vrel de aproximação", 60, 400, 200, 260);
      text("V2f - V1f", 200, 370, 200, 260);
      text("=", 150, 380, 200, 260);
      text("_______",200, 375, 200, 260);
      text("V1 - V2", 200, 400, 200, 260);
      text("=", 300, 380, 100, 260);
      text("0 - 0", 290, 370, 200, 260);
      text("_____", 290, 375, 200, 260);
      text("1 - (-2)", 290, 400, 200, 260);
      text("= 0", 382, 380, 100, 260);
  fill("black");
  noStroke(0);
  text("Próxima", 490, 260);
  fill("black");
  noStroke(0);
  text("Menu", 30, 320);
      if(mouseX > xMenu5 && mouseX < xMenu5 + largura && mouseY > yMenu5 && mouseY< yMenu5 + altura){
        stroke(90);
        fill(290);
        rect(xMenu5, yMenu5, largura, altura, 5, 90);
        fill("black");
        noStroke(0);
        text("Menu", 30, 320);
        if(mouseIsPressed){
          tela = 1;
        }
      }
      
  if(mouseX > xMenu4 && mouseX < xMenu4 + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
  stroke(90);
  fill(290);
  rect(xMenu4, yMenu4, largura, altura, 5, 90);
    fill("red");
  noStroke(0);
  text("Próxima", 490, 260);
    if(mouseIsPressed){
      tela = 5;
    }
  }
    }
    }
  else if(tela == 3){
    background("black");
    stroke(20);
    fill("white");
    rect(19, 8, 359, 100);
    rect(19, 119, 359, 100);
    fill("red");
    rect(19, 220, 359, 150);
    fill("black");
    textSize(18);
    noStroke(5);
    textFont('Cursive');
    text("As massas e velocidades dos corpos precisam estar em kg e m/s, respectivamente, de acordo com o sistema internacional de unidades(SI).", 20, 20, 360, 260);
    text("Este jogo jamais subistituirá a leitura de um livro-texto, sendo o seu propósito apenas para auxiliar no entendimento do conteúdo de colisões.", 20, 125, 360, 260);
    fill("white");
    text("Dicas:", 20, 225, 360, 260);
    fill("white");
    text("Atente para os valores da velocidade, pois podem estar negativos devido à orientação da reta.", 20, 244, 360, 260);
    text("Use a fórmula do coeficiente de restituição para saber o tipo de colisão.", 20, 315, 360, 260);
    fill("white");
    text("O jogador precisa apenas memorizar os tipos de colisões e relacionar os valores de velocidade e massa para responder as questões e aprender.", 420, 20, 100, 410);
    fill("white");
    text("Menu", 70, 425);
      if(mouseX > xMenu7 && mouseX < xMenu7 + largura && mouseY > yMenu7 && mouseY < yMenu7 + altura);{
        stroke(90);
        fill(290);
        rect(xMenu7 , yMenu7, largura, altura, 5, 90);
        fill("black");
        noStroke(0);
        text("Menu", 70, 425);
        if(mouseIsPressed){
          tela = 1;
        }
      }
}
  else if(tela == 4){
    background("black");
    textSize(22);
    image(educador, 20, 20, width/3, height/3);
    image(programador, 350, 20, width/3, height/3);
    fill("white");
    textFont('Cursive');
    text("Cleberson de Souza Fernandes  Educador Licenciado em Física pelo IFRN", 20, 190, 190, 160);
    text("Caio César Silva  Programador bacharelando em CET", 350, 190, 190, 110);
    text("Menu", 35, 430);
    if(mouseX > xMenu7 && mouseX < xMenu7 + largura && mouseY > yMenu7 && mouseY< yMenu7 + altura){
        stroke(90);
        fill(290);
        rect(xMenu7, yMenu7, largura, altura, 5, 90);
        fill("black");
        noStroke(0);
        text("Menu", 30, 430);
        if(mouseIsPressed){
          tela = 1;
        }
    }
}
  else if(tela == 5){
    background("white");
    stroke(20);
    image(img2, 20, 20, width, height);
    fill("red");
  noStroke(0);
  text("Próxima", 490, 320);
  fill("black");
  noStroke(0);
  text("Menu", 30, 320);
    
      if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY< yMenu8 + altura){
        stroke(90);
        fill(290);
        rect(xMenu6, yMenu6, largura, altura, 5, 90);
        fill("black");
        noStroke(0);
        text("Menu", 30, 320);
        if(mouseIsPressed){
          tela = 1;
  }
  }
   if(mouseX > xMenu10 && mouseX < xMenu10 + largura && mouseY > yMenu10 && mouseY < yMenu10 + altura){
  stroke(90);
  fill(290);
  rect(xMenu10, yMenu10, largura, altura, 5, 90);
    fill("black");
  noStroke(0);
  text("Próxima", 490, 320);
    if(mouseIsPressed){
      tela = 7; 
    }
  } 
  }
    else if(tela==6){
    background("white");
    stroke(20);
    
    textSize(30);
    fill("green")
    noStroke(0);
    text("Veja os exemplos a seguir e memorize-os. É recomendado ler as instruções antes de começar.",120, 100, 300, 260);
    textSize(20);
    fill("black");
    noStroke(0);
    text("Menu", 35, 320);
    fill("red");
    noStroke(0);
    text("Próxima", 490, 320);
      
      if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY< yMenu8 + altura){
        stroke(90);
        fill(290);
        rect(xMenu6, yMenu6, largura, altura, 5, 90);
        fill("black");
        noStroke(0);
        text("Menu", 30, 320);
        if(mouseIsPressed){
          tela = 1;
  }
  }
      if(mouseX > xMenu11 && mouseX < xMenu11 + largura && mouseY > yMenu11 && mouseY < yMenu11 + altura){
  stroke(90);
  fill(290);
  rect(xMenu11, yMenu11, largura, altura, 5, 90);
    fill("black");
  noStroke(0);
  text("Próxima", 490, 320);
    if(mouseIsPressed){
      tela = 2;
    }
  }
    }
  else if(tela==7){
    background(img2);
    
    fill("grey"); 
    rect(75, 115, 400, 140);
    fill("white");
    rect(30, 350, 500, 100);
    
    stroke(20);
    fill("black");
      textSize(22);
      noStroke(5);
      text("O tipo de colisão em que os dois corpos alteram o movimento após a colisão é a parcialmente elástica, com parte da energia cinética dissipada.", 90, 120, 360, 260);
    
    textSize(35);
    fill("green");
      textSize(22);
      noStroke(5);
      text("E =", 10, 380, 100, 260);
      textSize(17);
      noStroke(5);
      text("Vrel de afastamento", 60, 370, 200, 260);
      text("_______________", 60, 375, 200, 260);
      text("Vrel de aproximação", 60, 400, 200, 260);
      text("Vbf - Vaf", 200, 370, 200, 260);
      text("=", 150, 380, 200, 260);
      text("_______",200, 375, 200, 260);
      text("Va - Vb", 200, 400, 200, 260);
      text("=", 300, 380, 100, 260);
      text("0,5 - (-3)", 290, 370, 200, 260);
      text("_____", 290, 375, 200, 260);
      text("2 - (-2)", 290, 400, 200, 260);
      text("= 0,875", 415, 380, 100, 260);
  fill("red");
  noStroke(0);
  text("Próxima", 300, 445);
  fill("black");
  noStroke(0);
  text("Menu", 30, 320);
    if(mouseX > xMenu12 && mouseX < xMenu12 + largura && mouseY > yMenu12 && mouseY < yMenu12 + altura){
      stroke(90);
      fill("white");
      rect(xMenu12, yMenu12, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Próxima", 300, 445);
      if(mouseIsPressed){
        tela = 8;
      }
    }
    if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
  }
  else if(tela==8){
    background(img3);
    stroke(20);
    fill("green");
  noStroke(0);
  text("Próxima", 490, 50);
  fill("black");
  noStroke(0);
  text("Menu", 30, 320);
     if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    if(mouseX > xMenu13 && mouseX < xMenu13 + largura && mouseY > yMenu13 && mouseY < yMenu13 + altura){
      stroke(90);
      fill("white");
      rect(xMenu13, yMenu13, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Próxima", 490, 50);
      if(mouseIsPressed){
        tela = 9;
      }
    }
      }
  else if(tela==9){
    background("white");
    stroke(20);
    stroke(20);
    fill("black");
      textSize(22);
      noStroke(5);
      text("O tipo de colisão em que os dois corpos alteram o movimento após a colisão e trocam as velocidades, é a perfeitamente elástica, com toda a energia cinética conservada.", 90, 120, 360, 260);
    
    textSize(35);
    fill("green");
      textSize(22);
      noStroke(5);
      text("E =", 10, 380, 100, 260);
      textSize(17);
      noStroke(5);
      text("Vrel de afastamento", 60, 370, 200, 260);
      text("_______________", 60, 375, 200, 260);
      text("Vrel de aproximação", 60, 400, 200, 260);
      text("Vbf - Vaf", 200, 370, 200, 260);
      text("=", 150, 380, 200, 260);
      text("_______",200, 375, 200, 260);
      text("Va - Vb", 200, 400, 200, 260);
      text("=", 300, 380, 100, 260);
      text("2 - (-1)", 290, 370, 200, 260);
      text("_____", 290, 375, 200, 260);
      text("2 - (-1)", 290, 400, 200, 260);
      text("= 1", 385, 380, 100, 260);
    fill("black");
  noStroke(0);
  text("Próxima", 490, 320);
  fill("black");
  noStroke(0);
  text("Menu", 30, 320);
    if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    if(mouseX > xMenu13 && mouseX < xMenu13 + largura && mouseY > yMenu13 && mouseY < yMenu13 + altura){
      stroke(90);
      fill("white");
      rect(xMenu13, yMenu13, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Próxima", 490, 90);
      if(mouseIsPressed){
        tela = 10;
      }
    }
  }
  else if(tela==10){
    background("white");
    stroke(20);
    
    textSize(35);
    fill("green")
    noStroke(0);
    text("Agora vamos para"+"\n"+"as questões."+"\n"+"Boa sorte !"+"\n"+"As questões tem um tempo limite de 40 segundos.",120, 110, 300, 260);
    textSize(20);
    fill("black");
    noStroke(0);
    text("Menu", 35, 320);
    fill("black");
    noStroke(0);
    text("Próxima", 490, 320);
    if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    if(mouseX > xMenu10 && mouseX < xMenu10 + largura && mouseY > yMenu10 && mouseY < yMenu10 + altura){
  stroke(90);
  fill(290);
  rect(xMenu10, yMenu10, largura, altura, 5, 90);
    fill("black");
  noStroke(0);
  text("Próxima", 490, 320);
    if(mouseIsPressed){
      tela = random(questão);
      }
    }
  }
  else if(tela=="questão1"){
    background("white");
    textSize(20);
      noStroke(5);
    image(gif1, 200, 125, width/2, height/2);
    fill("black");
      text("1) Se V1i = 2 m/s , V2i = 0 m/s e após a colisão os corpos tiverem velocidades V1f = 0 m/s e V2f = 1 m/s , qual o tipo de colisão que ocorreu ?", 20, 20, 520, 260);
    text("A-) Inelástica.", -186, 120, 520, 260);
    text("B-) Parcialmente elástica.", -132, 160, 520, 260);
    text("C-) Elástica.", -195, 195, 520, 260);
    text("D-) N.D.A.", -201, 230, 520, 260);
    fill("red");
    noStroke(0);
    text("OBS: Sempre use a formula do coeficiente de restituição de acordo com os exemplos anteriores!", 20, 260, 520, 260);
    text("E =", 10, 380, 100, 260);
      textSize(17);
      noStroke(5);
      text("Vrel de afastamento", 60, 370, 200, 260);
      text("_______________", 60, 375, 200, 260);
      text("Vrel de aproximação", 60, 400, 200, 260);
      text("Calcule e guarde sua resposta", 320, 400, 200, 260);
    textSize(20);
    fill("black");
    noStroke(0);
    text("Menu", 35, 320);
    fill("green");
    noStroke(0);
    text("Próxima", 490, 360);
    if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
      if(mouseX > xMenu10 && mouseX < xMenu10 + largura && mouseY > yMenu14&& mouseY < yMenu14+altura){
  stroke(90);
  fill(290);
  rect(xMenu10, yMenu14,largura, altura, 5, 90);
    fill("green");
  noStroke(0);
  text("Próxima", 490, 360);
    if(mouseIsPressed){
      tela = 12;
      }
    }
    if(mouseX > xMenu18 && mouseX < xMenu18 + largura2 && mouseY > yMenu18 && mouseY < yMenu18 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu18, yMenu18, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("A-) Inelástica.", -186, 120, 520, 260);
      if(mouseIsPressed){
        tela = 12;    
      }
    }
    if(mouseX > xMenu19 && mouseX < xMenu19 + largura2 && mouseY > yMenu19 && mouseY < yMenu19 + altura2){
    stroke(90);
    fill(290);
    rect(xMenu19, yMenu19, largura2, altura2, 5, 90);
    fill("green");
    noStroke(0);
    text("B-) Parcialmente elástica.", -132, 160, 520, 260);
    if(mouseIsPressed){
      tela = 12;     
    }
  }
    if(mouseX > xMenu20 && mouseX < xMenu20 + largura2 && mouseY > yMenu20 && mouseY < yMenu20 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu20, yMenu20, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("C-) Elástica.", -195, 195, 520, 260);
      if(mouseIsPressed){
        tela = 12;     
      }     
    }
    if(mouseX > xMenu21 && mouseX < xMenu21 + largura2 && mouseY > yMenu21 && mouseY < yMenu21 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu21, yMenu21, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("D-) N.D.A.", -201, 230 ,520, 260);
      if(mouseIsPressed){
        tela = 12;
      }
    }
    if(frameCount%30==0){
      tempo += 1;
      if(tempo == 40){
        tela = 15;
         tempo = 0;
      }
    }
}
  else if(tela=="questão2"){
    background("white");
    textSize(20);
      noStroke(5);
    fill("black");
    text("2) Se V1i = 2 m/s e V2i = -1 m/s e após a colisão as velocidades forem respectivamente iguais a -1 m/s e 2 m/s, qual o tipo de colisão que ocorreu ?", 20, 20, 520, 260);
    text("A-) Inelástica.", -186, 120, 520, 260);
    text("B-) Parcialmente elástica.", -132, 160, 520, 260);
    text("C-) Elástica.", -195, 195, 520, 260);
    text("D-) N.D.A.", -201, 230, 520, 260);
    textSize(20);
    fill("black");
    noStroke(0);
    text("Menu", 35, 320);
    fill("green");
    noStroke(0);
    text("Próxima", 490, 300);
    fill("red");
    text("Calcule e memorize sua resposta", 300, 390);
    if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    if(mouseX > xMenu15&& mouseX < xMenu15+ largura && mouseY > yMenu15&& mouseY < yMenu15+altura){
  stroke(90);
  fill(290);
  rect(xMenu15,yMenu15,largura,altura, 5, 90);
    fill("green");
  noStroke(0);
  text("Próxima", 490, 300);
    if(mouseIsPressed){
      tela = random(questão);         
      }
    }
    if(mouseX > xMenu22 && mouseX < xMenu22 + largura2 && mouseY > yMenu22 && mouseY < yMenu22 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu22, yMenu22, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("A-) Inelástica.", -186, 120, 520, 260);
      if(mouseIsPressed){
        tela = 13;    
      }
    }
    if(mouseX > xMenu23 && mouseX < xMenu23 + largura2 && mouseY > yMenu23 && mouseY < yMenu23 + altura2){
    stroke(90);
    fill(290);
    rect(xMenu23, yMenu23, largura2, altura2, 5, 90);
    fill("green");
    noStroke(0);
    text("B-) Parcialmente elástica.", -132, 160, 520, 260);
    if(mouseIsPressed){
      tela = 13;     
    }
  }
    if(mouseX > xMenu24 && mouseX < xMenu24 + largura2 && mouseY > yMenu24 && mouseY < yMenu24 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu24, yMenu24, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("C-) Elástica.", -195, 195, 520, 260);
      if(mouseIsPressed){
        tela = 13;     
      }     
    }
    if(mouseX > xMenu25 && mouseX < xMenu25 + largura2 && mouseY > yMenu25 && mouseY < yMenu25+ altura2){
      stroke(90);
      fill(290);
      rect(xMenu25, yMenu25, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("D-) N.D.A.", -201, 230 ,520, 260);
      if(mouseIsPressed){
        tela = 13;
      }
    }
  }
    else if(tela=="questão3"){
      background("white");
      textSize(22);
      noStroke(5);
      fill("black");
      text("3) Se V1i = 2 m/s e V2i = -2 m/s e após a colisão as velocidades forem respectivamente iguais a 0 m/s e 0 m/s, qual o tipo de colisão que ocorreu ?", 20, 20, 520, 260);
    text("A-) inelástica.", -186, 120, 520, 260);
    text("B-) parcialmente elástica.", -125, 155, 520, 260);
    text("C-) elástica.", -195, 195, 520, 260);
    text("D-) N.D.A.", -201, 230, 520, 260);
      textSize(20);
    fill("black");
    noStroke(0);
    text("Menu", 35, 320);
    fill("black");
    noStroke(0);
      fill("green");
    text("Gabarito", 50, 440);
    fill("red");
    text("Calcule e memorize sua resposta para o gabarito", 280, 390); 
      if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }
      if(mouseX > xMenu16 && mouseX < xMenu16 + largura && mouseY > yMenu16 && mouseY < yMenu16 + altura){
        stroke(90);
        fill("white");
        rect(xMenu16, yMenu16, largura, altura, 5, 90);
        fill("black");
        noStroke(0);
        fill("green");
        text("Gabarito", 50, 440);
        if(mouseIsPressed){
          tela = 14;
        }
      }
      if(mouseX > xMenu22 && mouseX < xMenu22 + largura2 && mouseY > yMenu22 && mouseY < yMenu22 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu22, yMenu22, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("A-) Inelástica.", -186, 120, 520, 260);
      if(mouseIsPressed){
        tela = 14;    ///TO AQUI CARALHO VAI TOMAR NO CU
      }
    }
    if(mouseX > xMenu23 && mouseX < xMenu23 + largura2 && mouseY > yMenu23 && mouseY < yMenu23 + altura2){
    stroke(90);
    fill(290);
    rect(xMenu23, yMenu23, largura2, altura2, 5, 90);
    fill("green");
    noStroke(0);
    text("B-) Parcialmente elástica.", -132, 160, 520, 260);
    if(mouseIsPressed){
      tela = 14;     
    }
  }
    if(mouseX > xMenu24 && mouseX < xMenu24 + largura2 && mouseY > yMenu24 && mouseY < yMenu24 + altura2){
      stroke(90);
      fill(290);
      rect(xMenu24, yMenu24, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("C-) Elástica.", -195, 195, 520, 260);
      if(mouseIsPressed){
        tela = 14;     
      }     
    }
    if(mouseX > xMenu25 && mouseX < xMenu25 + largura2 && mouseY > yMenu25 && mouseY < yMenu25+ altura2){
      stroke(90);
      fill(290);
      rect(xMenu25, yMenu25, largura2, altura2, 5, 90);
      fill("green");
      noStroke(0);
      text("D-) N.D.A.", -201, 230 ,520, 260);
      if(mouseIsPressed){
        tela = 14;
      }
    }
          if(frameCount%30==0){
      tempo += 1;
      if(tempo == 40){
        tela = 15;
         tempo = 0;
      }
    }
    }
  else if(tela==14){
    background("white");
     textSize(22);
      noStroke(5);
      fill("black");
    fill("red");
   text("Gabarito:", 50, 40);
    text("1ª : Parcialmente Elástica, letra B.", 180, 69);
    text("2ª : Elástica, letra C.", 110, 99);
    text("3ª : Inelástica, letra A.", 122, 129);
    fill("green");
    text("Parabéns ! Se você acertou as três questões, vá para a questão desafio, caso contrário, volte ao menu e reveja os exemplos e refaça as questões.", 10, 185, 520, 360);
    fill("black");
    noStroke(0);
    text("Menu", 35, 320);
    fill("black");
    noStroke(0);
      fill("red");
    text("Questão desafio", 90, 400);
    if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    }                      
        if(frameCount%30==0){
      tempo += 1;
      if(tempo == 40){
        tela = 15;
         tempo = 0;
      }
    }
}
  else if(tela==15){
    background("white");
    textSize(22);
    noStroke(0);
    fill("red");
    text("Você não respondeu dentro do tempo limite!"+"\n"+"Que pena."+"\n"+"Volte para o menu questão e tente de novo :D", 10, 185, 520, 360);
    fill("black");
    text("Menu", 30, 320);
   if(mouseX > xMenu8 && mouseX < xMenu8 + largura && mouseY > yMenu8 && mouseY < yMenu8 + altura){
      stroke(90);
      fill("white");
      rect(xMenu6, yMenu6, largura, altura, 5, 90);
      fill("black");
      noStroke(0);
      text("Menu", 30, 320);
      if(mouseIsPressed){
        tela = 1;
      }
    } 
    
  }
}