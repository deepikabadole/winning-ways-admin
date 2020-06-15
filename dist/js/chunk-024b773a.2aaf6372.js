(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024b773a"],{"4bb3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card p-5"},[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CInput",{attrs:{label:"Package Name",type:"text",horizontal:""},model:{value:t.addPackageData.name,callback:function(e){t.$set(t.addPackageData,"name",e)},expression:"addPackageData.name"}}),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Price ")]),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addPackageData.price,expression:"addPackageData.price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.addPackageData.price},on:{input:[function(e){e.target.composing||t.$set(t.addPackageData,"price",e.target.value)},function(e){t.addPackageData.price=t.addPackageData.price.replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")}]}})])]),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Validity(In Days) ")]),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addPackageData.validity,expression:"addPackageData.validity"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.addPackageData.validity},on:{input:[function(e){e.target.composing||t.$set(t.addPackageData,"validity",e.target.value)},function(e){t.addPackageData.validity=t.addPackageData.validity.replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")}]}})])]),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-sm-3"},[t._v("Categories")]),a("div",{staticClass:"col-sm-9"},t._l(t.catSubData,(function(e,s){return a("div",{staticClass:"form-group form-row ml-2"},[a("div",{staticClass:"col-sm-9 row"},[a("div",{staticClass:"col-sm-6 row"},[a("input",{staticClass:"form-control col-sm-1",attrs:{type:"hidden",id:"subcat"+s,name:"subcategory"},domProps:{value:e.id}}),a("label",{staticClass:"col-sm-10"},[t._v(t._s(e.sub_category_name))])]),a("div",{staticClass:"col-sm-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addPackageData.commission[s],expression:"addPackageData.commission[i]"}],staticClass:"form-control",attrs:{type:"text",id:"comm"+s,name:"commission",placeholder:"Commission"},domProps:{value:t.addPackageData.commission[s]},on:{input:[function(e){e.target.composing||t.$set(t.addPackageData.commission,s,e.target.value)},function(e){t.addPackageData.commission[s]=t.addPackageData.commission[s].replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")}]}})])])])})),0)]),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v("Image")]),a("div",{staticClass:"col-sm-9"},[a("input",{ref:"image",attrs:{type:"file"}})])])],1)],1),a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.addPackageData.disabled},on:{click:function(e){return t.addPackage("")}}},[a("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1)},o=[],r=a("bc26"),i={name:"AddPackage",data:function(){return{addPackageData:{name:"",price:"",commission:[],image:"",validity:"",disabled:!1,subcategory:[]},catSubData:[],disabled:!0}},mixins:[r["a"]],created:function(){var t=this;t.getCatSubCat()},methods:{enableInput:function(t){$("#subcat"+t).is(":checked")?$("#comm"+t).attr("disabled",!1):$("#comm"+t).attr("disabled",!0)},getCatSubCat:function(){var t=this;axios.get(APP_URL+"/get-cat-sub").then((function(e){t.catSubData=e.data.res})).catch((function(t){}))},addPackage:function(){var t=this,e=this,a=$("input[name='subcategory']").map((function(){return $(this).val()})).get(),s=$("input[name='commission']").map((function(){return $(this).val()})).get();if(e.addPackageData.subcategory=a,e.addPackageData.commission=s,""==e.addPackageData.name)this.$swal({type:"error",title:"error",text:"Please Enter Package Name",showConfirmButton:!0});else if(""==e.addPackageData.price)this.$swal({type:"error",title:"error",text:"Please Enter Package Price",showConfirmButton:!0});else if(e.addPackageData.validity)if(e.addPackageData.subcategory.length)if(e.$refs.image.files[0]){var o=new FormData;e.addPackageData.disabled=!0;for(var r=e.$refs.image.files[0],i=0;i<e.addPackageData.subcategory.length;i++)e.addPackageData.commission[i]||(e.addPackageData.commission[i]=0);o.append("image",r),o.append("name",e.addPackageData.name),o.append("price",e.addPackageData.price),o.append("commission",e.addPackageData.commission),o.append("subcategory",e.addPackageData.subcategory),o.append("validity",e.addPackageData.validity),axios.post(APP_URL+"/add-package",o).then((function(t){e.addPackageData.disabled=!1,e.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){e.$router.push("/packages")}))})).catch((function(a){e.addPackageData.disabled=!1,t.$swal({type:"error",title:"error",text:a.response.data.message,showConfirmButton:!0})}))}else this.$swal({type:"error",title:"error",text:"Package Image is required",showConfirmButton:!0});else this.$swal({type:"error",title:"error",text:"Please Select atleast one category",showConfirmButton:!0});else this.$swal({type:"error",title:"error",text:"Please Enter Package Validity",showConfirmButton:!0})}}},n=i,l=(a("deee"),a("2877")),c=Object(l["a"])(n,s,o,!1,null,null,null);e["default"]=c.exports},b369:function(t,e,a){},bc26:function(t,e,a){"use strict";e["a"]={name:"CommonAdminMixin",data:function(){return{singleWork:{name:"",description:"",minBudget:"",maxBudget:"",status:"",id:"",amount:"",disabled:!1},editWorkModal:!1,options:[{label:"Pending",value:0},{label:"Progress",value:1},{label:"Deal",value:2},{label:"Completed",value:3},{label:"Delivered",value:4}],optionsPending:[{label:"Pending",value:0},{label:"Progress",value:1}],optionsProgress:[{label:"Progress",value:1},{label:"Deal",value:2}],optionsDeal:[{label:"Deal",value:2},{label:"Completed",value:3}],optionsCompleted:[{label:"Completed",value:3},{label:"Delivered",value:4}],optionsDelivered:[{label:"Delivered",value:4}],creditAmountModal:!1,creditAmountData:{userId:"",date:"",comment:"",amount:"",requestId:""},CategoryData:[],SubCategoryData:[]}},created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=this;axios.post(APP_URL+"/select-categories").then((function(e){t.CategoryData=e.data.res})).catch((function(t){}))},getSubCategories:function(t){var e=this;axios.post(APP_URL+"/select-sub-categories/"+t).then((function(t){e.SubCategoryData=t.data.res})).catch((function(t){}))},openModal:function(t,e,a){var s=this;s.creditAmountModal=!0,s.creditAmountData.userId=t,s.creditAmountData.amount=e,s.creditAmountData.requestId=a},creditAmount:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this;t.creditAmountData.date?t.creditAmountData.amount?t.creditAmountData.comment?axios.post(APP_URL+"/credit-amount",t.creditAmountData).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.creditAmountModal=!1,t.getUserPayments()}))})).catch((function(t){})):this.$swal({type:"error",title:"Error",text:"Comment is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Amount is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Date is required",showConfirmButton:!0})},getSingleWork:function(t){var e=this;axios.get(APP_URL+"/get-work-details/"+t).then((function(t){e.editWorkModal=!0,e.singleWork.name=t.data.res.name,e.singleWork.description=t.data.res.description,e.getCategories(),e.singleWork.category=t.data.res.category,e.getSubCategories(e.singleWork.category),e.singleWork.subcategory=t.data.res.sub_category,e.singleWork.minBudget=t.data.res.min_budget,e.singleWork.maxBudget=t.data.res.max_budget,e.singleWork.status=t.data.res.status,e.singleWork.id=t.data.res.id,e.singleWork.amount=t.data.res.amount})).catch((function(t){}))},updateWork:function(t){var e=this,a=this;""==a.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==a.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):a.singleWork.minBudget?a.singleWork.maxBudget?2!=a.singleWork.status||a.singleWork.amount?(a.singleWork.disabled=!0,isNaN(a.singleWork.status)&&(a.singleWork.status=a.singleWork.status.value),axios.post(APP_URL+"/update-work",a.singleWork).then((function(e){a.singleWork.disabled=!1,a.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(a.editWorkModal=!1,t)a.getWorkDetails(a.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?a.getWorks():a.getUserWorks()}}))})).catch((function(t){a.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})},updateClaimWork:function(t){var e=this,a=this;""==a.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==a.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):a.singleWork.minBudget?a.singleWork.maxBudget?2!=a.singleWork.status||a.singleWork.amount?(a.singleWork.disabled=!0,isNaN(a.singleWork.status)&&(a.singleWork.status=a.singleWork.status.value),axios.post(APP_URL+"/update-work",a.singleWork).then((function(e){a.singleWork.disabled=!1,a.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(a.editWorkModal=!1,t)a.getWorkDetails(a.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?a.getClaimedWorks():a.getUserWorks()}}))})).catch((function(t){a.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})}}}},deee:function(t,e,a){"use strict";var s=a("b369"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-024b773a.2aaf6372.js.map