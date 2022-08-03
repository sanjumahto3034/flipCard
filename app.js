var lastbox = true;

// --------------------------- > You Values Section <--------------
var timeRemain;
var rows;
var columns;
// --------------------------- > You Values Section <--------------
var lastText;
var lastCard;
var lastImage;
var scoreLable;
var finalScore = 0;
var finalScreenText;
var finalScreenScore;
var whenFinalScreenDisplay;
var mins = 0;
var secs = 0;
var youLost = false;
var ScreenBackImage;
var timeLable;
var replayBtn;
var isFlipping = true;
var test;
var scaleX = 0.2;
var scaleY = 0.3;
var gamePlaying;
var isPlayingFirstTime = true;

var mainMenuLayerScene = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    this._super();

    var size = cc.winSize;
    image = new cc.Sprite(res.victoryBack);
    image.setScale(3, 3);
    image.attr({
      x: size.width / 2,
      y: size.height,
    });
    // image.setScale(1, 1);
    this.addChild(image);

    var textBack = new cc.LabelTTF("Flip Card", "pacman", 105);
    // textBack.setScale(1.1, 1.1);
    textBack.setOpacity(100);
    textBack.setColor(0, 0, 0);
    textBack.attr({
      x: size.width / 2,
      y: size.height / 1 - 110,
    });
    this.addChild(textBack, 2);

    var text = new cc.LabelTTF("Flip Card", "pacman", 105);
    text.attr({
      x: size.width / 2 + 20,
      y: size.height / 1 - 100,
    });
    this.addChild(text, 3);

    var playBtn = new ccui.Button(res.playBtn);
    playBtn.addTouchEventListener(this.sceneloadEvenet);
    playBtn.setScale(0.5, 0.5);
    playBtn.attr({
      x: size.width / 2,
      y: size.height / 2 - 100,
    });
    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());

          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);

          if (cc.rectContainsPoint(rect, locationInNode)) {
            playBtn.setScale(0.6, 0.6);
          } else {
            playBtn.setScale(0.5, 0.5);
          }
        },
      },
      playBtn
    );
    this.addChild(playBtn, 1);

    this.schedule(this.backSceneEffectF, 3);
    this.effectFunction();
    return true;
  },
  effectFunction: function () {
    this.backMoveEffect = cc.moveBy(3, this.frontValue, 1);
    image.runAction(this.backMoveEffect);
  },
  backSceneEffectF: function (dt) {
    if (this.frontMove) {
      this.frontValue = -100;
      this.frontMove = false;
      this.effectFunction();
    } else {
      this.frontMove = true;
      this.frontValue = 100;
      this.effectFunction();
    }
  },
  sceneloadEvenet: function (sender, type) {
    isPlayingFirstTime = JSON.parse(
      cc.sys.localStorage.getItem(JSON.stringify("firstTime"))
    );
    if (isPlayingFirstTime == null) {
    
      cc.sys.localStorage.setItem(
        JSON.stringify("firstTime"),
        JSON.stringify("false")
      );
      cc.sys.localStorage.setItem(JSON.stringify("l1"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l2"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l3"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l4"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l5"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l6"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l7"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l8"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l9"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l10"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l11"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l12"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l13"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l14"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l15"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l16"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l17"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l18"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l19"), JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l20"), JSON.stringify("true"));

      cc.sys.localStorage.setItem(JSON.stringify("l1s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l2s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l3s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l4s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l5s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l6s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l7s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l8s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l9s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l10s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l11s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l12s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l13s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l14s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l15s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l16s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l17s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l18s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l19s"), JSON.stringify("0"));
      cc.sys.localStorage.setItem(JSON.stringify("l20s"), JSON.stringify("0"));

      cc.sys.localStorage.setItem(JSON.stringify("l1u"),JSON.stringify("true"));
      cc.sys.localStorage.setItem(JSON.stringify("l2u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l3u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l4u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l5u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l6u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l7u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l8u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l9u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l10u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l11u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l12u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l13u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l14u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l15u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l16u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l17u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l18u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l19u"),JSON.stringify("false"));
      cc.sys.localStorage.setItem(JSON.stringify("l20u"),JSON.stringify("false"));
      
      cc.log("Welcome Player");
      gamePlaying = "level1";
      rows = 3;
        columns = 2;;
      timeRemain = 30;
      cc.director.runScene(new level1Scene());
    } else {
      cc.director.runScene(new levelSelectionScene());
    }
  },
});
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------> levelscene <----------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
var levelSelectionLayerScene = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    this._super();
    
    var size = cc.winSize;
    image = new cc.Sprite(res.victoryBack);
    image.setScale(3, 3);
    image.attr({
      x: size.width / 2,
      y: size.height,
    });
    this.addChild(image);

    var textBack = new cc.LabelTTF("Select Level", "pacman", 105);
    textBack.setOpacity(100);
    textBack.setColor(0, 0, 0);
    textBack.attr({
      x: size.width / 2,
      y: size.height / 1 - 110,
    });
    this.addChild(textBack, 2);

    var text = new cc.LabelTTF("Select Level", "pacman", 105);
    text.attr({
      x: size.width / 2 + 20,
      y: size.height / 1 - 100,
    });
    this.addChild(text, 3);
  
    
  var scrollView = new ccui.ScrollView();
    scrollView.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
    scrollView.setTouchEnabled(true);
    scrollView.setBounceEnabled(true);
    // scrollView.setBackGroundImage(res.victoryBack);
    scrollView.setBackGroundImageScale9Enabled(true);
    //  scrollView.setBackGroundColor(cc.color(255,255,255));

    scrollView.setContentSize(cc.size(1920, 400));
    scrollView.setInnerContainerSize(cc.size(6000 , 410));
    scrollView.attr({
      x: size.width / 2 - 950,
      y: size.height / 2 - 500,
    });
    this.addChild(scrollView, 2);

  // ########################################## > Level 1 Btn <##################################################
    var level1 = new ccui.Button(res.playBtn);
    var level1StarM = new cc.Sprite(res.star);
    level1StarM.setScale(0.5, 0.5);
    level1StarM.attr({
      x: level1.width / 2,
      y: level1.height / 2 + 450,
    });
    level1.addChild(level1StarM);
    var level1StarL = new cc.Sprite(res.star);
    level1StarL.setScale(0.5, 0.5);
    level1StarL.attr({
      x: level1.width / 2 - 300,
      y: level1.height / 2 + 300,
    });
    level1.addChild(level1StarL);
    var level1StarR = new cc.Sprite(res.star);
    level1StarR.setScale(0.5, 0.5);
    level1StarR.attr({
      x: level1.width / 2 + 300,
      y: level1.height / 2 + 350,
    });
    level1.addChild(level1StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level1.setScale(0.35, 0.35);
          } else {
            level1.setScale(0.3, 0.3);
          }
        },
      },
      level1
    );
    level1.addTouchEventListener(this.loadSceneEvent1);
    level1.setScale(0.3, 0.3);
    level1.attr({
      x: scrollView.width *0.1,
      y: scrollView.height / 2 
    });
    level1.setTitleText("1");
    level1.setTitleFontSize(400);
    level1.setTitleColor(0, 0, 0);
    level1.setTitleFontName("robotofont");
    scrollView.addChild(level1, 4);
    // ########################################## > Level 2 Btn <##################################################
    var level2 = new ccui.Button(res.playBtn);
    var level2StarM = new cc.Sprite(res.star);
    level2StarM.setScale(0.5, 0.5);
    level2StarM.attr({
      x: level2.width / 2,
      y: level2.height / 2 + 450,
    });
    level2.addChild(level2StarM);
    var level2StarL = new cc.Sprite(res.star);
    level2StarL.setScale(0.5, 0.5);
    level2StarL.attr({
      x: level2.width / 2 - 300,
      y: level2.height / 2 + 300,
    });
    level2.addChild(level2StarL);
    var level2StarR = new cc.Sprite(res.star);
    level2StarR.setScale(0.5, 0.5);
    level2StarR.attr({
      x: level2.width / 2 + 300,
      y: level2.height / 2 + 350,
    });
    level2.addChild(level2StarR);
    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level2.setScale(0.35, 0.35);
          } else {
            level2.setScale(0.3, 0.3);
          }
        },
      },
      level2
    );
    level2.addTouchEventListener(this.loadSceneEvent2);
    level2.setScale(0.3, 0.3);
    level2.attr({
      x: scrollView.width  *0.25,
      y: scrollView.height / 2,
    });
    level2.setTitleText("2");
    level2.setTitleFontSize(400);
    level2.setTitleColor(0, 0, 0);
    level2.setTitleFontName("robotofont");
    scrollView.addChild(level2, 1);
    // ########################################## > Level 3 Btn <###################################################
    var level3 = new ccui.Button(res.playBtn);
    var level3StarM = new cc.Sprite(res.star);
    level3StarM.setScale(0.5, 0.5);
    level3StarM.attr({
      x: level3.width / 2,
      y: level3.height / 2 + 450,
    });
    level3.addChild(level3StarM);
    var level3StarL = new cc.Sprite(res.star);
    level3StarL.setScale(0.5, 0.5);
    level3StarL.attr({
      x: level3.width / 2 - 300,
      y: level3.height / 2 + 300,
    });
    level3.addChild(level3StarL);
    var level3StarR = new cc.Sprite(res.star);
    level3StarR.setScale(0.5, 0.5);
    level3StarR.attr({
      x: level3.width / 2 + 300,
      y: level3.height / 2 + 350,
    });
    level3.addChild(level3StarR);
    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level3.setScale(0.35, 0.35);
          } else {
            level3.setScale(0.3, 0.3);
          }
        },
      },
      level3
    );
    level3.addTouchEventListener(this.loadSceneEvent3);
    level3.setScale(0.3, 0.3);
    level3.attr({
      x: scrollView.width *0.4,
      y: scrollView.height / 2 
    });
    level3.setTitleText("3");
    level3.setTitleFontSize(400);
    level3.setTitleColor(0, 0, 0);
    level3.setTitleFontName("robotofont");
    scrollView.addChild(level3, 1);
    // ########################################## > Level 4 Btn <##################################################
    var level4 = new ccui.Button(res.playBtn);
    var level4StarM = new cc.Sprite(res.star);
    level4StarM.setScale(0.5, 0.5);
    level4StarM.attr({
      x: level4.width / 2,
      y: level4.height / 2 + 450,
    });
    level4.addChild(level4StarM);
    var level4StarL = new cc.Sprite(res.star);
    level4StarL.setScale(0.5, 0.5);
    level4StarL.attr({
      x: level4.width / 2 - 300,
      y: level4.height / 2 + 300,
    });
    level4.addChild(level4StarL);
    var level4StarR = new cc.Sprite(res.star);
    level4StarR.setScale(0.5, 0.5);
    level4StarR.attr({
      x: level4.width / 2 + 300,
      y: level4.height / 2 + 350,
    });
    level4.addChild(level4StarR);
    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level4.setScale(0.35, 0.35);
          } else {
            level4.setScale(0.3, 0.3);
          }
        },
      },
      level4
    );
    level4.addTouchEventListener(this.loadSceneEvent4);
    level4.setScale(0.3, 0.3);
    level4.attr({
      x: scrollView.width *0.55,
      y: scrollView.height / 2 
    });
    level4.setTitleText("4");
    level4.setTitleFontSize(400);
    level4.setTitleColor(0, 0, 0);
    level4.setTitleFontName("robotofont");
    scrollView.addChild(level4, 1);

  // ########################################## > Level 5 Btn <##################################################
    var level5 = new ccui.Button(res.playBtn);
    var level5StarM = new cc.Sprite(res.star);
    level5StarM.setScale(0.5, 0.5);
    level5StarM.attr({
      x: level5.width / 2,
      y: level5.height / 2 + 450,
    });
    level5.addChild(level5StarM);
    var level5StarL = new cc.Sprite(res.star);
    level5StarL.setScale(0.5, 0.5);
    level5StarL.attr({
      x: level5.width / 2 - 300,
      y: level5.height / 2 + 300,
    });
    level5.addChild(level5StarL);
    var level5StarR = new cc.Sprite(res.star);
    level5StarR.setScale(0.5, 0.5);
    level5StarR.attr({
      x: level5.width / 2 + 300,
      y: level5.height / 2 + 350,
    });
    level5.addChild(level5StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level5.setScale(0.35, 0.35);
          } else {
            level5.setScale(0.3, 0.3);
          }
        },
      },
      level5
    );
    level5.addTouchEventListener(this.loadSceneEvent5);
    level5.setScale(0.3, 0.3);
    level5.attr({
      x: scrollView.width * 0.7,
      y: scrollView.height / 2 
    });
    level5.setTitleText("5");
    level5.setTitleFontSize(400);
    level5.setTitleColor(0, 0, 0);
    level5.setTitleFontName("robotofont");
    scrollView.addChild(level5, 4);

  // ########################################## > Level 6 Btn <##################################################
    var level6 = new ccui.Button(res.playBtn);
    var level6StarM = new cc.Sprite(res.star);
    level6StarM.setScale(0.5, 0.5);
    level6StarM.attr({
      x: level6.width / 2,
      y: level6.height / 2 + 450,
    });
    level6.addChild(level6StarM);
    var level6StarL = new cc.Sprite(res.star);
    level6StarL.setScale(0.5, 0.5);
    level6StarL.attr({
      x: level6.width / 2 - 300,
      y: level6.height / 2 + 300,
    });
    level6.addChild(level6StarL);
    var level6StarR = new cc.Sprite(res.star);
    level6StarR.setScale(0.5, 0.5);
    level6StarR.attr({
      x: level6.width / 2 + 300,
      y: level6.height / 2 + 3506
    });
    level6.addChild(level6StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level6.setScale(0.35, 0.35);
          } else {
            level6.setScale(0.3, 0.3);
          }
        },
      },
      level6
    );
    level6.addTouchEventListener(this.loadSceneEvent6);
    level6.setScale(0.3, 0.3);
    level6.attr({
      x: scrollView.width * 0.85,
      y: scrollView.height / 2 
    });
    level6.setTitleText("6");
    level6.setTitleFontSize(400);
    level6.setTitleColor(0, 0, 0);
    level6.setTitleFontName("robotofont");
    scrollView.addChild(level6, 4);


  // ########################################## > Level 7 Btn <##################################################
    var level7 = new ccui.Button(res.playBtn);
    var level7StarM = new cc.Sprite(res.star);
    level7StarM.setScale(0.5, 0.5);
    level7StarM.attr({
      x: level7.width / 2,
      y: level7.height / 2 + 450,
    });
    level7.addChild(level7StarM);
    var level7StarL = new cc.Sprite(res.star);
    level7StarL.setScale(0.5, 0.5);
    level7StarL.attr({
      x: level7.width / 2 - 300,
      y: level7.height / 2 + 300,
    });
    level7.addChild(level7StarL);
    var level7StarR = new cc.Sprite(res.star);
    level7StarR.setScale(0.5, 0.5);
    level7StarR.attr({
      x: level7.width / 2 + 300,
      y: level7.height / 2 + 350,
    });
    level7.addChild(level7StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level7.setScale(0.35, 0.35);
          } else {
            level7.setScale(0.3, 0.3);
          }
        },
      },
      level7
    );
    level7.addTouchEventListener(this.loadSceneEvent7);
    level7.setScale(0.3, 0.3);
    level7.attr({
      x: scrollView.width * 1,
      y: scrollView.height / 2 
    });
    level7.setTitleText("7");
    level7.setTitleFontSize(400);
    level7.setTitleColor(0, 0, 0);
    level7.setTitleFontName("robotofont");
    scrollView.addChild(level7, 4);
    // ########################################## > Level 8 Btn <##################################################
    var level8 = new ccui.Button(res.playBtn);
    var level8StarM = new cc.Sprite(res.star);
    level8StarM.setScale(0.5, 0.5);
    level8StarM.attr({
      x: level8.width / 2,
      y: level8.height / 2 + 450,
    });
    level8.addChild(level8StarM);
    var level8StarL = new cc.Sprite(res.star);
    level8StarL.setScale(0.5, 0.5);
    level8StarL.attr({
      x: level8.width / 2 - 300,
      y: level8.height / 2 + 300,
    });
    level8.addChild(level8StarL);
    var level8StarR = new cc.Sprite(res.star);
    level8StarR.setScale(0.5, 0.5);
    level8StarR.attr({
      x: level8.width / 2 + 300,
      y: level8.height / 2 + 350,
    });
    level8.addChild(level8StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level8.setScale(0.35, 0.35);
          } else {
            level8.setScale(0.3, 0.3);
          }
        },
      },
      level8
    );
    level8.addTouchEventListener(this.loadSceneEvent8);
    level8.setScale(0.3, 0.3);
    level8.attr({
      x: scrollView.width * 1.15,
      y: scrollView.height / 2 
    });
    level8.setTitleText("8");
    level8.setTitleFontSize(400);
    level8.setTitleColor(0, 0, 0);
    level8.setTitleFontName("robotofont");
    scrollView.addChild(level8, 4);
    // ########################################## > Level 9 Btn <##################################################
    var level9 = new ccui.Button(res.playBtn);
    var level9StarM = new cc.Sprite(res.star);
    level9StarM.setScale(0.5, 0.5);
    level9StarM.attr({
      x: level9.width / 2,
      y: level9.height / 2 + 450,
    });
    level9.addChild(level9StarM);
    var level9StarL = new cc.Sprite(res.star);
    level9StarL.setScale(0.5, 0.5);
    level9StarL.attr({
      x: level9.width / 2 - 300,
      y: level9.height / 2 + 300,
    });
    level9.addChild(level9StarL);
    var level9StarR = new cc.Sprite(res.star);
    level9StarR.setScale(0.5, 0.5);
    level9StarR.attr({
      x: level9.width / 2 + 300,
      y: level9.height / 2 + 350,
    });
    level9.addChild(level9StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level9.setScale(0.35, 0.35);
          } else {
            level9.setScale(0.3, 0.3);
          }
        },
      },
      level9
    );
    level9.addTouchEventListener(this.loadSceneEvent9);
    level9.setScale(0.3, 0.3);
    level9.attr({
      x: scrollView.width * 1.3,
      y: scrollView.height / 2 
    });
    level9.setTitleText("9");
    level9.setTitleFontSize(400);
    level9.setTitleColor(0, 0, 0);
    level9.setTitleFontName("robotofont");
    scrollView.addChild(level9, 4);
    // ########################################## > Level 10 Btn <##################################################
    var level10 = new ccui.Button(res.playBtn);
    var level10StarM = new cc.Sprite(res.star);
    level10StarM.setScale(0.5, 0.5);
    level10StarM.attr({
      x: level10.width / 2,
      y: level10.height / 2 + 450,
    });
    level10.addChild(level10StarM);
    var level10StarL = new cc.Sprite(res.star);
    level10StarL.setScale(0.5, 0.5);
    level10StarL.attr({
      x: level10.width / 2 - 300,
      y: level10.height / 2 + 300,
    });
    level10.addChild(level10StarL);
    var level10StarR = new cc.Sprite(res.star);
    level10StarR.setScale(0.5, 0.5);
    level10StarR.attr({
      x: level10.width / 2 + 300,
      y: level10.height / 2 + 350,
    });
    level10.addChild(level10StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level10.setScale(0.35, 0.35);
          } else {
            level10.setScale(0.3, 0.3);
          }
        },
      },
      level10
    );
    level10.addTouchEventListener(this.loadSceneEvent10);
    level10.setScale(0.3, 0.3);
    level10.attr({
      x: scrollView.width * 1.45,
      y: scrollView.height / 2 
    });
    level10.setTitleText("10");
    level10.setTitleFontSize(400);
    level10.setTitleColor(0, 0, 0);
    level10.setTitleFontName("robotofont");
    scrollView.addChild(level10, 4);
    // ########################################## > Level 11 Btn <##################################################
    var level11 = new ccui.Button(res.playBtn);
    var level11StarM = new cc.Sprite(res.star);
    level11StarM.setScale(0.5, 0.5);
    level11StarM.attr({
      x: level11.width / 2,
      y: level11.height / 2 + 450,
    });
    level11.addChild(level11StarM);
    var level11StarL = new cc.Sprite(res.star);
    level11StarL.setScale(0.5, 0.5);
    level11StarL.attr({
      x: level11.width / 2 - 300,
      y: level11.height / 2 + 300,
    });
    level11.addChild(level11StarL);
    var level11StarR = new cc.Sprite(res.star);
    level11StarR.setScale(0.5, 0.5);
    level11StarR.attr({
      x: level11.width / 2 + 300,
      y: level11.height / 2 + 350,
    });
    level11.addChild(level11StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level11.setScale(0.35, 0.35);
          } else {
            level11.setScale(0.3, 0.3);
          }
        },
      },
      level11
    );
    level11.addTouchEventListener(this.loadSceneEvent11);
    level11.setScale(0.3, 0.3);
    level11.attr({
      x: scrollView.width * 1.6,
      y: scrollView.height / 2 
    });
    level11.setTitleText("11");
    level11.setTitleFontSize(400);
    level11.setTitleColor(0, 0, 0);
    level11.setTitleFontName("robotofont");
    scrollView.addChild(level11, 4);
    // ########################################## > Level 12 Btn <##################################################
    var level12 = new ccui.Button(res.playBtn);
    var level12StarM = new cc.Sprite(res.star);
    level12StarM.setScale(0.5, 0.5);
    level12StarM.attr({
      x: level12.width / 2,
      y: level12.height / 2 + 450,
    });
    level12.addChild(level12StarM);
    var level12StarL = new cc.Sprite(res.star);
    level12StarL.setScale(0.5, 0.5);
    level12StarL.attr({
      x: level12.width / 2 - 300,
      y: level12.height / 2 + 300,
    });
    level12.addChild(level12StarL);
    var level12StarR = new cc.Sprite(res.star);
    level12StarR.setScale(0.5, 0.5);
    level12StarR.attr({
      x: level12.width / 2 + 300,
      y: level12.height / 2 + 350,
    });
    level12.addChild(level12StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level12.setScale(0.35, 0.35);
          } else {
            level12.setScale(0.3, 0.3);
          }
        },
      },
      level12
    );
    level12.addTouchEventListener(this.loadSceneEvent12);
    level12.setScale(0.3, 0.3);
    level12.attr({
      x: scrollView.width * 1.75,
      y: scrollView.height / 2 
    });
    level12.setTitleText("12");
    level12.setTitleFontSize(400);
    level12.setTitleColor(0, 0, 0);
    level12.setTitleFontName("robotofont");
    scrollView.addChild(level12, 4);
    // ########################################## > Level 13 Btn <##################################################
    var level13 = new ccui.Button(res.playBtn);
    var level13StarM = new cc.Sprite(res.star);
    level13StarM.setScale(0.5, 0.5);
    level13StarM.attr({
      x: level13.width / 2,
      y: level13.height / 2 + 450,
    });
    level13.addChild(level13StarM);
    var level13StarL = new cc.Sprite(res.star);
    level13StarL.setScale(0.5, 0.5);
    level13StarL.attr({
      x: level13.width / 2 - 300,
      y: level13.height / 2 + 300,
    });
    level13.addChild(level13StarL);
    var level13StarR = new cc.Sprite(res.star);
    level13StarR.setScale(0.5, 0.5);
    level13StarR.attr({
      x: level13.width / 2 + 300,
      y: level13.height / 2 + 350,
    });
    level13.addChild(level13StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level13.setScale(0.35, 0.35);
          } else {
            level13.setScale(0.3, 0.3);
          }
        },
      },
      level13
    );
    level13.addTouchEventListener(this.loadSceneEvent13);
    level13.setScale(0.3, 0.3);
    level13.attr({
      x: scrollView.width * 1.9,
      y: scrollView.height / 2 
    });
    level13.setTitleText("13");
    level13.setTitleFontSize(400);
    level13.setTitleColor(0, 0, 0);
    level13.setTitleFontName("robotofont");
    scrollView.addChild(level13, 4);
    // ########################################## > Level 14 Btn <##################################################
    var level14 = new ccui.Button(res.playBtn);
    var level14StarM = new cc.Sprite(res.star);
    level14StarM.setScale(0.5, 0.5);
    level14StarM.attr({
      x: level14.width / 2,
      y: level14.height / 2 + 450,
    });
    level14.addChild(level14StarM);
    var level14StarL = new cc.Sprite(res.star);
    level14StarL.setScale(0.5, 0.5);
    level14StarL.attr({
      x: level14.width / 2 - 300,
      y: level14.height / 2 + 300,
    });
    level14.addChild(level14StarL);
    var level14StarR = new cc.Sprite(res.star);
    level14StarR.setScale(0.5, 0.5);
    level14StarR.attr({
      x: level14.width / 2 + 300,
      y: level14.height / 2 + 350,
    });
    level14.addChild(level14StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level14.setScale(0.35, 0.35);
          } else {
            level14.setScale(0.3, 0.3);
          }
        },
      },
      level14
    );
    level14.addTouchEventListener(this.loadSceneEvent14);
    level14.setScale(0.3, 0.3);
    level14.attr({
      x: scrollView.width * 2.05,
      y: scrollView.height / 2 
    });
    level14.setTitleText("14");
    level14.setTitleFontSize(400);
    level14.setTitleColor(0, 0, 0);
    level14.setTitleFontName("robotofont");
    scrollView.addChild(level14, 4);
    // ########################################## > Level 15 Btn <##################################################
    var level15 = new ccui.Button(res.playBtn);
    var level15StarM = new cc.Sprite(res.star);
    level15StarM.setScale(0.5, 0.5);
    level15StarM.attr({
      x: level15.width / 2,
      y: level15.height / 2 + 450,
    });
    level15.addChild(level15StarM);
    var level15StarL = new cc.Sprite(res.star);
    level15StarL.setScale(0.5, 0.5);
    level15StarL.attr({
      x: level15.width / 2 - 300,
      y: level15.height / 2 + 300,
    });
    level15.addChild(level15StarL);
    var level15StarR = new cc.Sprite(res.star);
    level15StarR.setScale(0.5, 0.5);
    level15StarR.attr({
      x: level15.width / 2 + 300,
      y: level15.height / 2 + 350,
    });
    level15.addChild(level15StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level15.setScale(0.35, 0.35);
          } else {
            level15.setScale(0.3, 0.3);
          }
        },
      },
      level15
    );
    level15.addTouchEventListener(this.loadSceneEvent15);
    level15.setScale(0.3, 0.3);
    level15.attr({
      x: scrollView.width * 2.20,
      y: scrollView.height / 2 
    });
    level15.setTitleText("15");
    level15.setTitleFontSize(400);
    level15.setTitleColor(0, 0, 0);
    level15.setTitleFontName("robotofont");
    scrollView.addChild(level15, 4);
    
    // ########################################## > Level 16 Btn <##################################################
    var level16 = new ccui.Button(res.playBtn);
    var level16StarM = new cc.Sprite(res.star);
    level16StarM.setScale(0.5, 0.5);
    level16StarM.attr({
      x: level16.width / 2,
      y: level16.height / 2 + 450,
    });
    level16.addChild(level16StarM);
    var level16StarL = new cc.Sprite(res.star);
    level16StarL.setScale(0.5, 0.5);
    level16StarL.attr({
      x: level16.width / 2 - 300,
      y: level16.height / 2 + 300,
    });
    level16.addChild(level16StarL);
    var level16StarR = new cc.Sprite(res.star);
    level16StarR.setScale(0.5, 0.5);
    level16StarR.attr({
      x: level16.width / 2 + 300,
      y: level16.height / 2 + 350,
    });
    level16.addChild(level16StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level16.setScale(0.35, 0.35);
          } else {
            level16.setScale(0.3, 0.3);
          }
        },
      },
      level16
    );
    level16.addTouchEventListener(this.loadSceneEvent16);
    level16.setScale(0.3, 0.3);
    level16.attr({
      x: scrollView.width * 2.35,
      y: scrollView.height / 2 
    });
    level16.setTitleText("16");
    level16.setTitleFontSize(400);
    level16.setTitleColor(0, 0, 0);
    level16.setTitleFontName("robotofont");
    scrollView.addChild(level16, 4);
    // ########################################## > Level 17 Btn <##################################################
    var level17 = new ccui.Button(res.playBtn);
    var level17StarM = new cc.Sprite(res.star);
    level17StarM.setScale(0.5, 0.5);
    level17StarM.attr({
      x: level17.width / 2,
      y: level17.height / 2 + 450,
    });
    level17.addChild(level17StarM);
    var level17StarL = new cc.Sprite(res.star);
    level17StarL.setScale(0.5, 0.5);
    level17StarL.attr({
      x: level17.width / 2 - 300,
      y: level17.height / 2 + 300,
    });
    level17.addChild(level17StarL);
    var level17StarR = new cc.Sprite(res.star);
    level17StarR.setScale(0.5, 0.5);
    level17StarR.attr({
      x: level17.width / 2 + 300,
      y: level17.height / 2 + 350,
    });
    level17.addChild(level17StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level17.setScale(0.35, 0.35);
          } else {
            level17.setScale(0.3, 0.3);
          }
        },
      },
      level17
    );
    level17.addTouchEventListener(this.loadSceneEvent17);
    level17.setScale(0.3, 0.3);
    level17.attr({
      x: scrollView.width * 2.50,
      y: scrollView.height / 2 
    });
    level17.setTitleText("17");
    level17.setTitleFontSize(400);
    level17.setTitleColor(0, 0, 0);
    level17.setTitleFontName("robotofont");
    scrollView.addChild(level17, 4);
    // ########################################## > Level 18 Btn <##################################################
    var level18 = new ccui.Button(res.playBtn);
    var level18StarM = new cc.Sprite(res.star);
    level18StarM.setScale(0.5, 0.5);
    level18StarM.attr({
      x: level18.width / 2,
      y: level18.height / 2 + 450,
    });
    level18.addChild(level18StarM);
    var level18StarL = new cc.Sprite(res.star);
    level18StarL.setScale(0.5, 0.5);
    level18StarL.attr({
      x: level18.width / 2 - 300,
      y: level18.height / 2 + 300,
    });
    level18.addChild(level18StarL);
    var level18StarR = new cc.Sprite(res.star);
    level18StarR.setScale(0.5, 0.5);
    level18StarR.attr({
      x: level18.width / 2 + 300,
      y: level18.height / 2 + 350,
    });
    level18.addChild(level18StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level18.setScale(0.35, 0.35);
          } else {
            level18.setScale(0.3, 0.3);
          }
        },
      },
      level18
    );
    level18.addTouchEventListener(this.loadSceneEvent18);
    level18.setScale(0.3, 0.3);
    level18.attr({
      x: scrollView.width * 2.65,
      y: scrollView.height / 2 
    });
    level18.setTitleText("18");
    level18.setTitleFontSize(400);
    level18.setTitleColor(0, 0, 0);
    level18.setTitleFontName("robotofont");
    scrollView.addChild(level18, 4);
    // ########################################## > Level 19 Btn <##################################################
    var level19 = new ccui.Button(res.playBtn);
    var level19StarM = new cc.Sprite(res.star);
    level19StarM.setScale(0.5, 0.5);
    level19StarM.attr({
      x: level19.width / 2,
      y: level19.height / 2 + 450,
    });
    level19.addChild(level19StarM);
    var level19StarL = new cc.Sprite(res.star);
    level19StarL.setScale(0.5, 0.5);
    level19StarL.attr({
      x: level19.width / 2 - 300,
      y: level19.height / 2 + 300,
    });
    level19.addChild(level19StarL);
    var level19StarR = new cc.Sprite(res.star);
    level19StarR.setScale(0.5, 0.5);
    level19StarR.attr({
      x: level19.width / 2 + 300,
      y: level19.height / 2 + 350,
    });
    level19.addChild(level19StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level19.setScale(0.35, 0.35);
          } else {
            level19.setScale(0.3, 0.3);
          }
        },
      },
      level19
    );
    level19.addTouchEventListener(this.loadSceneEvent19);
    level19.setScale(0.3, 0.3);
    level19.attr({
      x: scrollView.width * 2.80,
      y: scrollView.height / 2 
    });
    level19.setTitleText("19");
    level19.setTitleFontSize(400);
    level19.setTitleColor(0, 0, 0);
    level19.setTitleFontName("robotofont");
    scrollView.addChild(level19, 4);
      // ########################################## > Level 20 Btn <##################################################
    var level20 = new ccui.Button(res.playBtn);
    var level20StarM = new cc.Sprite(res.star);
    level20StarM.setScale(0.5, 0.5);
    level20StarM.attr({
      x: level20.width / 2,
      y: level20.height / 2 + 450,
    });
    level20.addChild(level20StarM);
    var level20StarL = new cc.Sprite(res.star);
    level20StarL.setScale(0.5, 0.5);
    level20StarL.attr({
      x: level20.width / 2 - 300,
      y: level20.height / 2 + 300,
    });
    level20.addChild(level20StarL);
    var level20StarR = new cc.Sprite(res.star);
    level20StarR.setScale(0.5, 0.5);
    level20StarR.attr({
      x: level20.width / 2 + 300,
      y: level20.height / 2 + 350,
    });
    level20.addChild(level20StarR);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.MOUSE,
        onMouseMove: function (event) {
          var target = event.getCurrentTarget();
          var locationInNode = target.convertToNodeSpace(event.getLocation());
          var s = target.getContentSize();
          var rect = cc.rect(0, 0, s.width, s.height);
          if (cc.rectContainsPoint(rect, locationInNode)) {
            level20.setScale(0.35, 0.35);
          } else {
            level20.setScale(0.3, 0.3);
          }
        },
      },
      level20
    );
    level20.addTouchEventListener(this.loadSceneEvent20);
    level20.setScale(0.3, 0.3);
    level20.attr({
      x: scrollView.width * 2.95,
      y: scrollView.height / 2 
    });
    level20.setTitleText("20");
    level20.setTitleFontSize(400);
    level20.setTitleColor(0, 0, 0);
    level20.setTitleFontName("robotofont");
    scrollView.addChild(level20, 4);
    // -------------------------> Active Manager <--------------------------
    level1.setEnabled(false);
    level2.setEnabled(false);
    level3.setEnabled(false);
    level4.setEnabled(false);
    level5.setEnabled(false);
    level6.setEnabled(false);
    level7.setEnabled(false);
    level8.setEnabled(false);
    level9.setEnabled(false);
    level10.setEnabled(false);
    level11.setEnabled(false);
    level12.setEnabled(false);
    level13.setEnabled(false);
    level14.setEnabled(false);
    level15.setEnabled(false);
    level16.setEnabled(false);
    level17.setEnabled(false);
    level18.setEnabled(false);
    level19.setEnabled(false);
    level20.setEnabled(false);

    var level1unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l1u")));
    var level2unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l2u")));
    var level3unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l3u")));
    var level4unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l4u")));
    var level5unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l5u")));
    var level6unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l6u")));
    var level7unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l7u")));
    var level8unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l8u")));
    var level9unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l9u")));
    var level10unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l10u")));
    var level11unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l11u")));
    var level12unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l12u")));
    var level13unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l13u")));
    var level14unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l14u")));
    var level15unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l15u")));
    var level16unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l16u")));
    var level17unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l17u")));
    var level18unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l18u")));
    var level19unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l19u")));
    var level20unlock = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l20u")));
 
    
    if (level1unlock == "true") {level1.setEnabled(true);}
    if (level2unlock == "true") {level2.setEnabled(true);}
    if (level3unlock == "true") {level3.setEnabled(true);}
    if (level4unlock == "true") {level4.setEnabled(true); }
    if (level5unlock == "true") {level5.setEnabled(true);}
    if (level6unlock == "true") {level6.setEnabled(true);}
    if (level7unlock == "true") {level7.setEnabled(true);}
    if (level8unlock == "true") {level8.setEnabled(true); }
    if (level9unlock == "true") {level9.setEnabled(true);}
    if (level10unlock == "true") {level10.setEnabled(true);}
    if (level11unlock == "true") {level11.setEnabled(true);}
    if (level12unlock == "true") {level12.setEnabled(true); }
    if (level13unlock == "true") {level13.setEnabled(true);}
    if (level14unlock == "true") {level14.setEnabled(true);}
    if (level15unlock == "true") {level15.setEnabled(true);}
    if (level16unlock == "true") {level16.setEnabled(true); }
    if (level17unlock == "true") {level17.setEnabled(true);}
    if (level18unlock == "true") {level18.setEnabled(true);}
    if (level19unlock == "true") {level19.setEnabled(true);}
    if (level20unlock == "true") {level20.setEnabled(true);}

    // ________________ Active Manager ________________
    // ---------------> Star Manager <----------------
    var level1Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l1s")));
    var level2Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l2s")));
    var level3Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l3s")));
    var level4Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l4s")));
    var level5Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l5s")));
    var level6Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l6s")));
    var level7Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l7s")));
    var level8Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l8s")));
    var level9Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l9s")));
    var level10Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l10s")));
    var level11Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l11s")));
    var level12Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l12s")));
    var level13Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l13s")));
    var level14Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l14s")));
    var level15Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l15s")));
    var level16Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l16s")));
    var level17Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l17s")));
    var level18Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l18s")));
    var level19Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l19s")));
    var level20Stars = JSON.parse(cc.sys.localStorage.getItem(JSON.stringify("l20s")));
   
    if (level1Stars == 3) {
      level1StarL.setOpacity(255);
      level1StarM.setOpacity(255);
      level1StarR.setOpacity(255);
    } else if (level1Stars == 2) {
      level1StarL.setOpacity(255);
      level1StarM.setOpacity(255);
      level1StarR.setOpacity(0);
    } else if (level1Stars == 1) {
      level1StarL.setOpacity(0);
      level1StarM.setOpacity(255);
      level1StarR.setOpacity(0);
    } else {
      level1StarL.setOpacity(0);
      level1StarM.setOpacity(0);
      level1StarR.setOpacity(0);
    }

    //==================================
    if (level2Stars == 3) {
      level2StarL.setOpacity(255);
      level2StarM.setOpacity(255);
      level2StarR.setOpacity(255);
    } else if (level2Stars == 2) {
      level2StarL.setOpacity(255);
      level2StarM.setOpacity(255);
      level2StarR.setOpacity(0);
    } else if (level2Stars == 1) {
      level2StarL.setOpacity(0);
      level2StarM.setOpacity(255);
      level2StarR.setOpacity(0);
    } else {
      level2StarL.setOpacity(0);
      level2StarM.setOpacity(0);
      level2StarR.setOpacity(0);
    }
    //==================================
    if (level3Stars == 3) {
      level3StarL.setOpacity(255);
      level3StarM.setOpacity(255);
      level3StarR.setOpacity(255);
    } else if (level3Stars == 2) {
      level3StarL.setOpacity(255);
      level3StarM.setOpacity(255);
      level3StarR.setOpacity(0);
    } else if (level3Stars == 1) {
      level3StarL.setOpacity(0);
      level3StarM.setOpacity(255);
      level3StarR.setOpacity(0);
    } else {
      level3StarL.setOpacity(0);
      level3StarM.setOpacity(0);
      level3StarR.setOpacity(0);
    }
    //==================================
    if (level4Stars == 3) {
      level4StarL.setOpacity(255);
      level4StarM.setOpacity(255);
      level4StarR.setOpacity(255);
    } else if (level4Stars == 2) {
      level4StarL.setOpacity(255);
      level4StarM.setOpacity(255);
      level4StarR.setOpacity(0);
    } else if (level4Stars == 1) {
      level4StarL.setOpacity(0);
      level4StarM.setOpacity(255);
      level4StarR.setOpacity(0);
    } else {
      level4StarL.setOpacity(0);
      level4StarM.setOpacity(0);
      level4StarR.setOpacity(0);
    }
