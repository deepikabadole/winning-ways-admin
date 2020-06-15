<template>
    <div>
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
                            <button class="btn btn-success" v-on:click="addCategoryToHomePage(wd.id,1,1)"
                                    v-if="wd.online_services==0">Add</button>
                            <button class="btn btn-danger" v-on:click="addCategoryToHomePage(wd.id,1,0)"
                                    v-if="wd.online_services==1">Remove</button>

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
        },
        methods: {
            getCategories: function (page = 1) {
                let that = this;
                axios.post(APP_URL + '/get-categories?page=' + page).then(response => {
                        that.CategoryData = response.data.res.data;
                        that.CategoryDataPage = response.data.res;
                    }
                ).catch((error) => {

                });
            },


        }
    }
</script>
