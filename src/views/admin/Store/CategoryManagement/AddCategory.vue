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
          <h2 class="secondaryTitle">Category Management</h2>
        </div>
      </div>
    </div>
    <form action="">
      <div class="row mb-3">
        <div class="col-12 mb-2">
          <h3 class="sectionTitle mb-3">Add Category</h3>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-xl-6 col-lg-8">
              <div class="mainDetail w-100 my-3">
                <label for="" class="mainLabel">Category Name</label>
                <input type="text" class="dashInput" />
              </div>
              <div class="mainDetail w-100 my-3">
                <label for="" class="mainLabel">Status</label>
                <select name="" id="" class="dashInput">
                  <option value="s" selected hidden disabled>
                    Select
                  </option>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <BaseButton
            type="submit"
            btnText="Add"
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
  name: "AddCategory",
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
