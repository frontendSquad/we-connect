<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-8 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Vendor Management</h1>
          </div>
        </div>
      </div>
      <div class="col-xl-4 text-end">
        <p class="mb-3">Status: <span class="statusBar statusRejected">Rejected</span></p>
      </div>
    </div>
    <div class="row align-items-baseline mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Vendor Profile</h2>
          <h6 class="idBar">User ID: {{ idStatus }}</h6>
        </div>
      </div>
      <div class="col-xxl-10 order-xxl-1 order-2">
        <form action="">
          <div class="row align-items-baseline mb-3">
            <div class="col-xl-3">
              <div class="userIimageFrame my-3">
                <img
                  src="./../../../../assets/images/userPlaceholder.png"
                  alt="User Image"
                  class="userImage img-fluid"
                />
              </div>
            </div>
            <div class="col-xl-9">
              <div class="row align-items-baseline">
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Name</label>
                    <p class="mainText">Abc</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Email Address</label>
                    <p class="mainText">abc@xyz.com</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Registration Date</label>
                    <p class="mainText">mm/dd/yyyy</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Card Number</label>
                    <p class="mainText">1001 1101 0101</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Store Name</label>
                    <p class="mainText">Abc</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Business Type</label>
                    <p class="mainText">Abc</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Country</label>
                    <p class="mainText">Abc</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">City</label>
                    <p class="mainText">Abc</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Business Overview</label>
                    <p class="mainText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-xxl-2 order-xxl-2 order-1">
        <div class="mainDetail w-100 my-1">
          <label for="" class="mainLabel">Admin Commission</label>
          <select name="" id="" class="dashInput rightInput">
            <option value="s" selected hidden disabled>Set Commission</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ViewRejectedVendor",
  components: {
  },
  data() {
    return {
      idStatus: "",
    };
  },
  created() {
    this.idStatus = this.$route.params.status;
  },
  methods: {
  },
};
</script>
