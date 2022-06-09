<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <button type="button" class="notBtn me-2" @click="$router.go(-1)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <div class="pageTitleInner">
            <h1 class="pageTitle">Store</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Order Log</h2>
        </div>
      </div>
    </div>
    <div class="row align-items-center mb-3 border-bottom">
      <div class="col-xl-6">
        <h2 class="secondaryTitle mb-3">Order & Account Information</h2>
      </div>
      <div class="col-xl-6 text-end">
        <span
          :class="
            orderStatus == 'Paid'
              ? 'statusDelivered'
              : orderStatus == 'Pending'
              ? 'statusPending'
              : 'statusRejected'
          "
          class="statusBar mb-3"
          >{{ orderStatus }}</span
        >
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-8 mb-3">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <h3 class="sectionTitle">Order Information</h3>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Order Date</label>
              <p class="mainText">mm/dd/yyyy</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Order Status</label>
              <select name="" id="" class="dashInput">
                <option value="s" selected hidden disabled>Select</option>
                <option value="1">Pending</option>
                <option value="2">In Process</option>
                <option value="3">Delivered</option>
                <option value="4">Refunded</option>
              </select>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Order ID</label>
              <p class="mainText">001</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Payment Method</label>
              <p class="mainText">Abc</p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-8">
            <h3 class="sectionTitle">Account Information</h3>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Username</label>
              <p class="mainText">Rikkard Amborses</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">User Email Address</label>
              <p class="mainText">Rikkar@gmail.com</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">User Phone Number</label>
              <p class="mainText">+012 345 6789</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">User ID</label>
              <p class="mainText">001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center mb-3 border-bottom">
      <div class="col-12">
        <h2 class="secondaryTitle mb-3">Address Information</h2>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-8 mb-3">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <h3 class="sectionTitle">Billing Address</h3>
            <div class="mainDetail w-100 my-3">
              <p class="mainText">Rikkard Ambrose</p>
              <p class="mainText">Abc Street here</p>
              <p class="mainText">Zipcode</p>
              <p class="mainText">Country</p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-8">
            <h3 class="sectionTitle">Shipping Address</h3>
            <div class="mainDetail w-100 my-3">
              <p class="mainText">Rikkard Ambrose</p>
              <p class="mainText">Abc Street here</p>
              <p class="mainText">Zipcode</p>
              <p class="mainText">Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center mb-3 border-bottom">
      <div class="col-12">
        <h2 class="secondaryTitle mb-3">Product Details</h2>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-6 mb-3">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Length</label>
              <p class="mainText">123</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Height</label>
              <p class="mainText">123</p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-8">
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Width</label>
              <p class="mainText">123</p>
            </div>
            <div class="mainDetail w-100 my-3">
              <label for="" class="mainLabel">Weight</label>
              <p class="mainText">123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <div class="dashCard py-3 px-2">
          <div class="table-responsive">
            <table class="table table-borderless dashTable">
              <thead>
                <tr>
                  <th v-for="(heading, index) in ordersHead" :key="index">
                    {{ heading }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in orderList" :key="index">
                  <td>
                    <img
                      :src="
                        require(`./../../../../assets/images/${item.image}`)
                      "
                      alt=""
                    />
                  </td>
                  <td>{{ item.product }}<br />Size:{{ item.size }}</td>
                  <td>{{ item.qty }}</td>
                  <td>
                    {{ item.by }}<br /><router-link
                      :to="item.byLink"
                      class="cyanColor fBold"
                      >View Profile</router-link
                    >
                  </td>
                  <td>${{ item.price }}</td>
                  <td>${{ item.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-end mb-3">
      <div class="col-md-4">
        <div class="table-responsive totalTableWrapper">
          <table class="table table-borderless totalTable">
            <tbody>
              <tr>
                <td class="secondaryFont grayColor">Sub Total</td>
                <td>$1234</td>
              </tr>
              <tr>
                <td class="secondaryFont grayColor">Shipping</td>
                <td>$12</td>
              </tr>
              <tr>
                <td class="secondaryFont grayColor">Tax</td>
                <td>$05</td>
              </tr>
              <tr>
                <td class="secondaryFont grayColor">Total</td>
                <td>$1234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewOrder",
  components: {},
  data() {
    return {
      orderStatus: "",
      ordersHead: [
        "Image",
        "Product Name",
        "Quantity",
        "By",
        "Unit Price",
        "Product Total",
      ],
      orderList: [
        {
          image: "imagePlaceholder.png",
          product: "T Shirt",
          size: "Small",
          qty: "01",
          by: "Vendor Name",
          byLink: "/admin/vendor/vendor-listing/view-vendor",
          price: "1234",
          total: "1234",
        },
      ],
    };
  },
  created() {
    this.orderStatus = this.$route.params.status;
    console.log(this.total);
  },
  methods: {},
};
</script>
