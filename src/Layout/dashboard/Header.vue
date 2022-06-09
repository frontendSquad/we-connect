<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="brand px-2">
      <router-link to="/admin/dashboard">
        <img src="../../assets/images/logo.png" alt="" class="logoImage" />
      </router-link>
    </div>
    <div class="navMenu px-3">
      <ul
        class="d-flex align-items-center justify-content-end list-unstyled m-0"
      >
        <li>
          <b-dropdown
            size="md"
            toggle-class="text-decoration-none bg-none"
            class="navItems notificationItems"
            right
          >
            <template #button-content>
              <font-awesome-icon :icon="['fas', 'bell']" />
            </template>
            <b-dropdown-item
              href="#"
              v-for="(item, index) in notifications"
              :key="index"
              class="notificationItem"
            >
              <div class="d-flex">
                <div class="mediaLeft">
                  <font-awesome-icon :icon="['fas', 'bell']" />
                </div>
                <div class="mediaRight">
                  <p class="notificationText mb-2">
                    {{ item.notificationText }}
                  </p>
                  <div
                    class="d-flex align-items-baseline justify-content-between"
                  >
                    <p class="primaryColor mb-2">
                      {{ item.notificationDate }}
                    </p>
                    <p class="primaryColor mb-2">
                      {{ item.notificationTime }}
                    </p>
                  </div>
                  <router-link
                    to="/admin/notifications"
                    class="text-black fBold text-decoration-underline"
                    >View All</router-link
                  >
                </div>
              </div>
            </b-dropdown-item>
          </b-dropdown>
        </li>
        <li>
          <b-dropdown
            size="md"
            toggle-class="text-decoration-none bg-none"
            class="navItems"
            right
            no-caret
          >
            <template #button-content>
              <div class="d-flex align-items-center">
                <div class="mediaLeft">
                  <div class="avatar">
                    <img src="./../../assets/images/avatar.jpg" alt="User Avatar" />
                  </div>
                </div>
                <div class="mediaRight">
                  <span class="userName d-none d-md-block">Mark Carson</span>
                </div>
              </div>
            </template>
            <b-dropdown-item>
              <router-link to="/admin/profile" class="text-decoration-none">
                <div class="dropdownContent">
                  <div class="d-flex align-items-center">
                    <div class="mediaLeft">
                      <font-awesome-icon
                        :icon="['fas', 'user']"
                        class="text-dark"
                      />
                    </div>
                    <div class="mediaRight">
                      <span class="text-dark">Profile</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item-button class="notBtn">
              <div class="dropdownContent">
                <div class="d-flex align-items-center">
                  <div class="mediaLeft">
                    <font-awesome-icon
                      :icon="['fas', 'arrow-right-from-bracket']"
                      class="text-dark"
                    />
                  </div>
                  <div class="mediaRight">
                    <span class="text-dark">Logout</span>
                  </div>
                </div>
              </div>
            </b-dropdown-item-button>
          </b-dropdown>
        </li>
        <li>
          <button class="toggleBtn notBtn" @click="sideToggle()">
            <font-awesome-icon :icon="['fas', 'bars']" class="text-dark" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      notifications: [
        {
          notificationText: "New user has been registered on the platform",
          notificationDate: "Dec 19, 2020",
          notificationTime: "10:30 AM",
        },
        {
          notificationText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          notificationDate: "Dec 19, 2020",
          notificationTime: "05:15 AM",
        },
        {
          notificationText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          notificationDate: "Dec 18, 2020",
          notificationTime: "11:16 PM",
        },
      ],
    };
  },
  methods: {
    sideToggle() {
      this.$emit("navopen");
    },
  },
};
</script>

<style>
.brand {
  width: 280px;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoImage {
  width: 140px;
}

.toggleBtn {
  font-size: 18px;
}

.toggleBtn svg path {
  color: #999;
}

.navItems .btn,
.navItems.show .btn,
.navItems .btn:hover,
.navItems .btn:focus {
  background: #fff0 !important;
  border: none !important;
  color: #999 !important;
  outline: none !important;
  box-shadow: none !important;
}

.navMenu .dropdown-item:hover,
.navMenu .dropdown-item.active,
.navMenu .dropdown-item:active {
  color: #fff !important;
  background-color: var(--primaryColor) !important;
}

.navMenu .dropdown-item:hover p,
.navMenu .dropdown-item:hover span,
.navMenu .dropdown-item:hover svg path {
  color: #fff !important;
  fill: #fff;
}

.notificationItem {
  padding: 8px 4px;
  min-width: 24rem;
}

.mediaLeft {
  flex: 0 0 35px;
  font-size: 20px;
}

.notificationText {
  white-space: break-spaces;
}

.navMenu .dropdown-menu {
  border: none !important;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #e0e0e0;
}

.notificationItems .dropdown-menu {
  max-height: 20rem;
  overflow-y: auto;
}

.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 99px;
  margin-right: 6px;
}

.avatar img {
  width: 100%;
  height: 40px;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 991px) {
  .brand {
    width: auto;
  }
  .sidebar {
    position: absolute;
  }
}
</style>