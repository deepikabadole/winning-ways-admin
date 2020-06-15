<template>
    <div class="card p-5">
        <CRow>
            <CCol sm="12">
                <CInput
                        label="Package Name"
                        type="text"
                        horizontal
                        v-model="singlePackageData.name"
                />

                <div role="group" class="form-group form-row">
                    <label class="col-form-label col-sm-3"> Price </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control"
                               v-model="singlePackageData.price"
                               v-on:input="singlePackageData.price = singlePackageData.price.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                    </div>
                </div>
                <div role="group" class="form-group form-row">
                    <label class="col-form-label col-sm-3"> Validity(In Days) </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control"
                               v-model="singlePackageData.validity"
                               v-on:input="singlePackageData.validity = singlePackageData.validity.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                    </div>
                </div>
                <div role="group" class="form-group form-row">
                    <label class="col-sm-3">Categories</label>
                    <div class="col-sm-9">
                        <div class="form-group form-row ml-2" v-for="(sd,i) in catSubData">
                            <!--                            <label class="col-form-label col-sm-3">{{cs.category_name}}</label>-->
                            <div class="col-sm-9 row">
                                <!--                                <div class="row" v-for="(sd,index) in cs.subcategory">-->
                                <div class="col-sm-6 row">
                                    <input type="hidden" class="form-control col-sm-1" :id="'subcat'+i" name="subcategory" :value="sd.id"
                                    >
<!--                                    <input type="checkbox" class="form-control col-sm-1" :id="'subcat'+i"-->
<!--                                           name="subcategory" :value="sd.id"-->
<!--                                           v-on:click="enableInput(i)" :checked="sd.checked">-->
                                    <label class="col-sm-10">{{sd.sub_category_name}}</label>
                                </div>

                                <div class="col-sm-6">
                                    <input type="text" class="form-control" :id="'comm'+i" name="commission" placeholder="Commission"
                                            :value="sd.commission"/>
<!--                                           v-model="singlePackageData.commission[i]" >-->
                                </div>
                                <!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group form-row" role="group">
                    <label class="col-form-label col-sm-3">Image</label>
                    <div class="col-sm-6">
                        <input type="file"
                               ref="image"/>
                    </div>
                    <div class="col-md-3">
                        <label class="col-form-label">Last Image</label>

                        <img :src="singlePackageData.image" height="40" width="40">
                    </div>
                </div>
            </CCol>
        </CRow>
        <CRow>
            <CCol sm="12">
                <CButton type="button" size="sm" color="primary" v-on:click="updatePackage('')" :disabled="singlePackageData.disabled">
                    <CIcon name="cil-check-circle"/>
                    Submit
                </CButton>
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
        name: 'AddPackage',
        data() {
            return {
                singlePackageData: {
                    "id": "",
                    "name": "",
                    "price": "",
                    "commission": [],
                    "image": "",
                    "validity": "",
                    "disabled": false,
                    "subcategory": []
                },
                catSubData: [],
                disabled: true

            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            var id = document.URL.split('/')[document.URL.split('/').length - 1];
            that.getCatSubCat(id);
            that.getSinglePackage(id)
        },
        methods: {

            enableInput: function (i) {
                if ($("#subcat" + i).is(":checked")) {
                    $("#comm" + i).attr("disabled", false);
                } else {
                    $("#comm" + i).attr("disabled", true);
                }
            },
            getCatSubCat: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-cat-sub-edit/' + id).then(response => {
                        that.catSubData = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            getSinglePackage: function (id) {
                let that = this;
                axios.get(APP_URL + '/get-single-package/' + id).then(response => {
                        that.singlePackageData.id = response.data.res.id;
                        that.singlePackageData.name = response.data.res.name;
                        that.singlePackageData.price = response.data.res.price;
                        for(var i=0;i<response.data.res.packagecommission.length;i++){
                            that.singlePackageData.commission[i] = response.data.res.packagecommission[i].commission;
                        }
                        that.singlePackageData.image = response.data.res.image;
                        that.singlePackageData.validity = response.data.res.validity;
                        that.editPackageModal = true;
                    }
                ).catch((error) => {

                });
            },
            updatePackage: function () {
                let that = this;

                var sub_cat = $("input[name='subcategory']") .map(function () {
                    return $(this).val();
                }).get();

                that.singlePackageData.subcategory = sub_cat;

                var comm = $("input[name='commission']")
                    .map(function () {
                        return $(this).val();
                    }).get();

                that.singlePackageData.commission = comm;

                if (that.singlePackageData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Name",
                        showConfirmButton: true
                    });
                } else if (that.singlePackageData.price == "" && that.singlePackageData.price != 0) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Price",
                        showConfirmButton: true
                    });
                } else if (that.singlePackageData.validity == "" && that.singlePackageData.price != 0) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Validity",
                        showConfirmButton: true
                    });
                } else if (!that.singlePackageData.subcategory.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Select atleast one category",
                        showConfirmButton: true
                    });
                }
                else {
                    let formData = new FormData();
                    that.singlePackageData.disabled = true;
                    var image = that.$refs.image.files[0];


                    for (var i = 0; i < that.singlePackageData.subcategory.length; i++) {
                        if (!that.singlePackageData.commission[i]) {
                            that.singlePackageData.commission[i] = 0;
                        }
                    }


                    formData.append('image', image);
                    formData.append('id', that.singlePackageData.id);
                    formData.append('name', that.singlePackageData.name);
                    formData.append('price', that.singlePackageData.price);
                    formData.append('commission', that.singlePackageData.commission);
                    formData.append('subcategory', that.singlePackageData.subcategory);
                    formData.append('validity', that.singlePackageData.validity);
                    axios.post(APP_URL + '/update-package', formData).then(response => {
                            that.singlePackageData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.$router.push('/packages');
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
        }
    }
</script>
