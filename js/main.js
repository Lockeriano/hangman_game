var password = "FAKE IT TILL YOU MAKE IT";
password = password.toUpperCase();
var password1 = "";
var length = password.length;
var fails = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i=0; i < length; i++){
  if (password.charAt(i) == " ") password1 = password1 + " ";
  else password1 = password1 + "-";
}

function writePassword(){
	document.getElementById("password").innerHTML = password1;
}

window.onload = start;

var letters = new Array (35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "Q";
letters[22] = "P";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start(){

  var divContent = "";

  for (i=0; i <= 34; i++){
    var element = "let" + i;
    divContent = divContent + '<div class="letter" onclick="check('+ i +')" id="'+ element +'"">' + letters[i] + '</div>';
    if (i % 7 == 6)
      divContent = divContent + '<div style="clear:both;"></div>';
  }

  document.getElementById("alphabet").innerHTML = divContent;

  writePassword();
}

String.prototype.setChar = function(slot, char){
  if (slot > this.length - 1) return this.toString();
  else return this.substr(0, slot) + char + this.substr(slot+1);
}

function check(nr){
  var usedLetter = false;
  for (i=0; i < length; i++){
    if (password.charAt(i) == letters[nr]){
      password1 = password1.setChar(i,letters[nr]);
      usedLetter = true;
    }
  }

  if (usedLetter == true){
    yes.play();
    var element = "let" + nr;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #00C000";
    document.getElementById(element).style.cursor = "default";

    writePassword();
  }

  else {
    no.play();
    var element = "let" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick",";");

    fails++;
    var image = "img/s" + fails + ".jpg";
    document.getElementById("hangman").innerHTML = '<img src="'+ image +'" alt=""/>';
  }

  //win

  if (password == password1){
    document.getElementById("alphabet").innerHTML = "You did it! <br/><br/> The correct password is: " +password+
    '<br/><br/><span class="reset" onclick="location.reload()">Try again?</span>';
  }

  //lose

  if (fails >= 9){
    document.getElementById("alphabet").innerHTML = "You've failed! <br/><br/> The correct password is: <br/>" +password+
    '<br/><br/><span class="reset" onclick="location.reload()">Try again?</span>';
  }
}