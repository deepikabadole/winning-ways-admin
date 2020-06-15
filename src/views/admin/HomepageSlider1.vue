<template>
    <div>
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
                        <td>  <router-link
                                :to="{ path: '/subcategory/'+wd.id}">{{wd.sub_category_name}}
                        </router-link></td>
                        <td>{{wd.category_name}}</td>
                        <td><span v-html="wd.description"></span></td>
                        <td>
                            <button class="btn btn-success" v-on:click="addCategoryToHomePage(wd.id,3,1)"
                                    v-if="wd.category_slider==0">Add to Homepage Slider
                            </button>
                            <button class="btn btn-danger" v-on:click="addCategoryToHomePage(wd.id,3,0)"
                                    v-if="wd.category_slider==1">Remove From Homepage Slider
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :data="CategoryDataPage"
                            @pagination-change-page="getCategories"></pagination>
                <p class="p-3" v-if="!CategoryData.length">No Data Found</p>

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
        name: 'Categories',
        data() {
            return {
                CategoryData: [],
                CategoryDataPage: {},

            }
        },
        mixins: [CommonAdminMixin],

        created() {
            let that = this;
            that.getCategories();
            that.getAllCategories();
        },
        methods: {
               getCategories: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-sub-categories?page=' + page).then(response => {
                        that.CategoryData = response.data.res.data;
                        that.CategoryDataPage = response.data.res;
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
        }
    }
</script>

