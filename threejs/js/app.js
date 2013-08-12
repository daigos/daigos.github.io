(function() {

var w = $(window).width(),
    h = $(window).height();

// three.js
var fov = 3,
    aspect = w / h,
    near = 1,
    far = 1000,
    cam = new THREE.PerspectiveCamera( fov, aspect, near, far );

cam.position.z = 500;

var scene = new THREE.Scene(),
    directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );

directionalLight.position.z = 3;
scene.add( directionalLight );

var renderer = new THREE.CanvasRenderer();
renderer.setSize( w, h );
document.body.appendChild( renderer.domElement );

renderer.render( scene, cam );

})();