var res = {
  HelloWorld_png: "res/HelloWorld.png",
  shizukaimg: "res/shizuka.jpg",
  nobitaimg: "res/nobita.jpg",
  background: "res/backgrounc.png",
  px: "res/playerX.png",
  py: "res/playerY.png",
  btnbg: "res/btnbackground.png",
  gback: "res/gback.jpg",
  mainMenuBack: "res/mainMenu.png",
  playBtn: "res/playBtn.png",
  blackBack: "res/blackBackground.jpg",
  sback: "res/squareBack.png",
  bback: "res/blackSquare.png",
  victoryBack: "res/victoryBack.jpg",
  closeImg: "res/closeBtn.jpg",
  inputFieldImg: "res/inputField.png",
  png1: "res/1.png",
  png2: "res/2.png",
  png3: "res/3.png",
  png4: "res/4.png",
  png5: "res/5.png",
  png6: "res/6.png",
  png7: "res/7.png",
  png8: "res/8.png",
  png9: "res/9.png",
  png10: "res/10.png",
  png11: "res/11.png",
  png12: "res/12.png",
  png13: "res/13.png",
  star: "res/star.png",
  cursorwriting: {
    type: "font",
    name: "cursorwriting",
    srcs: ["res/font/SquarePeg.ttf", "res/font/SquarePeg.ttf"],
  },
  roboto: {
    type: "font",
    name: "robotofont",
    srcs: ["res/font/Roboto-Black.ttf", "res/font/Roboto-Black.ttf"],
  },
  workfont: {
    type: "font",
    name: "workfont",
    srcs: ["res/font/workfont.ttf", "res/font/workfont.ttf"],
  },
  pacman: {
    type: "font",
    name: "pacman",
    srcs: ["res/font/pacman.ttf","res/font/pacman.ttf"],
  }
};

var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}
