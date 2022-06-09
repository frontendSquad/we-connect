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
          <h2 class="secondaryTitle">Variation Management</h2>
        </div>
      </div>
    </div>
    <form action="">
      <div class="row mb-3">
        <div class="col-12 mb-3 border-bottom py-3">
          <h3 class="sectionTitle mb-3">General</h3>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Name</label>
                    <input
                      type="text"
                      class="dashInput"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Type</label>
                    <select name="" id="" class="dashInput">
                      <option value="s" selected hidden disabled>Select</option>
                      <option value="1">Radio Button</option>
                      <option value="2">Checkbox</option>
                      <option value="3">Radio Button</option>
                      <option value="4">Multiple Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <h3 class="sectionTitle mb-3">Values</h3>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input
                      type="text"
                      class="dashInput"
                      placeholder="Enter Label"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <input
                      type="number"
                      class="dashInput"
                      placeholder="Enter Quantity"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
            <div class="col-12 my-3">
              <BaseButton
                type="submit"
                btnText="Add New Section"
                class="baseButton secondaryButton me-3"
              />
            </div>
          </div>
        </div>

        <div class="col mb-3 py-3">
          <BaseButton
            type="submit"
            btnText="Save"
            class="baseButton primaryButton me-3"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "../../../../components/BaseButton.vue";

export default {
  name: "CreateVariation",
  components: {
    BaseButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
