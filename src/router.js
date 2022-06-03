import Vue from "vue";
import Router from "vue-router";

import AuthLayout from "./Layout/authLayout/authLayout.vue";
import Login from "./views/admin/auth/Login.vue";

import DashboardLayout from "./Layout/dashboard/dashboardLayout.vue";
import Dashboard from "./views/admin/dasboard/";


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

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: 'history',
    routes : [
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