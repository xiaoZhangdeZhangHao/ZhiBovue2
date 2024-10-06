<template>
  <div>
    <h1>个人中心</h1>
    <user-profile />
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
};
</script>