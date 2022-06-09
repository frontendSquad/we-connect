<template>
  <div class="attribute">
    <input
      type="radio"
      :name="attributeName"
      class="d-none"
      :id="attributeFor"
    />
    <label :for="attributeFor" class="attributeLabel">{{
      attributeLabel
    }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseAttribute",
  props: {
    attributeName: {
      type: String,
    },
    attributeFor: {
      type: String,
    },
    attributeLabel: {
      type: String,
    },
  },
  methods: {},
};
</script>


<style scoped>
.attributeLabel {
  color: #aeaeae;
  background: #fbfbfb;
  font-weight: 500;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.attribute input[type="radio"]:checked ~ .attributeLabel {
  background: var(--primaryColor);
  color: #fff;
}
</style>