<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="backTitleWrap">
          <div class="pageTitleInner">
            <h1 class="pageTitle">Feedback</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 mb-4">
        <div class="secondaryWrapper">
          <h2 class="secondaryTitle">Feedback Listing</h2>
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
                <th v-for="(heading, index) in feedbackHead" :key="index">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in feedbackList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.sender }}</td>
                <td>${{ item.date }}</td>
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
                          to="/admin/feedback/view-feedback"
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
                      <b-dropdown-item-button
                        class="notBtn"
                        @click="$bvModal.show('deleteFeedback')"
                      >
                        <div class="dropdownContent">
                          <div class="d-flex align-items-center">
                            <div class="mediaLeft">
                              <font-awesome-icon
                                :icon="['fas', 'trash']"
                                class="text-dark"
                              />
                            </div>
                            <div class="mediaRight">
                              <span class="text-dark">Delete</span>
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

    <b-modal id="deleteFeedback" centered hide-footer hide-header>
      <div class="customModal">
        <div class="modalHeader">
          <button class="closeModal" @click="$bvModal.hide('deleteFeedback')">
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
            <h2 class="modalHeading">Delete Feedback</h2>
            <p class="modalText">Are you sure you want to delete this feedback?</p>
            <div class="modalForm my-4">
              <BaseButton
                type="button"
                btnText="Yes"
                class="baseButton primaryButton mx-2"
                @click="
                  $bvModal.hide('deleteFeedback');
                  $bvModal.show('deleteFeedback2');
                "
              />
              <BaseButton
                type="button"
                btnText="No"
                class="baseButton secondaryButton mx-2"
                @click="$bvModal.hide('deleteFeedback')"
              />
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <BaseModal
      modalId="deleteFeedback2"
      :modalSuccess="true"
      modalText="Feedback has been deleted."
      btnText="Ok"
    />

  </div>
</template>

<script>
import BaseButton from "./../../../components/BaseButton.vue";
import BaseModal from "./../../../components/BaseModal.vue";

export default {
  name: "Feedback",
  components: {
    BaseButton,
    BaseModal,
  },
  data() {
    return {
      feedbackHead: [
        "S.No",
        "Name",
        "Email Address",
        "Sender",
        "Date",
        "Action",
      ],
      feedbackList: [
        {
          name: "Abc",
          email: "abc@xyz.com",
          sender: "Vendor",
          date: "mm/dd/yyyy",
        },
        {
          name: "Abc",
          email: "abc@xyz.com",
          sender: "Vendor",
          date: "mm/dd/yyyy",
        },
        {
          name: "Abc",
          email: "abc@xyz.com",
          sender: "Vendor",
          date: "mm/dd/yyyy",
        },
        {
          name: "Abc",
          email: "abc@xyz.com",
          sender: "Vendor",
          date: "mm/dd/yyyy",
        },
        {
          name: "Abc",
          email: "abc@xyz.com",
          sender: "Vendor",
          date: "mm/dd/yyyy",
        },
      ],
    };
  },
};
</script>
