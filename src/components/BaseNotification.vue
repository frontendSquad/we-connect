<template>
  <div>
    <div
      class="dashCard mainNotification px-4 py-4 mb-4"
      v-for="(item, index) in notificationData"
      :key="index"
    >
      <div class="d-flex justify-content-between align-items-center gap-4">
        <div class="d-flex align-items-center gap-4">
          <div class="mediaLeft">
            <font-awesome-icon :icon="['fas', 'bell']" />
          </div>
          <div class="mediaRight">
            <p class="notificationText fBold mb-2">
             {{ item.text }}
            </p>
            <div class="d-flex align-items-baseline">
              <p class="primaryColor fBold mb-2">{{item.date}}</p>
              <span class="primaryColor fBold mx-3 mb-2">|</span>
              <p class="primaryColor fBold mb-2">{{item.time}}</p>
            </div>
          </div>
        </div>
        <router-link :to="item.link" class="baseButton primaryButton">View</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    notificationData: {
      type: Array,
    },
  },
};
</script>
