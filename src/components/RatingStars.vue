<template>
  <div class="ratingStars">
    <font-awesome-icon
      :icon="[`${rating >= 1 ? 'fas' : 'far'}`, 'star']"
      class="star"
    />
    <font-awesome-icon
      :icon="[`${rating >= 2 ? 'fas' : 'far'}`, 'star']"
      class="star"
    />
    <font-awesome-icon
      :icon="[`${rating >= 3 ? 'fas' : 'far'}`, 'star']"
      class="star"
    />
    <font-awesome-icon
      :icon="[`${rating >= 4 ? 'fas' : 'far'}`, 'star']"
      class="star"
    />
    <font-awesome-icon
      :icon="[`${rating >= 5 ? 'fas' : 'far'}`, 'star']"
      class="star"
    />
  </div>
</template>

<script>
export default {
  name: "RatingStars",
  props: {
    rating: {
      type: Number,
      default: 1,
    },
  },
  methods: {},
};
</script>

<style scoped>
.star {
  color: #ff9529;
}
</style>