<template>
    <div>
        <CRow class="card-header">

            <CCol lg="2">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> Keyword </label>
                    <input type="text" class="form-control"
                           v-model="filterData.keyword">
                </div>
            </CCol>

            <CCol lg="2">
                <div role="group" class="form-group ">
                    <label class="col-form-label"> Category </label>
                    <select class="form-control" id="cat" v-model="filterData.category">
                        <option value="">Select Category</option>
                        <option v-for="o in AllCategoryData" v-bind:value="o.id">{{o.category_name}}</option>
                    </select>
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
            <CCol lg="3">
                <div role="group" class="form-group mt-2 text-right">
                    <CButton class="mt-4" color="primary" v-on:click="addCategoryModal=true;">Add Sub Category
                    </CButton>
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
                        <th>Sub Category Name</th>
                        <th>Category Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in CategoryData">
                        <td>{{index+1}}</td>
                        <td><img :src="wd.image" height="50" width="50"></td>
                        <td>
                            <router-link
                                    :to="{ path: '/subcategory/'+wd.id}">{{wd.sub_category_name}}
                            </router-link>
                        </td>
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
                title="Add Subcategory"
                :show.sync="addCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>

                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Category </label>
                        <div class="col-sm-9">
                            <select class="form-control" id="categoryId" v-model="addCategoryData.categoryId">
                                <option value="">Select Category</option>
                                <option v-for="o in AllCategoryData" v-bind:value="o.id">{{o.category_name}}</option>
                            </select>
                        </div>
                    </div>
                    <CInput
                            label="Subcategory Name"
                            type="text"
                            horizontal
                            v-model="addCategoryData.name"
                    />
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 1 </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="addCategoryData.description1"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 1 </label>
                        <div class="col-sm-9">
                            <input type="file" ref="image1"/>
                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 2 </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="addCategoryData.description2"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 2 </label>
                        <div class="col-sm-9">
                            <input type="file" ref="image2"/>
                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 3 </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="addCategoryData.description3"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 3 </label>
                        <div class="col-sm-9">
                            <input type="file" ref="image3"/>
                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 4 </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="addCategoryData.description4"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 4 </label>
                        <div class="col-sm-9">
                            <input type="file" ref="image4"/>
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
                title="Update Subcategory"
                :show.sync="editCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Category </label>
                        <div class="col-sm-9">
                            <select class="form-control" id="editCategoryId" v-model="singleCategoryData.categoryId">
                                <option value="">Select Category</option>
                                <option v-for="o in AllCategoryData" v-bind:value="o.id">{{o.category_name}}</option>
                            </select>
                        </div>
                    </div>
                    <CInput
                            label="Category Name"
                            type="text"
                            horizontal
                            v-model="singleCategoryData.name"
                    />
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 1</label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="singleCategoryData.description1"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 1 </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image1"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image 1</label>
                        <div class="col-sm-3 ">
                            <img :src="singleCategoryData.image1" height="50" width="50">
                        </div>
                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 2</label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="singleCategoryData.description2"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 2 </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image2"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image 2</label>
                        <div class="col-sm-3 ">
                            <img :src="singleCategoryData.image2" height="50" width="50">
                        </div>
                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 3</label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="singleCategoryData.description3"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 3 </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image3"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image 3</label>
                        <div class="col-sm-3 ">
                            <img :src="singleCategoryData.image3" height="50" width="50">
                        </div>
                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description 4</label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="singleCategoryData.description4"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image 4 </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image4"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image 4</label>
                        <div class="col-sm-3 ">
                            <img :src="singleCategoryData.image4" height="50" width="50">
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
                filterData: {
                    "keyword": "",
                    "category": ""
                },
                addCategoryData: {
                    "categoryId": "",
                    "name": "",
                    "description1": "",
                    "image1": "",
                    "description2": "",
                    "image2": "",
                    "description3": "",
                    "image3": "",
                    "description4": "",
                    "image4": "",
                    "disabled": false
                },
                AllCategoryData: [],
                CategoryData: [],
                exportedData: [],
                CategoryDataPage: {},
                addCategoryModal: false,
                editCategoryModal: false,
                singleCategoryData: {
                    "id": "",
                    "categoryId": "",
                    "name": "",
                    "description1": "",
                    "image1": "",
                    "description2": "",
                    "image2": "",
                    "description3": "",
                    "image3": "",
                    "description4": "",
                    "image4": "",
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
            that.getAllCategories();
        },
        methods: {
            resetFilter : function () {
                let that = this;
                that.filterData.keyword = "";
                that.filterData.category = "";
                that.getCategories();
            },
            getAllCategories: function () {
                let that = this;
                axios.post(APP_URL + '/select-categories').then(response => {
                        that.AllCategoryData = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getCategories: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-sub-categories?page=' + page, that.filterData).then(response => {
                        that.CategoryData = response.data.res.data;
                        that.CategoryDataPage = response.data.res;
                        that.exportedData = response.data.res.data;
                    }
                ).catch((error) => {

                });
            },
            getSingleCategory: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-sub-category/' + id).then(response => {
                        that.singleCategoryData.id = response.data.res.id;
                        that.singleCategoryData.categoryId = response.data.res.category_id;
                        that.singleCategoryData.name = response.data.res.sub_category_name;
                        that.singleCategoryData.description1 = response.data.res.description;
                        that.singleCategoryData.image1 = response.data.res.image;
                        that.singleCategoryData.description2 = response.data.res.description2;
                        that.singleCategoryData.image2 = response.data.res.image2;
                        that.singleCategoryData.description3 = response.data.res.description3;
                        that.singleCategoryData.image3 = response.data.res.image3;
                        that.singleCategoryData.description4 = response.data.res.description4;
                        that.singleCategoryData.image4 = response.data.res.image4;
                        that.editCategoryModal = true;
                    }
                ).catch((error) => {

                });
            },
            addCategory: function () {
                let that = this;
                if (that.addCategoryData.categoryId == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Select Category",
                        showConfirmButton: true
                    });
                } else if (that.addCategoryData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Sub Category Name",
                        showConfirmButton: true
                    });
                } else if (that.addCategoryData.description1 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 1",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image1.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Image 1",
                        showConfirmButton: true
                    });
                } else if (that.addCategoryData.description2 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 2",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image2.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Image 2",
                        showConfirmButton: true
                    });
                } else if (that.addCategoryData.description3 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 3",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image3.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Image 3",
                        showConfirmButton: true
                    });
                } else if (that.addCategoryData.description4 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 4",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image4.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Image 4",
                        showConfirmButton: true
                    });
                } else {
                    that.addCategoryData.disabled = true;

                    var file1 = that.$refs.image1.files[0];
                    var file2 = that.$refs.image2.files[0];
                    var file3 = that.$refs.image3.files[0];
                    var file4 = that.$refs.image4.files[0];
                    let formData = new FormData();
                    formData.append('image1', file1);
                    formData.append('image2', file2);
                    formData.append('image3', file3);
                    formData.append('image4', file4);
                    formData.append('categoryId', that.addCategoryData.categoryId);
                    formData.append('name', that.addCategoryData.name);
                    formData.append('description1', that.addCategoryData.description1);
                    formData.append('description2', that.addCategoryData.description2);
                    formData.append('description3', that.addCategoryData.description3);
                    formData.append('description4', that.addCategoryData.description4);

                    axios.post(APP_URL + '/add-sub-category', formData).then(response => {
                            that.addCategoryData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addCategoryModal = false;
                                const input1 = that.$refs.image1
                                input1.type = 'text'
                                input1.type = 'file'
                                const input2 = that.$refs.image2
                                input2.type = 'text'
                                input2.type = 'file'
                                const input3 = that.$refs.image3
                                input1.type = 'text'
                                input1.type = 'file'
                                const input4 = that.$refs.image4
                                input1.type = 'text'
                                input1.type = 'file'
                                that.addCategoryData.name = "";
                                that.addCategoryData.description1 = "";
                                that.addCategoryData.description2 = "";
                                that.addCategoryData.description3 = "";
                                that.addCategoryData.description4 = "";
                                that.addCategoryData.image1 = "";
                                that.addCategoryData.image2 = "";
                                that.addCategoryData.image3 = "";
                                that.addCategoryData.image4 = "";
                                that.addCategoryData.categoryId = "";
                                that.getCategories();
                            });
                        }
                    ).catch((error) => {
                        that.addCategoryData.disabled = false;
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
                if (that.singleCategoryData.categoryId == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Select Category",
                        showConfirmButton: true
                    });
                } else if (that.singleCategoryData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Name",
                        showConfirmButton: true
                    });
                } else {
                    that.singleCategoryData.disabled = true;
                    var file1 = that.$refs.edit_image1.files[0];
                    var file2 = that.$refs.edit_image2.files[0];
                    var file3 = that.$refs.edit_image3.files[0];
                    var file4 = that.$refs.edit_image4.files[0];

                    let formData = new FormData();
                    formData.append('image1', file1);
                    formData.append('image2', file2);
                    formData.append('image3', file3);
                    formData.append('image4', file4);
                    formData.append('id', that.singleCategoryData.id);
                    formData.append('categoryId', that.singleCategoryData.categoryId);
                    formData.append('name', that.singleCategoryData.name);
                    formData.append('description1', that.singleCategoryData.description1);
                    formData.append('description2', that.singleCategoryData.description2);
                    formData.append('description3', that.singleCategoryData.description3);
                    formData.append('description4', that.singleCategoryData.description4);


                    axios.post(APP_URL + '/update-sub-category', formData).then(response => {
                            that.singleCategoryData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {

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
                        axios.get(APP_URL + '/delete-sub-category/' + id).then((response) => {
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
            }
        }
    }
</script>
