<template>
    <div>
        <CRow class="card-header">

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> Name </label>
                    <input type="text" class="form-control"
                           v-model="filterWorkData.name">
                </div>
            </CCol>

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> Email </label>
                    <input type="text" class="form-control"
                           v-model="filterWorkData.email">
                </div>
            </CCol>

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> Phone </label>
                    <input type="text" class="form-control"
                           v-model="filterWorkData.phone">
                </div>
            </CCol>


            <CCol lg="3">
                <div role="group" class="form-group mt-2">
                    <CButton class="mt-4 mr-2" type="button" color="primary" v-on:click="getContacts">
                        Filter
                    </CButton>
                    <CButton class="mt-4 mr-4" type="button" color="primary" v-on:click="resetFilter">
                        Reset Filter
                    </CButton>
                </div>
            </CCol>
            <CCol lg="12">
                <div role="group" class="form-group text-right">
                    <download-excel class="btn btn-primary"
                                    :data="exportedData">
                        Export Excel
                    </download-excel>
                </div>
            </CCol>
        </CRow>
        <CRow>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="workData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in workData">
                        <td>{{index + 1}}</td>
                        <td>{{wd.name}}</td>
                        <td>{{wd.email}}</td>
                        <td>{{wd.phone}}</td>
                        <td>{{wd.subject}}</td>
                        <td>{{wd.message}}</td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="workDataPage"
                            @pagination-change-page="getContacts"></pagination>
                <p v-if="!workData.length">No Data Found</p>

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
        name: 'Works',
        data() {
            return {
                workData: [],
                exportedData: [],
                workDataPage: {},
                userId: "",
                filterWorkData: {
                    'name': "",
                    'email': "",
                    'phone': ""
                }
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;

            that.getContacts();

        },
        methods: {
            resetFilter: function () {
                let that = this;
                that.filterWorkData.name = "";
                that.filterWorkData.email = "";
                that.filterWorkData.phone = "";
                that.getContacts();
            },
            getContacts: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-contact-data?page=' + page, that.filterWorkData).then(response => {
                        that.workData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.workDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
        }
    }
</script>
