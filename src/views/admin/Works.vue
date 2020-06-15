<template>
    <div>
        <CRow class="card-header">

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> User Name </label>
                        <input v-if="!isNaN(userId)"  type="text" class="form-control"
                               v-model="user" disabled>
                        <input v-if="isNaN(userId)"  type="text" class="form-control"
                               v-model="filterWorkData.userName">
                </div>
            </CCol>
            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label "> Client Name </label>
                        <input type="text" class="form-control"
                               v-model="filterWorkData.clientName">
                </div>
            </CCol>
            <CCol lg="3">
            <div role="group" class="form-group">
                <label class="col-form-label"> Category </label>

                    <select class="form-control" id="cat" v-model="filterWorkData.category" v-on:change="getSubCategories(filterWorkData.category)">
                        <option value="">Select Category</option>
                        <option v-for="o in CategoryData" v-bind:value="o.id">{{o.category_name}}</option>
                    </select>
            </div>
            </CCol>
            <CCol lg="3">
                <div role="group" class="form-group">
                    <label class="col-form-label"> Subcategory </label>

                        <select class="form-control" id="sub" v-model="filterWorkData.subcategory" >
                            <option value="">Select Subcategory</option>
                            <option v-for="o in SubCategoryData" v-bind:value="o.id">{{o.sub_category_name}}</option>
                        </select>

                </div>
            </CCol>
            <CCol lg="3">
                <div role="group" class="form-group">
                    <label  class="col-form-label"> Status </label>
                        <select class="form-control" id="st" v-model="filterWorkData.status">
                            <option value="">Select Status</option>

                            <option v-for="o in options" v-bind:value="o.label" >{{o.label}}</option>
                            <option value="Closed">Closed</option>
                        </select></div>

            </CCol>
            <CCol lg="1">
                <div role="group" class="form-group mt-2">
                <CButton v-if="isNaN(userId)" class="mt-4" type="button" color="primary" v-on:click="getWorks">
                    Filter
                </CButton>
                    <CButton v-if="!isNaN(userId)" class="mt-4" type="button" color="primary" v-on:click="getUserWorks">
                    Filter
                </CButton>
                </div>
            </CCol>
            <CCol lg="2">
                <div role="group" class="form-group mt-2">
                    <CButton class="mt-4" type="button" color="primary" v-on:click="resetFilter">
                        Reset Filter
                    </CButton>
                </div>
            </CCol>
            <CCol lg="6">
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
                <table class="table table-bordered mt-4" v-if="workData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>User Name</th>
                        <th>Client Name</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Description</th>
                        <th>Min Budget</th>
                        <th>Max Budget</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in workData">
                        <td>{{index + 1}}</td>
                        <td>{{wd.user_name}}</td>
                        <td>
                            <router-link
                                    :to="{ path: '/work/'+wd.id}">{{wd.name}}
                            </router-link>
                        </td>
                        <td>{{wd.category_name}}</td>
                        <td>{{wd.sub_category_name}}</td>
                        <td class="pre-format">{{wd.description}}</td>
                        <td>{{wd.min_budget}}</td>
                        <td>{{wd.max_budget}}</td>
                        <td>{{wd.status}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleWork(wd.id)">Edit</CDropdownItem>
<!--                                <CDropdownItem v-if="wd.status!=0" v-on:click="changeStatus(0,wd.id)">Change to-->
<!--                                    Pending-->
<!--                                </CDropdownItem>-->
<!--                                <CDropdownItem v-if="wd.status!=1" v-on:click="changeStatus(1,wd.id)">Change to-->
<!--                                    Progress-->
<!--                                </CDropdownItem>-->
<!--                                <CDropdownItem v-if="wd.status!=2" v-on:click="changeStatus(2,wd.id)">Change to Deal-->
<!--                                </CDropdownItem>-->
                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <pagination v-if="isNaN(userId)" :data="workDataPage"
                            @pagination-change-page="getWorks"></pagination>
                <pagination v-if="!isNaN(userId)" :data="workDataPage"
                            @pagination-change-page="getUserWorks"></pagination>
                <p v-if="!workData.length">No Data Found</p>

            </CCol>
        </CRow>


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
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Category </label>
                        <div class="col-sm-9">
                            <select class="form-control" id="editCategoryId" v-model="singleWork.category" v-on:change="getSubCategories(singleWork.category)">
                                <option value="">Select Category</option>
                                <option v-for="o in CategoryData" v-bind:value="o.id">{{o.category_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Subcategory </label>
                        <div class="col-sm-9">
                            <select class="form-control" id="editSubCategoryId" v-model="singleWork.subcategory" >
                                <option value="">Select Subcategory</option>
                                <option v-for="o in SubCategoryData" v-bind:value="o.id">{{o.sub_category_name}}</option>
                            </select>
                        </div>
                    </div>
                    <CTextarea
                            label="Work Description"
                            placeholder="Work Description"
                            horizontal
                            rows="5"
                            v-model="singleWork.description"
                    />

                    <div role="group" class="form-group form-row">
                        <label  class="col-form-label col-sm-3"> Min Budget </label>
                        <div class="col-sm-9">
                            <input  type="text" class="form-control"
                                   v-model="singleWork.minBudget"
                                   v-on:input="singleWork.minBudget = singleWork.minBudget.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                        </div>
                    </div>

                    <div role="group" class="form-group form-row">
                        <label  class="col-form-label col-sm-3"> Max Budget </label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control"
                                   v-model="singleWork.maxBudget"
                                   v-on:input="singleWork.maxBudget = singleWork.maxBudget.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                        </div>
                    </div>

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
                    <CButton type="button" size="sm" color="primary" :disabled="singleWork.disabled" v-on:click="updateWork('')">
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
                exportedData:[],
                workData: [],
                workDataPage: {},
                userId:"",
                filterWorkData:{
                    'userName':"",
                    'clientName':"",
                    'category':"",
                    'subcategory':"",
                    'status':"",

                },
                user: ""
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.userId = document.URL.split('/')[document.URL.split('/').length - 1];
            if(!isNaN(that.userId)){
                that.getUserWorks();
            }else {
                that.getWorks();
            }
        },
        methods: {
            resetFilter : function () {
                let that = this;
                that.filterWorkData.userName = "";
                that.filterWorkData.clientName = "";
                that.filterWorkData.category = "";
                that.filterWorkData.subcategory = "";
                that.filterWorkData.status = "";
                if(!isNaN(that.userId)){
                    that.getUserWorks();
                }else {
                    that.getWorks();
                }
            },
            getUserWorks: function (page = 1) {
                let that = this;
                axios.post(APP_URL+'/get-works-user/'+that.userId+'?page=' + page,that.filterWorkData).then(response => {
                        that.workData = response.data.res.data;
                        that.workDataPage = response.data.res;
                        that.exportedData = response.data.res.data;
                        that.user = response.data.user
                    }
                ).catch((error) => {

                });
            },

            getWorks: function (page = 1) {
                let that = this;
                axios.post(APP_URL+'/get-works?page=' + page, that.filterWorkData).then(response => {
                        that.workData = response.data.res.data;
                        that.workDataPage = response.data.res;
                        that.exportedData = response.data.res.data;
                    }
                ).catch((error) => {

                });
            },

            changeStatus: function (status, id) {
                let that = this;
                let st = "";
                if (status == 1) {
                    st = "Progress"
                } else if (status == 2) {
                    st = "Deal"
                } else if (status == 0) {
                    st = "Pending"
                }
                that.$swal({
                    title: "Are you sure?",
                    text: "You want to change status to " + st,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Yes"
                }).then(function (result) {
                    if (result.value) {
                        axios.post(APP_URL+'/change-status/' + id, {"status": status}).then(response => {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.data.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getWorks();
                                });
                            }
                        ).catch((error) => {
                        });
                    }
                });
            }
        }
    }
</script>
