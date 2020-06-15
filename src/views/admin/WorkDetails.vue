<template>
    <div>
        <CRow>
            <CButton class="btn-edit" type="button" size="sm" color="primary" v-on:click="getSingleWork(workData.id)">
                Edit
            </CButton>
        </CRow>
        <div class="card p-4">

            <CRow>
                <CCol lg="3">
                    <b>Client Name</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.name}}</p>
                </CCol>
                <CCol lg="3">
                    <b>Work Description</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.description}}</p>
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="3">
                    <b>Min Budget</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.min_budget}} <span class="fa fa-rupee-sign"></span></p>
                </CCol>
                <CCol lg="3">
                    <b>Max Budget</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.max_budget}} <span class="fa fa-rupee-sign"></span></p>
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="3">
                    <b>Phone</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.phone}} </p>
                </CCol>
                <CCol lg="3">
                    <b>Posted By</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.username}} </p>
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="3">
                    <b>Status</b>
                </CCol>
                <CCol lg="3">
                    <p>{{workData.status | getStatus(workData.status)}} </p>
                </CCol>
                <CCol lg="3" v-if="workData.image">
                    <b>Image</b>
                </CCol>
                <CCol lg="3" v-if="workData.image">
                    <img :src="workData.image" height="80" width="80"/>
                </CCol>
            </CRow>
            <CRow>
                <CCol lg="3" v-if="workData.amount">
                    <b>Amount</b>
                </CCol>
                <CCol lg="3" v-if="workData.amount">
                    <p>{{workData.amount}} </p>
                </CCol>
            </CRow>
        </div>
        <CRow v-if="workData.status!=0">
            <CCol lg="6" class="mt-5 text-left"><b>Followup Details</b></CCol>
            <CCol lg="1"></CCol>
            <CCol lg="3" class="mt-5 text-right" v-if="workData.status<4" >
                <CButton color="primary" @click="addFollowupModal = true" class="mr-1">
                    Take Followup
                </CButton>
            </CCol>
            <CCol lg="2" class="mt-5 text-right" >
                <CButton color="primary" @click="closeWork" class="mr-1" v-if="workData.status<=3">
                    Close Work
                </CButton>
            </CCol>
            <div class="col-12 card mt-3">
                <table class="table table-bordered mt-5" v-if="followUpData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Followup Date</th>
                        <th>Comment</th>
                        <th>Next Followup Date</th>
                        <th v-if="workData.status<4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in followUpData">
                        <td>{{index + 1}}</td>
                        <td>{{wd.created_at | formatDate}}</td>
                        <td class="pre-format">{{wd.comment}}</td>
                        <td>{{wd.next_followup_date | formatDateTime}}</td>
                        <td v-if="workData.status<4">
                            <CButton class="mr-3" type="button" size="sm" color="primary"
                                     v-on:click="getSingleWorkFollowup(wd.id)">Edit
                            </CButton>
                            <CButton type="button" size="sm" color="danger" v-on:click="deleteWorkFollowup(wd.id)">
                                Delete
                            </CButton>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="followUpDataPage"
                            @pagination-change-page="getWorkFollowup"></pagination>
                <CCol lg="12" class="mt-5 mb-5" v-if="!followUpData.length">No Data Found</CCol>
            </div>
        </CRow>

        <CModal
                title="Take Followup"
                :show.sync="addFollowupModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CTextarea
                            label="Comment"
                            placeholder="Comment..."
                            horizontal
                            rows="5"
                            v-model="addWorkFollowupData.comment"
                    />
                    <CInput
                            label="Next Followup Date"
                            type="date"
                            horizontal
                            v-model="addWorkFollowupData.nextFollowupDate"
                    />
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="addWorkFollowupData.disabled" v-on:click="takeWorkFollowup">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>


        <CModal
                title="Update Followup"
                :show.sync="editFollowupModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CTextarea
                            label="Comment"
                            placeholder="Comment..."
                            horizontal
                            rows="5"
                            v-model="singleWorkFollowupData.comment"
                    />
                    <CInput
                            label="Next Followup Date"
                            type="date"
                            horizontal
                            v-model="singleWorkFollowupData.nextFollowupDate"
                    />
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleWorkFollowupData.disabled" v-on:click="updateWorkFollowup">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>


        <CModal
                title="Update Work"
                :show.sync="editWorkModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Client Name"
                            type="text"
                            horizontal
                            v-model="singleWork.name"
                    />
                    <CTextarea
                            label="Work Description"
                            placeholder="Work Description"
                            horizontal
                            rows="5"
                            v-model="singleWork.description"
                    />
                    <CInput
                            label="Min Budget"
                            type="text"
                            horizontal
                            v-model="singleWork.minBudget"
                    />
                    <CInput
                            label="Max Budget"
                            type="text"
                            horizontal
                            v-model="singleWork.maxBudget"
                    />

                    <div role="group" class="form-group form-row">
                        <label  class="col-form-label col-sm-3"> Status </label>
                        <div class="col-sm-9">
                            <select v-if="singleWork.status==0" class="form-control" id="status" v-model="singleWork.status">
                                <option v-for="o in optionsPending" v-bind:value="o.value" >{{o.label}}</option>
                            </select>
                            <select v-if="singleWork.status==1" class="form-control" id="status" v-model="singleWork.status">
                                <option v-for="o in optionsProgress" v-bind:value="o.value" >{{o.label}}</option>
                            </select>
                            <select v-if="singleWork.status==2" class="form-control" id="status" v-model="singleWork.status">
                                <option v-for="o in optionsDeal" v-bind:value="o.value" >{{o.label}}</option>
                            </select>
                            <select v-if="singleWork.status==3" class="form-control" id="status" v-model="singleWork.status">
                                <option v-for="o in optionsCompleted" v-bind:value="o.value" >{{o.label}}</option>
                            </select>
                            <select v-if="singleWork.status==4" class="form-control" id="status" v-model="singleWork.status">
                                <option v-for="o in optionsDelivered" v-bind:value="o.value" >{{o.label}}</option>
                            </select>
                            <span v-if="singleWork.status==5">Closed</span>
                        </div>
                    </div>

                    <CInput
                            label="Amount"
                            type="text"
                            horizontal
                            v-model="singleWork.amount"
                            v-if="singleWork.status==2"
                    />
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleWork.disabled" v-on:click="updateWork(1)">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>


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
    .btn-primary:disabled{
        opacity: 0.5 !important;
    }
    .pre-format{
        white-space: pre-line;
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
                followUpDataPage: {},
                workId: "",
                addWorkFollowupData: {
                    "comment": "",
                    "nextFollowupDate": "",
                    "disabled":false
                },
                addFollowupModal: false,
                editFollowupModal: false,
                singleWorkFollowupData: {
                    "comment": "",
                    "nextFollowupDate": "",
                    "id": "",
                    "disabled":false
                },
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            var id = document.URL.split('/')[document.URL.split('/').length - 1];
            console.log(id);
            that.workId = id;
            that.getWorkDetails(id);
            that.getWorkFollowup();
        },
        methods: {
            closeWork: function () {
                let that = this;
                that.$swal({
                    title: "Are you sure?",
                    text: "You want to close this work",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Yes",
                }).then(function (result) {
                    if (result.value) {
                        axios.get(APP_URL + '/close-work/' + that.workId).then(response => {
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getWorkDetails(that.workId);
                                that.getWorkFollowup();
                            });
                            }
                        ).catch((error) => {

                        });
                    }
                });
            },
            getWorkDetails: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-work-details/' + id).then(response => {
                        that.workData = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            deleteWorkFollowup: function (id) {
                let that = this;
                that.$swal({
                    title: "Are you sure?",
                    text: "You want to delete",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Yes",
                }).then(function (result) {
                    if (result.value) {
                        axios.get(APP_URL + '/delete-work-followup/' + id).then(response => {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.data.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getWorkFollowup();
                                });
                            }
                        ).catch((error) => {

                        });
                    }
                });
            },
            getWorkFollowup: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-work-followup/' + that.workId + '?page=' + page).then(response => {
                        that.followUpData = response.data.res.data;
                        that.followUpDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSingleWorkFollowup: function (id) {
                let that = this;
                axios.post(APP_URL + '/get-single-work-followup/' + id).then(response => {
                        that.singleWorkFollowupData.id = response.data.res.id;
                        that.singleWorkFollowupData.nextFollowupDate = response.data.res.next_followup_date;
                        that.singleWorkFollowupData.comment = response.data.res.comment;
                        that.editFollowupModal = true;
                    }
                ).catch((error) => {

                });
            },
            takeWorkFollowup: function () {
                let that = this;
                that.addWorkFollowupData.disabled = true;
                axios.post(APP_URL + '/take-work-followup/' + that.workId, that.addWorkFollowupData).then(response => {
                    that.addWorkFollowupData.disabled = false;
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.addWorkFollowupData.comment = "";
                            that.addWorkFollowupData.nextFollowupDate = "";
                            that.addFollowupModal = false;
                            that.getWorkFollowup();
                        });
                    }
                ).catch((error) => {
                    that.addWorkFollowupData.disabled = false;
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    });
                });
            },
            updateWorkFollowup: function () {
                let that = this;
                that.singleWorkFollowupData.disabled = true;
                axios.post(APP_URL + '/update-work-followup', that.singleWorkFollowupData).then(response => {
                    that.singleWorkFollowupData.disabled = false;
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.editFollowupModal = false;
                            that.getWorkFollowup();
                        });
                    }
                ).catch((error) => {
                    that.singleWorkFollowupData.disabled = false;
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
