<template>
  <a-layout class="live-room">
    <a-layout-header>
      <a-page-header
        :title="liveName" 
        sub-title="正在观看直播"
        :back-icon="false"
        class="page-header"
      />
    </a-layout-header>
    <a-layout-content>
      <a-row justify="center" align="middle" style="min-height: 300px;">
        <a-col :span="24"> <!-- 修改为24以占据整行 -->
          <a-card>
            <video controls style="width: 100%;">
              <source src="https://cdn.example.com/stream.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </a-card>
        </a-col>
      </a-row>
      <a-row justify="center" style="margin-top: 20px;">
        <a-col :span="24"> <!-- 修改为24以占据整行 -->
          <a-comment
            v-for="comment in comments"
            :key="comment.id"
            :author="comment.author"
            :content="comment.content"
            :datetime="comment.datetime"
          />
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      liveId: null,
      liveName: '直播间', // 默认名称
      comments: [
        { id: 1, author: '用户1', content: '精彩的比赛！', datetime: '刚刚' },
        { id: 2, author: '用户2', content: '加油！', datetime: '1分钟前' },
      ],
    };
  },
  created() {
    this.liveId = this.$route.params.liveId;
    // 根据 liveId 获取直播信息
    this.fetchLiveStreamDetails(this.liveId);
  },
  methods: {
    fetchLiveStreamDetails(liveId) {
      // 假设这里是获取直播信息的逻辑
      const liveStreams = [
        { id: 1, title: '热门直播1' },
        { id: 2, title: '热门直播2' },
        { id: 3, title: '热门直播3' },
        { id: 4, title: '热门直播4' },
      ];
      const stream = liveStreams.find(s => s.id === parseInt(liveId));
      this.liveName = stream ? stream.title : '直播间'; // 设置标题为对应的直播名称
    },
  },
};
</script>

<style scoped>
.live-room {
  background: #f0f2f5;
  min-height: 100vh;
}

a-layout-header {
  background: #e6f7ff; /* 设置为淡蓝色 */
  padding: 0;
}

.page-header {
  color: #fff; /* 设置文字为白色 */
}

a-layout-content {
  padding: 24px;
}

::v-deep .ant-page-header-heading-title {
  color: #fff; /* 设置为纯白色 */
}
::v-deep .ant-page-header-heading-sub-title {
  color: #fff; /* 设置为纯白色 */
}
</style>