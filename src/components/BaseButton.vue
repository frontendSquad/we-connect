<template>
  <button :type="type" @click="handleClick">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    btnText: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style>
.baseButton {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  border: 1px solid;
  border-radius: 99px;
  padding: 15px 40px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s linear;
  cursor: pointer;
}

.primaryButton {
  background: var(--secondaryColor);
  color: #fff;
  border-color: var(--secondaryColor);
}

.primaryButton:hover {
  background: #fff0;
  color: var(--secondaryColor);
}

.secondaryButton {
  background: #fff ;
  color: var(--secondaryColor);
  border-color: var(--secondaryColor);
}

.secondaryButton:hover {
  background: var(--secondaryColor);
  color: #fff;
}


</style>