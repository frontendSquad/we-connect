<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Admin Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around mb-5">
      <div class="col-xl-6">
        <div class="totalCard totalCard1 mb-2">
          <div class="d-xl-flex">
            <div
              class="totalIcon d-flex align-items-center justify-content-center"
            >
              <font-awesome-icon :icon="['fas', 'users']" />
            </div>
            <div class="totalContent w-100 py-xl-5 py-3 px-3">
              <div
                class="d-flex align-items-center justify-content-around gap-3"
              >
                <p class="totalStatement m-0">Total Registered Users</p>
                <p class="totalNumber m-0">1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="totalCard totalCard2 mb-2">
          <div class="d-xl-flex">
            <div
              class="totalIcon d-flex align-items-center justify-content-center"
            >
              <font-awesome-icon :icon="['fas', 'users']" />
            </div>
            <div class="totalContent w-100 py-xl-5 py-3 px-3">
              <div
                class="d-flex align-items-center justify-content-around gap-3"
              >
                <p class="totalStatement m-0">Total Registered Users</p>
                <p class="totalNumber m-0">1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <h2 class="sectionTitle mb-3">Quick Stats</h2>
      </div>
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-xl-4">
            <div class="statsCard text-center mb-3 px-2 py-3">
              <div class="statsNumber mb-3">
                <img
                  src="./../../../assets/images/statsNum1.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <p class="statsStatement fBold mb-0">Average Monthly Income</p>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="statsCard text-center mb-3 px-2 py-3">
              <div class="statsNumber mb-3">
                <img
                  src="./../../../assets/images/statsNum2.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <p class="statsStatement fBold mb-0">Average Yearly Income</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-9 mb-3">
        <h2 class="sectionTitle">Revenue Generated Per Month</h2>
      </div>
      <div class="col-xl-3 mb-3">
        <select class="siteInput">
          <option value="select" selected disabled hidden>Year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div class="col-12">
        <div class="chart">
          <img
            src="`./../../..`/assets/images/chart.png"
            alt=""
            class="w-100 img-fluid"
          />
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <h2 class="sectionTitle mb-3">Recent Orders</h2>
      </div>
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-borderless customTable">
            <thead>
              <tr>
                <th v-for="(heading, index) in recentOrdersHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in recentOrders" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.date }}</td>
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
  name: "AdminDashboard",
  components: {},
  data() {
    return {
      recentOrdersHead: ["Order ID", "User Name", "Order Date"],
      recentOrders: [
        {
          username: "Abc",
          date: "mm/dd/yyyy",
        },
        {
          username: "Abc",
          date: "mm/dd/yyyy",
        },
        {
          username: "Abc",
          date: "mm/dd/yyyy",
        },
        {
          username: "Abc",
          date: "mm/dd/yyyy",
        },
        {
          username: "Abc",
          date: "mm/dd/yyyy",
        },
      ],
    };
  },
};
</script>

<style scoped>
.totalCard {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 6px 12px rgb(0 0 0 / 20%);
}

.totalCard1 {
  background: #c2c2c2;
  border: 1px solid var(--primaryColor);
}

.totalCard2 {
  background: #000;
  border: 1px solid #000;
}

.totalIcon {
  font-size: 42px;
  color: #fff;
  padding: 15px 15px;
}

.totalCard1 .totalIcon {
  background: var(--primaryColor);
}

.totalCard2 .totalIcon {
  background: #464646;
}

.totalContent {
  color: #fff;
  font-weight: 500;
}

.totalStatement {
  font-size: 24px;
  word-break: break-word;
}

.totalNumber {
  font-size: 42px;
}

.statsCard {
  box-shadow: 0px 0px 8px #ccc;
  border-radius: 20px;
}

@media screen and (max-width: 768px) {
  .totalIcon {
    font-size: 36px;
  }

  .totalStatement {
    font-size: 22px;
  }

  .totalNumber {
    font-size: 36px;
  }
}
</style>