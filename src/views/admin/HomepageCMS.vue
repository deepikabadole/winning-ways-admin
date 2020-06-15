<template>
    <div>
        <CRow>
            <CCol lg="4"><h3>Main Slider Section</h3></CCol>
            <CCol lg="4"></CCol>
            <CCol lg="4" class="text-right mr-0 mb-3">
                <CButton color="primary" v-on:click="addCategoryModal=true">Upload Slider Image</CButton>
            </CCol>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="SliderData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in SliderData">
                        <td>{{index+1}}</td>
                        <td><img :src="wd.image" height="50" width="50"></td>
                        <td class="pre-format"><a :href="wd.link" target="_blank">{{wd.link}}</a></td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleSlider(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deleteSlider(wd.id)">Delete</CDropdownItem>
                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="SliderDataPage"
                            @pagination-change-page="getSlider"></pagination>
                <p class="p-3" v-if="!SliderData.length">No Data Found</p>

            </CCol>
        </CRow>

        <CRow>
            <CCol lg="4"><h3>How it works Section</h3></CCol>

            <CCol lg="12 ">
                <CRow>
                    <CCol sm="12">
                        <CInput
                                label="Title 1"
                                type="text"
                                horizontal
                                v-model="addHowWeWorkData.name1"
                        />
                    </CCol>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Description 1</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="addHowWeWorkData.description1"></CTextarea>

                            </div>

                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="12">
                        <CInput
                                label="Title 2"
                                type="text"
                                horizontal
                                v-model="addHowWeWorkData.name2"
                        />
                    </CCol>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Description 2</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="addHowWeWorkData.description2"></CTextarea>

                            </div>

                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="12">
                        <CInput
                                label="Title 3"
                                type="text"
                                horizontal
                                v-model="addHowWeWorkData.name3"
                        />
                    </CCol>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Description 3</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="addHowWeWorkData.description3"></CTextarea>

                            </div>

                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="12">
                        <CButton type="button" size="sm" color="primary" :disabled="addHowWeWorkData.disabled"
                                 v-on:click="addHowWeWork('')">
                            <CIcon name="cil-check-circle"/>
                            Submit
                        </CButton>
                    </CCol>
                </CRow>
            </CCol>
        </CRow>

        <CRow class="mt-5">
            <CCol lg="4"><h3>Get to know us Section</h3></CCol>

            <CCol lg="12 ">
                <CRow>
                    <CCol sm="12">
                        <CInput
                                label="Youtube Video Link"
                                type="text"
                                horizontal
                                v-model="addGetToKnowUsData.link"
                        />
                    </CCol>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Description</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="addGetToKnowUsData.description"></CTextarea>

                            </div>

                        </div>
                    </CCol>
                    <CCol sm="12">
                        <CInput
                                label="Read More Link"
                                type="text"
                                horizontal
                                v-model="addGetToKnowUsData.read_more_link"
                        />
                    </CCol>
                </CRow>

                <CRow>
                    <CCol sm="12">
                        <CButton type="button" size="sm" color="primary" :disabled="addHowWeWorkData.disabled"
                                 v-on:click="addGetToKnowUs('')">
                            <CIcon name="cil-check-circle"/>
                            Submit
                        </CButton>
                    </CCol>
                </CRow>
            </CCol>
        </CRow>


        <CRow class="mt-5">
            <CCol lg="4"><h3>About Us Section</h3></CCol>

            <CCol lg="12 ">
                <CRow>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Vision</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="aboutUsData.vision"></CTextarea>
                            </div>
                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Mission</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="aboutUsData.mission"></CTextarea>
                            </div>
                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="12">
                        <div role="group" class="form-group form-row">
                            <label class="col-form-label col-sm-3"> Values</label>
                            <div class="col-sm-9">
                                <CTextarea v-model="aboutUsData.aim"></CTextarea>
                            </div>
                        </div>
                    </CCol>
                </CRow>

                <CRow>
                    <CCol sm="12">
                        <CButton type="button" size="sm" color="primary" :disabled="addHowWeWorkData.disabled"
                                 v-on:click="addAboutUs('')">
                            <CIcon name="cil-check-circle"/>
                            Submit
                        </CButton>
                    </CCol>
                </CRow>
            </CCol>
        </CRow>


        <CRow class="mt-5">
            <CCol lg="4"><h3>Our Own Business</h3></CCol>
            <CCol lg="4"></CCol>
            <CCol lg="4" class="text-right mr-0 mb-3">
                <CButton color="primary" v-on:click="addBusinessModal=true">Upload Image</CButton>
            </CCol>
            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="BusinessSliderData.length">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in BusinessSliderData">
                        <td>{{index+1}}</td>
                        <td><img :src="wd.image" height="50" width="50"></td>
                        <td><a :href="wd.link" target="_blank">{{wd.link}}</a></td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem v-on:click="getSingleBusinessSlider(wd.id)">Edit</CDropdownItem>
                                <CDropdownItem v-on:click="deleteBusinessSlider(wd.id)">Delete</CDropdownItem>
                            </CDropdown>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="BusinessSliderDataPage"
                            @pagination-change-page="getBusinessSlider"></pagination>
                <p class="p-3" v-if="!BusinessSliderData.length">No Data Found</p>

            </CCol>
        </CRow>

        <CModal
                title="Upload Image"
                :show.sync="addBusinessModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Link"
                            type="text"
                            horizontal
                            v-model="uploadBusinessImageData.link"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image </label>
                        <div class="col-sm-9">
                            <input type="file" ref="b_image"/>
                        </div>

                    </div>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="uploadBusinessImageData.disabled"
                             v-on:click="addBusinessSlider('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>

        <CModal
                title="Update Business Slider"
                :show.sync="editBusinessModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Link"
                            type="text"
                            horizontal
                            v-model="singleBusinessSliderImageData.link"
                    />
                </CCol>
                <CCol sm="12">
                    <div role="group" class="form-group form-row">
                        <label class="col-form-label col-sm-3"> Image </label>
                        <div class="col-sm-3">
                            <input type="file" ref="edit_image_p"/>
                        </div>
                        <label class="col-form-label col-sm-3 text-right"> Old Image </label>
                        <div class="col-sm-3 ">
                            <img :src="singleBusinessSliderImageData.image" height="50" width="50">
                        </div>
                    </div>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleBusinessSliderImageData.disabled"
                             v-on:click="updateBusinessSlider('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>

        <CModal
                title="Upload Image"
                :show.sync="addCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Link"
                            type="text"
                            horizontal
                            v-model="uploadSliderImageData.link"
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
                    <CButton type="button" size="sm" color="primary" :disabled="uploadSliderImageData.disabled"
                             v-on:click="addSlider('')">
                        <CIcon name="cil-check-circle"/>
                        Submit
                    </CButton>
                </CCol>
            </CRow>

        </CModal>
        <CModal
                title="Update Slider"
                :show.sync="editCategoryModal"
                color="primary"
                size="lg"
                hide-footer
        >
            <CRow>
                <CCol sm="12">
                    <CInput
                            label="Link"
                            type="text"
                            horizontal
                            v-model="singleSliderImageData.link"
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
                            <img :src="singleSliderImageData.image" height="50" width="50">
                        </div>
                    </div>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <CButton type="button" size="sm" color="primary" :disabled="singleSliderImageData.disabled"
                             v-on:click="updateSlider('')">
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
    .pre-format{
        white-space: pre-line;
    }

</style>
<script>
    import CommonAdminMixin from "../../CommonAdminMixin";

    export default {
        name: 'Categories',
        data() {
            return {
                uploadSliderImageData: {
                    "link": "",
                    "image": "",
                    "disabled": false
                },
                uploadBusinessImageData: {
                    "link": "",
                    "image": "",
                    "disabled": false
                },
                SliderData: [],
                SliderDataPage: {},
                BusinessSliderData: [],
                BusinessSliderDataPage: {},
                addWorkModal: false,
                addCategoryModal: false,
                addBusinessModal: false,
                editCategoryModal: false,
                editBusinessModal: false,
                singleSliderImageData: {
                    "id": "",
                    "link": "",
                    "image": "",
                    "disabled": false
                },
                addHowWeWorkData: {
                    "id": "",
                    "name1": "",
                    "description1": "",
                    "name2": "",
                    "description2": "",
                    "name3": "",
                    "description3": "",
                    "disabled": false
                },
                addGetToKnowUsData: {
                    "id": "",
                    "link": "",
                    "description": "",
                    "read_more_link":"",
                    "disabled": false
                },
                aboutUsData: {
                    "id": "",
                    "vision": "",
                    "mission": "",
                    "aim": "",
                    "disabled": false
                },
                singleBusinessSliderImageData: {
                    "id": "",
                    "link": "",
                    "image": "",
                    "disabled": false
                },

            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getSlider();
            that.getBusinessSlider();
            that.getHowWeWorks();
            that.getGetToKnowUs();
            that.getAboutUs();
        },
        methods: {
            getSlider: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-main-slider?page=' + page).then(response => {
                        that.SliderData = response.data.res.data;
                        that.SliderDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSingleSlider: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-main-slider/' + id).then(response => {
                        that.singleSliderImageData.id = response.data.res.id;
                        that.singleSliderImageData.link = response.data.res.link;
                        that.singleSliderImageData.image = response.data.res.image;
                        that.editCategoryModal = true;
                    }
                ).catch((error) => {

                });
            },
            addSlider: function () {
                let that = this;
                if (that.uploadSliderImageData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Link",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.image.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Image",
                        showConfirmButton: true
                    });
                } else {
                    that.uploadSliderImageData.disabled = true;
                    var file = that.$refs.image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('link', that.uploadSliderImageData.link);

                    axios.post(APP_URL + '/add-main-slider', formData).then(response => {
                            that.uploadSliderImageData.disabled = false;
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
                                that.uploadSliderImageData.link = "";
                                that.uploadSliderImageData.image = "";
                                that.getSlider();
                            });
                        }
                    ).catch((error) => {
                        that.uploadSliderImageData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            updateSlider: function () {
                let that = this;
                if (that.singleSliderImageData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Name",
                        showConfirmButton: true
                    });
                } else {
                    that.singleSliderImageData.disabled = true;
                    var file = that.$refs.edit_image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('id', that.singleSliderImageData.id);
                    formData.append('link', that.singleSliderImageData.link);

                    axios.post(APP_URL + '/update-main-slider', formData).then(response => {
                            that.singleSliderImageData.disabled = false;
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
                                that.getSlider();
                            });
                        }
                    ).catch((error) => {
                        that.singleSliderImageData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            deleteSlider: function (id) {
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
                        axios.get(APP_URL + '/delete-main-slider/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getSlider();
                                });
                            }
                        });
                    }
                })
            },
            addHowWeWork: function () {
                let that = this;
                if (that.addHowWeWorkData.name1 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title 1",
                        showConfirmButton: true
                    });
                } else if (that.addHowWeWorkData.description1 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 1",
                        showConfirmButton: true
                    });
                } else if (that.addHowWeWorkData.name2 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title 2",
                        showConfirmButton: true
                    });
                } else if (that.addHowWeWorkData.description2 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 2",
                        showConfirmButton: true
                    });
                } else if (that.addHowWeWorkData.name3 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Title 3",
                        showConfirmButton: true
                    });
                } else if (that.addHowWeWorkData.description3 == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description 3",
                        showConfirmButton: true
                    });
                } else {
                    that.addHowWeWorkData.disabled = true;

                    axios.post(APP_URL + '/add-how-we-work', that.addHowWeWorkData).then(response => {
                            that.addHowWeWorkData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getHowWeWorks();

                            });
                        }
                    ).catch((error) => {
                        that.addHowWeWorkData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            getHowWeWorks: function () {
                let that = this;
                axios.post(APP_URL + '/get-how-we-work').then(response => {
                        that.addHowWeWorkData.id = response.data.res.id;
                        that.addHowWeWorkData.name1 = response.data.res.title1;
                        that.addHowWeWorkData.description1 = response.data.res.description1;
                        that.addHowWeWorkData.name2 = response.data.res.title2;
                        that.addHowWeWorkData.description2 = response.data.res.description2;
                        that.addHowWeWorkData.name3 = response.data.res.title3;
                        that.addHowWeWorkData.description3 = response.data.res.description3;
                    }
                ).catch((error) => {

                });
            },
            addGetToKnowUs: function () {
                let that = this;

                if (that.addGetToKnowUsData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please enter Youtube Video Link",
                        showConfirmButton: true
                    });
                } else if (that.addGetToKnowUsData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Description",
                        showConfirmButton: true
                    });
                } else {
                    that.addGetToKnowUsData.disabled = true;

                    axios.post(APP_URL + '/add-get-to-know-us', that.addGetToKnowUsData).then(response => {
                            that.addGetToKnowUsData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getGetToKnowUs();

                            });
                        }
                    ).catch((error) => {
                        that.addGetToKnowUsData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            getGetToKnowUs: function () {
                let that = this;
                axios.post(APP_URL + '/get-get-to-know-us').then(response => {
                        that.addGetToKnowUsData.id = response.data.res.id;
                        that.addGetToKnowUsData.link = response.data.res.link;
                        that.addGetToKnowUsData.description = response.data.res.description;
                        that.addGetToKnowUsData.read_more_link = response.data.res.read_more_link;
                    }
                ).catch((error) => {

                });
            },
            addAboutUs: function () {
                let that = this;

                if (that.aboutUsData.vision == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Vision",
                        showConfirmButton: true
                    });
                } else if (that.aboutUsData.mission == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Mission",
                        showConfirmButton: true
                    });
                }  else if (that.aboutUsData.aim == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Aim",
                        showConfirmButton: true
                    });
                } else {
                    that.aboutUsData.disabled = true;

                    axios.post(APP_URL + '/add-about-us', that.aboutUsData).then(response => {
                            that.addGetToKnowUsData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getAboutUs();

                            });
                        }
                    ).catch((error) => {
                        that.aboutUsData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
            getAboutUs: function () {
                let that = this;
                axios.post(APP_URL + '/get-about-us').then(response => {
                        that.aboutUsData.id = response.data.res.id;
                        that.aboutUsData.vision = response.data.res.vision;
                        that.aboutUsData.mission = response.data.res.mission;
                        that.aboutUsData.aim = response.data.res.aim;
                    }
                ).catch((error) => {

                });
            },

            getSingleBusinessSlider: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-business-slider/' + id).then(response => {
                        that.singleBusinessSliderImageData.id = response.data.res.id;
                        that.singleBusinessSliderImageData.link = response.data.res.link;
                        that.singleBusinessSliderImageData.image = response.data.res.image;
                        that.editBusinessModal = true;
                    }
                ).catch((error) => {

                });
            },
            getBusinessSlider: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-business-slider?page=' + page).then(response => {
                        that.BusinessSliderData = response.data.res.data;
                        that.BusinessSliderDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },

            addBusinessSlider: function () {
                let that = this;
                if (that.uploadBusinessImageData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Link",
                        showConfirmButton: true
                    });
                } else if (!that.$refs.b_image.files.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Upload Image",
                        showConfirmButton: true
                    });
                } else {
                    that.uploadBusinessImageData.disabled = true;
                    var file = that.$refs.b_image.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('link', that.uploadBusinessImageData.link);

                    axios.post(APP_URL + '/add-business-slider', formData).then(response => {
                            that.uploadBusinessImageData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.addBusinessModal = false;
                                const input = that.$refs.b_image
                                input.type = 'text'
                                input.type = 'file'
                                that.uploadBusinessImageData.link = "";
                                that.uploadBusinessImageData.image = "";
                                that.getBusinessSlider();
                            });
                        }
                    ).catch((error) => {
                        that.uploadBusinessImageData.disabled = false;
                        that.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },

            updateBusinessSlider: function () {
                let that = this;
                if (that.singleBusinessSliderImageData.link == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Category Name",
                        showConfirmButton: true
                    });
                } else {
                    that.singleBusinessSliderImageData.disabled = true;
                    var file = that.$refs.edit_image_p.files[0];
                    let formData = new FormData();
                    formData.append('image', file);
                    formData.append('id', that.singleBusinessSliderImageData.id);
                    formData.append('link', that.singleBusinessSliderImageData.link);

                    axios.post(APP_URL + '/update-business-slider', formData).then(response => {
                            that.singleBusinessSliderImageData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                const input = that.$refs.edit_image_p
                                input.type = 'text'
                                input.type = 'file'
                                that.editBusinessModal = false;
                                that.getBusinessSlider();
                            });
                        }
                    ).catch((error) => {
                        that.singleBusinessSliderImageData.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },

            deleteBusinessSlider: function (id) {
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
                        axios.get(APP_URL + '/delete-business-slider/' + id).then((response) => {
                            response = response.data;
                            if (response.status == "success") {
                                that.$swal({
                                    type: "success",
                                    title: "Success",
                                    text: response.message,
                                    showConfirmButton: true
                                }).then(function () {
                                    that.getBusinessSlider();
                                });
                            }
                        });
                    }
                })
            },
        }
    }
</script>
