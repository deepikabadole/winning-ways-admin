<template>
    <div>
        <CRow>
            <CCol lg="4"></CCol>
            <CCol lg="4"></CCol>
            <CCol lg="4" class="text-right mr-0 mb-3">
                <CButton color="primary" v-on:click="addCategoryModal=true;">Add
                </CButton>
            </CCol>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="packageData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Work Name</th>
                        <th>Package 1</th>
                        <th>Package 2</th>
                        <th>Package 3</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in packageData">
                        <td>{{index+1}}</td>
                        <td>{{wd.name}}</td>
                        <td>{{wd.package1}}</td>
                        <td>{{wd.package2}}</td>
                        <td>{{wd.package3}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSinglePackage(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deletePackage(wd.id)">Delete</CDropdownItem>

                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="packageDataPage"
                            @pagination-change-page="getPackages"></pagination>
                <p class="p-3" v-if="!packageData.length">No Data Found</p>

            </CCol>
        </CRow>


        <CModal
                title="Add Subcategory"
                :show.sync="addCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>

                <CCol sm="12">

                    <CInput
                            label="Work Name"
                            type="text"
                            horizontal
                            v-model="addpackageData.name"
                    />
                     <CInput
                            label="Package 1"
                            type="text"
                            horizontal
                            v-model="addpackageData.package1"
                    />
                    <CInput
                            label="Package 2"
                            type="text"
                            horizontal
                            v-model="addpackageData.package2"
                    />
                    <CInput
                            label="Package 3"
                            type="text"
                            horizontal
                            v-model="addpackageData.package3"
                    />

                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="addpackageData.disabled"
                             v-on:click="addCategory('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>
        <CModal
                title="Update Subcategory"
                :show.sync="editCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Work Name"
                            type="text"
                            horizontal
                            v-model="singlepackageData.name"
                    />
                    <CInput
                            label="Package 1"
                            type="text"
                            horizontal
                            v-model="singlepackageData.package1"
                    />
                    <CInput
                            label="Package 2"
                            type="text"
                            horizontal
                            v-model="singlepackageData.package2"
                    />
                    <CInput
                            label="Package 3"
                            type="text"
                            horizontal
                            v-model="singlepackageData.package3"
                    />
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singlepackageData.disabled"
                             v-on:click="updateCategory('')">
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
        name: 'Categories',
        data() {
            return {
                addpackageData: {
                    "name": "",
                    "package1": "",
                    "package2": "",
                    "package3": "",
                    "disabled": false
                },
                AllpackageData: [],
                packageData: [],
                packageDataPage: {},
                addCategoryModal: false,
                editCategoryModal: false,
                singlepackageData: {
                    "id": "",
                    "name": "",
                    "package1": "",
                    "package2": "",
                    "package3": "",
                    "disabled": false
                },
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getPackages();
        },
        methods: {
            getPackages: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-all-work-packages?page=' + page).then(response => {
                        that.packageData = response.data.res.data;
                        that.packageDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSinglePackage: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-work-packages/' + id).then(response => {
                        that.singlepackageData.id = response.data.res.id;
                        that.singlepackageData.name = response.data.res.name;
                        that.singlepackageData.package1 = response.data.res.package1;
                        that.singlepackageData.package2 = response.data.res.package2;
                        that.singlepackageData.package3 = response.data.res.package3;
                        that.editCategoryModal = true;
                    }
                ).catch((error) => {

                });
            },
            addCategory: function () {
                let that = this;
                if (that.addpackageData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Work Name",
                        showConfirmButton: true
                    });
                } else if (that.addpackageData.package1 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package 1",
                        showConfirmButton: true
                    });
                } else if (that.addpackageData.package2 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package 2",
                        showConfirmButton: true
                    });
                } else if (that.addpackageData.package3 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package 3",
                        showConfirmButton: true
                    });
                }  else {
                    that.addpackageData.disabled = true;
                    axios.post(APP_URL + '/add-work-packages', that.addpackageData).then(response => {
                            that.addpackageData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addCategoryModal = false;
                                that.addpackageData.name = "";
                                that.addpackageData.package1 = "";
                                that.addpackageData.package2 = "";
                                that.addpackageData.package3 = "";
                                that.getPackages();
                            });
                        }
                    ).catch((error) => {
                        that.addpackageData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            updateCategory: function () {
                let that = this;
                if (that.singlepackageData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Work Name",
                        showConfirmButton: true
                    });
                } else if (that.singlepackageData.package1 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package 1",
                        showConfirmButton: true
                    });
                } else if (that.singlepackageData.package2 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package 2",
                        showConfirmButton: true
                    });
                } else if (that.singlepackageData.package3 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package 3",
                        showConfirmButton: true
                    });
                } else {
                    that.singlepackageData.disabled = true;

                    axios.post(APP_URL + '/update-work-packages', that.singlepackageData).then(response => {
                            that.singlepackageData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {

                                that.editCategoryModal = false;
                                that.getPackages();
                            });
                        }
                    ).catch((error) => {
                        that.singlepackageData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            deletePackage: function (id) {
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
                        axios.get(APP_URL + '/delete-work-packages/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getPackages();
                                });
                            }
                        });
                    }
                })
            }
        }
    }
</script>
