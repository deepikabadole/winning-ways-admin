<template>
    <div>
        <CRow class="card-header">

            <CCol lg="8">
                <CRow>
                    <div role="group" class="form-group mr-3">
                        <label class="col-form-label "> Client Name </label>
                        <input type="text" class="form-control"
                               v-model="filterFollowupData.clientName">
                    </div>
                    <!--            </CCol>-->
                    <!--            <CCol lg="3">-->
                    <div role="group" class="form-group mr-3">
                        <label class="col-form-label "> Next Followup Date From </label>
                        <input type="date" class="form-control"
                               v-model="filterFollowupData.dateFrom">
                    </div>
                    <!--            </CCol>-->
                    <!--            <CCol lg="3">-->
                    <div role="group" class="form-group mr-3">
                        <label class="col-form-label "> Next Followup Date To </label>
                        <input type="date" class="form-control"
                               v-model="filterFollowupData.dateTo">
                    </div>
                </CRow>
            </CCol>

            <CCol lg="4">
                <CRow>
                    <div role="group" class="form-group mt-2 text-right">
                        <CButton class="mt-4 mr-4" type="button" color="primary" v-on:click="getWorkFollowup">
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
                </CRow>
            </CCol>

        </CRow>

        <CRow>
            <CCol lg="6" class="mt-5 text-left"><b>Followup Details</b></CCol>

            <div class="col-12 card mt-3">
                <table class="table table-bordered mt-5" v-if="followUpData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Client Name</th>
                        <th>Followup Date</th>
                        <th>Comment</th>
                        <th>Next Followup Date</th>
                        <!--                    <th>Action</th>-->
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in followUpData">
                        <td>{{index + 1}}</td>
                        <td>
                            <router-link
                                    :to="{ path: '/work/'+wd.work_id}">{{wd.name}}
                            </router-link>
                        </td>
                        <td>{{wd.created_at | formatDate}}</td>
                        <td>{{wd.comment}}</td>
                        <td>{{wd.next_followup_date}}</td>

                    </tr>
                    </tbody>
                </table>
                <pagination :data="followUpDataPage"
                            @pagination-change-page="getWorkFollowup"></pagination>
                <CCol lg="12" class="mt-5 mb-5" v-if="!followUpData.length">No Data Found</CCol>
            </div>
        </CRow>

    </div>
</template>
<style>
    .modal-footer {
        display: none !important;
    }

    .btn-edit {
        float: right;
        position: absolute;
        right: 31px;
        top: 6.6rem;
    }

</style>
<script>
    import CommonAdminMixin from "../../CommonAdminMixin";

    export default {
        name: 'Works',
        data() {
            return {
                workData: {},
                followUpData: [],
                exportedData: [],
                followUpDataPage: {},
                workId: "",
                filterFollowupData: {
                    "clientName": "",
                    'dateFrom': "",
                    "dateTo": ""

                }
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getWorkFollowup();
        },
        methods: {
            resetFilter: function () {
                let that = this;
                that.filterFollowupData.clientName = "";
                that.filterFollowupData.dateFrom = "";
                that.filterFollowupData.dateTo = "";
                that.getWorkFollowup();
            },
            getWorkFollowup: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-all-work-followup' + '?page=' + page, that.filterFollowupData).then(response => {
                        that.followUpData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.followUpDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },

        }
    }
</script>
