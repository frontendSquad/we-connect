<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Notifications</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <BaseNotification :notificationData="notification" />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <div class="row align-items-center px-3 w-100 px-4">
          <div class="col-sm-12 col-md-6 mb-sm-0 mb-3">
            <div
              class="dataTables_info"
              id="DataTables_Table_0_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 20 of 52 entries
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-flex justify-content-end">
            <b-pagination class="customPagination"></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNotification from "./../../../components/BaseNotification.vue";

export default {
  name: "Notifications",
  components: {
    BaseNotification,
  },
  data() {
    return {
      notification: [
        {
          text: "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
          date: "Dec 19, 2020",
          time: "10:30 AM",
          link: "/admin/dashboard",
        },
        {
          text: "Lorem Ipsum is simply dummy text of printing & typesetting industry, Lorem Ipsum is simply dummy text of printing & typesetting industry",
          date: "Dec 19, 2020",
          time: "08:05 AM",
          link: "/admin/dashboard",
        },
        {
          text: "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
          date: "Dec 18, 2020",
          time: "12:20 PM",
          link: "/admin/dashboard",
        },
        {
          text: "Lorem Ipsum is simply dummy text of printing & typesetting industry, Lorem Ipsum is simply dummy text of printing & typesetting industry Lorem Ipsum is simply dummy text of printing & typesetting industry",
          date: "Dec 17, 2020",
          time: "06:52 AM",
          link: "/admin/dashboard",
        },
      ],
    };
  },
};
</script>
