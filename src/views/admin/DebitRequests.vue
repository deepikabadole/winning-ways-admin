<template>
    <div>
        <CRow class="card-header">

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> User Name </label>
                    <input type="text" class="form-control"
                           v-model="filterRequestData.userName">
                </div>
            </CCol>
            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label "> Date </label>
                    <input type="date" class="form-control"
                           v-model="filterRequestData.date">
                </div>
            </CCol>

            <CCol lg="1">
                <div role="group" class="form-group mt-2">
                    <CButton class="mt-4" type="button" color="primary" v-on:click="getUserPayments">
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
                <table class="table table-bordered mt-4" v-if="paymentData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>User Name</th>
                        <th>Amount</th>
                        <th>Comment</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in paymentData">
                        <td>{{index + 1}}</td>
                        <td>
                            <router-link
                                    :to="{ path: '/user/payments/'+wd.user_id}">{{wd.name}}
                            </router-link>
                        </td>
                        <td>{{wd.amount}}</td>
                        <td>{{wd.comment}}</td>
                        <td>{{wd.created_at | formatDate}}</td>
                        <td>{{wd.status}}</td>
<!--                        <td>-->
<!--                            <button class="btn btn-primary"-->
<!--                                    v-on:click="openModal(wd.user_id,wd.amount,wd.id)">Credit Amount-->
<!--                            </button>-->
<!--                        </td>-->
                    </tr>
                    </tbody>
                </table>
                <pagination :data="paymentDataPage"
                            @pagination-change-page="getUserPayments"></pagination>
                <p v-if="!paymentData.length">No Data Found</p>

            </CCol>
        </CRow>
        <CModal
                title="Credit Amount"
                :show.sync="creditAmountModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Date"
                            type="date"
                            horizontal
                            v-model="creditAmountData.date"
                    />
                    <CInput
                            label="Amount"
                            type="text"
                            horizontal
                            v-model="creditAmountData.amount"
                    />
                    <CTextarea
                            label="Comments"
                            horizontal
                            rows="5"
                            v-model="creditAmountData.comment"
                    />


                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" v-on:click="creditAmount()">
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

</style>
<script>
    import CommonAdminMixin from "../../CommonAdminMixin";

    export default {
        name: 'Works',
        data() {
            return {
                paymentData: [],
                exportedData: [],
                paymentDataPage: {},
                userId: "",
                workId: "",
                filterRequestData:{
                    'userName':"",
                    'date':""
                }
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getUserPayments();
        },
        methods: {
            resetFilter : function () {
                let that = this;
                that.filterRequestData.userName = "";
                that.filterRequestData.date = "";
                that.getUserPayments();
            },
            getUserPayments: function (page = 1) {
                let that = this;
                axios.post(APP_URL+'/get-debit-requests?page=' + page,that.filterRequestData).then(response => {
                        that.paymentData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.paymentDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },

        }
    }
</script>
