<script setup lang="ts">
import ThreeTest from "../components/ThreeTest.vue"

</script>
<template>
    <div>
        <h1 class=" text-blue-400">homePage</h1>
        <!-- <canvas id="myCanvas" width="560" height="360" /> -->
        <ThreeTest />
        <div class="lc-lg:block relative ml-[30px] hidden h-[240px] w-[240px] flex-none">
            <img src="https://pic.leetcode.cn/1690881907-gXDNpD-Premium%20Algo%20100%20%F0%9F%91%8C@3-240x240.png" class="h-full w-full opacity-0" alt="">
            <div style="width:100%;height:100%" class="absolute left-0 top-0">
                <canvas style="display: block; width: 240px; height: 240px;" data-engine="three.js r149" width="240" height="240"></canvas>
        </div>
        </div>
    </div>
</template>
