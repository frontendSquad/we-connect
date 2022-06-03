<template>
  <div class="formGroup mb-3">
    <slot name="LabelText">
      <label :class="labelClass" v-if="LabelText != ''"
        >{{ LabelText
        }}<span class="text-danger" v-if="fieldRequired">*</span>:</label
      >
    </slot>
    <slot name="inputClass">
      <div class="position-relative" :class="addLeftIcon">
        <input
          :type="itype"
          :name="iname"
          :class="inputClass"
          :placeholder="inputText"
          :value="value"
        />
        <div class="passDisplay" v-if="addLeftIcon">
          <font-awesome-icon
            v-if="itype == 'password'"
            :icon="['fas', 'eye']"
            @click="showPass"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'eye-slash']"
            @click="showPass"
          />
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    LabelText: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
    itype: {
      type: String,
    },
    iname: {
      type: String,
    },
    inputClass: {
      type: String,
      default: "siteLabel",
    },
    inputText: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    addLeftIcon: {
      type: String,
    },
    fieldRequired: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showPass() {
      if (this.itype == "password") {
        this.itype = "text";
      } else {
        this.itype = "password";
      }
    },
  },
};
</script>

<style scoped>
.passDisplay {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.passDisplay svg path {
  fill: #b2b2b2;
}

.passBox .siteInput {
  padding-right: 40px;
}
</style>