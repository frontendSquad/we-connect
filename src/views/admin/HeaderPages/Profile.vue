<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Profile</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Account</h2>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="d-flex align-items-baseline justify-content-center mb-3">
          <div class="userIimageFrame my-3">
            <img
              src="./../../../assets/images/userPlaceholder.png"
              alt="User Image"
              class="userImage img-fluid"
            />
          </div>
        </div>
        <div class="row align-items-baseline justify-content-center mb-3">
          <div class="col-lg-3">
            <div class="mainDetail my-3">
              <label for="" class="mainLabel">Name</label>
              <p class="mainText">Mark</p>
            </div>
          </div>
          <div class="col-lg-3">
             <div class="mainDetail my-3">
              <label for="" class="mainLabel">Email Address</label>
              <p class="mainText">abc@xyz.com</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <router-link
              to="/admin/edit-profile"
              class="baseButton primaryButton"
            >
              Edit
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
