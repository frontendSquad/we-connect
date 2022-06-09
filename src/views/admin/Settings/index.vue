<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Settings</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <div class="customTabs mt-3">
          <b-tabs content-class="mt-5">
            <b-tab title="Tax" active>
              <form action="">
                <div class="row">
                  <div class="col-12">
                    <h3 class="sectionTitle">Set Tax Percentage</h3>
                    <div
                      class="mainDetail d-flex align-items-baseline w-100 my-3"
                    >
                      <label for="" class="mainLabel me-5">Tax %</label>
                      <BaseInput
                        iname="tax"
                        itype="number"
                        inputClass="dashInput"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <BaseButton
                      type="submit"
                      btnText="Save"
                      class="baseButton primaryButton"
                    />
                  </div>
                </div>
              </form>
            </b-tab>
            <b-tab title="Content Management">
              <div class="row">
                <div class="col-12">
                  <div class="user-listing-top">
                    <div
                      class="d-xl-flex align-items-end justify-content-between"
                    >
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
                        <div
                          class="
                            d-xl-flex
                            align-items-center
                            justify-content-end
                          "
                        >
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
                    <div
                      class="d-xl-flex align-items-end justify-content-between"
                    >
                      <div class="userInput mb-3">
                        <div
                          class="
                            d-xl-flex
                            align-items-center
                            justify-content-end
                          "
                        >
                          <div class="dataTables_filter">
                            <div class="d-md-flex align-items-center">
                              <label for="" class="dashLabel mb-2 mb-xl-0 me-1"
                                >Show Enteries</label
                              >
                              <select
                                class="d-inline-block dashInput sm-dropdown"
                              >
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
                          <th
                            v-for="(heading, index) in contentHead"
                            :key="index"
                          >
                            {{ heading }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in contentList" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>{{ item.id }}</td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.name }}</td>
                          <td>
                            <div>
                              <select
                                name=""
                                id=""
                                class="statusBar"
                                v-model="item.status"
                                :class="
                                  item.status
                                    ? 'statusDelivered'
                                    : 'statusRejected'
                                "
                              >
                                <option :value="false" class="statusRejected">
                                  Inactive
                                </option>
                                <option :value="true" class="statusDelivered">
                                  Active
                                </option>
                              </select>
                            </div>
                          </td>
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
                                    to="/admin/settings/view-content/"
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
                                          <span class="text-dark">View</span>
                                        </div>
                                      </div>
                                    </div>
                                  </router-link>
                                </b-dropdown-item>
                                <b-dropdown-item>
                                  <router-link
                                    to="/admin/settings/edit-content/"
                                    class="text-decoration-none"
                                  >
                                    <div class="dropdownContent">
                                      <div class="d-flex align-items-center">
                                        <div class="mediaLeft">
                                          <font-awesome-icon
                                            :icon="['fas', 'pen-to-square']"
                                            class="text-dark"
                                          />
                                        </div>
                                        <div class="mediaRight">
                                          <span class="text-dark">Edit</span>
                                        </div>
                                      </div>
                                    </div>
                                  </router-link>
                                </b-dropdown-item>
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
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./../../../components/BaseButton.vue";
import BaseInput from "./../../../components/BaseInput.vue";

export default {
  name: "Settings",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      contentHead: [
        "S.No",
        "Page ID",
        "Page Name",
        "Added On",
        "Status",
        "Action",
      ],
      contentList: [
        {
          id: "001",
          name: "Home",
          date: "mm/dd/yyyy",
          status: true,
        },
        {
          id: "002",
          name: "Home",
          date: "mm/dd/yyyy",
          status: false,
        },
        {
          id: "003",
          name: "Home",
          date: "mm/dd/yyyy",
          status: true,
        },
        {
          id: "004",
          name: "Home",
          date: "mm/dd/yyyy",
          status: false,
        },
        {
          id: "005",
          name: "Home",
          date: "mm/dd/yyyy",
          status: false,
        },
      ],
    };
  },
};
</script>
