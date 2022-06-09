<template>
  <div class="commentArea">
    <div
      class="commentBox mb-3"
      v-for="(item, index) in commentData"
      :key="index"
    >
      <div class="comment">
        <div class="commentInfo">
          <div class="commentatorImage">
            <img
              :src="require(`./../assets/images/${item.image}`)"
              alt="Commentator Image"
              class="img-fluid"
            />
          </div>
          <div class="commentRight">
            <p class="commentatorName primaryColor fBold m-0">
              {{ item.title }}
            </p>
            <p class="commentDate fBold m-0">{{ item.date }}</p>
            <RatingStars :rating="item.rate" />
            <p class="commentText mt-3">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="item.button">
        <button class="deleteButton" type="button" @click="deleteBtn(index)">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from "./RatingStars.vue";

export default {
  name: "CommentBox",
  props: {
    commentData: {
      type: Array,
    },
  },
  components: {
    RatingStars,
  },
  methods: {
    deleteBtn(index) {
      this.commentData.splice(index, 1);
    },
  },
};
</script>
























