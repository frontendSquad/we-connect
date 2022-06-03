<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Vendor Management</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-baseline mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Edit Profile</h2>
          <h6 class="idBar">User ID: {{ idStatus }}</h6>
        </div>
      </div>
      <div class="col-xxl-10 order-xxl-1 order-2">
        <form action="">
          <div class="row align-items-baseline mb-3">
            <div class="col-xl-3">
              <div class="userIimageFrame my-3">
                <img
                  v-if="!userImage"
                  src="./../../../../assets/images/userPlaceholder.png"
                  alt="User Image"
                  class="userImage img-fluid"
                />
                <img
                  v-else
                  :src="userImage"
                  alt="User Image"
                  class="userImage img-fluid"
                />
                <div class="uploadCamera">
                  <font-awesome-icon :icon="['fas', 'camera']" />
                  <input
                    type="file"
                    accept="image/*"
                    @change="uploadImage"
                    class="uploadInput"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-9">
              <div class="row align-items-baseline">
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Name</label>
                    <BaseInput
                      labelClass="siteLabel"
                      iname="name"
                      itype="text"
                      inputText="Enter Name"
                      value="Mark"
                      inputClass="siteInput"
                    />
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
                    <p class="mainText">*******</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Store Name</label>
                    <BaseInput
                      labelClass="siteLabel"
                      iname="storeName"
                      itype="text"
                      inputText="Enter Store Name"
                      value="Abc"
                      inputClass="siteInput"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Business Type</label>
                    <BaseInput
                      labelClass="siteLabel"
                      iname="businessType"
                      itype="text"
                      inputText="Enter Business Type"
                      value="Abc"
                      inputClass="siteInput"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Country</label>
                    <BaseInput
                      labelClass="siteLabel"
                      iname="country"
                      itype="text"
                      inputText="Enter Country"
                      value="Abc"
                      inputClass="siteInput"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mainDetail my-3">
                    <label for="" class="mainLabel">Country</label>
                    <BaseInput
                      labelClass="siteLabel"
                      iname="country"
                      itype="text"
                      inputText="Enter Country"
                      value="Abc"
                      inputClass="siteInput"
                    />
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
import BaseButton from "./../../../../components/BaseButton.vue";
import BaseInput from "./../../../../components/BaseInput.vue";

export default {
  name: "EditVendor",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      idStatus: "",
      userImage: "",
    };
  },
  created() {
    this.idStatus = this.$route.params.status;
  },
  methods: {
    uploadImage(event) {
      this.userImage = URL.createObjectURL(event.srcElement.files[0]);
    },
  },
};
</script>
