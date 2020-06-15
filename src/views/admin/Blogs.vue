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
                    <CButton class="mt-4" type="button" color="primary" v-on:click="getBlogs">
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
                    <CButton class="mt-4" color="primary" v-on:click="addBlogModal=true">Add Blog</CButton>
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
                <table class="table table-bordered mt-4" v-if="BlogData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Video Url</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in BlogData">
                        <td>{{index+1}}</td>
                        <td><img :src="wd.image" height="50" width="50"></td>
                        <td>{{wd.name}}</td>
                        <td><span v-html="wd.description"></span></td>
                        <td>{{wd.video}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleBlog(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deleteBlog(wd.id)">Delete</CDropdownItem>
                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="BlogDataPage"
                            @pagination-change-page="getBlogs"></pagination>
                <p class="p-3" v-if="!BlogData.length">No Data Found</p>

            </CCol>
        </CRow>


        <CModal
                title="Add Blog"
                :show.sync="addBlogModal"
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
                            v-model="addBlogData.name"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="addBlogData.description"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                    <!--                    <CTextarea label="Description" horizontal v-model="addBlogData.description"></CTextarea>-->
                </CCol>
                <CCol sm="12">
                    <CInput
                            label="Video Url"
                            type="text"
                            horizontal
                            v-model="addBlogData.video"
                    />
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
                    <CButton type="button" size="sm" color="primary" :disabled="addBlogData.disabled"
                             v-on:click="addBlog('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>

        <CModal
                title="Update Blog"
                :show.sync="editBlogModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Blog Name"
                            type="text"
                            horizontal
                            v-model="singleBlogData.name"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Description </label>
                        <div class="col-sm-9">
                            <ckeditor :editor="editor" v-model="singleBlogData.description"
                                      :config="editorConfig"></ckeditor>

                        </div>

                    </div>
                </CCol>
                <CCol sm="12">
                    <CInput
                            label="Video Url"
                            type="text"
                            horizontal
                            v-model="singleBlogData.video"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image </label>
                        <div class="col-sm-3 ">
                            <img :src="singleBlogData.image" height="50" width="50">
                        </div>
                    </div>
                </CCol>


            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleBlogData.disabled"
                             v-on:click="updateBlog('')">
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
        name: 'Blogs',
        data() {
            return {
                filterData:{
                    "keyword":""
                },
                addBlogData: {
                    "video":"",
                    "name": "",
                    "description": "",
                    "image": "",
                    "disabled": false
                },
                BlogData: [],
                exportedData: [],
                BlogDataPage: {},
                addBlogModal: false,
                editBlogModal: false,
                singleBlogData: {
                    "id": "",
                    "name": "",
                    "description": "",
                    "image": "",
                    "video":"",
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
            that.getBlogs();
        },
        methods: {
            resetFilter : function () {
                let that = this;
                that.filterData.keyword = "";
                that.getBlogs();
            },
            getBlogs: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-blogs?page=' + page,that.filterData).then(response => {
                        that.BlogData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.BlogDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSingleBlog: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-blog/' + id).then(response => {
                        that.singleBlogData.id = response.data.res.id;
                        that.singleBlogData.name = response.data.res.name;
                        that.singleBlogData.video = response.data.res.video;
                        that.singleBlogData.description = response.data.res.description;
                        that.singleBlogData.image = response.data.res.image;
                        that.editBlogModal = true;
                    }
                ).catch((error) => {

                });
            },
            addBlog: function () {
                let that = this;

                if (that.addBlogData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Blog Name",
                        showConfirmButton: true
                    });
                } else if (that.addBlogData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Blog Description",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Blog Image",
                        showConfirmButton: true
                    });
                } else {
                    that.addBlogData.disabled = true;
                    var file = that.$refs.image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('video', that.addBlogData.video);
                    formData.append('name', that.addBlogData.name);
                    formData.append('description', that.addBlogData.description);

                    axios.post(APP_URL + '/add-blog', formData).then(response => {
                            that.addBlogData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addBlogModal = false;
                                const input = that.$refs.image
                                input.type = 'text'
                                input.type = 'file'
                                that.addBlogData.name = "";
                                that.addBlogData.description = "";
                                that.addBlogData.image = "";
                                that.addBlogData.video = "";
                                that.getBlogs();
                            });
                        }
                    ).catch((error) => {
                        that.addBlogData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            updateBlog: function () {
                let that = this;
                if (that.singleBlogData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Blog Name",
                        showConfirmButton: true
                    });
                } else if (that.singleBlogData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Blog Description",
                        showConfirmButton: true
                    });
                } else {
                    that.singleBlogData.disabled = true;
                    var file = that.$refs.edit_image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('video', that.singleBlogData.video);
                    formData.append('id', that.singleBlogData.id);
                    formData.append('name', that.singleBlogData.name);
                    formData.append('description', that.singleBlogData.description);

                    axios.post(APP_URL + '/update-blog', formData).then(response => {
                            that.singleBlogData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                const input = that.$refs.edit_image
                                input.type = 'text'
                                input.type = 'file'
                                that.editBlogModal = false;
                                that.getBlogs();
                            });
                        }
                    ).catch((error) => {
                        that.singleBlogData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            deleteBlog: function (id) {
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
                        axios.get(APP_URL + '/delete-blog/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getBlogs();
                                });
                            }
                        });
                    }
                })
            }
        }
    }
</script>
