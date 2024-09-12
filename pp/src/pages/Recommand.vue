<script>
import axios from 'axios';
import BookItem from '../components/BookItem.vue';

export default {
    components: {
        BookItem,
    },
    data() {
        return {
            books: [],
        };
    },
    methods: {
        getQueryParam() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            // console.log(urlParams)
            return urlParams.get('query');
        },
        async getBookList() {
            const query = this.getQueryParam();
            try {
                const response = await axios.get('https://vr.chaoxing.com/out-api/aiagent/cozeApp', {
                    params: {
                        workFlowId: '7406259826811305984',
                        query: 1,
                    },
                });
                const data = JSON.parse(response.data.data);
                console.log(data)
                this.books = data.data_new; // Adjust this based on the actual response structure
            } catch (error) {
                console.error('Error fetching book list:', error);
            }
        },
    },
    mounted() {
        this.getBookList();
    },
};
</script>
<template>
    <div class="contain">
        <ul class="book-list">
            <li class="recommend-content" v-for="item in books" :key="item.zhizhen_title_url">
                <BookItem :url="item.zhizhen_title_url" :title="item.basic_title" :tag="item.basic_source_name"
                    :author="item.basic_creator" :coverImage="item.basic_cover_url" />
            </li>
        </ul>
        <a class="refresh-icon"
            href="https://m.chaoxing.com/open/iframe/search?sw=&amp;author=&amp;year=&amp;publish=&amp;mobile=0&amp;channel=&amp;subject=&amp;size=&amp;language=&amp;robotFid=194&amp;pages=2">换一批</a>
    </div>
</template>

<style scoped>
body {
    font: 12px/1.5 PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif, Apple Color Emoji;
    overflow-x: auto;
}

ol,
ul {
    list-style: none;
}

.contain {
    border-radius: 0px 12px 12px 12px;
    padding: 16px;
    max-width: 500px;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}

.book-list {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.refresh-icon {
    font-size: 14px;
    padding-left: 16px;
    background: url(/public/refresh.png) left center no-repeat;
    color: #3D6AF2;
    line-height: 20px;
    height: 20px;
    display: inline-block;
    background-size: 12px;
    cursor: pointer;
}
</style>
