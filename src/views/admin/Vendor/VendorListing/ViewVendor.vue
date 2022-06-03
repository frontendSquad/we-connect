<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Vendor Management</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-baseline mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Vendor Profile</h2>
          <h6 class="idBar">Vendor ID: {{ idStatus }}</h6>
        </div>
      </div>
    </div>
    <div class="row align-items-baseline mb-3">
      <div class="col-xxl-10 order-xxl-1 order-2">
        <div class="row align-items-baseline mb-3">
          <div class="col-xl-3">
            <div class="userIimageFrame my-3">
              <img
                src="./../../../../assets/images/userPlaceholder.png"
                alt="User Image"
                class="userImage img-fluid"
              />
            </div>
          </div>
          <div class="col-xl-9">
            <div class="row">
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Name</label>
                  <p class="mainText">Abc</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Email Address</label>
                  <p class="mainText">abc@xyz.com</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Registration Date</label>
                  <p class="mainText">mm/dd/yyyy</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Card Number</label>
                  <p class="mainText">**********</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Store Name</label>
                  <p class="mainText">Abc</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Business Type</label>
                  <p class="mainText">Abc</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">Country</label>
                  <p class="mainText">Abc</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mainDetail my-3">
                  <label for="" class="mainLabel">City</label>
                  <p class="mainText">Abc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 order-xxl-2 order-1">
        <div class="mainDetail w-100 my-1">
          <label for="" class="mainLabel">Admin Commission</label>
          <select name="" id="" class="dashInput rightInput">
            <option value="s" selected hidden disabled>Set Commission</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row mb-3">
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
          <table
            class="table table-borderless customTable"
            id="my-table"
          >
            <thead>
              <tr>
                <th v-for="(heading, index) in userProfileHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in userProfile" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.orderDate }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.qty }}</td>
                <td>${{ item.amount }}</td>
                <td>
                  <span
                    :class="`${
                      item.orderStatus == 'Delivered'
                        ? 'statusDelivered'
                        : item.orderStatus == 'In Process'
                        ? 'statusProcess'
                        : item.orderStatus == 'Pending'
                        ? 'statusPending'
                        : 'statusRandom'
                    } statusBar`"
                    >{{ item.orderStatus }}</span
                  >
                </td>
                <td>
                  <div v-if="item.paymentStatus">
                    <span class="statusBar statusDelivered">Paid</span>
                  </div>
                  <div v-else>
                    <select
                      name=""
                      id=""
                      class="statusBar"
                      v-model="item.paymentStatus"
                      :class="item.paymentStatus ? 'statusDelivered' : 'statusRejected'"
                  
                    >
                      <option :value="false" class="statusRejected">Not Paid</option>
                      <option :value="true" class="statusDelivered">Paid</option>
                    </select>
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
            <b-pagination
              class="customPagination"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewVendor",
  components: {},
  data() {
    return {
      idStatus: "",
      userProfileHead: [
        "S.No",
        "Order ID",
        "Order Date",
        "Title",
        "Qty",
        "Amount Paid",
        "Order Status",
      ],
      userProfile: [
        {
          id: "001",
          orderDate: "mm/dd/yyyy",
          title: "Product Name",
          qty: "02",
          amount: "1234",
          orderStatus: "Pending",
          paymentStatus: true,
        },
        {
          id: "002",
          orderDate: "mm/dd/yyyy",
          title: "Product Name",
          qty: "04",
          amount: "1234",
          orderStatus: "In Process",
          paymentStatus: false,
        },
        {
          id: "003",
          orderDate: "mm/dd/yyyy",
          title: "Product Name",
          qty: "01",
          amount: "1234",
          orderStatus: "In Process",
          paymentStatus: true,
        },
        {
          id: "004",
          orderDate: "mm/dd/yyyy",
          title: "Product Name",
          qty: "06",
          amount: "1234",
          orderStatus: "Delivered",
          paymentStatus: false,
        },
        {
          id: "005",
          orderDate: "mm/dd/yyyy",
          title: "Product Name",
          qty: "05",
          amount: "1234",
          orderStatus: "Pending",
          paymentStatus: false,
        },
      ],
    };
  },
  created() {
    this.idStatus = this.$route.params.status;
  },
  methods: {
  },
};
</script>
