<script setup lang="ts">
import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera: THREE.Object3D<THREE.Object3DEventMap>, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

let object: THREE.Object3D<THREE.Object3DEventMap>;

init();


function init() {

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
    // camera.position.z = 2.5;
    camera.position.z = 3;

    // scene

    scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );

    const pointLight = new THREE.PointLight( 0xffffff, 15 );
    camera.add( pointLight );
    scene.add( camera );

    // manager

    function loadModel() {
        object.traverse( function ( child ) {

            if ( child.isMesh ) child.material.map = texture;

        } );

        // object.position.y = - 0.95;
        // object.scale.setScalar( 0.01 );
        object.scale.setScalar( 0.04 );
        // object.scale.set(0.15, 0.14, 0.15)
        object.rotation.set(-20, 0, 0)
        scene.add( object );

        render();

    }

    const manager = new THREE.LoadingManager( loadModel );

    // texture

    const textureLoader = new THREE.TextureLoader( manager );
    const texture = textureLoader.load( '/static/models/uv_grid_opengl.jpg', render );
    texture.colorSpace = THREE.SRGBColorSpace;

    // model

    function onProgress( xhr: { lengthComputable: any; loaded: number; total: number; } ) {

        if ( xhr.lengthComputable ) {

            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log( 'model ' + percentComplete.toFixed( 2 ) + '% downloaded' );

        }

    }

    function onError() {}

    const loader = new OBJLoader( manager );
    loader.load( '/static/models/hands.obj', function ( obj ) {

        object = obj;

    }, onProgress, onError );

    //

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.setSize( 240, 240);
    document.body.appendChild( renderer.domElement );

    //

    const controls = new  OrbitControls( camera, renderer.domElement );
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.addEventListener( 'change', render );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // renderer.setSize( 240, 240 );

}

function render() {

    renderer.render( scene, camera );

}

</script>

<template>

</template>