(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8a4f01c"],{"5b6c":function(t,e,a){},"7c7f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",{staticClass:"card-header"},[a("CCol",{attrs:{lg:"3"}},[a("div",{staticClass:"form-group ",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label"},[t._v(" User Name ")]),isNaN(t.userId)?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),isNaN(t.userId)?a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterWorkData.userName,expression:"filterWorkData.userName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.filterWorkData.userName},on:{input:function(e){e.target.composing||t.$set(t.filterWorkData,"userName",e.target.value)}}}):t._e()])]),a("CCol",{attrs:{lg:"3"}},[a("div",{staticClass:"form-group ",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label "},[t._v(" Client Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterWorkData.clientName,expression:"filterWorkData.clientName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.filterWorkData.clientName},on:{input:function(e){e.target.composing||t.$set(t.filterWorkData,"clientName",e.target.value)}}})])]),a("CCol",{attrs:{lg:"3"}},[a("div",{staticClass:"form-group",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label"},[t._v(" Category ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filterWorkData.category,expression:"filterWorkData.category"}],staticClass:"form-control",attrs:{id:"cat"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filterWorkData,"category",e.target.multiple?a:a[0])},function(e){return t.getSubCategories(t.filterWorkData.category)}]}},[a("option",{attrs:{value:""}},[t._v("Select Category")]),t._l(t.CategoryData,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.category_name))])}))],2)])]),a("CCol",{attrs:{lg:"3"}},[a("div",{staticClass:"form-group",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label"},[t._v(" Subcategory ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filterWorkData.subcategory,expression:"filterWorkData.subcategory"}],staticClass:"form-control",attrs:{id:"sub"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filterWorkData,"subcategory",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Subcategory")]),t._l(t.SubCategoryData,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.sub_category_name))])}))],2)])]),a("CCol",{attrs:{lg:"3"}},[a("div",{staticClass:"form-group",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label"},[t._v(" Status ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filterWorkData.status,expression:"filterWorkData.status"}],staticClass:"form-control",attrs:{id:"st"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filterWorkData,"status",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Status")]),t._l(t.options,(function(e){return a("option",{domProps:{value:e.label}},[t._v(t._s(e.label))])})),a("option",{attrs:{value:"Closed"}},[t._v("Closed")])],2)])]),a("CCol",{attrs:{lg:"1"}},[a("div",{staticClass:"form-group mt-2",attrs:{role:"group"}},[isNaN(t.userId)?a("CButton",{staticClass:"mt-4",attrs:{type:"button",color:"primary"},on:{click:t.getWorks}},[t._v(" Filter ")]):t._e(),isNaN(t.userId)?t._e():a("CButton",{staticClass:"mt-4",attrs:{type:"button",color:"primary"},on:{click:t.getUserWorks}},[t._v(" Filter ")])],1)]),a("CCol",{attrs:{lg:"2"}},[a("div",{staticClass:"form-group mt-2",attrs:{role:"group"}},[a("CButton",{staticClass:"mt-4",attrs:{type:"button",color:"primary"},on:{click:t.resetFilter}},[t._v(" Reset Filter ")])],1)]),a("CCol",{attrs:{lg:"6"}},[a("div",{staticClass:"form-group mt-2 text-right",attrs:{role:"group"}},[a("download-excel",{staticClass:"btn btn-primary mt-4",attrs:{data:t.exportedData}},[t._v(" Export Excel ")])],1)])],1),a("CRow",[a("CCol",{attrs:{lg:"12 card"}},[t.workData.length?a("table",{staticClass:"table table-bordered mt-4"},[a("thead",[a("tr",[a("th",[t._v("S. No.")]),a("th",[t._v("User Name")]),a("th",[t._v("Client Name")]),a("th",[t._v("Category")]),a("th",[t._v("Subcategory")]),a("th",[t._v("Description")]),a("th",[t._v("Min Budget")]),a("th",[t._v("Max Budget")]),a("th",[t._v("Status")]),a("th",[t._v("Action")])])]),a("tbody",t._l(t.workData,(function(e,r){return a("tr",[a("td",[t._v(t._s(r+1))]),a("td",[t._v(t._s(e.user_name))]),a("td",[a("router-link",{attrs:{to:{path:"/work/"+e.id}}},[t._v(t._s(e.name)+" ")])],1),a("td",[t._v(t._s(e.category_name))]),a("td",[t._v(t._s(e.sub_category_name))]),a("td",{staticClass:"pre-format"},[t._v(t._s(e.description))]),a("td",[t._v(t._s(e.min_budget))]),a("td",[t._v(t._s(e.max_budget))]),a("td",[t._v(t._s(e.status))]),a("td",[a("CDropdown",{staticClass:"m-2",attrs:{"toggler-text":"Action",color:"secondary"}},[a("CDropdownItem",{on:{click:function(a){return t.getSingleWork(e.id)}}},[t._v("Edit")])],1)],1)])})),0)]):t._e(),isNaN(t.userId)?a("pagination",{attrs:{data:t.workDataPage},on:{"pagination-change-page":t.getWorks}}):t._e(),isNaN(t.userId)?t._e():a("pagination",{attrs:{data:t.workDataPage},on:{"pagination-change-page":t.getUserWorks}}),t.workData.length?t._e():a("p",[t._v("No Data Found")])],1)],1),a("CModal",{attrs:{title:"Update Work",show:t.editWorkModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.editWorkModal=e}}},[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CInput",{attrs:{label:"Client Name",type:"text",horizontal:""},model:{value:t.singleWork.name,callback:function(e){t.$set(t.singleWork,"name",e)},expression:"singleWork.name"}}),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Category ")]),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.category,expression:"singleWork.category"}],staticClass:"form-control",attrs:{id:"editCategoryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"category",e.target.multiple?a:a[0])},function(e){return t.getSubCategories(t.singleWork.category)}]}},[a("option",{attrs:{value:""}},[t._v("Select Category")]),t._l(t.CategoryData,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.category_name))])}))],2)])]),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Subcategory ")]),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.subcategory,expression:"singleWork.subcategory"}],staticClass:"form-control",attrs:{id:"editSubCategoryId"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"subcategory",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Subcategory")]),t._l(t.SubCategoryData,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.sub_category_name))])}))],2)])]),a("CTextarea",{attrs:{label:"Work Description",placeholder:"Work Description",horizontal:"",rows:"5"},model:{value:t.singleWork.description,callback:function(e){t.$set(t.singleWork,"description",e)},expression:"singleWork.description"}}),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Min Budget ")]),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.minBudget,expression:"singleWork.minBudget"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.singleWork.minBudget},on:{input:[function(e){e.target.composing||t.$set(t.singleWork,"minBudget",e.target.value)},function(e){t.singleWork.minBudget=t.singleWork.minBudget.replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")}]}})])]),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Max Budget ")]),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.maxBudget,expression:"singleWork.maxBudget"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.singleWork.maxBudget},on:{input:[function(e){e.target.composing||t.$set(t.singleWork,"maxBudget",e.target.value)},function(e){t.singleWork.maxBudget=t.singleWork.maxBudget.replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")}]}})])]),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Status ")]),a("div",{staticClass:"col-sm-9"},[0==t.singleWork.status?a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?a:a[0])}}},t._l(t.optionsPending,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),1==t.singleWork.status?a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?a:a[0])}}},t._l(t.optionsProgress,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),2==t.singleWork.status?a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?a:a[0])}}},t._l(t.optionsDeal,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),3==t.singleWork.status?a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?a:a[0])}}},t._l(t.optionsCompleted,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),4==t.singleWork.status?a("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?a:a[0])}}},t._l(t.optionsDelivered,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),5==t.singleWork.status?a("span",[t._v("Closed")]):t._e()])]),2==t.singleWork.status?a("CInput",{attrs:{label:"Amount",type:"text",horizontal:""},model:{value:t.singleWork.amount,callback:function(e){t.$set(t.singleWork,"amount",e)},expression:"singleWork.amount"}}):t._e()],1)],1),a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.singleWork.disabled},on:{click:function(e){return t.updateWork("")}}},[a("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1)],1)},o=[],s=a("bc26"),l={name:"Works",data:function(){return{exportedData:[],workData:[],workDataPage:{},userId:"",filterWorkData:{userName:"",clientName:"",category:"",subcategory:"",status:""},user:""}},mixins:[s["a"]],created:function(){var t=this;t.userId=document.URL.split("/")[document.URL.split("/").length-1],isNaN(t.userId)?t.getWorks():t.getUserWorks()},methods:{resetFilter:function(){var t=this;t.filterWorkData.userName="",t.filterWorkData.clientName="",t.filterWorkData.category="",t.filterWorkData.subcategory="",t.filterWorkData.status="",isNaN(t.userId)?t.getWorks():t.getUserWorks()},getUserWorks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;axios.post(APP_URL+"/get-works-user/"+e.userId+"?page="+t,e.filterWorkData).then((function(t){e.workData=t.data.res.data,e.workDataPage=t.data.res,e.exportedData=t.data.res.data,e.user=t.data.user})).catch((function(t){}))},getWorks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;axios.post(APP_URL+"/get-works?page="+t,e.filterWorkData).then((function(t){e.workData=t.data.res.data,e.workDataPage=t.data.res,e.exportedData=t.data.res.data})).catch((function(t){}))},changeStatus:function(t,e){var a=this,r="";1==t?r="Progress":2==t?r="Deal":0==t&&(r="Pending"),a.$swal({title:"Are you sure?",text:"You want to change status to "+r,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes"}).then((function(r){r.value&&axios.post(APP_URL+"/change-status/"+e,{status:t}).then((function(t){a.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){a.getWorks()}))})).catch((function(t){}))}))}}},n=l,i=(a("89c6"),a("2877")),u=Object(i["a"])(n,r,o,!1,null,null,null);e["default"]=u.exports},"89c6":function(t,e,a){"use strict";var r=a("5b6c"),o=a.n(r);o.a},bc26:function(t,e,a){"use strict";e["a"]={name:"CommonAdminMixin",data:function(){return{singleWork:{name:"",description:"",minBudget:"",maxBudget:"",status:"",id:"",amount:"",disabled:!1},editWorkModal:!1,options:[{label:"Pending",value:0},{label:"Progress",value:1},{label:"Deal",value:2},{label:"Completed",value:3},{label:"Delivered",value:4}],optionsPending:[{label:"Pending",value:0},{label:"Progress",value:1}],optionsProgress:[{label:"Progress",value:1},{label:"Deal",value:2}],optionsDeal:[{label:"Deal",value:2},{label:"Completed",value:3}],optionsCompleted:[{label:"Completed",value:3},{label:"Delivered",value:4}],optionsDelivered:[{label:"Delivered",value:4}],creditAmountModal:!1,creditAmountData:{userId:"",date:"",comment:"",amount:"",requestId:""},CategoryData:[],SubCategoryData:[]}},created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=this;axios.post(APP_URL+"/select-categories").then((function(e){t.CategoryData=e.data.res})).catch((function(t){}))},getSubCategories:function(t){var e=this;axios.post(APP_URL+"/select-sub-categories/"+t).then((function(t){e.SubCategoryData=t.data.res})).catch((function(t){}))},openModal:function(t,e,a){var r=this;r.creditAmountModal=!0,r.creditAmountData.userId=t,r.creditAmountData.amount=e,r.creditAmountData.requestId=a},creditAmount:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this;t.creditAmountData.date?t.creditAmountData.amount?t.creditAmountData.comment?axios.post(APP_URL+"/credit-amount",t.creditAmountData).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.creditAmountModal=!1,t.getUserPayments()}))})).catch((function(t){})):this.$swal({type:"error",title:"Error",text:"Comment is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Amount is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Date is required",showConfirmButton:!0})},getSingleWork:function(t){var e=this;axios.get(APP_URL+"/get-work-details/"+t).then((function(t){e.editWorkModal=!0,e.singleWork.name=t.data.res.name,e.singleWork.description=t.data.res.description,e.getCategories(),e.singleWork.category=t.data.res.category,e.getSubCategories(e.singleWork.category),e.singleWork.subcategory=t.data.res.sub_category,e.singleWork.minBudget=t.data.res.min_budget,e.singleWork.maxBudget=t.data.res.max_budget,e.singleWork.status=t.data.res.status,e.singleWork.id=t.data.res.id,e.singleWork.amount=t.data.res.amount})).catch((function(t){}))},updateWork:function(t){var e=this,a=this;""==a.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==a.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):a.singleWork.minBudget?a.singleWork.maxBudget?2!=a.singleWork.status||a.singleWork.amount?(a.singleWork.disabled=!0,isNaN(a.singleWork.status)&&(a.singleWork.status=a.singleWork.status.value),axios.post(APP_URL+"/update-work",a.singleWork).then((function(e){a.singleWork.disabled=!1,a.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(a.editWorkModal=!1,t)a.getWorkDetails(a.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?a.getWorks():a.getUserWorks()}}))})).catch((function(t){a.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})},updateClaimWork:function(t){var e=this,a=this;""==a.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==a.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):a.singleWork.minBudget?a.singleWork.maxBudget?2!=a.singleWork.status||a.singleWork.amount?(a.singleWork.disabled=!0,isNaN(a.singleWork.status)&&(a.singleWork.status=a.singleWork.status.value),axios.post(APP_URL+"/update-work",a.singleWork).then((function(e){a.singleWork.disabled=!1,a.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(a.editWorkModal=!1,t)a.getWorkDetails(a.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?a.getClaimedWorks():a.getUserWorks()}}))})).catch((function(t){a.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})}}}}}]);
//# sourceMappingURL=chunk-f8a4f01c.d5db021d.js.map