<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Payment Log</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Transaction</h2>
          <h6 class="idBar">Store ID: {{ idStatus }}</h6>
        </div>
      </div>
      <div class="col-12">
        <div class="d-lg-flex align-items-center justify-content-between mb-3">
          <div class="topFilter">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="userIimageFrame my-3">
                <img
                  src="./../../../assets/images/userPlaceholder.png"
                  alt="User Image"
                  class="userImage img-fluid"
                />
              </div>
              <div class="info">
                <h6 class="text-uppercase">Mark Carson</h6>
              </div>
            </div>
            <h3 class="secondaryTitle mb-3">View Transaction</h3>
          </div>
          <div class="topFilter">
            <p class="mainLabel">Enter Order ID</p>
            <div class="d-flex align-items-baseline">
              <BaseInput
                labelClass="mainLabel"
                iname="order"
                itype="text"
                inputClass="dashInput"
              />
              <BaseButton
                type="button"
                btnText="Search"
                class="baseButton primaryButton ms-2"
              />
            </div>
          </div>
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
                <th v-for="(heading, index) in transactionHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in transactionList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.name }}</td>
                <td>${{ item.amount }}</td>
                <td>${{ item.commission }}</td>
                <td>${{ item.vendorAmount }}</td>
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
                          to="#"
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
  </div>
</template>

<script>
import BaseButton from "./../../../components/BaseButton.vue";
import BaseInput from "./../../../components/BaseInput.vue";

export default {
  name: "PaymentLog",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      idStatus: "",
      transactionHead: [
        "S.No",
        "Order ID",
        "Order Date",
        "Product Name",
        "Total Amount",
        "My Commission",
        "Amount for Vendor",
        "Action",
      ],
      transactionList: [
        {
          id: "001",
          date: "mm/dd/yyyy",
          name: "Abc",
          amount: "1234",
          commission: "10",
          vendorAmount: "10",
        },
        {
          id: "002",
          date: "mm/dd/yyyy",
          name: "Abc",
          amount: "1234",
          commission: "10",
          vendorAmount: "10",
        },
        {
          id: "003",
          date: "mm/dd/yyyy",
          name: "Abc",
          amount: "1234",
          commission: "10",
          vendorAmount: "10",
        },
        {
          id: "004",
          date: "mm/dd/yyyy",
          name: "Abc",
          amount: "1234",
          commission: "10",
          vendorAmount: "10",
        },
        {
          id: "005",
          date: "mm/dd/yyyy",
          name: "Abc",
          amount: "1234",
          commission: "10",
          vendorAmount: "10",
        },
      ],
    };
  },
  created() {
    this.idStatus = this.$route.params.status;
  },
};
</script>
