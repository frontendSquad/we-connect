<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center py-5">
        <div class="errorPage py-5">
          <div class="errorContent">
            <h2 class="primaryColor error">404</h2>
            <p class="errorMessage text-dark">Page Not Found</p>
            <router-link to="/admin/dashboard" class="baseButton primaryButton"
              >Go to Homepage</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  components: {},
  data() {
    return {};
  },
};
</script>
