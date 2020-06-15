<template>
    <div>
        <CRow>
            <CCol lg="8"></CCol>
            <CCol lg="2" class="text-right mr-0 mb-3">
                <router-link
                        :to="{ path: '/add-package'}"><CButton color="primary" >Add Package</CButton>

                </router-link>
            </CCol>
            <CCol lg="2" class="text-right">
                    <download-excel class="btn btn-primary mr-0 mb-3"
                                    :data="exportedData">
                        Export Excel
                    </download-excel>
            </CCol>

            <CCol lg="12 card">
                <table class="table table-bordered mt-4" v-if="packageData.length">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
<!--                        <th>Commission</th>-->
                        <th>Validity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(wd,index) in packageData">
                        <td><img :src="wd.image" height="70" width="70"></td>
                        <td>{{wd.name}}</td>
                        <td>{{wd.price}}</td>
<!--                        <td>{{wd.commission}}</td>-->
                        <td>{{wd.validity}}</td>
                        <td>
                            <CDropdown
                                    toggler-text="Action"
                                    class="m-2"
                                    color="secondary"
                            >
                                <CDropdownItem>    <router-link
                                        :to="{ path: '/update-package/'+wd.id}">Edit</router-link></CDropdownItem>
<!--                                <CDropdownItem v-on:click="deletePackage(wd.id)">Delete</CDropdownItem>-->

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
        name: 'Packages',
        data() {
            return {

                packageData: [],
                exportedData: [],
                packageDataPage: {},
                addPackageModal: false,
                editPackageModal: false,

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
                axios.post(APP_URL+'/get-packages?page=' + page).then(response => {
                        that.packageData = response.data.res.data;
                        that.exportedData = response.data.res.data;
                        that.packageDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },


            updatePackage: function () {
                let that = this;
                if (that.singlePackageData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Name",
                        showConfirmButton: true
                    });
                } else if (that.singlePackageData.price == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Price",
                        showConfirmButton: true
                    });
                } else if (!that.singlePackageData.commission) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Commission",
                        showConfirmButton: true
                    });
                }else if (!that.singlePackageData.validity) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Validity",
                        showConfirmButton: true
                    });
                } else {
                    let formData = new FormData();
                    that.singlePackageData.disabled = true;
                    var image = that.$refs.edit_image.files[0];
                    formData.append('image', image);
                    formData.append('id', that.singlePackageData.id);
                    formData.append('name', that.singlePackageData.name);
                    formData.append('price', that.singlePackageData.price);
                    formData.append('commission', that.singlePackageData.commission);
                    formData.append('validity', that.singlePackageData.validity);
                    axios.post(APP_URL+'/update-package', formData).then(response => {
                        that.singlePackageData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.editPackageModal = false;
                                that.getPackages();
                            });
                        }
                    ).catch((error) => {
                        that.singlePackageData.disabled = false;
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
                        axios.get(APP_URL+'/delete-package/' + id).then((response) => {
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
