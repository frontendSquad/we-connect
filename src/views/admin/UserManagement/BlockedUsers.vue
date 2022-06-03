<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">User Management</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Blocked Users</h2>
        </div>
      </div>
      <div class="col-12">
        <div class="user-listing-top">
          <div class="d-xl-flex align-items-end justify-content-between">
            <div class="userInput mb-3">
              <div class="d-md-flex align-items-center">
                <label for="" class="dashLabel mb-3 mb-xl-0 me-1"
                  >Sort By</label
                >
                <div class="d-sm-flex">
                  <div class="mb-3 mb-xl-0 me-sm-1">
                    <input class="dashInput" type="date" />
                  </div>
                  <div class="mb-3 mb-xl-0">
                    <input class="dashInput" type="date" />
                  </div>
                </div>
              </div>
            </div>
            <div class="userInput mb-3">
              <div class="d-xl-flex align-items-center justify-content-end">
                <div class="dataTables_filter">
                  <div class="dashSearchWrap">
                    <form action="" method="POST">
                      <input
                        type="search"
                        id=""
                        class="dashInput search-input w-100"
                        placeholder="Search"
                      />
                      <button type="button" class="searchIcon">
                        <font-awesome-icon
                          :icon="['fas', 'magnifying-glass']"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-xl-flex align-items-end justify-content-between">
            <div class="userInput mb-3">
              <div class="d-xl-flex align-items-center justify-content-end">
                <div class="dataTables_filter">
                  <div class="d-md-flex align-items-center">
                    <label for="" class="dashLabel mb-2 mb-xl-0 me-1"
                      >Show Enteries</label
                    >
                    <select class="d-inline-block dashInput sm-dropdown">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-borderless customTable">
            <thead>
              <tr>
                <th v-for="(heading, index) in UserLisitingHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in UserLisiting" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.date }}</td>
                <td>
                  <div class="remove-box">
                    <b-dropdown
                      size="md"
                      toggle-class="text-decoration-none bg-none"
                      class="navItems"
                      right
                      no-caret
                    >
                      <template #button-content>
                        <div>
                          <font-awesome-icon
                            :icon="['fas', 'ellipsis-vertical']"
                            class="text-dark"
                          />
                        </div>
                      </template>
                      <b-dropdown-item>
                        <router-link
                          :to="{
                            name: 'ViewBlockedUser',
                            params: { status: item.id },
                          }"
                          class="text-decoration-none"
                        >
                          <div class="dropdownContent">
                            <div class="d-flex align-items-center">
                              <div class="mediaLeft">
                                <font-awesome-icon
                                  :icon="['fas', 'eye']"
                                  class="text-dark"
                                />
                              </div>
                              <div class="mediaRight">
                                <span class="text-dark">View Profile</span>
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item-button
                        class="notBtn"
                        @click="$bvModal.show('unblockUser')"
                      >
                        <div class="dropdownContent">
                          <div class="d-flex align-items-center">
                            <div class="mediaLeft">
                              <font-awesome-icon
                                :icon="['fas', 'unlock']"
                                class="text-dark"
                              />
                            </div>
                            <div class="mediaRight">
                              <span class="text-dark">Unblock</span>
                            </div>
                          </div>
                        </div>
                      </b-dropdown-item-button>
                    </b-dropdown>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12">
        <div class="row align-items-center px-3 w-100 px-4">
          <div class="col-sm-12 col-md-6 mb-sm-0 mb-3">
            <div
              class="dataTables_info"
              id="DataTables_Table_0_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 20 of 52 entries
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-flex justify-content-end">
            <b-pagination class="customPagination"></b-pagination>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="unblockUser" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('unblockUser')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent text-center">
            <img
              src="./../../../assets/images/question.png"
              alt=""
              class="modalImage mb-3"
            />
            <h2 class="modalHeading">Unblock User</h2>
            <p class="modalText">Are you sure you want to unblock this user?</p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('unblockUser');
                  $bvModal.show('unblockUser2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('unblockUser')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="unblockUser2"
      :modalSuccess="true"
      modalText="User ABC has been Unblocked."
      btnText="Ok"
    />
  </div>
</template>

<script>
import BaseButton from "../../../components/BaseButton.vue";
import BaseModal from "../../../components/BaseModal.vue";

export default {
  name: "BlockedUsers",
  components: {
    BaseButton,
    BaseModal,
  },
  data() {
    return {
      UserLisitingHead: [
        "S.No",
        "User ID",
        "Username",
        "Email Address",
        "Registration Date",
        "Action",
      ],
      UserLisiting: [
        {
          id: "001",
          username: "Abc",
          email: "abc@xyz.com",
          date: "mm/dd/yyyy",
        },
        {
          id: "002",
          username: "Abc",
          email: "abc@xyz.com",
          date: "mm/dd/yyyy",
        },
        {
          id: "003",
          username: "Abc",
          email: "abc@xyz.com",
          date: "mm/dd/yyyy",
        },
        {
          id: "004",
          username: "Abc",
          email: "abc@xyz.com",
          date: "mm/dd/yyyy",
        },
        {
          id: "005",
          username: "Abc",
          email: "abc@xyz.com",
          date: "mm/dd/yyyy",
        },
      ],
    };
  },
};
</script>
