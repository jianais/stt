function getRenderer(THREE){
  var context = canvas.getContext('webgl');
  var renderer = new THREE.WebGLRenderer(context);
  var width = canvas.width;
  var height = canvas.height;
  renderer.setSize(width,height);
  return renderer;
}