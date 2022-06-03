<template>
  <div class="main">
    <div class="header">
      <Header @navopen="navOpen()" />
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <div class="contentWrpapper">
        <div class="dashCard px-lg-4 px-2 py-lg-5 py-3 overflow-hidden">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      openSidebar: true,
    };
  },
  methods: {
    navOpen() {
      this.openSidebar = !this.openSidebar;
      let sideBar = document.querySelector(".sidebar");
      let content = document.querySelector(".content");

      if (this.openSidebar) {
        sideBar.style.width = "280px";
        content.style.marginLeft = "280px";
        sideBar.classList.remove("collapsed");
        content.classList.remove("collapsed");
      } else {
        sideBar.style.width = "0px";
        content.style.marginLeft = "0px";
        sideBar.classList.add("collapsed");
        content.classList.add("collapsed");
      }
    },
  },
};
</script>

<style scoped>
.header {
  background: #fff;
  min-height: 7rem;
  box-shadow: 0px 1px 3px #ccc;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.sidebar {
  position: fixed;
  top: 7rem;
  width: 280px;
  height: calc(100% - 4rem);
  z-index: 98;
  background: #000;
  transition: 0.2s linear;
  overflow-y: auto;
}

.content {
  margin-top: 7rem;
  margin-left: 280px;
  transition: 0.2s linear;
  width: calc(100% - 280px);
  background: #f6f6f6;
}

.contentWrpapper {
  padding: 3rem 1.5rem 1rem 1.5rem;
}

.content.collapsed {
  width: 100%;
}

@media screen and (max-width: 991px) {
  .content {
    margin-left: 0 !important;
    width: 100% !important;
  }
  .sidebar {
    width: 280px !important;
    left: 0 ;
    
  }
  .sidebar.collapsed{
    left: -280px;
  }

}
</style>