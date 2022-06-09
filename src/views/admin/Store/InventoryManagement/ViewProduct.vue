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
    <div class="row align-items-center mb-3">
      <div class="col-lg-6 mb-2">
        <div class="row productImages">
          <div class="col-12">
            <div class="productImage mainProductImage">
              <img
                src="./../../../../assets/images/loginBg.png"
                alt="Product Image"
              />
            </div>
            <div class="d-flex align-items-center gap-2">
              <div class="productImage secondaryProductImage">
                <img
                  src="./../../../../assets/images/loginBg.png"
                  alt="Secondary Product Image"
                />
              </div>
              <div class="productImage secondaryProductImage">
                <img
                  src="./../../../../assets/images/loginBg.png"
                  alt="Secondary Product Image"
                />
              </div>
              <div class="productImage secondaryProductImage">
                <img
                  src="./../../../../assets/images/loginBg.png"
                  alt="Secondary Product Image"
                />
              </div>
              <div class="productImage secondaryProductImage">
                <img
                  src="./../../../../assets/images/loginBg.png"
                  alt="Secondary Product Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h3 class="secondaryColor m-0">Product Abc</h3>
        <p class="secondaryColor m-0">By Store Name</p>
        <h2 class="secondaryColor m-0">$50.00</h2>
        <div class="attribute my-3">
          <h6 class="secondaryColor">Select Size</h6>
          <div class="d-flex">
           <BaseAttribute 
           attributeName="size"
           attributeFor="small"
           attributeLabel="S"
           />
           <BaseAttribute 
           attributeName="size"
           attributeFor="medium"
           attributeLabel="M"
           />
           <BaseAttribute 
           attributeName="size"
           attributeFor="large"
           attributeLabel="L"
           />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="mainDetail my-3">
              <label for="" class="mainLabel">In Stock</label>
              <p class="mainText">50</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mainDetail my-3">
              <label for="" class="mainLabel">Sold</label>
              <p class="mainText">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <div class="mainDetail my-3">
          <label for="" class="mainLabel">Specification</label>
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

    <div class="row mb-3 pt-3">
      <div class="col-xl-6 col-lg-8">
        <div class="row">
          <div class="col-lg-4 text-center">
            <h3 class="overallRating">4/5</h3>
            <RatingStars :rating="5" />
            <p class="text-decoration-underline">150 Reviews</p>
          </div>
          <div class="col-lg-8">
            <div class="ratingBars mb-2">
              <RatingStars :rating="5" />
              <div class="d-flex">
                <b-progress
                  :value="100"
                  :max="100"
                  class="ratingBar"
                ></b-progress>
                <p class="fBold">40</p>
              </div>
            </div>
            <div class="ratingBars mb-2">
              <RatingStars :rating="4" />
              <div class="d-flex">
                <b-progress
                  :value="80"
                  :max="100"
                  class="ratingBar"
                ></b-progress>
                <p class="fBold">36</p>
              </div>
            </div>
            <div class="ratingBars mb-2">
              <RatingStars :rating="3" />
              <div class="d-flex">
                <b-progress
                  :value="60"
                  :max="100"
                  class="ratingBar"
                ></b-progress>
                <p class="fBold">28</p>
              </div>
            </div>
            <div class="ratingBars mb-2">
              <RatingStars :rating="2" />
              <div class="d-flex">
                <b-progress
                  :value="40"
                  :max="100"
                  class="ratingBar"
                ></b-progress>
                <p class="fBold">20</p>
              </div>
            </div>
            <div class="ratingBars mb-2">
              <RatingStars :rating="1" />
              <div class="d-flex">
                <b-progress
                  :value="20"
                  :max="100"
                  class="ratingBar"
                ></b-progress>
                <p class="fBold">14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-8">
        <CommentBox :commentData="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from "../../../../components/RatingStars.vue";
import CommentBox from "../../../../components/CommentBox.vue";
import BaseAttribute from "../../../../components/BaseAttribute.vue";

export default {
  name: "ViewProduct",
  components: {
    RatingStars,
    CommentBox,
    BaseAttribute,
  },
  data() {
    return {
      comments: [
        {
          image: "userPlaceholder.png",
          title: "User C",
          date: "06/05/2022",
          rate: 4,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla ex? Voluptates, molestiae dolores ipsa quas eum ad aut itaque!",
          button: false,
        },
        {
          image: "avatar.jpg",
          title: "User D",
          date: "06/06/2022",
          rate: 5,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla ex? Voluptates, molestiae dolores ipsa quas eum ad aut itaque!",
          button: false,
        },
        {
          image: "loginBg.png",
          title: "User A",
          date: "06/06/2022",
          rate: 3,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla ex? Voluptates, molestiae dolores ipsa quas eum ad aut itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          button: false,
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
