var SceneTest = (function (_super) {
    __extends(SceneTest, _super);
    function SceneTest() {
        _super.apply(this, arguments);
    }

    //  this is called just before scene changes
    SceneTest.prototype.destroy = function () {
        _super.prototype.destroy();
    };
    //  this function is called as call back of resource load
    //  use this method as start point of this scene
    SceneTest.prototype.start = function () {
        _super.prototype.start();
         this.render();
    };
    //  override this method to handle update event
    SceneTest.prototype.update = function () {
        _super.prototype.update();
    };
    return SceneTest;
})(SceneBase);
