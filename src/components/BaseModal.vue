<template>
  <b-modal :id="modalId" centered hide-footer hide-header>
    <div class="customModal">
      <div class="modalHeader">
        <button class="closeModal" @click="$bvModal.hide(modalId)">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
      <div class="modalBody">
        <div class="modalContent text-center">
          <img :src="require(`./../assets/images/${modalSuccess ? 'success.png' : 'alert.png'}`)" alt="" class="modalImage"/>
          <h2 class="modalHeading my-3">{{ modalSuccess ? 'Confirmation' : 'Alert' }}</h2>
          <p class="modalText">{{ modalText }}</p>
          <div v-if="!modalSuccess">
          <BaseButton
            :type="modalButtonType"
            :btnText="modalButtonText"
            class="baseButton primaryButton mt-3"
            @click="
              $bvModal.hide(modalId);
            "
          />
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

import BaseButton from "./../components/BaseButton.vue";

export default {
  name: "BaseModal",
  props: {
    modalId: {
      type: String,
    },
    modalSuccess: {
      type: Boolean,
    },
    modalText: {
      type: String,
    },
    modalButtonType: {
      type: String,
      default: "button",
    },
    modalButtonText: {
      type: String,
      default: "Ok",
    },
  },
  components: {
    BaseButton
  }
};
</script>
