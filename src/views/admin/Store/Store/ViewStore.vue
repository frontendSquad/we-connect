<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Store</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Store A</h2>
          <h6 class="idBar">Vendor ID: {{ idStatus }}</h6>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-2">
        <div class="d-flex align-items-center gap-3">
          <div class="userIimageFrame my-3">
            <img
              src="./../../../../assets/images/userPlaceholder.png"
              alt="User Image"
              class="userImage img-fluid"
            />
          </div>
          <h6 class="text-uppercase">Mark Carson</h6>
        </div>
      </div>
      <div class="col-12 mb-2">
        <div class="storeImage">
          <img
            src="../../../../assets/images/imagePlaceholder.png"
            alt="Store Image"
            class="w-100"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="mainDetail my-3">
          <label for="" class="mainLabel">Store Description</label>
          <p class="mainText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewStore",
  components: {},
  data() {
    return {
      idStatus: "",
    };
  },
  created() {
    this.idStatus = this.$route.params.status;
  },
  methods: {},
};
</script>
