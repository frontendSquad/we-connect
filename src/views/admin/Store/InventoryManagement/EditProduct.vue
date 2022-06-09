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
          <h2 class="secondaryTitle">Inventory Management</h2>
        </div>
      </div>
    </div>
    <form action="">
      <div class="row mb-3">
        <div class="col-12 mb-2">
          <h3 class="sectionTitle mb-3">Edit Product</h3>
        </div>
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-xl-6 col-lg-8">
              <div class="productImages">
                <div class="row align-items-center">
                  <div class="col-6">
                    <div class="productImage mainProductImage editableImage">
                      <img
                        src="./../../../../assets/images/loginBg.png"
                        alt="Product Image"
                      />
                      <button class="removeImage">
                        <font-awesome-icon :icon="['fas', 'times']" />
                      </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <button
                      class="notBtn cyanColor text-decoration-underline fBold"
                    >
                      Change Image
                    </button>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-6">
                    <div class="d-flex align-items-center gap-2">
                      <div
                        class="productImage secondaryProductImage editableImage"
                      >
                        <img
                          src="./../../../../assets/images/loginBg.png"
                          alt="Secondary Product Image"
                        />
                        <button class="removeImage">
                          <font-awesome-icon :icon="['fas', 'times']" />
                        </button>
                      </div>
                      <div
                        class="productImage secondaryProductImage editableImage"
                      >
                        <img
                          src="./../../../../assets/images/loginBg.png"
                          alt="Secondary Product Image"
                        />
                        <button class="removeImage">
                          <font-awesome-icon :icon="['fas', 'times']" />
                        </button>
                      </div>
                      <div
                        class="productImage secondaryProductImage editableImage"
                      >
                        <img
                          src="./../../../../assets/images/loginBg.png"
                          alt="Secondary Product Image"
                        />
                        <button class="removeImage">
                          <font-awesome-icon :icon="['fas', 'times']" />
                        </button>
                      </div>
                      <div
                        class="productImage secondaryProductImage editableImage"
                      >
                        <img
                          src="./../../../../assets/images/alert.png"
                          alt="Secondary Product Image"
                        />
                        <button class="removeImage">
                          <font-awesome-icon :icon="['fas', 'times']" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <button
                      class="notBtn cyanColor text-decoration-underline fBold"
                    >
                      Add Another
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <div class="row">
            <div class="col-xl-6 col-lg-8">
              <div class="mainDetail w-100 my-1">
                <label for="" class="mainLabel">Select Category</label>
                <select name="" id="" class="dashInput">
                  <option value="s" selected hidden disabled>
                    Select Category
                  </option>
                  <option value="1">Category A</option>
                  <option value="2">Category B</option>
                  <option value="3">Category C</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mainDetail my-3">
                <label for="" class="mainLabel">Specifications</label>
                <textarea rows="6" class="dashInput"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <h3 class="sectionTitle mb-3">Dimensions</h3>
          <div class="row">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Length</label>
                    <input type="number" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Height</label>
                    <input type="number" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Width</label>
                    <input type="number" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Weight</label>
                    <input type="number" class="dashInput" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <h3 class="sectionTitle mb-3">Description</h3>
          <div class="row">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Title</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Price</label>
                    <input type="number" class="dashInput" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <h3 class="sectionTitle mb-3">Set Variations</h3>
          <div class="row">
            <div class="col-xl-6">
              <div class="row">
                <div class="12">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">In Stock</label>
                    <select name="" id="" class="dashInput">
                      <option value="1" selected>In Stock</option>
                      <option value="2">Out of Stock</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Name</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Type</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">Checkbox</option>
                      <option value="2">Radio Button</option>
                      <option value="3">Multiple Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                      <option value="5">50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                      <option value="5">50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                      <option value="5">50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-12">
              <BaseButton
                type="button"
                btnText="Add New Row"
                class="baseButton primaryButton me-3"
              />
              <BaseButton
                type="button"
                btnText="Add New Option"
                class="baseButton secondaryButton"
              />
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Name</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Type</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">Checkbox</option>
                      <option value="2">Radio Button</option>
                      <option value="3">Multiple Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                      <option value="5">50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                      <option value="5">50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-xl-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Label</label>
                    <input type="text" class="dashInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mainDetail w-100 my-3">
                    <label for="" class="mainLabel">Quantity</label>
                    <select name="" id="" class="dashInput">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                      <option value="5">50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <button class="deleteButton" type="button">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-12">
              <BaseButton
                type="button"
                btnText="Add New Row"
                class="baseButton primaryButton me-3"
              />
              <BaseButton
                type="button"
                btnText="Add New Option"
                class="baseButton secondaryButton"
              />
            </div>
          </div>
        </div>
        <div class="col-12 mb-3 border-bottom py-3">
          <h3 class="sectionTitle mb-3">Status</h3>
          <div class="row">
            <div class="col-xl-6">
              <div class="row">
                <div class="12">
                  <div class="mainDetail w-100 my-3">
                    <select name="" id="" class="dashInput">
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <BaseButton
            type="submit"
            btnText="Update"
            class="baseButton primaryButton me-3"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "./../../../../components/BaseButton.vue";

export default {
  name: "EditProduct",
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
