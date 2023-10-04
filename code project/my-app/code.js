var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var antennaHeight = 0 ;
var mouthHeight =244 ;
var eyeballHeight = 132;
var eyeHeight = 140;
background("red");
noStroke();
fill("yellow");
rect(randomNumber(142, 235), antennaHeight, 20, 66);
fill("blue");
regularPolygon(200, 200, 8, 150);
fill("white");
ellipse(172, eyeHeight, 50, 50);
ellipse(209, eyeHeight, 60, 60);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 255));
rect(randomNumber(110,120 ), mouthHeight, 150, 50);
fill("black");
rect(155, eyeballHeight, 80, 20);
arc(62, 256, 10, 80, 90, 0);
arc(62, 206, 10, 80, 90, 0);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255) , 5));
rect(159, 135, 13, 13);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255) , 5));
rect(185, 135, 13, 13);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255) , 5));
rect(211, 135, 13, 13);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255) , 5));
rect(172, 135, 13, 13);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 5));
rect(198, 135, 13, 13);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255) , 5));
rect(224, 135, 10, 13);
stroke("black");
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(111, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(126, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(141, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(156, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(171, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(186, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(201, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(216, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(231, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(246, 243, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(111, 267, 15, 26);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(246, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(126, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(141, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(156, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(171, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(186, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(201, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(216, 267, 15, 25);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), 10));
rect(231, 267, 15, 25);
noStroke();
regularPolygon(290, 244, 3, 20);
rect(272, 253, 35, 35);
regularPolygon(290, 183, 3, 20);
rect(272, 192, 35, 35);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
