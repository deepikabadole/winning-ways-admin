<template>
    <div>
        <CRow>
            <CCol lg="8"></CCol>
            <CCol lg="2" class="text-right mr-0 mb-3">
                <CButton color="primary" v-on:click="addFaqModal=true">Add Faq</CButton>
            </CCol>
            <CCol lg="2">

                    <download-excel class="btn btn-primary text-right mr-0 mb-3"
                                    :data="exportedData">
                        Export Excel
                    </download-excel>

            </CCol>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="FaqData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in FaqData">
                        <td>{{index+1}}</td>
                        <td>{{wd.question}}</td>
                        <td>{{wd.answer}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleFaq(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deleteFaq(wd.id)">Delete</CDropdownItem>
                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="FaqDataPage"
                            @pagination-change-page="getFaqs"></pagination>
                <p class="p-3" v-if="!FaqData.length">No Data Found</p>

            </CCol>
        </CRow>


        <CModal
                title="Add Faq"
                :show.sync="addFaqModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CTextarea label="Question" horizontal v-model="addFaqData.question"></CTextarea>
                </CCol>
                <CCol sm="12">
                   <CTextarea label="Answer" horizontal v-model="addFaqData.answer"></CTextarea>
                </CCol>

            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="addFaqData.disabled"
                             v-on:click="addFaq('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>

        <CModal
                title="Update Faq"
                :show.sync="editFaqModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CTextarea label="Question" horizontal v-model="singleFaqData.question"></CTextarea>
                </CCol>
                <CCol sm="12">
                    <CTextarea label="Answer" horizontal v-model="singleFaqData.answer"></CTextarea>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleFaqData.disabled"
                             v-on:click="updateFaq('')">
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
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'Faqs',
        data() {
            return {
                addFaqData: {
                    "question":"",
                    "answer":"",
                    "disabled": false
                },
                FaqData: [],
                exportedData: [],
                FaqDataPage: {},
                addFaqModal: false,
                editFaqModal: false,
                singleFaqData: {
                    "id": "",
                    "question":"",
                    "answer":"",
                    "disabled": false
                },
                editor: ClassicEditor,
                editorData: '<p>Rich-text editor content.</p>',
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getFaqs();
        },
        methods: {
            getFaqs: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-faqs?page=' + page).then(response => {
                        that.FaqData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.FaqDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSingleFaq: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-faq/' + id).then(response => {
                        that.singleFaqData.id = response.data.res.id;
                        that.singleFaqData.question = response.data.res.question;
                        that.singleFaqData.answer = response.data.res.answer;
                        that.editFaqModal = true;
                    }
                ).catch((error) => {

                });
            },
            addFaq: function () {
                let that = this;

                if (that.addFaqData.question == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Question",
                        showConfirmButton: true
                    });
                } else if (that.addFaqData.answer == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Answer",
                        showConfirmButton: true
                    });
                } else {
                    that.addFaqData.disabled = true;

                    axios.post(APP_URL + '/add-faq', that.addFaqData).then(response => {
                            that.addFaqData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addFaqModal = false;
                                that.addFaqData.question = "";
                                that.addFaqData.answer = "";
                                that.getFaqs();
                            });
                        }
                    ).catch((error) => {
                        that.addFaqData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            updateFaq: function () {
                let that = this;
                if (that.singleFaqData.question == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Question",
                        showConfirmButton: true
                    });
                } else if (that.singleFaqData.answer == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Answer",
                        showConfirmButton: true
                    });
                } else {
                    that.singleFaqData.disabled = true;
                    axios.post(APP_URL + '/update-faq', that.singleFaqData).then(response => {
                            that.singleFaqData.disabled = false;
                        that.editFaqModal = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getFaqs();
                            });
                        }
                    ).catch((error) => {
                        that.singleFaqData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            deleteFaq: function (id) {
                let that = this;
                var text = "Are you sure? You want to delete this!";
                that.$swal({
                    title: "Delete?",
                    text: text,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Yes, Delete it!",
                }).then(function (result) {
                    if (result.value) {
                        axios.get(APP_URL + '/delete-faq/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getFaqs();
                                });
                            }
                        });
                    }
                })
            }
        }
    }
</script>
