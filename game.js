const dinosaur = document.getElementById("dinosaur");
const cactus = document.getElementById("cactus");


function jump() {
  if (dinosaur.classList != "jump") {
    dinosaur.classList.add("jump");

    setTimeout(function () {
      dinosaur.classList.remove("jump");
    }, 400);
  }
}

let isRun = setInterval(function () {
  //  dinosaur Y position
  let dinoTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));

  //  cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
   
  alert("Game Over");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
