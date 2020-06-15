<template>
    <div class="card p-5">
        <CRow>
            <CCol sm="12">
                <CInput
                        label="Package Name"
                        type="text"
                        horizontal
                        v-model="addPackageData.name"
                />

                <div role="group" class="form-group form-row">
                    <label class="col-form-label col-sm-3"> Price </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control"
                               v-model="addPackageData.price"
                               v-on:input="addPackageData.price = addPackageData.price.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                    </div>
                </div>
                <div role="group" class="form-group form-row">
                    <label class="col-form-label col-sm-3"> Validity(In Days) </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control"
                               v-model="addPackageData.validity"
                               v-on:input="addPackageData.validity = addPackageData.validity.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                    </div>
                </div>
                <div role="group" class="form-group form-row">
                    <label class="col-sm-3">Categories</label>
                    <div class="col-sm-9">
                        <div class="form-group form-row ml-2"  v-for="(sd,i) in catSubData" >
<!--                            <label class="col-form-label col-sm-3">{{cs.category_name}}</label>-->
                            <div class="col-sm-9 row">
<!--                                <div class="row" v-for="(sd,index) in cs.subcategory">-->
                                    <div class="col-sm-6 row">

                                        <input type="hidden" class="form-control col-sm-1" :id="'subcat'+i" name="subcategory" :value="sd.id"
                                             >
<!--                                        <input type="checkbox" class="form-control col-sm-1" :id="'subcat'+i" name="subcategory" :value="sd.id"-->
<!--                                               v-model="addPackageData.subcategory" v-on:click="enableInput(i)" >-->
                                        <label class="col-sm-10">{{sd.sub_category_name}}</label>
                                    </div>

                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" :id="'comm'+i" name="commission" placeholder="Commission"
                                               v-model="addPackageData.commission[i]"
                                               v-on:input="addPackageData.commission[i] = addPackageData.commission[i].replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')">
                                    </div>
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group form-row" role="group">
                    <label class="col-form-label col-sm-3">Image</label>
                    <div class="col-sm-9">
                        <input type="file"
                               ref="image"/>
                    </div>
                </div>
            </CCol>
        </CRow>
        <CRow>
            <CCol sm="12">
                <CButton type="button" size="sm" color="primary" :disabled="addPackageData.disabled" v-on:click="addPackage('')">
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
                addPackageData: {
                    "name": "",
                    "price": "",
                    "commission": [],
                    "image": "",
                    "validity": "",
                    "disabled": false,
                    "subcategory":[]
                },
                catSubData: [],
                disabled : true

            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getCatSubCat();
        },
        methods: {

            enableInput:function(i){
                if($("#subcat"+i).is(":checked")) {
                    $("#comm"+i).attr("disabled", false);
                }else{
                    $("#comm"+i).attr("disabled", true);
                }
            },
            getCatSubCat: function () {
                let that = this;
                axios.get(APP_URL + '/get-cat-sub').then(response => {
                        that.catSubData = response.data.res;
                    }
                ).catch((error) => {

                });
            },
            addPackage: function () {
                let that = this;
                var sub_cat = $("input[name='subcategory']") .map(function () {
                    return $(this).val();
                }).get();
                var comm = $("input[name='commission']")
                    .map(function () {
                        return $(this).val();
                    }).get();

                that.addPackageData.subcategory = sub_cat;
                that.addPackageData.commission = comm;

                if (that.addPackageData.name == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Name",
                        showConfirmButton: true
                    });
                } else if (that.addPackageData.price == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Price",
                        showConfirmButton: true
                    });
                }else if (!that.addPackageData.validity) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Package Validity",
                        showConfirmButton: true
                    });
                } else if (!that.addPackageData.subcategory.length) {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Select atleast one category",
                        showConfirmButton: true
                    });
                } else if(!that.$refs.image.files[0]){
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Package Image is required",
                        showConfirmButton: true
                    });
                } else {
                    let formData = new FormData();
                    that.addPackageData.disabled = true;
                    var image = that.$refs.image.files[0];

                    for(var i=0;i<that.addPackageData.subcategory.length;i++){
                        if(!that.addPackageData.commission[i]){
                            that.addPackageData.commission[i] = 0;
                        }
                    }

                    formData.append('image', image);
                    formData.append('name', that.addPackageData.name);
                    formData.append('price', that.addPackageData.price);
                    formData.append('commission', that.addPackageData.commission);
                    formData.append('subcategory', that.addPackageData.subcategory);
                    formData.append('validity', that.addPackageData.validity);
                    axios.post(APP_URL + '/add-package', formData).then(response => {
                            that.addPackageData.disabled = false;
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
                        that.addPackageData.disabled = false;
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
