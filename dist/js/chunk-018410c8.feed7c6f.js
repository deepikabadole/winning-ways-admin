(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-018410c8"],{5303:function(t,e,a){},"6b75":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",{staticClass:"card-header"},[a("CCol",{attrs:{lg:"3"}},[a("div",{staticClass:"form-group ",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label"},[t._v(" Keyword ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterData.keyword,expression:"filterData.keyword"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.filterData.keyword},on:{input:function(e){e.target.composing||t.$set(t.filterData,"keyword",e.target.value)}}})])]),a("CCol",{attrs:{lg:"1"}},[a("div",{staticClass:"form-group mt-2",attrs:{role:"group"}},[a("CButton",{staticClass:"mt-4",attrs:{type:"button",color:"primary"},on:{click:t.getCategories}},[t._v(" Filter ")])],1)]),a("CCol",{attrs:{lg:"2"}},[a("div",{staticClass:"form-group mt-2",attrs:{role:"group"}},[a("CButton",{staticClass:"mt-4",attrs:{type:"button",color:"primary"},on:{click:t.resetFilter}},[t._v(" Reset Filter ")])],1)]),a("CCol",{attrs:{lg:"4"}},[a("div",{staticClass:"form-group mt-2 text-right",attrs:{role:"group"}},[a("CButton",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(e){t.addCategoryModal=!0}}},[t._v("Add Category")])],1)]),a("CCol",{attrs:{lg:"2"}},[a("div",{staticClass:"form-group mt-2 text-right",attrs:{role:"group"}},[a("download-excel",{staticClass:"btn btn-primary mt-4",attrs:{data:t.exportedData}},[t._v(" Export Excel ")])],1)])],1),a("CRow",[a("CCol",{attrs:{lg:"12 card"}},[t.CategoryData.length?a("table",{staticClass:"table table-bordered mt-4"},[a("thead",[a("tr",[a("th",[t._v("S. No.")]),a("th",[t._v("Image")]),a("th",[t._v("Name")]),a("th",[t._v("Description")]),a("th",[t._v("Action")])])]),a("tbody",t._l(t.CategoryData,(function(e,o){return a("tr",[a("td",[t._v(t._s(o+1))]),a("td",[a("img",{attrs:{src:e.image,height:"50",width:"50"}})]),a("td",[t._v(t._s(e.category_name))]),a("td",[a("span",{domProps:{innerHTML:t._s(e.description)}})]),a("td",[a("CDropdown",{staticClass:"m-2",attrs:{"toggler-text":"Action",color:"secondary"}},[a("CDropdownItem",{on:{click:function(a){return t.getSingleCategory(e.id)}}},[t._v("Edit")]),a("CDropdownItem",{on:{click:function(a){return t.deleteCategory(e.id)}}},[t._v("Delete")])],1)],1)])})),0)]):t._e(),a("pagination",{attrs:{data:t.CategoryDataPage},on:{"pagination-change-page":t.getCategories}}),t.CategoryData.length?t._e():a("p",{staticClass:"p-3"},[t._v("No Data Found")])],1)],1),a("CModal",{attrs:{title:"Add Category",show:t.addCategoryModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.addCategoryModal=e}}},[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CInput",{attrs:{label:"Name",type:"text",horizontal:""},model:{value:t.addCategoryData.name,callback:function(e){t.$set(t.addCategoryData,"name",e)},expression:"addCategoryData.name"}})],1),a("CCol",{attrs:{sm:"12"}},[a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Description ")]),a("div",{staticClass:"col-sm-9"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.addCategoryData.description,callback:function(e){t.$set(t.addCategoryData,"description",e)},expression:"addCategoryData.description"}})],1)])]),a("CCol",{attrs:{sm:"12"}},[a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Image ")]),a("div",{staticClass:"col-sm-9"},[a("input",{ref:"image",attrs:{type:"file"}})])])])],1),a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.addCategoryData.disabled},on:{click:function(e){return t.addCategory("")}}},[a("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1),a("CModal",{attrs:{title:"Update Category",show:t.editCategoryModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.editCategoryModal=e}}},[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CInput",{attrs:{label:"Category Name",type:"text",horizontal:""},model:{value:t.singleCategoryData.name,callback:function(e){t.$set(t.singleCategoryData,"name",e)},expression:"singleCategoryData.name"}})],1),a("CCol",{attrs:{sm:"12"}},[a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Description ")]),a("div",{staticClass:"col-sm-9"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.singleCategoryData.description,callback:function(e){t.$set(t.singleCategoryData,"description",e)},expression:"singleCategoryData.description"}})],1)])]),a("CCol",{attrs:{sm:"12"}},[a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Image ")]),a("div",{staticClass:"col-sm-3"},[a("input",{ref:"edit_image",attrs:{type:"file"}})]),a("label",{staticClass:"col-form-label col-sm-3 text-right"},[t._v(" Old Image ")]),a("div",{staticClass:"col-sm-3 "},[a("img",{attrs:{src:t.singleCategoryData.image,height:"50",width:"50"}})])])])],1),a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.singleCategoryData.disabled},on:{click:function(e){return t.updateCategory("")}}},[a("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1)],1)},r=[],s=a("bc26"),i=a("fb3d"),n=a.n(i),l={name:"Categories",data:function(){return{addCategoryData:{name:"",description:"",image:"",disabled:!1},filterData:{keyword:""},CategoryData:[],exportedData:[],CategoryDataPage:{},addCategoryModal:!1,editCategoryModal:!1,singleCategoryData:{id:"",name:"",description:"",image:"",disabled:!1},editor:n.a,editorData:"<p>Rich-text editor content.</p>",editorConfig:{}}},mixins:[s["a"]],created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;axios.post(APP_URL+"/get-categories?page="+t,e.filterData).then((function(t){e.CategoryData=t.data.res.data,e.CategoryDataPage=t.data.res,e.exportedData=t.data.res.data})).catch((function(t){}))},addCategoryToHomePage:function(t,e,a){var o=this;axios.post(APP_URL+"/add-category-to-homepage",{id:t,type:e,status:a}).then((function(t){o.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){o.getCategories()}))})).catch((function(t){}))},getSingleCategory:function(t){var e=this;axios.get(APP_URL+"/get-single-category/"+t).then((function(t){e.singleCategoryData.id=t.data.res.id,e.singleCategoryData.name=t.data.res.category_name,e.singleCategoryData.description=t.data.res.description,e.singleCategoryData.image=t.data.res.image,e.editCategoryModal=!0})).catch((function(t){}))},addCategory:function(){var t=this;if(""==t.addCategoryData.name)this.$swal({type:"error",title:"error",text:"Please Enter Category Name",showConfirmButton:!0});else if(""==t.addCategoryData.description)this.$swal({type:"error",title:"error",text:"Please Enter Category Description",showConfirmButton:!0});else if(t.$refs.image.files.length){t.addCategoryData.disabled=!0;var e=t.$refs.image.files[0],a=new FormData;a.append("image",e),a.append("name",t.addCategoryData.name),a.append("description",t.addCategoryData.description),axios.post(APP_URL+"/add-category",a).then((function(e){t.addCategoryData.disabled=!1,t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.addCategoryModal=!1;var e=t.$refs.image;e.type="text",e.type="file",t.addCategoryData.name="",t.addCategoryData.description="",t.addCategoryData.image="",t.getCategories()}))})).catch((function(e){t.addCategoryData.disabled=!1,t.$swal({type:"error",title:"error",text:e.response.data.message,showConfirmButton:!0})}))}else this.$swal({type:"error",title:"error",text:"Please Upload Category Image",showConfirmButton:!0})},updateCategory:function(){var t=this,e=this;if(""==e.singleCategoryData.name)this.$swal({type:"error",title:"error",text:"Please Enter Category Name",showConfirmButton:!0});else if(""==e.singleCategoryData.description)this.$swal({type:"error",title:"error",text:"Please Enter Category Description",showConfirmButton:!0});else{e.singleCategoryData.disabled=!0;var a=e.$refs.edit_image.files[0],o=new FormData;o.append("image",a),o.append("id",e.singleCategoryData.id),o.append("name",e.singleCategoryData.name),o.append("description",e.singleCategoryData.description),axios.post(APP_URL+"/update-category",o).then((function(t){e.singleCategoryData.disabled=!1,e.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){var t=e.$refs.edit_image;t.type="text",t.type="file",e.editCategoryModal=!1,e.getCategories()}))})).catch((function(a){e.singleCategoryData.disabled=!1,t.$swal({type:"error",title:"error",text:a.response.data.message,showConfirmButton:!0})}))}},deleteCategory:function(t){var e=this,a="Are you sure? You want to delete this!";e.$swal({title:"Delete?",text:a,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes, Delete it!"}).then((function(a){a.value&&axios.get(APP_URL+"/delete-category/"+t).then((function(t){t=t.data,"success"==t.status&&e.$swal({type:"success",title:"Success",text:t.message,showConfirmButton:!0}).then((function(){e.getCategories()}))}))}))},resetFilter:function(){var t=this;t.filterData.keyword="",t.getCategories()}}},d=l,c=(a("8a6e"),a("2877")),g=Object(c["a"])(d,o,r,!1,null,null,null);e["default"]=g.exports},"8a6e":function(t,e,a){"use strict";var o=a("5303"),r=a.n(o);r.a}}]);
//# sourceMappingURL=chunk-018410c8.feed7c6f.js.map