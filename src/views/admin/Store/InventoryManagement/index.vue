<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Store</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Inventory Management</h2>
        </div>
      </div>
      <div class="col-12">
        <div class="dashCard px-lg-4 px-3 py-lg-4 py-3 mb-3">
          <h3 class="sectionTitle mb-3">Filter By</h3>
          <div class="row">
            <div class="col-xl-3 col-lg-6 mb-3">
              <select name="vendor" id="" class="siteInput">
                <option value="all" selected hidden disabled>
                  All Vendors
                </option>
                <option value="1">Abc</option>
                <option value="2">Def</option>
                <option value="3">Klm</option>
                <option value="4">Zyz</option>
              </select>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3">
              <select name="category" id="" class="siteInput">
                <option value="all" selected hidden disabled>
                  All Categories
                </option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
                <option value="4">Category 4</option>
              </select>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3">
              <select name="" id="" class="siteInput">
                <option value="all" selected hidden disabled>
                  Availabilty Status
                </option>
                <option value="1">In Stock</option>
                <option value="2">Sold Out</option>
              </select>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3">
              <BaseButton
                type="button"
                btnText="Search"
                class="baseButton primaryButton"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="userIimageFrame my-3">
            <img
              src="./../../../../assets/images/userPlaceholder.png"
              alt="User Image"
              class="userImage img-fluid"
            />
          </div>
          <div class="info">
            <h6 class="text-uppercase">Mark Carson</h6>
            <router-link to="#" class="cyanColor">View Profile</router-link>
          </div>
        </div>
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
                <th
                  v-for="(heading, index) in inventoryManagementHead"
                  :key="index"
                >
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in inventoryManagement" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.vendorname }}</td>
                <td>{{ item.productname }}</td>
                <td>{{ item.category }}</td>
                <td>${{ item.price }}</td>
                <td>
                  <div v-if="item.astatus">
                    <span class="statusBar statusDelivered">In-Stock</span>
                  </div>
                  <div v-else>
                    <span class="statusBar statusRejected">Sold Out</span>
                  </div>
                </td>
                <td>{{ item.instock }}</td>
                <td>
                  <div v-if="item.status">
                    <span class="statusBar statusDelivered">Active</span>
                  </div>
                  <div v-else>
                    <span class="statusBar statusRandom">Inactive</span>
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
                          to="/admin/store/inventory-management/view-product"
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
                          to="/admin/store/inventory-management/edit-product"
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
                      <b-dropdown-item>
                        <router-link
                          :to="{
                            name: 'RatingAndReviews',
                            params: { status: item.id },
                          }"
                          class="text-decoration-none"
                        >
                          <div class="dropdownContent">
                            <div class="d-flex align-items-center">
                              <div class="mediaLeft">
                                <font-awesome-icon
                                  :icon="['fas', 'star']"
                                  class="text-dark"
                                />
                              </div>
                              <div class="mediaRight">
                                <span class="text-dark">Rating</span>
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item-button class="notBtn">
                        <div
                          class="dropdownContent"
                          v-if="item.status"
                          @click="$bvModal.show('inactiveInventory')"
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
                          @click="$bvModal.show('activeInventory')"
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

    <b-modal id="inactiveInventory" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button
            class="closeModal"
            @click="$bvModal.hide('inactiveInventory')"
          >
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
            <h2 class="modalHeading">Inactive Product</h2>
            <p class="modalText">
              Are you sure you want to inactive abc product?
            </p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('inactiveInventory');
                  $bvModal.show('inactiveInventory2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('inactiveInventory')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="inactiveInventory2"
      :modalSuccess="true"
      modalText="ABC product has been Inactivated."
      btnText="Ok"
    />

    <b-modal id="activeInventory" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('activeInventory')">
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
            <h2 class="modalHeading">Activate Product</h2>
            <p class="modalText">
              Are you sure you want to activate abc product?
            </p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('activeInventory');
                  $bvModal.show('activeInventory2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('activeInventory')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="activeInventory2"
      :modalSuccess="true"
      modalText="ABC product has been activated."
      btnText="Ok"
    />
  </div>
</template>

<script>
import BaseButton from "./../../../../components/BaseButton.vue";
import BaseModal from "./../../../../components/BaseModal.vue";

export default {
  name: "Store",
  components: {
    BaseButton,
    BaseModal,
  },
  data() {
    return {
      inventoryManagementHead: [
        "S.No",
        "Vendor Name",
        "Product Name",
        "Category",
        "Price",
        "Availabilty Status",
        "Currently In Stock",
        "Status",
        "Action",
      ],
      inventoryManagement: [
        {
          id: "001",
          vendorname: "Abc",
          productname: "Abc",
          category: "Def",
          price: "20",
          astatus: true,
          instock: "90",
          status: true,
        },
        {
          id: "002",
          vendorname: "Abc",
          productname: "Abc",
          category: "Def",
          price: "20",
          astatus: false,
          instock: "90",
          status: false,
        },
        {
          id: "003",
          vendorname: "Abc",
          productname: "Abc",
          category: "Def",
          price: "20",
          astatus: false,
          instock: "90",
          status: true,
        },
        {
          id: "004",
          vendorname: "Abc",
          productname: "Abc",
          category: "Def",
          price: "20",
          astatus: true,
          instock: "90",
          status: false,
        },
        {
          id: "005",
          vendorname: "Abc",
          productname: "Abc",
          category: "Def",
          price: "20",
          astatus: true,
          instock: "90",
          status: true,
        },
      ],
    };
  },
};
</script>