//==================================
    if (level5Stars == 3) {
      level5StarL.setOpacity(255);
      level5StarM.setOpacity(255);
      level5StarR.setOpacity(255);
    } else if (level5Stars == 2) {
      level5StarL.setOpacity(255);
      level5StarM.setOpacity(255);
      level5StarR.setOpacity(0);
    } else if (level5Stars == 1) {
      level5StarL.setOpacity(0);
      level5StarM.setOpacity(255);
      level5StarR.setOpacity(0);
    } else {
      level5StarL.setOpacity(0);
      level5StarM.setOpacity(0);
      level5StarR.setOpacity(0);
    }
    //==================================
    if (level6Stars == 3) {
      level6StarL.setOpacity(255);
      level6StarM.setOpacity(255);
      level6StarR.setOpacity(255);
    } else if (level6Stars == 2) {
      level6StarL.setOpacity(255);
      level6StarM.setOpacity(255);
      level6StarR.setOpacity(0);
    } else if (level6Stars == 1) {
      level6StarL.setOpacity(0);
      level6StarM.setOpacity(255);
      level6StarR.setOpacity(0);
    } else {
      level6StarL.setOpacity(0);
      level6StarM.setOpacity(0);
      level6StarR.setOpacity(0);
    }
      //==================================
    if (level7Stars == 3) {
      level7StarL.setOpacity(255);
      level7StarM.setOpacity(255);
      level7StarR.setOpacity(255);
    } else if (level7Stars == 2) {
      level7StarL.setOpacity(255);
      level7StarM.setOpacity(255);
      level7StarR.setOpacity(0);
    } else if (level7Stars == 1) {
      level7StarL.setOpacity(0);
      level7StarM.setOpacity(255);
      level7StarR.setOpacity(0);
    } else {
      level7StarL.setOpacity(0);
      level7StarM.setOpacity(0);
      level7StarR.setOpacity(0);
    }
     //==================================
    if (level8Stars == 3) {
      level8StarL.setOpacity(255);
      level8StarM.setOpacity(255);
      level8StarR.setOpacity(255);
    } else if (level8Stars == 2) {
      level8StarL.setOpacity(255);
      level8StarM.setOpacity(255);
      level8StarR.setOpacity(0);
    } else if (level8Stars == 1) {
      level8StarL.setOpacity(0);
      level8StarM.setOpacity(255);
      level8StarR.setOpacity(0);
    } else {
      level8StarL.setOpacity(0);
      level8StarM.setOpacity(0);
      level8StarR.setOpacity(0);
    }
     //==================================
    if (level9Stars == 3) {
      level9StarL.setOpacity(255);
      level9StarM.setOpacity(255);
      level9StarR.setOpacity(255);
    } else if (level9Stars == 2) {
      level9StarL.setOpacity(255);
      level9StarM.setOpacity(255);
      level9StarR.setOpacity(0);
    } else if (level9Stars == 1) {
      level9StarL.setOpacity(0);
      level9StarM.setOpacity(255);
      level9StarR.setOpacity(0);
    } else {
      level9StarL.setOpacity(0);
      level9StarM.setOpacity(0);
      level9StarR.setOpacity(0);
    }
 //==================================
    if (level10Stars == 3) {
      level10StarL.setOpacity(255);
      level10StarM.setOpacity(255);
      level10StarR.setOpacity(255);
    } else if (level10Stars == 2) {
      level10StarL.setOpacity(255);
      level10StarM.setOpacity(255);
      level10StarR.setOpacity(0);
    } else if (level10Stars == 1) {
      level10StarL.setOpacity(0);
      level10StarM.setOpacity(255);
      level10StarR.setOpacity(0);
    } else {
      level10StarL.setOpacity(0);
      level10StarM.setOpacity(0);
      level10StarR.setOpacity(0);
    }
     //==================================
    if (level11Stars == 3) {
      level11StarL.setOpacity(255);
      level11StarM.setOpacity(255);
      level11StarR.setOpacity(255);
    } else if (level11Stars == 2) {
      level11StarL.setOpacity(255);
      level11StarM.setOpacity(255);
      level11StarR.setOpacity(0);
    } else if (level11Stars == 1) {
      level11StarL.setOpacity(0);
      level11StarM.setOpacity(255);
      level11StarR.setOpacity(0);
    } else {
      level11StarL.setOpacity(0);
      level11StarM.setOpacity(0);
      level11StarR.setOpacity(0);
    }
     //==================================
    if (level12Stars == 3) {
      level12StarL.setOpacity(255);
      level12StarM.setOpacity(255);
      level12StarR.setOpacity(255);
    } else if (level12Stars == 2) {
      level12StarL.setOpacity(255);
      level12StarM.setOpacity(255);
      level12StarR.setOpacity(0);
    } else if (level12Stars == 1) {
      level12StarL.setOpacity(0);
      level12StarM.setOpacity(255);
      level12StarR.setOpacity(0);
    } else {
      level12StarL.setOpacity(0);
      level12StarM.setOpacity(0);
      level12StarR.setOpacity(0);
    }
     //==================================
    if (level13Stars == 3) {
      level13StarL.setOpacity(255);
      level13StarM.setOpacity(255);
      level13StarR.setOpacity(255);
    } else if (level13Stars == 2) {
      level13StarL.setOpacity(255);
      level13StarM.setOpacity(255);
      level13StarR.setOpacity(0);
    } else if (level13Stars == 1) {
      level13StarL.setOpacity(0);
      level13StarM.setOpacity(255);
      level13StarR.setOpacity(0);
    } else {
      level13StarL.setOpacity(0);
      level13StarM.setOpacity(0);
      level13StarR.setOpacity(0);
    }
     //==================================
    if (level14Stars == 3) {
      level14StarL.setOpacity(255);
      level14StarM.setOpacity(255);
      level14StarR.setOpacity(255);
    } else if (level14Stars == 2) {
      level14StarL.setOpacity(255);
      level14StarM.setOpacity(255);
      level14StarR.setOpacity(0);
    } else if (level14Stars == 1) {
      level14StarL.setOpacity(0);
      level14StarM.setOpacity(255);
      level14StarR.setOpacity(0);
    } else {
      level14StarL.setOpacity(0);
      level14StarM.setOpacity(0);
      level14StarR.setOpacity(0);
    }
     //==================================
    if (level15Stars == 3) {
      level15StarL.setOpacity(255);
      level15StarM.setOpacity(255);
      level15StarR.setOpacity(255);
    } else if (level15Stars == 2) {
      level15StarL.setOpacity(255);
      level15StarM.setOpacity(255);
      level15StarR.setOpacity(0);
    } else if (level15Stars == 1) {
      level15StarL.setOpacity(0);
      level15StarM.setOpacity(255);
      level15StarR.setOpacity(0);
    } else {
      level15StarL.setOpacity(0);
      level15StarM.setOpacity(0);
      level15StarR.setOpacity(0);
    }
    //==================================
    if (level16Stars == 3) {
      level16StarL.setOpacity(255);
      level16StarM.setOpacity(255);
      level16StarR.setOpacity(255);
    } else if (level16Stars == 2) {
      level16StarL.setOpacity(255);
      level16StarM.setOpacity(255);
      level16StarR.setOpacity(0);
    } else if (level16Stars == 1) {
      level16StarL.setOpacity(0);
      level16StarM.setOpacity(255);
      level16StarR.setOpacity(0);
    } else {
      level16StarL.setOpacity(0);
      level16StarM.setOpacity(0);
      level16StarR.setOpacity(0);
    }
    //==================================
    if (level17Stars == 3) {
      level17StarL.setOpacity(255);
      level17StarM.setOpacity(255);
      level17StarR.setOpacity(255);
    } else if (level17Stars == 2) {
      level17StarL.setOpacity(255);
      level17StarM.setOpacity(255);
      level17StarR.setOpacity(0);
    } else if (level17Stars == 1) {
      level17StarL.setOpacity(0);
      level17StarM.setOpacity(255);
      level17StarR.setOpacity(0);
    } else {
      level17StarL.setOpacity(0);
      level17StarM.setOpacity(0);
      level17StarR.setOpacity(0);
    }
    //==================================
    if (level18Stars == 3) {
      level18StarL.setOpacity(255);
      level18StarM.setOpacity(255);
      level18StarR.setOpacity(255);
    } else if (level18Stars == 2) {
      level18StarL.setOpacity(255);
      level18StarM.setOpacity(255);
      level18StarR.setOpacity(0);
    } else if (level18Stars == 1) {
      level18StarL.setOpacity(0);
      level18StarM.setOpacity(255);
      level18StarR.setOpacity(0);
    } else {
      level18StarL.setOpacity(0);
      level18StarM.setOpacity(0);
      level18StarR.setOpacity(0);
    }
    //==================================
    if (level19Stars == 3) {
      level19StarL.setOpacity(255);
      level19StarM.setOpacity(255);
      level19StarR.setOpacity(255);
    } else if (level19Stars == 2) {
      level19StarL.setOpacity(255);
      level19StarM.setOpacity(255);
      level19StarR.setOpacity(0);
    } else if (level19Stars == 1) {
      level19StarL.setOpacity(0);
      level19StarM.setOpacity(255);
      level19StarR.setOpacity(0);
    } else {
      level19StarL.setOpacity(0);
      level19StarM.setOpacity(0);
      level19StarR.setOpacity(0);
    }
    //==================================
    if (level20Stars == 3) {
      level20StarL.setOpacity(255);
      level20StarM.setOpacity(255);
      level20StarR.setOpacity(255);
    } else if (level20Stars == 2) {
      level20StarL.setOpacity(255);
      level20StarM.setOpacity(255);
      level20StarR.setOpacity(0);
    } else if (level20Stars == 1) {
      level20StarL.setOpacity(0);
      level20StarM.setOpacity(255);
      level20StarR.setOpacity(0);
    } else {
      level20StarL.setOpacity(0);
      level20StarM.setOpacity(0);
      level20StarR.setOpacity(0);
    }

    // ___________________ Star Manager Finished _________________________

    this.backSceneEffectF();
    this.schedule(this.backSceneEffectF, 3);
    this.effectFunction();
    return true;
  },
  effectFunction: function () {
    this.backMoveEffect = cc.moveBy(3, this.frontValue, 1);
    image.runAction(this.backMoveEffect);
  },
  backSceneEffectF: function (dt) {
    if (this.frontMove) {
      this.frontValue = -100;
      this.frontMove = false;
      this.effectFunction();
    } else {
      this.frontMove = true;
      this.frontValue = 100;
      this.effectFunction();
    }
  },
  loadSceneEvent1: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level1";

        rows = 3;
        columns = 2;
        timeRemain = 30;
   
       
             cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent2: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level2";
        rows = 4;
        columns = 2;
        timeRemain = 60;
       
        
         cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent3: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level3";
        rows = 4;
        columns = 4;
        timeRemain = 120;
        
        
        cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent4: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level4";
        rows = 5;
        columns = 4;
        timeRemain = 180;
        
       
        cc.director.runScene(new level1Scene());

        break;
    }
    
  },
  // ----------------------> Break
   loadSceneEvent5: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level5";
        
        rows = 3;
        columns = 2;
        timeRemain = 30;
        
       
        cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent6: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level6";
        rows = 4;
        columns = 3;
        timeRemain = 60;
       
       
         cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent7: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level7";
       rows = 4;
        columns = 4;
        timeRemain = 120;
        
    
        cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent8: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level8";
        rows = 5;
        columns = 4;
        timeRemain = 180;
     

           cc.director.runScene(new level1Scene());
        break;
    }
    
  },
   // ----------------------> Break
   loadSceneEvent9: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level9";
        rows = 3;
        columns = 2;
        timeRemain = 30;
       

         cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent10: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level10";
      rows = 4;
        columns = 4;
        timeRemain = 60;
     

           cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent11: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level11";
        rows = 5;
        columns = 4;
        timeRemain = 120;
        

        cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent12: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level12";
        rows = 5;
        columns = 4;
        timeRemain = 180;
        

        cc.director.runScene(new level1Scene());
        break;
    }
    
  },
   // ----------------------> Break
   loadSceneEvent13: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level13";
        rows = 3;
        columns = 2;
        timeRemain = 30;
        

        cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent14: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level14";
        rows = 4;
        columns = 3;
        timeRemain = 60;
        
cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent15: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level15";
       rows = 4;
        columns = 4;
        timeRemain = 120;
        
cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent16: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level16";
        rows = 5;
        columns = 4;
        timeRemain = 180;

        cc.director.runScene(new level1Scene());
        break;
    }
    
  },
   // ----------------------> Break
   loadSceneEvent17: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level17";
       rows = 3;
        columns = 2;
        timeRemain = 30;
        cc.director.runScene(new level1Scene());
        break;
    }
  },
  loadSceneEvent18: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level18";
        rows = 4;
        columns = 3;
        timeRemain = 60;
         cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent19: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level19";
        rows = 4;
        columns = 4;
        timeRemain = 120;
        cc.director.runScene(new level1Scene());

        break;
    }
  },
  loadSceneEvent20: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        finalScore = 0;
        gamePlaying = "level20";
        rows = 5;
        columns = 4;
        timeRemain = 180;
         cc.director.runScene(new level1Scene());
        break;
    }
    
  },
});


// ----------------------------------------------> Level 1
var level1LayerScene = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    this._super();
    var size = cc.winSize;
    whenFinalScreenDisplay = (rows * columns) / 2;
    // ---------------->Experimetn Section ----------------------

    // ---------------->Experimetn Section ----------------------
    var backImage = new cc.Sprite(res.gback);
    backImage.setScale(2, 1);
    backImage.attr({
      x: size.width / 2,
      y: size.height / 2,
    });
    this.addChild(backImage, 1);
    var size = cc.winSize;
    ScreenBackImage = new cc.Sprite(res.gback);
    ScreenBackImage.setOpacity(0);
    ScreenBackImage.setScale(2, 1);
    ScreenBackImage.attr({
      x: size.width / 2,
      y: size.height / 2,
    });
    this.addChild(ScreenBackImage, 11);
    var lableText = new cc.LabelTTF("Card Game", "robotofont", 85);
    lableText.attr({
      x: size.width / 2 - 400,
      y: size.height / 1.06,
    });
    this.addChild(lableText, 2);
    scoreLable = new cc.LabelTTF("", "robotofont", 85);
    scoreLable.setString("Score : " + finalScore);
    scoreLable.attr({
      x: size.width / 2 + 600,
      y: size.height / 1.06,
    });
    this.addChild(scoreLable, 2);
    finalScreenText = new cc.LabelTTF("You Win", "robotofont", 200);
    finalScreenText.setOpacity(0);
    finalScreenText.attr({
      x: size.width / 2,
      y: size.height / 2 + 300,
    });
    this.addChild(finalScreenText, 20);
    finalScreenScore = new cc.LabelTTF("Score : 0", "robotofont", 200);
    finalScreenScore.setOpacity(0);
    finalScreenScore.attr({
      x: size.width / 2,
      y: size.height / 2 - 100,
    });
    this.addChild(finalScreenScore, 20);

    replayBtn = new ccui.Button(res.btnbg);
    replayBtn.setEnabled(false);
    replayBtn.setOpacity(0);
    replayBtn.setTitleText("Level");
    replayBtn.setTitleFontSize(300);
    replayBtn.setTitleFontName("robotofont");
    replayBtn.setScale(0.2, 0.2);
    replayBtn.setTitleColor(cc.color(0, 0, 0));
    replayBtn.addTouchEventListener(this.replayEvent);
    replayBtn.attr({
      x: size.width / 2 + 500,
      y: size.height / 2 - 300,
    });
    this.addChild(replayBtn, 12);
    // ---------------------> Time Manager <---------------
    if (timeRemain > 60) {
      while (timeRemain > 60) {
        timeRemain = timeRemain - 60;
        mins++;
        secs = timeRemain;
      }
    } else {
      secs = timeRemain;
    }

    timeLable = new cc.LabelTTF("0:0", "robotofont", 55);
    timeLable.setAnchorPoint(0, 0.5);
    timeLable.attr({
      x: 20,
      y: size.height / 1.06,
    });
    this.addChild(timeLable, 2);
    this.schedule(this.timeRemainFunc, 1);

    // --------------------> Main Function <---------------
    var totalNumebr = (rows * columns) / 2;
    var nums = [];
    var ranNums = [];
    var k = 0;
    var repeatNum = totalNumebr;
    for (ranLimit = 0; ranLimit < totalNumebr; ranLimit++) {
      nums[ranLimit] = ranLimit;
    }
    for (ranLimit = 0; ranLimit < totalNumebr; ranLimit++) {
      nums[repeatNum] = ranLimit;
      repeatNum++;
    }
    var ranNums = [];
    (ranNums = []), (i = nums.length), (j = 0);

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    var posX = 0.9;
    var posY = 0.8;
    for (var i = 1; i <= columns; i++) {
      for (var j = 1; j <= rows; j++) {
        switch (ranNums[k]) {
          case 0:
            test = res.png1;
            break;
          case 1:
            test = res.png2;
            break;
          case 2:
            test = res.png3;
            break;
          case 3:
            test = res.png4;
            break;
          case 4:
            test = res.png5;
            break;
          case 5:
            test = res.png6;
            break;
          case 6:
            test = res.png7;
            break;
          case 7:
            test = res.png8;
            break;
          case 8:
            test = res.png9;
            break;
          case 9:
            test = res.png10;
            break;
          case 10:
            test = res.png11;
            break;
          case 11:
            test = res.png12;
            break;
          case 12:
            test = res.png13;
            break;
        }

        var image1 = new ccui.Button(res.sback);
        image1.setTitleColor(cc.color(0, 0, 0));
        image1.setTitleFontSize(600);
        image1.setTag("c" + i + "r" + j);
        image1.addTouchEventListener(this.image1Event);
        image1.setScale(scaleX, scaleY);
        image1.attr({
          x: size.width * posX,
          y: size.height * posY,
        });
        this.addChild(image1, 5);

        var supImage = new cc.Sprite(test);
        supImage.setTag("c" + i + "r" + j + "suImg");
        supImage.setScale(1, 0.7);
        supImage.setOpacity(0);
        supImage.attr({
          x: supImage.width / 2,
          y: supImage.height / 2,
        });
        image1.addChild(supImage, 7);
        var image1Text = new cc.LabelTTF(ranNums[k], "robotofont", 600);
        image1Text.setTag("c" + i + "r" + j + "img");
        image1Text.setColor(cc.color(0, 0, 0));
        image1Text.setOpacity(0);
        image1Text.attr({
          x: image1.width / 2,
          y: image1.height / 2,
        });
        image1.addChild(image1Text, 7);
        posX -= 1 / rows;
        k++;
      }
      posY -= 1 / columns;
      posX = 0.9;
    }

    return true;
  },
  image1Event: function (sender, type) {
    var insideSelf = sender.getParent();

    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        if (isFlipping) {
          var timeChange = 0.4;
          if (lastbox) {
            isFlipping = false;
            lastbox = false;
            sender.setEnabled(false);
            var currentCardText = sender.getChildByTag(sender.getTag() + "img");
            var currentCardImage = sender.getChildByTag(
              sender.getTag() + "suImg"
            );
            lastCard = sender;
            lastImage = sender.getChildByTag(sender.getTag() + "suImg");
            lastText = sender.getChildByTag(sender.getTag() + "img");
            sender.runAction(
              cc.sequence(
                cc.scaleTo(timeChange, 0, scaleY),
                cc.callFunc(function () {
                  currentCardImage.setOpacity(255);
                  isFlipping = true;
                }),
                cc.scaleTo(timeChange, scaleX, scaleY)
              )
            );
          } else {
            isFlipping = false;
            var currentCardText = sender.getChildByTag(sender.getTag() + "img");
            var currentCardImage = sender.getChildByTag(
              sender.getTag() + "suImg"
            );
            sender.runAction(
              cc.sequence(
                cc.scaleTo(timeChange, 0, scaleY),
                cc.callFunc(function () {
                  currentCardImage.setOpacity(255);
                }),
                cc.scaleTo(timeChange, scaleX, scaleY)
              )
            );
            if (
              currentCardText.getString() == lastText.getString() ||
              youLost
            ) {
              lastCard.setEnabled(false);
              sender.setEnabled(false);
              finalScore++;
              scoreLable.setString("Score : " + finalScore);

              if (finalScore == whenFinalScreenDisplay) {
                setTimeout(function () {
                  //-->Star Manager

                  var starObtain = (finalScore / whenFinalScreenDisplay) * 100;
               
                  //> Level 1 Star Manager
                  if (gamePlaying == "level1") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("1")
                      );
                     
                    } else {
              
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 2 Star Manager
                  if (gamePlaying == "level2") {
                    if (starObtain < 101 && starObtain > 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 79 && starObtain > 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 49 && starObtain > 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("1")
                      );
                    }
                    if (starObtain < 29) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 3 Star Manager
                  if (gamePlaying == "level3") {
                    if (starObtain < 101 && starObtain > 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 79 && starObtain > 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("2")
                      );
                    }
                    if (starObtain < 49 && starObtain > 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("1")
                      );
                    }
                    if (starObtain < 29) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 4 Star Manager
                  if (gamePlaying == "level4") {
                    if (starObtain < 101 && starObtain > 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 79 && starObtain > 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("2")
                      );
                    }
                    if (starObtain < 49 && starObtain > 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("1")
                      );
                    }
                    if (starObtain < 29) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 5 Star Manager
                  
                  if (gamePlaying == "level5") {
                    
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 6 Star Manager
                  if (gamePlaying == "level6") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 7 Star Manager
                  if (gamePlaying == "level7") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 8 Star Manager
                  if (gamePlaying == "level8") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 9 Star Manager
                  if (gamePlaying == "level9") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("1")
                      );
                     
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 10 Star Manager
                  if (gamePlaying == "level10") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 11 Star Manager
                  if (gamePlaying == "level11") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("1")
                      );
                     
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 12 Star Manager
                  if (gamePlaying == "level12") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 13 Star Manager
                  if (gamePlaying == "level13") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 14 Star Manager
                  if (gamePlaying == "level14") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 15 Star Manager
                  if (gamePlaying == "level15") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 16 Star Manager
                  if (gamePlaying == "level16") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 17 Star Manager
                  if (gamePlaying == "level17") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 18 Star Manager
                  if (gamePlaying == "level18") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 19 Star Manager
                  if (gamePlaying == "level19") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("0") 
                      );
                    }
                  }
                  //> Level 20 Star Manager
                  if (gamePlaying == "level20") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //-->Star Manager
                  ScreenBackImage.setOpacity(230);
                  finalScreenScore.setOpacity(255);
                  finalScreenText.setOpacity(255);
                  finalScreenScore.setString(
                    "Score : " + finalScore + "/" + whenFinalScreenDisplay
                  );
                  replayBtn.setOpacity(255);
                  replayBtn.setEnabled(true);
                  insideSelf.unschedule(insideSelf.timeRemainFunc);
                }, 1000);
              }
              isFlipping = true;
            } else {
              setTimeout(function () {
                sender.runAction(
                  cc.sequence(
                    cc.scaleTo(timeChange, 0, scaleY),
                    cc.callFunc(function () {
                      currentCardImage.setOpacity(0);
                    }),
                    cc.scaleTo(timeChange, scaleX, scaleY)
                  )
                );
                lastCard.setEnabled(true);
                lastCard.runAction(
                  cc.sequence(
                    cc.scaleTo(timeChange, 0, scaleY),
                    cc.callFunc(function () {
                      lastImage.setOpacity(0);
                    }),
                    cc.scaleTo(timeChange, scaleX, scaleY),
                    cc.callFunc(function () {
                      isFlipping = true;
                    })
                  )
                );
              }, 1000);
            }

            lastbox = true;
          }
        }

        break;
    }
  },
  timeRemainFunc: function (dt) {
    if (mins == 0 && secs == 1) {
      secs = 0;
      ScreenBackImage.setOpacity(200);
      finalScreenScore.setOpacity(255);
      finalScreenText.setOpacity(255);
      finalScreenText.setString("Time's Up");
      finalScreenScore.setString(
        "Score : " + finalScore + "/" + whenFinalScreenDisplay
      );

      this.unschedule(this.timeRemainFunc);
      replayBtn.setEnabled(true);
      replayBtn.setOpacity(255);
      // >>>> Level Star manager <<<<
      var starObtain = (finalScore / whenFinalScreenDisplay) * 100;
      //> Level 1 Star Manager
                  if (gamePlaying == "level1") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("1")
                      );
                     
                    } else {
              
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l1s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 2 Star Manager
                  if (gamePlaying == "level2") {
                    if (starObtain < 101 && starObtain > 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 79 && starObtain > 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 49 && starObtain > 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("1")
                      );
                    }
                    if (starObtain < 29) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l2s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 3 Star Manager
                  if (gamePlaying == "level3") {
                    if (starObtain < 101 && starObtain > 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4u"),
                        JSON.stringify("true")
                      );
                    }
                    if (starObtain < 79 && starObtain > 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("2")
                      );
                    }
                    if (starObtain < 49 && starObtain > 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("1")
                      );
                    }
                    if (starObtain < 29) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l3s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 4 Star Manager
                  if (gamePlaying == "level4") {
                    if (starObtain < 101 && starObtain > 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("3")
                      );
                    }
                    if (starObtain < 79 && starObtain > 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("2")
                      );
                    }
                    if (starObtain < 49 && starObtain > 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("1")
                      );
                    }
                    if (starObtain < 29) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l4s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 5 Star Manager
                  if (gamePlaying == "level5") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l5s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 6 Star Manager
                  if (gamePlaying == "level6") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l6s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 7 Star Manager
                  if (gamePlaying == "level7") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l7s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 8 Star Manager
                  if (gamePlaying == "level8") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l8s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 9 Star Manager
                  if (gamePlaying == "level9") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("1")
                      );
                     
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 10 Star Manager
                  if (gamePlaying == "level10") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11u"),
                        JSON.stringify("true")
                      );
                     
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("1")
                      );
                      
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l10s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 11 Star Manager
                  if (gamePlaying == "level11") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("1")
                      );
                     
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l11s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 12 Star Manager
                  if (gamePlaying == "level12") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l12s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 13 Star Manager
                  if (gamePlaying == "level13") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l13s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 14 Star Manager
                  if (gamePlaying == "level14") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l14s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 15 Star Manager
                  if (gamePlaying == "level15") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l15s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 16 Star Manager
                  if (gamePlaying == "level16") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l16s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 17 Star Manager
                  if (gamePlaying == "level17") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l17s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 18 Star Manager
                  if (gamePlaying == "level18") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l9u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l18s"),
                        JSON.stringify("0")
                      );
                    }
                  }
                  //> Level 19 Star Manager
                  if (gamePlaying == "level19") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l19s"),
                        JSON.stringify("0") 
                      );
                    }
                  }
                  //> Level 20 Star Manager
                  if (gamePlaying == "level20") {
                    if (starObtain <= 101 && starObtain >= 80) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("3")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 79 && starObtain >= 50) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("2")
                      );
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20u"),
                        JSON.stringify("true")
                      );
                      
                    } else if (starObtain <= 49 && starObtain >= 30) {
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("1")
                      );
                   
                    } else {
                      
                      cc.sys.localStorage.setItem(
                        JSON.stringify("l20s"),
                        JSON.stringify("0")
                      );
                    }
                  }
      //-->Star Manager
    } else {
      secs--;
      if (secs == 0) {
        mins--;
        secs = 59;
      }
    }
    timeLable.setString(mins + ":" + secs);
  },
  replayEvent: function (sender, type) {
    switch (type) {
      case ccui.Widget.TOUCH_BEGAN:
        cc.director.runScene(new levelSelectionLayerScene());
        break;
    }
  },
});

var level1Scene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var level1Layer = new level1LayerScene();
    this.addChild(level1Layer);
  },
});
var mainMenuScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var mainMenuLayer = new mainMenuLayerScene();
    this.addChild(mainMenuLayer);
  },
});

var levelSelectionScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var levelSelectionLayer = new levelSelectionLayerScene();
    this.addChild(levelSelectionLayer);
  },
});
