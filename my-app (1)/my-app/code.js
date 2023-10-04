var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dd6641b7-ac30-438a-92ce-ae4a8a014d72","84dadd3c-55ae-4301-b98b-3c320f965652","8d19c8a1-9c38-47a0-b99d-75c82809f79a"],"propsByKey":{"dd6641b7-ac30-438a-92ce-ae4a8a014d72":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"84dadd3c-55ae-4301-b98b-3c320f965652":{"name":"astronaut_1","sourceUrl":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png","frameSize":{"x":328,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png"},"8d19c8a1-9c38-47a0-b99d-75c82809f79a":{"name":"alien_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4/category_fantasy/alien_12.png","frameSize":{"x":331,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4/category_fantasy/alien_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = true;
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

var background1 = createSprite(200, 200);
var alien = createSprite(47, 150);
var astronaut = createSprite(322, 190);
background1.setAnimation("space_1");
alien.setAnimation("alien_12_1");
astronaut.setAnimation("astronaut_1");
alien.rotation = 340;
astronaut.rotation = 45;
alien.scale = 0.3;
astronaut.scale = 0.3;
drawSprites();
fill("yellow");
text("Hey did you hear about the claustrophobic astronaut", 46, 89);
fill("white");
text("No what about him", 247, 125);
fill("yellow");
text("He just needed a little space", 110, 140);
fill("red");
ellipse(200, 200, 10, 10);
fill("yellow");
ellipse(300, 300, 10, 10);
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
