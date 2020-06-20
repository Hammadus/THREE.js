const scene = new THREE.Scene();

const camera = new THREE.PrespectiveCamera(
    75,
    window.innnerWidth/ window.innerHeight,
    0.1,
    1000
    );

const renderer = new.THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeigth);

document.body.appendChild(renderer.domElement);