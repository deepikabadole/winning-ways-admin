<template>
    <div>
        <CRow>
            <CCol lg="4"><b>{{singleCategoryData.name}}</b></CCol>
            <CCol lg="4"></CCol>
            <CCol lg="4" class="text-right mr-0 mb-3">
                <CButton color="primary" v-on:click="addVideoModal=true;">Add Sub Category Video
                </CButton>
            </CCol>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="videoData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in videoData">
                        <td>{{index+1}}</td>
                        <td>{{wd.title}}</td>
                        <td>{{wd.link}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleVideo(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deleteCategory(wd.id)">Delete</CDropdownItem>

                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="videoDataPage"
                            @pagination-change-page="getVideos"></pagination>
                <p class="p-3" v-if="!videoData.length">No Data Found</p>

            </CCol>
        </CRow>


        <CModal
                title="Add Subcategory Video"
                :show.sync="addVideoModal"
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
                            v-model="addVideoData.title"
                    />

                    <CInput
                            label="Youtube ifarme link"
                            type="text"
                            horizontal
                            v-model="addVideoData.link"
                    />


                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="addVideoData.disabled"
                             v-on:click="addVideo('')">
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

                    <CCol sm="12">
                        <CInput
                                label="Title"
                                type="text"
                                horizontal
                                v-model="singleVideoData.title"
                        />

                        <CInput
                                label="Youtube ifarme link"
                                type="text"
                                horizontal
                                v-model="singleVideoData.link"
                        />


                    </CCol>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleVideoData.disabled"
                             v-on:click="updateVideo('')">
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
        name: 'Categories',
        data() {
            return {
                addVideoData: {
                    "title": "",
                    "link": "",
                    "disabled": false
                },
                AllvideoData: [],
                videoData: [],
                videoDataPage: {},
                addVideoModal: false,
                editCategoryModal: false,
                singleVideoData: {
                    "id": "",
                    "title": "",
                    "link": "",
                    "disabled": false
                },
                singleCategoryData:{
                    name:""
                }
            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getVideos();
            that.getSingleCategory();
        },
        methods: {
            getSingleCategory: function () {
                var url = document.URL.split('/')[document.URL.split('/').length-1];
                let that = this;
                axios.get(APP_URL + '/get-single-sub-category/' + url).then(response => {
                        that.singleCategoryData.name = response.data.res.sub_category_name;
                    }
                ).catch((error) => {

                });
            },
            getVideos: function (page = 1) {
                var url = document.URL.split('/')[document.URL.split('/').length-1];
                let that = this;
                axios.post(APP_URL + '/get-videos/'+url+'?page=' + page).then(response => {
                        that.videoData = response.data.res.data;
                        that.videoDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSingleVideo: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-video/' + id).then(response => {
                        that.singleVideoData.id = response.data.res.id;
                        that.singleVideoData.title = response.data.res.title;
                        that.singleVideoData.link = response.data.res.link;
                        that.editCategoryModal = true;
                    }
                ).catch((error) => {

                });
            },
            addVideo: function () {
                let that = this;
                if (that.addVideoData.title == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title",
                        showConfirmButton: true
                    });
                } else if (that.addVideoData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Link",
                        showConfirmButton: true
                    });
                }  else {
                    var url = document.URL.split('/')[document.URL.split('/').length-1];
                    that.addVideoData.disabled = true;
                    that.addVideoData.subcategoryId = url;
                    axios.post(APP_URL + '/add-video', that.addVideoData).then(response => {
                            that.addVideoData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addVideoModal = false;
                                that.addVideoData.title = "";
                                that.addVideoData.link = "";
                                that.getVideos();
                            });
                        }
                    ).catch((error) => {
                        that.addVideoData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            updateVideo: function () {
                let that = this;
                if (that.singleVideoData.title == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title",
                        showConfirmButton: true
                    });
                } else if (that.singleVideoData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Link",
                        showConfirmButton: true
                    });
                } else {
                    that.singleVideoData.disabled = true;
                    axios.post(APP_URL + '/update-video', that.singleVideoData).then(response => {
                            that.singleVideoData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.editCategoryModal = false;
                                that.getVideos();
                            });
                        }
                    ).catch((error) => {
                        that.singleVideoData.disabled = false;
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
                        axios.get(APP_URL + '/delete-video/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getVideos();
                                });
                            }
                        });
                    }
                })
            }
        }
    }
</script>
