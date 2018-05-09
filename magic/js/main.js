import ImportOutSource from './init/importoutsource'
import GlobalVariable from './init/globalvariable'

export default class Main{  
  constructor(){
    new ImportOutSource();
    new GlobalVariable();
    this.init();
  }
  init(){
    this.bindRender = this.render.bind(this);
    this.initThree();
    this.initScene();
    this.initCamera();
    this.initLight();
    this.initObject();
    this.render();
  }
  initThree(){
    let context = canvas.getContext('webgl');
    renderer = new THREE.WebGLRenderer(context);
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);
  }
  initScene(){
    scene = new THREE.Scene();
  }
  initCamera(){
    let width = canvas.width;
    let height = canvas.height;
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 5;
  }

  initLight(){
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
  }
  initObject(){
    var geometry = new THREE.CubeGeometry(1, 1, 1,2,2,2);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,wireframe: true
 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  }
  render(){
    var start = Date.now();
    requestAnimationFrame(this.bindRender);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
}