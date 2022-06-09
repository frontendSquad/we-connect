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
          <h2 class="secondaryTitle">Order Logs</h2>
        </div>
      </div>
      <div class="col-12">
        <div class="customTabs">
          <b-tabs content-class="mt-5">
            <b-tab title="Pending Orders" active>
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
                            v-for="(heading, index) in ordersHead"
                            :key="index"
                          >
                            {{ heading }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in pendingOrderList"
                          :key="index"
                        >
                          <td>{{ item.sNo }}</td>
                          <td>{{ item.orderId }}</td>
                          <td>{{ item.userId }}</td>
                          <td>{{ item.orderDate }}</td>
                          <td>{{ item.vendorName }}</td>
                          <td>${{ item.totalAmount }}</td>
                          <td>
                            <span class="statusBar statusRejected">Unpaid</span>
                          </td>
                          <td>${{ item.commission }}</td>
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
                                      name: 'ViewOrder',
                                      params: { status: item.status },
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
                                          <span class="text-dark"
                                            >View Order</span
                                          >
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
            <b-tab title="In Process Orders">
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
                            v-for="(heading, index) in ordersHead"
                            :key="index"
                          >
                            {{ heading }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in inprocessOrderList"
                          :key="index"
                        >
                          <td>{{ item.sNo }}</td>
                          <td>{{ item.orderId }}</td>
                          <td>{{ item.userId }}</td>
                          <td>{{ item.orderDate }}</td>
                          <td>{{ item.vendorName }}</td>
                          <td>${{ item.totalAmount }}</td>
                          <td>
                            <span class="statusBar statusRejected">Unpaid</span>
                          </td>
                          <td>${{ item.commission }}</td>
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
                                      name: 'ViewOrder',
                                      params: { status: item.status },
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
                                          <span class="text-dark"
                                            >View Order</span
                                          >
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
            <b-tab title="Delivered Orders">
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
                            v-for="(heading, index) in ordersHead"
                            :key="index"
                          >
                            {{ heading }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in deliveredOrderList"
                          :key="index"
                        >
                          <td>{{ item.sNo }}</td>
                          <td>{{ item.orderId }}</td>
                          <td>{{ item.userId }}</td>
                          <td>{{ item.orderDate }}</td>
                          <td>{{ item.vendorName }}</td>
                          <td>${{ item.totalAmount }}</td>
                          <td>
                            <span class="statusBar statusDelivered">Paid</span>
                          </td>
                          <td>${{ item.commission }}</td>
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
                                      name: 'ViewOrder',
                                      params: { status: item.status },
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
                                          <span class="text-dark"
                                            >View Order</span
                                          >
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
            <b-tab title="Refunded Orders">
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
                            v-for="(heading, index) in ordersHead"
                            :key="index"
                          >
                            {{ heading }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in refundedOrderList"
                          :key="index"
                        >
                          <td>{{ item.sNo }}</td>
                          <td>{{ item.orderId }}</td>
                          <td>{{ item.userId }}</td>
                          <td>{{ item.orderDate }}</td>
                          <td>{{ item.vendorName }}</td>
                          <td>${{ item.totalAmount }}</td>
                          <td>
                            <span class="statusBar statusRejected">Refunded</span>
                          </td>
                          <td>${{ item.commission }}</td>
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
                                      name: 'ViewOrder',
                                      params: { status: item.status },
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
                                          <span class="text-dark"
                                            >View Order</span
                                          >
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
export default {
  name: "OrderLogs",
  components: {},
  data() {
    return {
      ordersHead: [
        "S.No",
        "Order ID",
        "User ID",
        "Order Date",
        "Vendor Name",
        "Total Amount",
        "Payment Status",
        "My Commission",
        "Action",
      ],
      pendingOrderList: [
        {
          sNo: "01",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "Pending",
        },
        {
          sNo: "02",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "Pending",
        },
        {
          sNo: "03",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "Pending",
        },
        {
          sNo: "04",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "Pending",
        },
        {
          sNo: "05",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "Pending",
        },
      ],
      inprocessOrderList: [
        {
          sNo: "01",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "In Process",
        },
        {
          sNo: "02",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "In Process",
        },
        {
          sNo: "03",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "In Process",
        },
        {
          sNo: "04",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "In Process",
        },
        {
          sNo: "05",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Unpaid",
          commission: "10",
          status: "In Process",
        },
      ],
      deliveredOrderList: [
        {
          sNo: "01",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Paid",
          commission: "10",
          status: "Paid",
        },
        {
          sNo: "02",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Paid",
          commission: "10",
          status: "Paid",
        },
        {
          sNo: "03",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Paid",
          commission: "10",
          status: "Paid",
        },
        {
          sNo: "04",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Paid",
          commission: "10",
          status: "Paid",
        },
        {
          sNo: "05",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Paid",
          commission: "10",
          status: "Paid",
        },
      ],
      refundedOrderList: [
        {
          sNo: "01",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Refunded",
          commission: "10",
          status: "Refunded",
        },
        {
          sNo: "02",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Refunded",
          commission: "10",
          status: "Refunded",
        },
        {
          sNo: "03",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Refunded",
          commission: "10",
          status: "Refunded",
        },
        {
          sNo: "04",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Refunded",
          commission: "10",
          status: "Refunded",
        },
        {
          sNo: "05",
          orderId: "001",
          userId: "002",
          orderDate: "mm/dd/yyyy",
          vendorName: "Abc",
          totalAmount: "1234",
          paymentStatus: "Refunded",
          commission: "10",
          status: "Refunded",
        },
      ],
    };
  },
};
</script>
