<template>
    <div>
        <CRow class="card p-5">
            <CCol lg="12 ">
                <h3 class="mb-5">Terms and Conditions</h3>
                <ckeditor :editor="editor" v-model="addPData.description"
                          :config="editorConfig"></ckeditor>
            </CCol>
            <CCol lg="12 mt-3">
                <CButton type="button" size="sm" color="primary" :disabled="addPData.disabled"
                         v-on:click="addData('')">
                    <CIcon name="cil-check-circle"/>
                    Submit
                </CButton>
            </CCol>
        </CRow>

    </div>
</template>
<style>
    .ck-editor__editable {
        min-height: 500px;
    }
</style>
<script>
    import CommonAdminMixin from "../../CommonAdminMixin";
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'Blogs',
        data() {
            return {
                addPData: {
                    "description": "",
                    "id":"",
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
            that.getData();
        },
        methods: {
            getData: function () {
                let that = this;
                axios.post(APP_URL + '/get-data/2').then(response => {
                        that.addPData.description = response.data.res.description;
                        that.addPData.id = response.data.res.id;
                    }
                ).catch((error) => {

                });
            },

            addData: function () {
                let that = this;

                if (that.addPData.description == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Blog Description",
                        showConfirmButton: true
                    });
                } else {
                    that.addPData.disabled = true;

                    axios.post(APP_URL + '/add-data/2', that.addPData).then(response => {
                            that.addPData.disabled = false;
                            that.$swal({
                                type: "success",
                                title: "Success",
                                text: response.data.message,
                                showConfirmButton: true
                            }).then(function () {
                                that.getData();
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
        }
    }
</script>
