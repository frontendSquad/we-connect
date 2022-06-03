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
      <div class="col-12">
        <form action="">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="d-flex align-items-center gap-3">
                <div class="userIimageFrame my-3">
                  <img
                    src="./../../../../assets/images/userPlaceholder.png"
                    alt="User Image"
                    class="userImage img-fluid"
                  />
                </div>
                <div class="info">
                <h6 class="text-uppercase">Mark Carson</h6>
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="storeImage">
                <label for="uploadStoreImage"><img src="../../../../assets/images/uploadImage.png" alt=""></label>
                <input id="uploadStoreImage" type="file" accept="image/*" class="d-none">
              </div>
            </div>
            <div class="col-12">
              <div class="mainDetail my-3">
                <label for="" class="mainLabel">Store Description</label>
                <textarea rows="6" class="siteInput"></textarea>
              </div>
            </div>
            <div class="col-12">
               <BaseButton
                type="submit"
                btnText="Update"
                class="baseButton primaryButton"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./../../../../components/BaseButton.vue";

export default {
  name: "ViewStore",
  components: {
    BaseButton,
  },
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
