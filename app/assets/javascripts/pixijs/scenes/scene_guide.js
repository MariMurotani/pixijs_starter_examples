var view, emitter;
var elapsed = Date.now();

var SceneGuide = (function (_super) {
    __extends(SceneGuide, _super);
    function SceneGuide() {
        _super.apply(this, arguments);
    }
    //  this is called just before scene changes
    SceneGuide.prototype.destroy = function () {
      _super.prototype.destroy();

      // invisible html element
      element = document.getElementById("explain");
      element.style.visibility = "collapse";
    };

    //  this function is called as call back of resource load
    //  use this method as start point of this scene
    SceneGuide.prototype.start = function () {
      _super.prototype.start();

      // title image
      this.title = new Sprite(resources["/assets/pixijs/logo.png"].texture);
      this.title = __setCenterX(this.title);
      this.addChild(this.title);
       this.emitter = new cloudkid.Emitter(
           myCanvasDrawer.currentStage,
        [PIXI.Texture.fromImage('/assets/pixijs/Bubbles99px.png')],
         PARTICLE_CONFIG1
       );

        //   for particle
        // Calculate the current time
        this.elapsed = Date.now();
        // Start emitting
        this.emitter.emit = true;


    };



    //  override this method to handle update event
    SceneGuide.prototype.update = function (e) {
      _super.prototype.update();

        // for particle
        var now = Date.now();
        if(this.emitter != null) {
            this.emitter.update((now - this.elapsed) * 0.001);
            this.elapsed = now;
            myCanvasDrawer.render();
        }
    };
    return SceneGuide;
})(SceneBase);
