<template>
  <section class="loginPage">
    <b-container>
      <b-row>
        <b-col lg="5" class="ms-lg-auto">
          <div class="loginCard">
            <div class="loginLogo text-center mb-3">
              <img
                src="../../../assets/images/logo.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="formHeading text-center my-4">
              <h2>Login</h2>
              <p>Login to your account.</p>
            </div>
            <form @submit="onSubmit">
              <BaseInput
                LabelText="Email"
                labelClass="siteLabel"
                iname="email"
                itype="email"
                inputText="Enter Email"
                inputClass="siteInput"
                fieldRequired="true"
              />
              <BaseInput
                LabelText="Password"
                labelClass="siteLabel"
                iname="password"
                itype="password"
                inputText="Enter Password"
                inputClass="siteInput"
                addLeftIcon="passBox"
                fieldRequired="true"
              />

              <div
                class="
                  d-sm-flex
                  align-items-baseline
                  justify-content-between
                  mb-4
                "
              >
                <b-form-checkbox value="remember" class="grayColor text-start"
                  >Remember Me</b-form-checkbox
                >
                <p
                  class="pointer text-danger text-decoration-underline text-end"
                  @click="$bvModal.show('modalForget')"
                >
                  Forget Password?
                </p>
              </div>
              <BaseButton
                type="submit"
                btnText="Sign In"
                class="baseButton primaryButton w-100"
              />
            </form>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="modalForget" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('modalForget')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent">
            <h2 class="modalHeading">Password Recovery</h2>
            <div class="modalForm my-4">
              <form>
                <BaseInput
                  LabelText="Email"
                  labelClass="siteLabel"
                  iname="email"
                  itype="email"
                  inputText="Enter Email Address"
                  inputClass="siteInput"
                  fieldRequired="true"
                />
                <BaseButton
                  type="button"
                  btnText="Continue"
                  class="baseButton primaryButton w-100 mt-3"
                  @click="
                    $bvModal.hide('modalForget');
                    $bvModal.show('modalForget2');
                  "
                />
              </form>
            </div>
            <div class="modalLink text-center">
              <button class="notBtn" @click="$bvModal.hide('modalForget')">
                <font-awesome-icon
                  :icon="['fas', 'left-long']"
                  class="me-2"
                />Back To Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="modalForget2" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('modalForget')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent">
            <h2 class="modalHeading">Password Recovery</h2>
            <div class="modalForm my-4">
              <form>
                <BaseInput
                  LabelText="Verification Code"
                  labelClass="siteLabel"
                  iname="code"
                  itype="number"
                  inputText="Enter Verification Code"
                  inputClass="siteInput"
                  fieldRequired="true"
                />
                <BaseButton
                  type="button"
                  btnText="Continue"
                  class="baseButton primaryButton w-100 mt-3"
                  @click="
                    $bvModal.hide('modalForget2');
                    $bvModal.show('modalForget3');
                  "
                />
              </form>
            </div>
            <div class="modalLink text-center">
              <button class="notBtn" @click="$bvModal.hide('modalForget2')">
                <font-awesome-icon
                  :icon="['fas', 'left-long']"
                  class="me-2"
                />Back To Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="modalForget3" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('modalForget')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent">
            <h2 class="modalHeading">Password Recovery</h2>
            <div class="modalForm my-4">
              <form>
                <BaseInput
                  LabelText="New Password"
                  labelClass="siteLabel"
                  iname="newPassword"
                  itype="password"
                  inputText="Enter Password"
                  inputClass="siteInput"
                  fieldRequired="true"
                />
                <BaseInput
                  LabelText="Confirm New Password"
                  labelClass="siteLabel"
                  iname="confirmPassword"
                  itype="password"
                  inputText="Confirm Password"
                  inputClass="siteInput"
                  fieldRequired="true"
                />
                <BaseButton
                  type="button"
                  btnText="Update"
                  class="baseButton primaryButton w-100 mt-3"
                  @click="$bvModal.hide('modalForget3')"
                />
              </form>
            </div>
            <div class="modalLink text-center">
              <button class="notBtn" @click="$bvModal.hide('modalForget3')">
                <font-awesome-icon
                  :icon="['fas', 'left-long']"
                  class="me-2"
                />Back To Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="modal2"
      :modalSuccess="false"
      modalText="The verification code is Incorrect."
      btnText="Ok"
    />
  </section>
</template>

<script>
import BaseButton from "./../../../components/BaseButton.vue";
import BaseInput from "../../../components/BaseInput.vue";
import BaseModal from "../../../components/BaseModal.vue";
export default {
  components: {
    BaseButton,
    BaseInput,
    BaseModal,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: [],
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$router.push("/admin/dashboard");
    },
    closeModal() {},
  },
};
</script>

<style>


.loginPage {
    background: url(./../../../assets/images/loginBg.png) no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loginCard {
    background: #fff;
    border-radius: 0px;
    padding: 2rem 3rem;
    margin: 0 auto;
    width: 100%;
}

.formHeading h2 {
    font-size: 36px;
    color: var(--secondaryColor);
}

.formHeading p {
    font-size: 25px;
    font-weight: 400;
    color: var(--secondaryColor);
}
</style>