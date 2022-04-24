function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "kertas";
  return "gunting";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "batu") return comp == "kertas" ? "KALAH" : "MENANG";
  if (player == "kertas") return comp == "batu" ? "MENANG" : "KALAH";
  if (player == "gunting") return comp == "kertas" ? "MENANG" : "KALAH";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 600) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".jpg");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpg");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 600);
  });
});

// const playerGajah = document.querySelector(".gajah");
// playerGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
// const playerOrang = document.querySelector(".orang");
// playerOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
// const playerSemut = document.querySelector(".semut");
// playerSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
