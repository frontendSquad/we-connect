<template>
  <ul class="nav flex-column sideMenu">
    <li class="nav-item navContent">
      <div class="">
        <router-link to="/admin/dashboard" class="nav-link text-light">
          <font-awesome-icon :icon="['fas', 'border-all']" /><span
            >Dashboard</span
          ></router-link
        >
      </div>
    </li>
    <li class="nav-item">
      <div class="navContent">
        <button
          class="notBtn d-block nav-link text-start w-100"
          @click="openUserManagement = !openUserManagement"
        >
          <font-awesome-icon :icon="['fas', 'users']" /><span
            >User Management</span
          >
        </button>
        <ul
          class="submenu list-unstyled"
          :class="openUserManagement ? 'd-block' : 'd-none'"
        >
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/user-management"
                class="nav-link text-light"
              >
                <span>User Listing</span></router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <div class="navContent">
        <button
          class="notBtn d-block nav-link text-start w-100"
          @click="openVendor = !openVendor"
        >
          <font-awesome-icon :icon="['fas', 'store']" /><span>Vendor</span>
        </button>
        <ul
          class="submenu list-unstyled"
          :class="openVendor ? 'd-block' : 'd-none'"
        >
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/vendor/vendor-listing"
                class="nav-link text-light"
              >
                <span>Vendor Listing</span></router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/vendor/vendor-approval"
                class="nav-link text-light"
              >
                <span>Vendor Approval</span></router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <div class="navContent">
        <button
          class="notBtn d-block nav-link text-start w-100"
          @click="openStore = !openStore"
        >
          <font-awesome-icon :icon="['fas', 'store']" /><span>Store</span>
        </button>
        <ul
          class="submenu list-unstyled"
          :class="openStore ? 'd-block' : 'd-none'"
        >
          <li class="nav-item">
            <div class="navContent">
              <router-link to="/admin/store" class="nav-link text-light">
                <span>Store</span></router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/store/inventory-management"
                class="nav-link text-light"
              >
                <span>Inventory Management</span></router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/store/category-management"
                class="nav-link text-light"
              >
                <span>Category Management</span></router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/store/variation-management"
                class="nav-link text-light"
              >
                <span>Variation Management</span></router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="navContent">
              <router-link
                to="/admin/store/order-logs"
                class="nav-link text-light"
              >
                <span>Order Logs</span></router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item navContent">
      <div class="">
        <router-link to="/admin/payment-log" class="nav-link text-light">
          <font-awesome-icon :icon="['fas', 'credit-card']" /><span
            >Payment Log</span
          ></router-link
        >
      </div>
    </li>
    <li class="nav-item navContent">
      <div class="">
        <router-link to="/admin/settings" class="nav-link text-light">
          <font-awesome-icon :icon="['fas', 'cog']" /><span
            >Settings</span
          ></router-link
        >
      </div>
    </li>
    <li class="nav-item navContent">
      <div class="">
        <router-link to="/admin/feedback" class="nav-link text-light">
          <font-awesome-icon :icon="['fas', 'message']" /><span
            >Feedback</span
          ></router-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  components: {},
  props: {
    openSidebar: {
      type: Boolean,
    },
  },
  data() {
    return {
      openUserManagement: false,
      openVendor: false,
      openStore: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.sideMenu .nav-item span {
  color: #fff;
  font-weight: 500;
}

.sideMenu .nav-item svg {
  margin: 0px 5px !important;
  width: 26px;
  vertical-align: middle;
}

.sideMenu .nav-item svg path {
  fill: #fff;
}

.sideMenu .nav-link {
  padding: 0;
}

.sideMenu .nav-item .nav-link {
  padding: 16px 10px;
}

.sideMenu .nav-link.active,
.sideMenu .nav-link:active {
  background: var(--primaryColor);
}

.sideMenu .submenu .nav-link.active,
.sideMenu .submenu .nav-link:active {
  background: #fff0 !important;
}

.sideMenu .submenu .nav-link {
  font-size: 15px;
}

.sideMenu .submenu .nav-item .nav-link {
  padding: 5px 10px;
  margin-left: 36px;
}

.sideMenu .submenu .nav-item .nav-link span {
  color: #999;
}

.sideMenu .submenu .nav-link.active span,
.sideMenu .submenu .nav-link:active span {
  color: var(--primaryColor);
}
</style>