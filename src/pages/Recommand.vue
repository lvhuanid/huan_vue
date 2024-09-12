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
            list: [],
            pages: 0,
            query: this.$route.query.query
        };
    },
    methods: {
        async getBookList() {
            try {
                const response = await axios.get('https://vr.chaoxing.com/out-api/aiagent/cozeApp', {
                    params: {
                        workFlowId: '7406259826811305984',
                        query: this.query,
                    },
                });
                const data = JSON.parse(response.data.data);
                const dataList = data.data_new;
                this.pages = 0;
                this.books = dataList;
                if (dataList.length > 5) {
                    this.list = dataList.slice(0, 5);
                } else {
                    this.list = dataList;
                }
            } catch (error) {
                console.error('Error fetching book list:', error);
            }
        },
        nextPage() {
            const books = this.books;
            let pages = this.pages;
            if (books.length - (pages * 5) > 0 && books.length - ((pages + 1) * 5) > 0) {
                pages = pages + 1;
                this.list = books.slice(5 * pages, 5 * pages + 5);
            } else if (books.length - (pages * 5) > 0) {
                pages = 0;
                this.list = books.slice(5 * pages, 5 * pages + 5);
            } else {
                pages = 0;
                this.list = books.slice(0, 5);
                console.log(books)
            }
            this.pages = pages;
        },
    },
    mounted() {
        this.getBookList();
    },
};
</script>
<template>
    <div class="contain">
        <ul v-if="books.length > 0" class="book-list">
            <li class="recommend-content" v-for="item, index in list" :key="item.zhizhen_title_url">
                <BookItem :url="item.zhizhen_title_url" :title="item.basic_title" :tag="item.basic_source_name"
                    :author="item.basic_creator" :coverImage="item.basic_cover_url" />
            </li>
        </ul>
        <div v-else class="loading">
            加载中....
        </div>
        <a href="#" class="reflash" @click="nextPage">换一批</a>
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
    /* display: flex;
    flex-direction: column;
    flex: 1; */
    /* height: 543px; */
}

.loading {
    height: 543px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.reflash {
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
