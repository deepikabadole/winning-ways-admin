<template>
    <div>
        <CRow class="card-header">

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> User Name </label>
                    <input type="text" class="form-control"
                           v-model="filterData.user">
                </div>
            </CCol>
            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label "> Package Name </label>
                    <input type="text" class="form-control"
                           v-model="filterData.package">
                </div>
            </CCol>


            <CCol lg="1">
                <div role="group" class="form-group mt-2">
                    <CButton class="mt-4 mr-3" type="button" color="primary" v-on:click="getPackageRequests">
                        Filter
                    </CButton>
                </div>
            </CCol>
            <CCol lg="2">
                <div role="group" class="form-group mt-2">
                    <CButton class="mt-4 mr-4" type="button" color="primary" v-on:click="resetFilter">
                        Reset Filter
                    </CButton>
                </div>
            </CCol>

            <CCol lg="3">
                <div role="group" class="form-group mt-2 text-right">
                    <download-excel class="btn btn-primary mt-4"
                                    :data="exportedData">
                        Export Excel
                    </download-excel>
                </div>
            </CCol>

        </CRow>
        <CRow>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="packageData.length">
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Package Name</th>
                        <th>Price</th>
                        <!--                        <th>Commission</th>-->
                        <th>Validity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in packageData">
                        <td>{{wd.name}}</td>
                        <td>{{wd.pkg_name}}</td>
                        <td>{{wd.price}}</td>
                        <!--                        <td>{{wd.commission}}</td>-->
                        <td>{{wd.validity}}</td>
                        <td>
                           <button class="btn btn-success" v-on:click="acceptPackageRequest(wd.id)">Assign Plan</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="packageDataPage"
                            @pagination-change-page="getPackageRequests"></pagination>
                <p class="p-3" v-if="!packageData.length">No Data Found</p>
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
        name: 'Packages',
        data() {
            return {
                filterData:{
                    "user":"",
                    "package":""
                },
                packageData: [],
                exportedData: [],
                packageDataPage: {},
                addPackageModal: false,
                editPackageModal: false,

            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getPackageRequests();
        },
        methods: {
            resetFilter : function () {
                let that = this;
                that.filterData.user = "";
                that.filterData.package = "";
                that.getPackageRequests();
            },
            getPackageRequests: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-package-requests?page=' + page,that.filterData).then(response => {
                        that.packageData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.packageDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            acceptPackageRequest: function (id) {
                let that = this;
               axios.get(APP_URL + '/accept-package-request/'+id).then(response => {
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.editPackageModal = false;
                            that.getPackageRequests();
                        });
                    }
                ).catch((error) => {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    });
                });

            },
        }
    }
</script>
