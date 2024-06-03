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
    </div>
</template>
