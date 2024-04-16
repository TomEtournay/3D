import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Hauteur ancien mac supposée : 835


let scene, camera, renderer, model;
let initialPosition, initialRotation, initialScale;

function init() {
  const container = document.getElementById('myThreeJsScene');
  const rect = container.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5); // Mettez la caméra à une position appropriée pour voir le modèle correctement

  renderer.setClearColor(0xffffff);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Réduisez l'intensité de la lumière ambiante
  scene.add(ambientLight);
}

function loadModel() {
  const loader = new GLTFLoader();

  const startTime = performance.now();

  loader.load('images/cicada_-_retro_cartoon_car.glb', function (gltf) { // Utilisez le format glTF binaire
    const endTime = performance.now();
    const loadingTime = endTime - startTime;
    console.log('Temps de chargement : ' + loadingTime + ' ms');

    model = gltf.scene;

    initialScale = new THREE.Vector3(1.1, 1.1, 1.1);
    initialRotation = new THREE.Euler(THREE.MathUtils.degToRad(1), THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(0), 'XYZ');
    initialPosition = new THREE.Vector3(8, -1.95, 0);

    model.scale.copy(initialScale);
    model.rotation.copy(initialRotation);
    model.position.copy(initialPosition);

    scene.add(model);


  }, undefined, function (error) {
    console.error(error);
  });
}