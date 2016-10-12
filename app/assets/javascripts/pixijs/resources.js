//  Please configure your load & save end point for play data
var LOAD_URL = "/pixijs/loadpoint";
var SAVE_URL = "/pixijs/savepoint";

//  This is list of preload picture resources
//  If you set value in this object, it will loaded when app starts
var PRELOAD_RESOUCES = {
    "SceneMain": [ // name of class => scene_main.js == SceneMain
        "/assets/pixijs/title.png"
    ],
    "SceneGuide": [ // name of class => scene_guide.js == SceneGuide
        "/assets/pixijs/logo.png",// actual file name
        "/assets/pixijs/Bubbles99px.png"
    ]
}

//  This is list of preload html resources
//  If you set value in this object, it will loaded when app starts
var PRELOAD_HTML = [
    '/assets/pixijs/html/simple.html',
    '/assets/pixijs/html/card1.html'
]

//  This is particle setting , modify with PixiParticlesEditor
var PARTICLE_CONFIG1 = {
    "alpha": {
        "start": 1,
        "end": 0.22
    },
    "scale": {
        "start": 0.25,
        "end": 0.75,
        "minimumScaleMultiplier": 0.5
    },
    "color": {
        "start": "#ffffff",
        "end": "#ffffff"
    },
    "speed": {
        "start": 200,
        "end": 50
    },
    "acceleration": {
        "x": 0,
        "y": 0
    },
    "startRotation": {
        "min": 0,
        "max": 360
    },
    "noRotation": false,
    "rotationSpeed": {
        "min": 0,
        "max": 10
    },
    "lifetime": {
        "min": 4,
        "max": 4
    },
    "blendMode": "normal",
    "frequency": 0.016,
    "emitterLifetime": -1,
    "maxParticles": 500,
    "pos": {
        "x": 0,
        "y": 0
    },
    "addAtBack": false,
    "spawnType": "point"
};