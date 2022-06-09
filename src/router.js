import Vue from "vue";
import Router from "vue-router";

import AuthLayout from "./Layout/authLayout/authLayout.vue";
import Login from "./views/admin/Auth/Login.vue";

import DashboardLayout from "./Layout/dashboard/dashboardLayout.vue";


import Dashboard from "./views/admin/Dashboard/";


import UserManagement from "./views/admin/UserManagement/";
import BlockedUsers from "./views/admin/UserManagement/BlockedUsers.vue";
import ViewUser from "./views/admin/UserManagement/ViewUser.vue";
import ViewBlockedUser from "./views/admin/UserManagement/ViewBlockedUser.vue";
import EditUser from "./views/admin/UserManagement/EditUser.vue";


import VendorListing from "./views/admin/Vendor/VendorListing/";
import BlockedVendor from "./views/admin/Vendor/VendorListing/BlockedVendor.vue";
import ViewVendor from "./views/admin/Vendor/VendorListing/ViewVendor.vue";
import ViewBlockedVendor from "./views/admin/Vendor/VendorListing/ViewBlockedVendor.vue";
import EditVendor from "./views/admin/Vendor/VendorListing/EditVendor.vue";

import VendorApproval from "./views/admin/Vendor/VendorApproval/";
import VendorRejected from "./views/admin/Vendor/VendorApproval/RejectedVendor.vue";
import ViewApprovedVendor from "./views/admin/Vendor/VendorApproval/ViewApprovedVendor.vue";
import ViewRejectedVendor from "./views/admin/Vendor/VendorApproval/ViewRejectedVendor.vue";


import Store from "./views/admin/Store/Store/";
import ViewStore from "./views/admin/Store/Store/ViewStore.vue";
import EditStore from "./views/admin/Store/Store/EditStore.vue";

import InventoryManagement from "./views/admin/Store/InventoryManagement/";
import RatingAndReviews from "./views/admin/Store/InventoryManagement/RatingAndReviews.vue";
import ViewProduct from "./views/admin/Store/InventoryManagement/ViewProduct.vue";
import EditProduct from "./views/admin/Store/InventoryManagement/EditProduct.vue";

import CategoryManagement from "./views/admin/Store/CategoryManagement/";
import AddCategory from "./views/admin/Store/CategoryManagement/AddCategory.vue";
import EditCategory from "./views/admin/Store/CategoryManagement/EditCategory.vue";

import VariationManagement from "./views/admin/Store/VariationManagement/";
import CreateVariation from "./views/admin/Store/VariationManagement/CreateVariation.vue";

import OrderLogs from "./views/admin/Store/OrderLogs";
import ViewOrder from "./views/admin/Store/OrderLogs/ViewOrder.vue";


import PaymentLog from "./views/admin/PaymentLog/";
import PaymentTransaction from "./views/admin/PaymentLog//Transaction.vue";


import Settings from "./views/admin/Settings/";
import ViewContent from "./views/admin/Settings/ViewContent.vue";
import EditContent from "./views/admin/Settings/EditContent.vue";


import Feedback from "./views/admin/Feedback/";
import ViewFeedback from "./views/admin/Feedback/ViewFeedback.vue";


import Newsletter from "./views/admin/Newsletter/";


