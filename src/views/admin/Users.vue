<template>
    <div>
        <CRow class="card-header">

<!--            <CCol lg="8">-->
                <div role="group" class="form-group  mr-3">
                    <label class="col-form-label"> User Name </label>
                    <input type="text" class="form-control"
                           v-model="filterUserData.userName">
                </div>
<!--            </CCol>-->
<!--            <CCol lg="3">-->
                <div role="group" class="form-group  mr-3">
                    <label class="col-form-label "> Email </label>
                    <input type="text" class="form-control"
                           v-model="filterUserData.email">
                </div>
<!--            </CCol>-->
<!--            <CCol lg="2">-->
                <div role="group" class="form-group  mr-4">
                    <label class="col-form-label "> Phone </label>
                    <input type="text" class="form-control"
                           v-model="filterUserData.phone">
                </div>
<!--            </CCol>-->

<!--            <CCol lg="4">-->
                <div role="group" class="form-group mt-2 text-right">
                    <CButton class="mt-4 mr-4" type="button" color="primary" v-on:click="getUsers">
                        Filter
                    </CButton>
                    <CButton class="mt-4 mr-4" type="button" color="primary" v-on:click="resetFilter">
                        Reset Filter
                    </CButton>
                    <download-excel class="btn btn-primary mt-4"
                                    :data="exportedData">
                        Export Excel
                    </download-excel>
                </div>
<!--            </CCol>-->

        </CRow>
        <CRow>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="userData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registered Date</th>
                        <th>Current Plan</th>
                        <th>Package Expiry</th>
                        <th>Total Works</th>
                        <th>Total Claimed Works</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in userData">
                        <td>{{index + 1}}</td>
                        <td>
                        <router-link
                                :to="{ path: '/user/payments/'+wd.id}">{{wd.name}}
                        </router-link>
                        </td>
                        <td>{{wd.email}}</td>
                        <td>{{wd.phone}}</td>
                        <td>{{wd.created_at | formatDate}}</td>
                        <td>{{wd.package}}</td>
                        <td> <span v-if="wd.expiry">{{wd.expiry}}</span>
                            <span v-if="!wd.expiry">-</span></td>
                        <td>
                            <router-link
                                    :to="{ path: '/user/works/'+wd.id}">{{wd.total_works}}
                            </router-link>
                        </td>
                        <td>
                            <router-link
                                    :to="{ path: '/user/claimed-works/'+wd.id}">{{wd.total_claimed_works}}
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="userDataPage"
                            @pagination-change-page="getUsers"></pagination>
                <p v-if="!userData.length">No Data Found</p>

            </CCol>
        </CRow>
    </div>
</template>
<style>
    .modal-footer {
        display: none !important;
    }

</style>
<script>
    import CommonAdminMixin from "../../CommonAdminMixin";

    export default {
        name: 'Users',
        data() {
            return {
                userData: [],
                exportedData: [],
                userDataPage: {},
                filterUserData:{
                    'userName':"",
                    'email':"",
                    'phone':"",
                }
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getUsers();
        },
        methods: {
            getUsers: function (page = 1) {
                let that = this;
                axios.post(APP_URL+'/get-users?page=' + page,that.filterUserData).then(response => {
                        that.userData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.userDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            resetFilter : function () {
                let that = this;
                that.filterUserData.userName = "";
                that.filterUserData.email = "";
                that.filterUserData.phone = "";
                that.getUsers();
            }
        }
    }
</script>
