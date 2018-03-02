var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(2, 1, 3);
var geometry2 = new THREE.BoxGeometry(1, 4, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0xff0000
});
var material2 = new THREE.MeshBasicMaterial({
  color: 0xDAA520
});
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube);
scene.add(cube2);

camera.position.z = 8;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  cube2.rotation.x += 0.08;
  cube2.rotation.y += 0.09;
  renderer.render(scene, camera);
}
animate();
