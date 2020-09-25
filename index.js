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
  
  document.getElementById("round").innerHTML = el - t; //Print waktu awal
  function frame() {
    // let hasilSkor =
    if (t === limit) {
      var result = prompt("Masukan Nickname Anda:")
      clearInterval(id);
      clearInterval(gameT);
      document.getElementById("round").innerHTML = el - t; //Print waktu habis
    } else {
      t++;
      document.getElementById("round").innerHTML = el - t; //Print waktu tersisa
    }
    if (result) {
      let temp = document.getElementById("scoreHistory").innerHTML
      let scoreTemp = document.getElementById("scoreValue").innerText
      document.getElementById("scoreHistory").innerHTML = `<tr>
      <td>${result}</td>
      <td>${scoreTemp}</td>
      </tr>` + temp
      document.getElementById("scoreValue").innerText = 0
    }
  }

  
}

var kodokIdTemp = '';

function kodokRandom(ele) { //Untuk merandom ID kodok
  if (ele) {
    hapusKodok(kodokId) //Menghapus ID kodok sebelumnya
  } 
  // hapusKodok()
  // console.log(kodokId)
  var kodokId = 'b' + (Math.floor(Math.random() * 25) + 1)
  printKodok(kodokId) //Menampilkan kodok random
  // console.log(kodokId)
  return kodokId
}


function hapusKodok(ele) {
  document.getElementById(ele).style.backgroundImage = 'none';
  document.getElementById(ele).style.backgroundSize = '100%';
  document.getElementById(ele).style.cursor = 'none';
}

function printKodok(ele) {
  document.getElementById(ele).style.backgroundImage = 'url(zuma.png)';
  document.getElementById(ele).style.backgroundSize = '100%';
  document.getElementById(ele).style.cursor = 'pointer';
  document.getElementById(ele).addEventListener("click", clicked)
}

function clicked() {
  let temp = Number(document.getElementById("scoreValue").innerHTML)
  temp++
  document.getElementById("scoreValue").innerHTML = temp
}












// function kodokRandom() {
//   if (kodokId) {
//     hapusKodok(kodokId)
//   } 
//   console.log(kodokId)
//   var kodokId = 'b' + (Math.floor(Math.random() * 25) + 1)
//   printKodok(kodokId)
//   console.log(kodokId)
// }

// kodokRandom()
// kodokRandom()