import Profile from './views/admin/HeaderPages/Profile.vue';
import EditProfile from './views/admin/HeaderPages/EditProfile.vue';
import Notifications from './views/admin/HeaderPages/Notifications.vue';
import Error404 from './views/admin/HeaderPages/ErrorPage.vue';



Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: 'Login'
            }
        },
        {
            path: '/admin/',
            name: 'admin-auth',
            component: AuthLayout,
            children: [{
                name: 'Login',
                component: Login,
                path: 'login',
            },
            ],
        },

        {
            path: '/admin/',
            name: 'admin-dashboard',
            component: DashboardLayout,
            children: [{
                name: 'dashboard',
                component: Dashboard,
                path: 'dashboard',
            },
            {
                name: 'UserManagement',
                component: UserManagement,
                path: 'user-management',
            },
            {
                name: 'BlockedUsers',
                component: BlockedUsers,
                path: 'user-management/blocked-users',
            },
            {
                name: 'ViewUser',
                component: ViewUser,
                path: 'user-management/view-user',
            },
            {
                name: 'ViewBlockedUser',
                component: ViewBlockedUser,
                path: 'user-management/view-blocked-user',
            },
            {
                name: 'EditUser',
                component: EditUser,
                path: 'user-management/edit-user',
            },
            {
                name: 'VendorListing',
                component: VendorListing,
                path: 'vendor/vendor-listing',
            },
            {
                name: 'BlockedVendor',
                component: BlockedVendor,
                path: 'vendor/vendor-listing/blocked-vendor',
            },
            {
                name: 'ViewVendor',
                component: ViewVendor,
                path: 'vendor/vendor-listing/view-vendor',
            },
            {
                name: 'ViewBlockedVendor',
                component: ViewBlockedVendor,
                path: 'vendor/vendor-listing/view-blocked-vendor',
            },
            {
                name: 'EditVendor',
                component: EditVendor,
                path: 'vendor/vendor-listing/edit-vendor',
            },
            {
                name: 'VendorApproval',
                component: VendorApproval,
                path: 'vendor/vendor-approval/',
            },
            {
                name: 'VendorRejected',
                component: VendorRejected,
                path: 'vendor/vendor-approval/rejected-vendor',
            },
            {
                name: 'ViewApprovedVendor',
                component: ViewApprovedVendor,
                path: 'vendor/vendor-approval/approved-vendor',
            },
            {
                name: 'ViewRejectedVendor',
                component: ViewRejectedVendor,
                path: 'vendor/vendor-approval/view-rejected-vendor',
            },
            {
                name: 'Store',
                component: Store,
                path: 'store',
            },
            {
                name: 'ViewStore',
                component: ViewStore,
                path: 'store/view-store',
            },
            {
                name: 'EditStore',
                component: EditStore,
                path: 'store/edit-store',
            },
            {
                name: 'InventoryManagement',
                component: InventoryManagement,
                path: 'store/inventory-management',
            },
            {
                name: 'RatingAndReviews',
                component: RatingAndReviews,
                path: 'store/inventory-management/rating-and-reviews',
            },
            {
                name: 'ViewProduct',
                component: ViewProduct,
                path: 'store/inventory-management/view-product',
            },
            {
                name: 'EditProduct',
                component: EditProduct,
                path: 'store/inventory-management/edit-product',
            },
            {
                name: 'CategoryManagement',
                component: CategoryManagement,
                path: 'store/category-management',
            },
            {
                name: 'AddCategory',
                component: AddCategory,
                path: 'store/category-management/add-category',
            },
            {
                name: 'EditCategory',
                component: EditCategory,
                path: 'store/category-management/edit-category',
            },
            {
                name: 'VariationManagement',
                component: VariationManagement,
                path: 'store/variation-management/',
            },
            {
                name: 'CreateVariation',
                component: CreateVariation,
                path: 'store/variation-management/create-variation/',
            },
            {
                name: 'OrderLogs',
                component: OrderLogs,
                path: 'store/order-logs/',
            },
            {
                name: 'ViewOrder',
                component: ViewOrder,
                path: 'store/order-logs/view-order',
            },
            {
                name: 'PaymentLog',
                component: PaymentLog,
                path: 'payment-log',
            },
            {
                name: 'PaymentTransaction',
                component: PaymentTransaction,
                path: 'payment-log/transaction',
            },
            {
                name: 'Settings',
                component: Settings,
                path: 'settings',
            },
            {
                name: 'ViewContent',
                component: ViewContent,
                path: 'settings/view-content',
            },
            {
                name: 'EditContent',
                component: EditContent,
                path: 'settings/edit-content',
            },
            {
                name: 'Feedback',
                component: Feedback,
                path: 'feedback',
            },
            {
                name: 'ViewFeedback',
                component: ViewFeedback,
                path: 'feedback/view-feedback',
            },
            {
                name: 'Newsletter',
                component: Newsletter,
                path: 'newsletter',
            },
            {
                name: 'Profile',
                component: Profile,
                path: 'profile',
            },
            {
                name: 'EditProfile',
                component: EditProfile,
                path: 'edit-profile',
            },
            {
                name: 'Notifications',
                component: Notifications,
                path: 'notifications',
            },
            {
                name: 'Error404',
                component: Error404,
                path: 'error',
            },



            ],
        },

    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});