function printTable() {
  let tb = 0
  let dummy = ''
  for (let i = 0; i < 5; i++) {
    dummy += '<tr>'
    for (let j = 0; j < 5; j++) {
      tb++
      dummy +=`<td id="b${tb}" class="tableBlock"></td>`
    }
    dummy += '</tr>'
  }
  document.getElementById("gameTable").innerHTML = dummy
}
printTable()

function start(el) {
  var limit = el;
  var t = 0;
  var id = setInterval(frame, 1000); //Waktu keseluruhan GAME (10detik)
  
  var gameT = setInterval(kodokRandom, 1000) //Waktu munculnya kodok
  document.getElementById("scoreValue").innerText = 0 
  document.getElementById("round").innerHTML = el - t; //Print waktu awal
  function frame() {
    if (t === limit) {
      printTable()
      var result = prompt("Masukan Nickname Anda:")
      clearInterval(id);
      clearInterval(gameT);
      if (result) {
        printScore(result)
      }
      
      document.getElementById("round").innerHTML = el - t; //Print waktu habis
    } else {
      t++;
      document.getElementById("round").innerHTML = el - t; //Print waktu tersisa
    }
  }
}

function printScore(ele) {
  let temp = document.getElementById("scoreHistory").innerHTML;
  let scoreTemp = document.getElementById("scoreValue").innerText;
  document.getElementById("scoreHistory").innerHTML = `<tr>
  <td>${ele}</td>
  <td>${scoreTemp}</td>
  </tr>` + temp;
}

var kodokIdTemp
var kodokId

function kodokRandom() { //Untuk merandom ID kodok
  if (kodokIdTemp) {
    hapusKodok(kodokIdTemp)
  }
  kodokId = 'b' + (Math.floor(Math.random() * 25) + 1)
  kodokIdTemp = kodokId;

  printKodok(kodokId) //Menampilkan kodok random
}

function hapusKodok(ele) {
  document.getElementById(ele).style.backgroundImage = 'none';
  document.getElementById(ele).style.backgroundSize = '100%';
  document.getElementById(ele).removeEventListener("click", clicked)
}

function printKodok(ele) {
  document.getElementById(ele).style.backgroundImage = 'url(zuma.png)';
  document.getElementById(ele).style.backgroundSize = '100%';
  document.getElementById(ele).addEventListener("click", clicked)
}

function clicked() {
  let temp = Number(document.getElementById("scoreValue").innerHTML)
  temp++
  document.getElementById("scoreValue").innerHTML = temp
  kodokRandom()
}
