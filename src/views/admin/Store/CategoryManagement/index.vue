<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Store</h1>
          </div>
        </div>
      </div>
      <div class="col-xl-6 mb-3 text-end">
        <router-link
          to="/admin/store/category-management/add-category"
          class="buttonLinks buttonLinkGray"
          >Add</router-link
        >
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Category Management</h2>
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
                <th v-for="(heading, index) in categoryHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in categoryList" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.categoryName }}</td>
                <td>{{ item.products }}</td>
                <td>
                  <span v-if="item.status" class="statusBar statusDelivered"
                    >Active</span
                  >
                  <span v-else class="statusRandom statusBar">Inactive</span>
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
                          :to="{
                            name: 'EditCategory',
                            params: { status: item.id },
                          }"
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
                      <b-dropdown-item-button class="notBtn">
                        <div
                          class="dropdownContent"
                          v-if="item.status"
                          @click="$bvModal.show('inactiveCategory')"
                        >
                          <div class="d-flex align-items-center">
                            <div class="mediaLeft">
                              <font-awesome-icon
                                :icon="['fas', 'toggle-off']"
                                class="text-dark"
                              />
                            </div>
                            <div class="mediaRight">
                              <span class="text-dark">Inactive</span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="dropdownContent"
                          v-else
                          @click="$bvModal.show('activeCategory')"
                        >
                          <div class="d-flex align-items-center">
                            <div class="mediaLeft">
                              <font-awesome-icon
                                :icon="['fas', 'toggle-on']"
                                class="text-dark"
                              />
                            </div>
                            <div class="mediaRight">
                              <span class="text-dark">Active</span>
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

    <b-modal id="inactiveCategory" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('inactiveCategory')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent text-center">
            <img
              src="./../../../../assets/images/question.png"
              alt=""
              class="modalImage mb-3"
            />
            <h2 class="modalHeading">Inactivate Category</h2>
            <p class="modalText">Are you sure you want to inactivate abc category?</p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('inactiveCategory');
                  $bvModal.show('inactiveCategory2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('inactiveCategory')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="inactiveCategory2"
      :modalSuccess="true"
      modalText="The category has been inactivated."
      btnText="Ok"
    />

    <b-modal id="activeCategory" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('activeCategory')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="modalBody">
          <div class="modalContent text-center">
            <img
              src="./../../../../assets/images/question.png"
              alt=""
              class="modalImage mb-3"
            />
            <h2 class="modalHeading">Activate Category</h2>
            <p class="modalText">Are you sure you want to activate abc category?</p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('activeCategory');
                  $bvModal.show('activeCategory2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('activeCategory')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="activeCategory2"
      :modalSuccess="true"
      modalText="The category has been activated."
      btnText="Ok"
    />

  </div>
</template>

<script>
import BaseButton from "./../../../../components/BaseButton.vue";
import BaseModal from "./../../../../components/BaseModal.vue";

export default {
  name: "CategoryManagement",
  components: {
    BaseButton,
    BaseModal,
  },
  data() {
    return {
      categoryHead: [
        "S.No",
        "Category Name",
        "Number of Products",
        "Category Status",
        "Action",
      ],
      categoryList: [
        {
          id: "01",
          categoryName: "Category Abc",
          products: "20",
          status: true,
        },
        {
          id: "02",
          categoryName: "Category Abc",
          products: "15",
          status: false,
        },
        {
          id: "03",
          categoryName: "Category Abc",
          products: "20",
          status: false,
        },
        {
          id: "04",
          categoryName: "Category Abc",
          products: "35",
          status: true,
        },
        {
          id: "05",
          categoryName: "Category Abc",
          products: "12",
          status: true,
        },
      ],
    };
  },
};
</script>
