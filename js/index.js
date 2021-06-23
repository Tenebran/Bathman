window.addEventListener("load", function () {
  const batman = document.querySelector(".batman__app__person");
  const playground = document.querySelector(".batman__app");

  batman.addEventListener("keydown", event => {
    let topKey = batman.offsetTop;
    let leftKey = batman.offsetLeft;

    if (!playground__block()) {
      return (
        (event.target.style.background = `url(./img/icon/bam.png) no-repeat center / cover`),
        setTimeout(function () {
          event.target.style.background = `url(./img/icon/bat__pers.png) no-repeat center / contain`;
        }, 2000)
      );
    }

    //top
    if (event.keyCode == 38) {
      event.target.style.top = topKey - 40 + "px";
    }

    //Bottom
    if (event.keyCode == 40) {
      event.target.style.top = topKey + 20 + "px";
    }

    //Right
    if (event.keyCode == 39) {
      event.target.style.left = leftKey + 20 + "px";
    }

    //Left
    if (event.keyCode == 37) {
      event.target.style.left = leftKey - 40 + "px";
    }
  });

  let throttle = false;

  function playground__block() {
    if (throttle == true) {
    }

    throttle = true;
    setTimeout(() => {
      throttle = false;
    }, 50);
    //right wall
    if (batman.offsetLeft + batman.offsetWidth - 10 >= playground.clientWidth) {
      batman.style.left = playground.clientWidth - batman.offsetWidth - 10 + "px";
      return false;
    }

    // Left wall
    if (batman.offsetLeft <= 0) {
      batman.style.left = 10 + "px";
      return false;
    }

    // Bottom wall
    if (batman.offsetTop + batman.offsetHeight - 10 >= playground.clientHeight) {
      batman.style.top = playground.clientHeight - batman.offsetHeight - 10 + "px";
      return false;
    }

    //Top wall
    if (batman.offsetTop <= 0) {
      batman.style.top = 10 + "px";
      return false;
    }
    return true;
  }
});
