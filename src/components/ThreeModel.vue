<template>
    <div ref="threeContainer" :style="{ width: width + 'px', height: height + 'px' }"></div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted, defineComponent, toRefs, PropType } from 'vue';
  import * as THREE from 'three';
  
  export default defineComponent({
    name: 'ThreeModel',
    props: {
      width: {
        type: Number as PropType<number>,
        default: 800
      },
      height: {
        type: Number as PropType<number>,
        default: 600
      }
    },
    setup(props) {
      const threeContainer = ref<HTMLDivElement | null>(null);
      const { width, height } = toRefs(props);
  
      onMounted(() => {
        if (!threeContainer.value) return;
  
        // 创建场景
        const scene = new THREE.Scene();
  
        // 创建相机
        const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 0.1, 1000);
        camera.position.z = 5;
  
        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width.value, height.value);
        threeContainer.value.appendChild(renderer.domElement);
  
        // 添加一个立方体
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
  
        // 渲染循环
        const animate = () => {
          requestAnimationFrame(animate);
  
          // 旋转立方体
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
  
          // 渲染场景
          renderer.render(scene, camera);
        };
  
        animate();
      });
  
      return {
        threeContainer
      };
    }
  });
  </script>
  
  <style scoped>
  div {
    display: inline-block;
  }
  </style>
  