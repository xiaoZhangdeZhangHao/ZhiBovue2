<template>
  <div class="home">
    <header>
      <div class="header-content">
        <h1>篮球赛直播平台</h1>
        <div class="search-container">
          <input type="text" placeholder="搜索直播..." v-model="searchQuery" @input="searchLiveStreams" />
          <button v-if="searchQuery" @click="clearSearch" class="clear-button">×</button>
        </div>
      </div>
    </header>
    
    <section class="featured">
      <h2>推荐内容</h2>
      <div class="featured-streams">
        <div v-for="stream in filteredFeaturedStreams" :key="stream.id" class="stream-card" @click="goToLiveRoom(stream.id)">
          <img :src="stream.thumbnail" alt="Stream Thumbnail" />
          <p>{{ stream.title }}</p>
        </div>
      </div>
    </section>

    <section class="popular">
      <h2>热门直播</h2>
      <div class="popular-streams">
        <div v-for="(stream, index) in filteredLiveStreams" :key="stream.id" class="popular-card" @click="goToLiveRoom(stream.id)" :style="{ marginTop: index >= 2 ? '70px' : '10px' }">
          <img :src="stream.thumbnail" alt="Stream Thumbnail" />
          <div class="popular-info">
            <h3>{{ stream.title }}</h3>
            <p>观看人数: {{ stream.viewers }}人</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      featuredStreams: [], // 假设有推荐内容的数据
      liveStreams: [], // 假设有热门直播的数据
    };
  },
  computed: {
    filteredFeaturedStreams() {
      return this.featuredStreams.filter(stream =>
        stream.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredLiveStreams() {
      return this.liveStreams.filter(stream =>
        stream.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    searchLiveStreams() {
      console.log('Searching for:', this.searchQuery);
    },
    clearSearch() {
      this.searchQuery = ''; // 清空搜索框内容
    },
    fetchFeaturedStreams() {
      this.featuredStreams = [
        { id: 1, title: '热门直播1', thumbnail: require('@/images/stream1.jpg') },
        { id: 2, title: '热门直播2', thumbnail: require('@/images/stream2.jpg') },
        { id: 3, title: '热门直播3', thumbnail: require('@/images/stream3.jpg') },
        { id: 4, title: '热门直播4', thumbnail: require('@/images/stream4.jpg') },
      ];
    },
    fetchLiveStreams() {
      this.liveStreams = [
        { id: 1, title: '热门直播1', thumbnail: require('@/images/stream1.jpg'), viewers: 120 },
        { id: 2, title: '热门直播2', thumbnail: require('@/images/stream2.jpg'), viewers: 200 },
        { id: 3, title: '热门直播3', thumbnail: require('@/images/stream3.jpg'), viewers: 150 },
        { id: 4, title: '热门直播4', thumbnail: require('@/images/stream4.jpg'), viewers: 300 },
      ];
    },
    goToLiveRoom(liveId) {
      const stream = this.featuredStreams.find(s => s.id === liveId);
      const liveName = stream ? stream.title : '直播间';
      this.$router.push({ 
        name: 'LiveRoom', 
        params: { liveId }, 
        query: { liveName } // 使用 query 参数传递 liveName
      });
    },
  },
  created() {
    this.fetchFeaturedStreams();
    this.fetchLiveStreams();
  },
};
</script>

<style scoped>
.home {
  padding: 10px; /* 减小整体内边距 */
}

header {
  display: flex;
  justify-content: center; /* 居中对齐 */
  align-items: center;
  white-space: nowrap; /* 确保标题不换行 */
  padding: 0 10px; /* 减小左右边距 */
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 390px; /* 限制最大宽度以适应小屏幕 */
}

h1 {
  margin: 0;
  font-size: 16px; /* 减小字体大小以适应小屏幕 */
  text-align: center;
  margin-right: 10px; /* 增加标题和搜索框之间的间距 */
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

input[type="text"] {
  padding: 5px;
  font-size: 14px; /* 减小字体大小 */
  width: 100%;
}

.clear-button {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #888;
}

.featured, .popular {
  margin-top: 20px;
}

.featured-streams {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 居中对齐 */
}

.stream-card {
  width: 150px; /* 固定宽度 */
  height: 150px; /* 固定高度 */
  margin: 10px; /* 增加间距以避免重叠 */
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stream-card img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片填满框位 */
}


.popular-streams {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 居中对齐 */
  margin-top: 70px; /* 向下移动10px */
}

.popular-card {
  width: 150px; /* 固定宽度 */
  height: 150px; /* 固定高度 */
  margin: 10px; /* 增加间距以避免重叠 */
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 让内容靠下 */
  align-items: center;
  background: #f0f2f5; /* 背景颜色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  transition: transform 0.2s; /* 动画效果 */
  margin-bottom: 20px;
}

.popular-card:hover {
  transform: scale(1.05); /* 悬停时放大 */
}

.popular-card img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片填满框位 */
}

.popular-info {
  padding: 5px;
}
</style>