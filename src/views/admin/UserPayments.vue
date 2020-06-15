<template>
    <div>
        <CRow>
            <CCol lg="6"><h3>{{user_name}}'s Account Statement</h3></CCol>
            <CCol lg="4" class="text-right">
                <download-excel class="btn btn-primary"
                                :data="exportedData">
                    Export Excel
                </download-excel>
            </CCol>
            <CCol lg="2" class="text-right">
                <button class="btn btn-primary"
                        v-on:click="openModal(userId,0,0)">Credit Amount
                </button>
            </CCol>
        </CRow>
        <CRow>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="paymentData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Date</th>
                        <th>CREDIT</th>
                        <th>DEBIT</th>
                        <th>Balance</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in paymentData">
                        <td>{{index + 1}}</td>
                        <td>{{wd.updated_at | formatDate}}</td>
                        <td><span v-if="wd.transaction_type=='CREDIT'">{{wd.amount}}</span><span
                                v-if="wd.transaction_type=='DEBIT'">-</span></td>
                        <td><span v-if="wd.transaction_type=='DEBIT'">{{wd.amount}}</span><span
                                v-if="wd.transaction_type=='CREDIT'">-</span></td>
                        <td>{{wd.balance}}</td>
                        <td><span v-if="wd.status==0">Pending</span><span v-if="wd.status==1">Completed</span></td>
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

                    <div role="group" class="form-group form-row">
                        <label  class="col-form-label col-sm-3"> Amount </label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control"
                                   v-model="creditAmountData.amount"
                                   v-on:input="creditAmountData.amount = creditAmountData.amount.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                      </div>
                    </div>

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
                creditAmountModal: false,
                "user_name": "",
                creditAmountData: {
                    "id": "",
                    "date": "",
                    "comment": "",
                    "amount": ""
                },
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.userId = document.URL.split('/')[document.URL.split('/').length - 1];
            that.getUserPayments();
        },
        methods: {
            getUserPayments: function (page = 1) {
                let that = this;
                axios.post(APP_URL+'/get-user-payments?page=' + page, {"userId": that.userId}).then(response => {
                        that.paymentData = response.data.res.data;
                        that.paymentDataPage = response.data.res;
                        that.user_name = response.data.user_name;
                        that.exportedData = response.data.new_arr;
                    }
                ).catch((error) => {

                });
            },
        }
    }
</script>
