<template>
    <a :href="url" target="_blank">
        {{ props }}
        <div class="list-li-left">
            <div class="header">
                <span class="header-title">{{ title }}</span>
                <span class="header-tag">{{ tag }}</span>
            </div>
            <div class="section">
                <div class="section-left">
                    <div class="section-left-content">{{ author }}</div>
                </div>
            </div>
        </div>

        <div class="section-right" :style="{ backgroundImage: 'url(' + coverImage + ')' }"></div>
    </a>
</template>

<script>
export default {
    name: 'BookItem',
    props: {
        title: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
.recommend-content a {
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    border: 1px solid #f0f4f8;
    background-color: #f3f7fa;
    cursor: pointer;
}

.recommend-content {
    flex: 1;
    margin-right: 10px;
}

.list-li-left {
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    margin-right: 10px;
}

.header {
    display: flex;
    align-items: center;
}

.header-title {
    color: #303133;
    display: inline-block;
    /* flex: 1; */
    word-break: break-all;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    font-size: 14px;
    margin-right: 10px;
}

.header-tag {
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 12px;
    /* min-width: 52px; */
    flex-shrink: 0;
    background: linear-gradient(90deg, #e2eef6 0%, #eef7fd 100%);
    color: #8498a5;
    display: inline-block;
}

.section {
    display: flex;
}

.section-left {
    line-height: 28px;
    font-size: 12px;
}

.section-left-content {
    color: #606266;
    word-break: break-all;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
}

.section-right {
    width: 53px;
    height: 53px;
    border-radius: 4px;
    background-size: cover;
    background-position: center;
}
</style>