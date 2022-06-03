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
                <div class="col-12">
                  <BaseButton
                    type="button"
                    btnText="Accept"
                    class="baseButton primaryButton me-2"
                     @click="$bvModal.show('acceptVendor')"
                  />
                  <BaseButton
                    type="button"
                    btnText="Reject"
                    class="baseButton secondaryButton"
                     @click="$bvModal.show('rejectVendor')"
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

    <b-modal id="rejectVendor" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('rejectVendor')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent text-center">
            <img
              src="./../../../../assets/images/question.png"
              alt=""
              class="modalImage mb-3"
            />
            <h2 class="modalHeading">Alert</h2>
            <p class="modalText">
              Are you sure you want to reject this vendor?
            </p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('rejectVendor');
                  $bvModal.show('rejectVendor2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('rejectVendor')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <BaseModal
      modalId="rejectVendor2"
      :modalSuccess="true"
      modalText="Vendor has been rejected."
      btnText="Ok"
    />

    <b-modal id="acceptVendor" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('acceptVendor')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent text-center">
            <img
              src="./../../../../assets/images/question.png"
              alt=""
              class="modalImage mb-3"
            />
            <h2 class="modalHeading">Alert</h2>
            <p class="modalText">
              Are you sure you want to accept this vendor?
            </p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('acceptVendor');
                  $bvModal.show('acceptVendor2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('acceptVendor')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <BaseModal
      modalId="acceptVendor2"
      :modalSuccess="true"
      modalText="Vendor has been accepted."
      btnText="Ok"
    />
  </div>
</template>

<script>
import BaseButton from "../../../../components/BaseButton.vue";
import BaseModal from "../../../../components/BaseModal.vue";

export default {
  name: "ViewApprovedVendor",
  components: {
    BaseButton,
    BaseModal,
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
