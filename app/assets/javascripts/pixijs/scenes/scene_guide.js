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

        //   particle example
        this.particle_container = new PIXI.Container();
        this.addChild(this.particle_container);
        this.emitter = new cloudkid.Emitter(
            this.particle_container,
            [PIXI.Texture.fromImage('/assets/pixijs/Bubbles99px.png')],
            PARTICLE_CONFIG1
        );
        this.elapsed = Date.now();
        this.emitter.emit = true;
        //   particle example

        //  tween lite example
        this.title = new Sprite(resources["/assets/pixijs/logo.png"].texture);
        this.addChild(this.title);
        TweenLite.set(this.title, { pixi: {
            alpha: 0.85
        }});
        TweenLite.to(this.title, 3, {x: __getCenterX(this.title) , ease:Bounce.easeIn, alpha:1});
        //  tween lite example

        //  over lay html component example
        $.ajax({
            type: 'GET',
            url: '/assets/pixijs/html/card1.html',
            dataType: 'html',
            success: function(data) {
                $('#overlay1').append(data);
                $('#dialog1').css({left: '100px', top:'500px'});
                $('#dialog1').animate({left: '100px', top:'100px'}, "slow");
            }
        });
        //  over lay html component example

        // var data = resources['/assets/pixijs/html/simple.html'];
        // console.log(data);
        // $('#overlay1').append(data);

    };


    //  override this method to handle update event
    SceneGuide.prototype.update = function (e) {
        _super.prototype.update();

        // for particle
        var now = Date.now();
        if (this.emitter != null) {
            this.emitter.update((now - this.elapsed) * 0.001);
            this.elapsed = now;
            this.render();
        }
    };
    return SceneGuide;
})(SceneBase);
