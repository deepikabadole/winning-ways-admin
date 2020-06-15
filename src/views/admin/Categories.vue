<template>
    <div>

        <CRow class="card-header">

            <CCol lg="3">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> Keyword </label>
                    <input type="text" class="form-control"
                           v-model="filterData.keyword">
                </div>
            </CCol>


            <CCol lg="1">
                <div role="group" class="form-group mt-2">
                    <CButton class="mt-4" type="button" color="primary" v-on:click="getCategories">
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
            <CCol lg="4">
                <div role="group" class="form-group mt-2 text-right">
                    <CButton class="mt-4" color="primary" v-on:click="addCategoryModal=true">Add Category</CButton>
                </div>
            </CCol>
            <CCol lg="2">
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
            <table class="table table-bordered mt-4" v-if="CategoryData.length">
                <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(wd,index) in CategoryData">
                    <td>{{index+1}}</td>
                    <td><img :src="wd.image" height="50" width="50"></td>
                    <td>{{wd.category_name}}</td>
                    <td><span v-html="wd.description"></span></td>
                    <td>
                        <CDropdown
                                toggler-text="Action"
                                class="m-2"
                                color="secondary"
                        >
                            <CDropdownItem v-on:click="getSingleCategory(wd.id)">Edit</CDropdownItem>
                            <CDropdownItem v-on:click="deleteCategory(wd.id)">Delete</CDropdownItem>
                        </CDropdown>
                    </td>
                </tr>
                </tbody>
            </table>
            <pagination :data="CategoryDataPage"
                        @pagination-change-page="getCategories"></pagination>
            <p class="p-3" v-if="!CategoryData.length">No Data Found</p>

        </CCol>
        </CRow>

        <CModal
                title="Add Category"
                :show.sync="addCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Name"
                            type="text"
                            horizontal
                            v-model="addCategoryData.name"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="addCategoryData.description"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <!--                    <CTextarea label="Description" horizontal v-model="addCategoryData.description"></CTextarea>-->
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image </label>
                        <div class="col-sm-9">
                            <input type="file" ref="image"/>
                        </div>

                    </div>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="addCategoryData.disabled"
                             v-on:click="addCategory('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>

        <CModal
                title="Update Category"
                :show.sync="editCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Category Name"
                            type="text"
                            horizontal
                            v-model="singleCategoryData.name"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="singleCategoryData.description"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image </label>
                        <div class="col-sm-3 ">
                            <img :src="singleCategoryData.image" height="50" width="50">
                        </div>
                    </div>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleCategoryData.disabled"
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
                addCategoryData: {
                    "name": "",
                    "description": "",
                    "image": "",
                    "disabled": false
                },
                filterData: {
                    "keyword": ""
                },
                CategoryData: [],
                exportedData:[],
                CategoryDataPage: {},
                addCategoryModal: false,
                editCategoryModal: false,
                singleCategoryData: {
                    "id": "",
                    "name": "",
                    "description": "",
                    "image": "",
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
            that.getCategories();
        },
        methods: {
            getCategories: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-categories?page=' + page, that.filterData).then(response => {
                        that.CategoryData = response.data.res.data;
                        that.CategoryDataPage = response.data.res;
                        that.exportedData = response.data.res.data;
                    }
                ).catch((error) => {

                });
            },
            addCategoryToHomePage: function (id, type, status) {
                let that = this;
                axios.post(APP_URL + '/add-category-to-homepage', {
                    "id": id,
                    "type": type,
                    "status": status
                }).then(response => {
                        that.$swal({
                            type: "success",
                            title: "Success",
                            text: response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.getCategories();
                        });
                    }
                ).catch((error) => {

                });
            },
            getSingleCategory: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-category/' + id).then(response => {
                        that.singleCategoryData.id = response.data.res.id;
                        that.singleCategoryData.name = response.data.res.category_name;
                        that.singleCategoryData.description = response.data.res.description;
                        that.singleCategoryData.image = response.data.res.image;
                        that.editCategoryModal = true;
                    }
                ).catch((error) => {

                });
            },
            addCategory: function () {
                let that = this;

                if (that.addCategoryData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Name",
                        showConfirmButton: true
                    });
                } else if (that.addCategoryData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Description",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Category Image",
                        showConfirmButton: true
                    });
                } else {
                    that.addCategoryData.disabled = true;
                    var file = that.$refs.image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('name', that.addCategoryData.name);
                    formData.append('description', that.addCategoryData.description);

                    axios.post(APP_URL + '/add-category', formData).then(response => {
                            that.addCategoryData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addCategoryModal = false;
                                const input = that.$refs.image
                                input.type = 'text'
                                input.type = 'file'
                                that.addCategoryData.name = "";
                                that.addCategoryData.description = "";
                                that.addCategoryData.image = "";
                                that.getCategories();
                            });
                        }
                    ).catch((error) => {
                        that.addCategoryData.disabled = false;
                        that.$swal({
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
                if (that.singleCategoryData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Name",
                        showConfirmButton: true
                    });
                } else if (that.singleCategoryData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Description",
                        showConfirmButton: true
                    });
                } else {
                    that.singleCategoryData.disabled = true;
                    var file = that.$refs.edit_image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('id', that.singleCategoryData.id);
                    formData.append('name', that.singleCategoryData.name);
                    formData.append('description', that.singleCategoryData.description);

                    axios.post(APP_URL + '/update-category', formData).then(response => {
                            that.singleCategoryData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                const input = that.$refs.edit_image
                                input.type = 'text'
                                input.type = 'file'
                                that.editCategoryModal = false;
                                that.getCategories();
                            });
                        }
                    ).catch((error) => {
                        that.singleCategoryData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            deleteCategory: function (id) {
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
                        axios.get(APP_URL + '/delete-category/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getCategories();
                                });
                            }
                        });
                    }
                })
            },
            resetFilter : function () {
                let that = this;
                that.filterData.keyword = "";
                that.getCategories();
            }
        }
    }
</script>
