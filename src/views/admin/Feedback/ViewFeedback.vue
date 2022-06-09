<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Feedback</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-8 mb-3">
        <div class="row">
          <div class="col-xl-6">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Name</label>
              <p class="mainText">Abc</p>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Sender</label>
              <p class="mainText">Vendor</p>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Email Address</label>
              <p class="mainText">abc@xyz.com</p>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Subject</label>
              <p class="mainText">Abc</p>
            </div>
          </div>
          <div class="col-12">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Message</label>
              <p class="mainText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewFeedback",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
