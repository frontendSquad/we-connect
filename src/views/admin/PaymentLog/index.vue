<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Payment Log</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Logs</h2>
        </div>
      </div>
      <div class="col-12">
        <div class="d-lg-flex align-items-end justify-content-end">
          <div class="userInput mb-3">
            <div class="dataTables_filter">
              <div class="mainDetail">
                <label for="" class="dashLabel mb-2 mb-xl-0 me-1"
                  >Payment Month</label
                >
                <select class="d-inline-block dashInput">
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
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
                <th v-for="(heading, index) in paymentHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in paymentList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.store }}</td>
                <td>{{ item.vendor }}</td>
                <td>{{ item.month }}</td>
                <td>${{ item.total }}</td>
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
                            name: 'PaymentTransaction',
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
export default {
  name: "PaymentLog",
  components: {},
  data() {
    return {
      paymentHead: [
        "S.No",
        "Store Name",
        "Vendor Name",
        "Payment Month",
        "Total Amount",
        "Action",
      ],
      paymentList: [
        {
          id: "001",
          store: "Abc",
          vendor: "Abc",
          month: "mm/dd/yyyy",
          total: "123",
        },
        {
          id: "002",
          store: "Abc",
          vendor: "Abc",
          month: "mm/dd/yyyy",
          total: "123",
        },
        {
          id: "003",
          store: "Abc",
          vendor: "Abc",
          month: "mm/dd/yyyy",
          total: "123",
        },
        {
          id: "004",
          store: "Abc",
          vendor: "Abc",
          month: "mm/dd/yyyy",
          total: "123",
        },
        {
          id: "005",
          store: "Abc",
          vendor: "Abc",
          month: "mm/dd/yyyy",
          total: "123",
        },
      ],
    };
  },
};
</script>
