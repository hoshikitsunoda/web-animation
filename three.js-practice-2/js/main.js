const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CircleGeometry(5, 32)
const material = new THREE.MeshBasicMaterial({
  color: 0x87ceeb
});

var circle = new THREE.Mesh(geometry, material);

scene.add(circle);

camera.position.z = 8;

function animate() {
  requestAnimationFrame(animate);
  circle.rotation.x += 0.05;
  circle.rotation.y += 0.05;
  renderer.render(scene, camera);
}

animate();
