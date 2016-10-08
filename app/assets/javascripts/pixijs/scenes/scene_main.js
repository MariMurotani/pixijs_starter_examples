var SceneMain = (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        _super.apply(this, arguments);
        this.dataLoad(function (data) {
            //console.log("succsss to load data");
        }, function (err) {
            alert("error");
        });
    }

    //  this is called just before scene changes
    SceneMain.prototype.destroy = function () {
        _super.prototype.destroy();

        this.dataSave(function (data) {
            //console.log("succsss to save data");
        }, function (err) {
            alert("error");
        }, {"user": "aaaa", "data": {"key": "value"}});
    };

    //  this function is called as call back of resource load
    //  use this method as start point of this scene
    SceneMain.prototype.start = function () {
        _super.prototype.start();
        // title image
        var title = new Sprite(resources["/assets/pixijs/title.png"].texture);
        title = __setCenterX(title);
        var rect = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
        title.hitArea = rect;
        title.interactive = true;
        title.on('touchstart', function (e) {
            console.log(e);
        });
        this.addChild(title);

        var scenes = CanvasDrawer.prototype.getScenes();
        for (var key in scenes) {
            //var scene = __setCenterX(this.windowWidth,new PIXI.Text(scenes[key], __style));
            var scene = __setCenterX(new PIXI.Text(scenes[key], __style));
            scene.name = scenes[key];
            scene.y += title.height + (scene.height * key) + 20;
            var rect = new PIXI.Rectangle(0, 0, scene.width, scene.height);
            scene.hitArea = rect;
            scene.interactive = true;
            // for pc
            scene.on('mousedown', function (e) {
                myCanvasDrawer.switchStage(this._text, this._text);
            });
            // for mobile
            scene.on('touchstart', function (e) {
                myCanvasDrawer.switchStage(this._text, this._text);
            });

            this.addChild(scene);
        }

        this.render();
    };
    //  override this method to handle update event
    SceneMain.prototype.update = function () {
        _super.prototype.update();
    };
    return SceneMain;
})(SceneBase);
