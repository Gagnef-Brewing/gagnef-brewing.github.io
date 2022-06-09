if (!Detector.webgl)
    Detector.addGetWebGLMessage();

var container;
var texture;
var camera, controls, scene, renderer;
var lighting, ambient, keyLight, fillLight, backLight;
var canvasTexture = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var three_id;

var autoRotate = Boolean(document.getElementById('auto-rotate'));
var rotationY = Number(document.getElementById('rotation-y').value);
var enableControls = Boolean(document.getElementById('enable-controls'));

function init() {
    container = document.createElement('div');
    document.getElementById('preview').appendChild(container);

    /* Camera */
    camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    camera.position.z = 6;

    /* Scene */
    scene = new THREE.Scene();
    lighting = true;

    ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);

    keyLight = new THREE.DirectionalLight(0xffffff, 0.25);
    keyLight.position.set(-200, 0, 200);

    fillLight = new THREE.DirectionalLight(0xffffff, 0.25);
    fillLight.position.set(200, 0, 200);

    backLight = new THREE.DirectionalLight(0xffffff, 0.25);
    backLight.position.set(200, 0, -200).normalize();

    ambient.intensity = 0.6;
    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    /* Model */
    texture = new THREE.Texture(canvasTexture);
    texture.minFilter = THREE.LinearFilter;

    var objLoader = new THREE.OBJLoader();
    var materialMap = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 5,
      map: texture
    });
    var material = new THREE.MeshPhongMaterial({
      color: 0xdddddd,
      specular: 0xffffff,
      shininess: 5
    });

    objLoader.setPath(window.location.origin+'/assets/labels/');
    var idx = 0;
    objLoader.load('3D-Can.obj', function (object) {
      object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          if(idx==2) child.material = materialMap;
          else  child.material = material;
          idx++;
        }
      });
      object.scale.set(0.4,0.4,0.4);
      object.rotation.x = 0;
      object.rotation.y = rotationY;
      object.rotation.z = 0;
      scene.add(object);
    });

    /* Renderer */
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true  });
    renderer.setPixelRatio(window.devicePixelRatio);
    if (isLandscape()) {
      renderer.setSize(window.innerWidth/2, window.innerWidth/2);
    } else {
      renderer.setSize(window.innerWidth, window.innerWidth);
    }
    
    //renderer.setClearColor(new THREE.Color("#fff"));
    renderer.domElement.id = 'preview_canvas';
    var ctx = renderer.getContext();
    ctx.getShaderInfoLog = function () { return '' };
    container.appendChild(renderer.domElement);
    

    /* Controls */
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = -1.8;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
    controls.minPolarAngle = 1.5;
    controls.maxPolarAngle = 1.5;
    controls.enableKeys = false;
    controls.enabled = enableControls;
    
    controls.update();

    animate_start();
}

function animate_start() {
    three_id = requestAnimationFrame(animate_start);
    texture.needsUpdate = true;
    controls.update();
    render();
}

function animate_stop() {
    cancelAnimationFrame(three_id);
}

function render() {
  renderer.render(scene, camera);
}

function isLandscape() {
  return window.innerHeight < window.innerWidth;
}
