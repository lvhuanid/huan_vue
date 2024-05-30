<script setup lang="ts">
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const objLoader = new OBJLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(240, 240);
document.body.appendChild( renderer.domElement );

objLoader.load('/static/models/hands.obj', function(object) {
    scene.add(object);
    object.scale.set(0.15, 0.14, 0.15)
    object.rotation.set(-20, 0, 0)
    camera.position.z = 5;

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener("mouseleave", (event) => {
        if (event) {
            object.rotation.set(-20, 0, 0)
        }
    });

    // 定义鼠标悬停事件处理函数
    function onMouseMove(event: { clientX: any; clientY: any; }) {
    // 获取鼠标在屏幕上的位置
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        object.rotation.x += 0.01;
	    object.rotation.y += 0.01;
        object.rotation.z += 0.01;
  // 修改物体的旋转属性
    // object.rotation.z = mouseY * 120 * Math.PI;
    // object.rotation.y = mouseY / window.innerHeight * 2 * Math.PI;
}   

});

// 添加鼠标悬停事件监听器


// 渲染场景
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
// animate();
</script>

<template>

</template>