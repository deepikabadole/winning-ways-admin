export default {
    name: 'CommonAdminMixin',
    data() {
        return {
            singleWork: {
                "name": "",
                "description": "",
                "minBudget": "",
                "maxBudget": "",
                "status": "",
                "id": "",
                "amount": "",
                "disabled":false
            },
            editWorkModal: false,
            options: [
                {'label': 'Pending', 'value': 0},
                {'label': 'Progress', 'value': 1},
                {'label': 'Deal', 'value': 2},
                {'label': 'Completed', 'value': 3},
                {'label': 'Delivered', 'value': 4},
            ],
            optionsPending: [
                {'label': 'Pending', 'value': 0},
                {'label': 'Progress', 'value': 1},
            ],
            optionsProgress: [
                {'label': 'Progress', 'value': 1},
                {'label': 'Deal', 'value': 2},
            ],
            optionsDeal: [
                {'label': 'Deal', 'value': 2},
                {'label': 'Completed', 'value': 3},
            ],
            optionsCompleted: [
                {'label': 'Completed', 'value': 3},
                {'label': 'Delivered', 'value': 4},
            ],
            optionsDelivered: [
                {'label': 'Delivered', 'value': 4},
            ],

            creditAmountModal: false,
            creditAmountData: {
                "userId": "",
                "date": "",
                "comment": "",
                "amount": "",
                "requestId": ""
            },
            CategoryData: [],
            SubCategoryData: []
        }
    },
    created(){
        let that = this;
        that.getCategories();
    },
    methods: {

        getCategories: function () {
            let that = this;
            axios.post(APP_URL + '/select-categories').then(response => {
                    that.CategoryData = response.data.res;
                }
            ).catch((error) => {

            });
        },
        getSubCategories: function (id) {
            let that = this;
            axios.post(APP_URL + '/select-sub-categories/' + id).then(response => {
                    that.SubCategoryData = response.data.res;
                }
            ).catch((error) => {

            });
        },
        openModal: function (id, amount, requestId) {
            let that = this;
            that.creditAmountModal = true;
            that.creditAmountData.userId = id;
            that.creditAmountData.amount = amount;
            that.creditAmountData.requestId = requestId;
        },
        creditAmount: function (page = 1) {
            let that = this;
            if (!that.creditAmountData.date) {
                this.$swal({
                    type: "error",
                    title: "Error",
                    text: "Date is required",
                    showConfirmButton: true
                });
            } else if (!that.creditAmountData.amount) {
                this.$swal({
                    type: "error",
                    title: "Error",
                    text: "Amount is required",
                    showConfirmButton: true
                });
            } else if (!that.creditAmountData.comment) {
                this.$swal({
                    type: "error",
                    title: "Error",
                    text: "Comment is required",
                    showConfirmButton: true
                });
            } else {
                axios.post(APP_URL + '/credit-amount', that.creditAmountData).then(response => {
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.creditAmountModal = false;
                            that.getUserPayments();
                        });
                    }
                ).catch((error) => {

                });
            }
        },
        getSingleWork: function (id) {
            let that = this;
            axios.get(APP_URL + '/get-work-details/' + id).then(response => {
                    that.editWorkModal = true;
                    that.singleWork.name = response.data.res.name;
                    that.singleWork.description = response.data.res.description;
                    that.getCategories();
                    that.singleWork.category = response.data.res.category;
                    that.getSubCategories(that.singleWork.category);
                    that.singleWork.subcategory = response.data.res.sub_category;
                    that.singleWork.minBudget = response.data.res.min_budget;
                    that.singleWork.maxBudget = response.data.res.max_budget;
                    that.singleWork.status = response.data.res.status;
                    that.singleWork.id = response.data.res.id;
                    that.singleWork.amount = response.data.res.amount;
                }
            ).catch((error) => {

            });
        },
        updateWork: function (type) {
            let that = this;
            if (that.singleWork.name == "") {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Client Name",
                    showConfirmButton: true
                });
            } else if (that.singleWork.description == "") {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Description",
                    showConfirmButton: true
                });
            } else if (!that.singleWork.minBudget) {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Minimum Budget",
                    showConfirmButton: true
                });
            } else if (!that.singleWork.maxBudget) {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Maximum Budget",
                    showConfirmButton: true
                });
            } else if (that.singleWork.status == 2 && !that.singleWork.amount) {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Final Amount",
                    showConfirmButton: true
                });
            } else {
                that.singleWork.disabled = true;
                if (isNaN(that.singleWork.status)) {
                    that.singleWork.status = that.singleWork.status.value;
                }
                axios.post(APP_URL + '/update-work', that.singleWork).then(response => {
                    that.singleWork.disabled = false;
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.editWorkModal = false;
                            if (!type) {
                                var userId = document.URL.split('/')[document.URL.split('/').length - 1];
                                if(!isNaN(userId)){
                                    that.getUserWorks();
                                }else {
                                    that.getWorks();
                                }
                            } else {
                                that.getWorkDetails(that.singleWork.id)
                            }
                        });
                    }
                ).catch((error) => {
                    that.singleWork.disabled = false;
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    });
                });
            }
        },
        updateClaimWork: function (type) {
            let that = this;
            if (that.singleWork.name == "") {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Client Name",
                    showConfirmButton: true
                });
            } else if (that.singleWork.description == "") {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Description",
                    showConfirmButton: true
                });
            } else if (!that.singleWork.minBudget) {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Minimum Budget",
                    showConfirmButton: true
                });
            } else if (!that.singleWork.maxBudget) {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Maximum Budget",
                    showConfirmButton: true
                });
            } else if (that.singleWork.status == 2 && !that.singleWork.amount) {
                this.$swal({
                    type: "error",
                    title: "error",
                    text: "Please Enter Work Final Amount",
                    showConfirmButton: true
                });
            } else {
                that.singleWork.disabled = true;
                if (isNaN(that.singleWork.status)) {
                    that.singleWork.status = that.singleWork.status.value;
                }
                axios.post(APP_URL + '/update-work', that.singleWork).then(response => {
                        that.singleWork.disabled = false;
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.editWorkModal = false;
                            if (!type) {
                                var userId = document.URL.split('/')[document.URL.split('/').length - 1];
                                if(!isNaN(userId)){
                                    that.getUserWorks();
                                }else {
                                    that.getClaimedWorks();
                                }
                            } else {
                                that.getWorkDetails(that.singleWork.id)
                            }
                        });
                    }
                ).catch((error) => {
                    that.singleWork.disabled = false;
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    });
                });
            }
        },
    }
}
