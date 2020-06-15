<template>
    <div>
        <CRow>
            <CCol lg="8"></CCol>
            <CCol lg="2" class="text-right mr-0 mb-3">
                <CButton color="primary" v-on:click="addCareerModal=true">Add Career</CButton>
            </CCol>
            <CCol lg="2">

                <download-excel class="btn btn-primary text-right mr-0 mb-3"
                                :data="exportedData">
                    Export Excel
                </download-excel>

            </CCol>

            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="CareerData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Total Post</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in CareerData">
                        <td>{{index+1}}</td>
                        <td>{{wd.title}}</td>
                        <td>{{wd.description}}</td>
                        <td>{{wd.total_post}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleCareer(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deleteCareer(wd.id)">Delete</CDropdownItem>
                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="CareerDataPage"
                            @pagination-change-page="getCareers"></pagination>
                <p class="p-3" v-if="!CareerData.length">No Data Found</p>

            </CCol>
        </CRow>


        <CModal
                title="Add Career"
                :show.sync="addCareerModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Title"
                            type="text"
                            horizontal
                            v-model="addCareerData.title"
                    />
                </CCol>
                <CCol sm="12">
                   <CTextarea label="Description" horizontal v-model="addCareerData.description"></CTextarea>
                </CCol>
                <CCol sm="12">
                    <CInput
                            label="Total Post"
                            type="text"
                            horizontal
                            v-model="addCareerData.post"
                    />
                </CCol>

            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="addCareerData.disabled"
                             v-on:click="addCareer('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>

        <CModal
                title="Update Career"
                :show.sync="editCareerModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Title"
                            type="text"
                            horizontal
                            v-model="singleCareerData.title"
                    />
                </CCol>
                <CCol sm="12">
                    <CTextarea label="Description" horizontal v-model="singleCareerData.description"></CTextarea>
                </CCol>
                <CCol sm="12">
                    <CInput
                            label="Total Post"
                            type="text"
                            horizontal
                            v-model="singleCareerData.post"
                    />
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleCareerData.disabled"
                             v-on:click="updateCareer('')">
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
        name: 'Careers',
        data() {
            return {
                addCareerData: {
                    "title":"",
                    "description":"",
                    "post":"",
                    "disabled": false
                },
                CareerData: [],
                exportedData: [],
                CareerDataPage: {},
                addCareerModal: false,
                editCareerModal: false,
                singleCareerData: {
                    "id": "",
                    "title":"",
                    "description":"",
                    "post":"",
                    "disabled": false
                },
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getCareers();
        },
        methods: {
            getCareers: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-careers?page=' + page).then(response => {
                        that.CareerData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.CareerDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSingleCareer: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-career/' + id).then(response => {
                        that.singleCareerData.id = response.data.res.id;
                        that.singleCareerData.title = response.data.res.title;
                        that.singleCareerData.description = response.data.res.description;
                        that.singleCareerData.post = response.data.res.total_post;
                        that.editCareerModal = true;
                    }
                ).catch((error) => {

                });
            },
            addCareer: function () {
                let that = this;

                if (that.addCareerData.title == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title",
                        showConfirmButton: true
                    });
                } else if (that.addCareerData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description",
                        showConfirmButton: true
                    });
                }  else if (that.addCareerData.post == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Total no of Post",
                        showConfirmButton: true
                    });
                } else {
                    that.addCareerData.disabled = true;

                    axios.post(APP_URL + '/add-career', that.addCareerData).then(response => {
                            that.addCareerData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addCareerModal = false;
                                that.addCareerData.title = "";
                                that.addCareerData.description = "";
                                that.addCareerData.post = "";
                                that.getCareers();
                            });
                        }
                    ).catch((error) => {
                        that.addCareerData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            updateCareer: function () {
                let that = this;
                if (that.singleCareerData.title == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title",
                        showConfirmButton: true
                    });
                } else if (that.singleCareerData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description",
                        showConfirmButton: true
                    });
                }  else if (that.singleCareerData.post == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Total no of Post",
                        showConfirmButton: true
                    });
                } else {
                    that.singleCareerData.disabled = true;
                    axios.post(APP_URL + '/update-career', that.singleCareerData).then(response => {
                            that.singleCareerData.disabled = false;
                        that.editCareerModal = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getCareers();
                            });
                        }
                    ).catch((error) => {
                        that.singleCareerData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            deleteCareer: function (id) {
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
                        axios.get(APP_URL + '/delete-career/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getCareers();
                                });
                            }
                        });
                    }
                })
            }
        }
    }
</script>
