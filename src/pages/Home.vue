<script setup lang="ts">
import ThreeTest from "../components/ThreeTest.vue"
import ObjLoaderTest from "../components/ObjLoaderTest.vue"
import ThreeModel from "../components/ThreeModel.vue"

</script>
<template>
    <div>
        <h1 class=" text-blue-400">homePage</h1>
        <ObjLoaderTest />
        <ThreeModel :width="100" :height="100" />
        <router-link to="/hello">/users/eduardo</router-link>
        <router-view></router-view>
        <video class=" w-1/4 h-1/4" part="video" autoplay playsinline muted loop src="https://videos.pexels.com/video-files/8065325/8065325-hd_1280_720_25fps.mp4" preload="metadata">
            <track kind="metadata" label="cuepoints" data-removeondestroy="">
        </video>
    </div>
</template>
