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
      <div class="col-12">
        <form action="">
          <div class="d-flex align-items-baseline justify-content-center mb-3">
            <div class="userIimageFrame my-3">
              <img
                v-if="!userImage"
                src="./../../../assets/images/userPlaceholder.png"
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
          <div class="row align-items-baseline justify-content-center mb-3">
            <div class="col-lg-3">
              <div class="mainDetail my-3">
                <label for="" class="mainLabel">Name</label>
                <BaseInput
                  iname="name"
                  itype="text"
                  inputText="Enter Name"
                  inputClass="dashInput"
                />
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
              <BaseButton
                type="button"
                btnText="Change Password"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.show('changePassword')"
              />
              <BaseButton
                type="submit"
                btnText="Update"
                class="baseButton primaryButton mx-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <b-modal id="changePassword" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('changePassword')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent">
            <h2 class="modalHeading">Change Password</h2>
            <div class="modalForm my-4">
              <form action="">
                <BaseInput
                  LabelText="Current Password"
                  labelClass="siteLabel"
                  iname="currentpassword"
                  itype="password"
                  inputText="Enter Current Password"
                  inputClass="siteInput"
                  fieldRequired="true"
                  :addLeftIcon="true"
                />
                <BaseInput
                  LabelText="New Password"
                  labelClass="siteLabel"
                  iname="newpassword"
                  itype="password"
                  inputText="Enter New Password"
                  inputClass="siteInput"
                  fieldRequired="true"
                  :addLeftIcon="true"
                />
                <BaseInput
                  LabelText="Confirm Password"
                  labelClass="siteLabel"
                  iname="confirmpassword"
                  itype="password"
                  inputText="Enter Confirm Password"
                  inputClass="siteInput"
                  fieldRequired="true"
                  :addLeftIcon="true"
                />
                <div class="text-center">
                  <BaseButton
                    type="submit"
                    btnText="Update"
                    class="baseButton primaryButton mt-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import BaseButton from "./../../../components/BaseButton.vue";
import BaseInput from "./../../../components/BaseInput.vue";

export default {
  name: "EditProfile",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      userImage: "",
    };
  },
  created() {},
  methods: {
    uploadImage(event) {
      this.userImage = URL.createObjectURL(event.srcElement.files[0]);
    },
  },
};
</script>
