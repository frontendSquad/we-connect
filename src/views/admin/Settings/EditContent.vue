<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Settings</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form action="">
          <div class="row mb-3">
            <div class="col-12">
              <h3 class="sectionTitle">Page X</h3>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12 mb-4">
              <div class="secondaryWrapper">
                <h2 class="secondaryTitle">Edit Content</h2>
              </div>
            </div>
            <div class="col-xl-6 col-lg-8">
              <div class="mainDetail w-100 my-3">
                <BaseInput
                  LabelText="Page Name"
                  labelClass="mainLabel"
                  iname="pagename"
                  itype="text"
                  inputClass="dashInput"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12 mb-4">
              <div class="secondaryWrapper">
                <h2 class="secondaryTitle">Section</h2>
              </div>
            </div>
            <div class="col-12">
              <div class="row py-3 border-bottom">
                <div class="col-12">
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div class="mainDetail w-100 my-3">
                        <BaseInput
                          LabelText="Section title"
                          labelClass="mainLabel"
                          iname="sectiontitle"
                          itype="text"
                          inputClass="dashInput"
                        />
                      </div>
                      <div class="mainDetail w-100 my-3">
                        <label for="" class="mainLabel">Description</label>
                        <textarea
                          name="description"
                          id=""
                          rows="6"
                          class="dashInput"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-3">
                    <div class="col-6">
                      <div class="productImage mainProductImage editableImage">
                        <img
                          src="./../../../assets/images/imagePlaceholder.png"
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
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div class="mainDetail w-100 my-3">
                        <BaseInput
                          LabelText="Video Embedded Link"
                          labelClass="mainLabel"
                          iname="link"
                          itype="url"
                          inputClass="dashInput"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div
                        class="d-sm-flex align-items-center justify-content-end"
                      >
                        <BaseButton
                          type="button"
                          btnText="Add Faq"
                          class="baseButton buttonLinkGreen my-2 me-3"
                        />
                        <BaseButton
                          type="button"
                          btnText="Remove Section"
                          class="baseButton buttonLinkRed my-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row py-3 border-bottom">
                <div class="col-12">
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div class="mainDetail w-100 my-3">
                        <BaseInput
                          LabelText="Section title"
                          labelClass="mainLabel"
                          iname="sectiontitle"
                          itype="text"
                          inputClass="dashInput"
                        />
                      </div>
                      <div class="mainDetail w-100 my-3">
                        <label for="" class="mainLabel">Description</label>
                        <textarea
                          name="description"
                          id=""
                          rows="6"
                          class="dashInput"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-3">
                    <div class="col-6">
                      <div class="productImage mainProductImage editableImage">
                        <img
                          src="./../../../assets/images/imagePlaceholder.png"
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
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div class="mainDetail w-100 my-3">
                        <BaseInput
                          LabelText="Video Embedded Link"
                          labelClass="mainLabel"
                          iname="link"
                          itype="url"
                          inputClass="dashInput"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div
                        class="d-sm-flex align-items-center justify-content-end"
                      >
                        <BaseButton
                          type="button"
                          btnText="Remove Section"
                          class="baseButton buttonLinkRed my-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row py-3">
                <div class="col-12">
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div class="mainDetail w-100 my-3">
                        <BaseInput
                          LabelText="Question 1"
                          labelClass="mainLabel"
                          iname="question1"
                          itype="text"
                          inputClass="dashInput"
                        />
                      </div>
                      <div class="mainDetail w-100 my-3">
                        <label for="" class="mainLabel">Answer 1</label>
                        <textarea
                          name="answer1"
                          id=""
                          rows="6"
                          class="dashInput"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-4 text-lg-start text-end">
                      <button class="deleteButton" type="button">
                        <font-awesome-icon :icon="['fas', 'trash']" />
                      </button>
                    </div>
                  </div>
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div class="mainDetail w-100 my-3">
                        <BaseInput
                          LabelText="Question 2"
                          labelClass="mainLabel"
                          iname="question2"
                          itype="text"
                          inputClass="dashInput"
                        />
                      </div>
                      <div class="mainDetail w-100 my-3">
                        <label for="" class="mainLabel">Answer 2</label>
                        <textarea
                          name="answer2"
                          id=""
                          rows="6"
                          class="dashInput"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-4 text-lg-start text-end">
                      <button class="deleteButton" type="button">
                        <font-awesome-icon :icon="['fas', 'trash']" />
                      </button>
                    </div>
                  </div>
                  <div class="row align-items-end mb-3">
                    <div class="col-xl-6 col-lg-8">
                      <div
                        class="d-sm-flex align-items-center justify-content-between"
                      >
                        
                        <BaseButton
                          type="button"
                          btnText="Add Section"
                          class="baseButton buttonLinkGray my-2 me-3"
                        />
                        <BaseButton
                          type="button"
                          btnText="Add More"
                          class="baseButton buttonLinkGreen my-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
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
    </div>
  </div>
</template>

<script>
import BaseButton from "./../../../components/BaseButton.vue";
import BaseInput from "./../../../components/BaseInput.vue";

export default {
  name: "EditContent",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
