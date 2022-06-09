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
          <h6 class="idBar">Vendor ID: {{ idStatus }}</h6>
        </div>
      </div>
    </div>
    <div class="row mb-3 border-bottom">
      <div class="col-12 mb-2">
        <h3 class="sectionTitle mb-3">Rating And Reviews</h3>

        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="userIimageFrame my-3">
            <img
              src="./../../../../assets/images/userPlaceholder.png"
              alt="User Image"
              class="userImage img-fluid"
            />
          </div>
          <div class="info">
            <h6 class="text-uppercase">Mark Carson</h6>
            <router-link to="#" class="cyanColor">View Profile</router-link>
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-lg-10 mb-2">
        <h3 class="sectionTitle mb-3">Product A</h3>
        <div class="row">
          <div class="col-xl-5 col-lg-8">
            <div class="productImages">
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
        <div class="row">
          <div class="col-lg-4">
            <div class="mainDetail my-3">
              <label for="" class="mainLabel">Price</label>
              <p class="mainText">$100</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mainDetail my-3">
              <label for="" class="mainLabel">Category</label>
              <p class="mainText">Abc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3 pt-3">
      <div class="col-xl-6 col-lg-8">
        <div class="row">
          <div class="col-lg-4 text-center">
            <h3 class="overallRating">4/5</h3>
            <RatingStars :rating="4" />
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
import RatingStars from "./../../../../components/RatingStars.vue";
import CommentBox from "./../../../../components/CommentBox.vue";

export default {
  name: "RatingAndReviews",
  components: {
    RatingStars,
    CommentBox,
  },
  data() {
    return {
      idStatus: "",
      comments: [
        {
          image: "userPlaceholder.png",
          title: "User C",
          date: "06/05/2022",
          rate: 4,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla ex? Voluptates, molestiae dolores ipsa quas eum ad aut itaque!",
          button: true,
        },
        {
          image: "loginBg.png",
          title: "User A",
          date: "06/06/2022",
          rate: 3,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla ex? Voluptates, molestiae dolores ipsa quas eum ad aut itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          button: true,
        },
        {
          image: "avatar.jpg",
          title: "User D",
          date: "06/06/2022",
          rate: 5,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nulla ex? Voluptates, molestiae dolores ipsa quas eum ad aut itaque!",
          button: true,
        },
      ],
    };
  },
  created() {
    this.idStatus = this.$route.params.status;
  },
  methods: {
    delete(index) {
      alert();
      this.comments.splice(index, 1);
    },
  },
};
</script>
