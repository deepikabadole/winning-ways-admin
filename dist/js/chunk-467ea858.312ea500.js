(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-467ea858"],{"28c0":function(t,e,a){"use strict";var o=a("5e9d"),r=a.n(o);r.a},"5e9d":function(t,e,a){},b48e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCol",{attrs:{lg:"6"}},[a("h3",[t._v(t._s(t.user_name)+"'s Account Statement")])]),a("CCol",{staticClass:"text-right",attrs:{lg:"4"}},[a("download-excel",{staticClass:"btn btn-primary",attrs:{data:t.exportedData}},[t._v(" Export Excel ")])],1),a("CCol",{staticClass:"text-right",attrs:{lg:"2"}},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(t.userId,0,0)}}},[t._v("Credit Amount ")])])],1),a("CRow",[a("CCol",{attrs:{lg:"12 card"}},[t.paymentData.length?a("table",{staticClass:"table table-bordered mt-4"},[a("thead",[a("tr",[a("th",[t._v("S. No.")]),a("th",[t._v("Date")]),a("th",[t._v("CREDIT")]),a("th",[t._v("DEBIT")]),a("th",[t._v("Balance")]),a("th",[t._v("Status")])])]),a("tbody",t._l(t.paymentData,(function(e,o){return a("tr",[a("td",[t._v(t._s(o+1))]),a("td",[t._v(t._s(t._f("formatDate")(e.updated_at)))]),a("td",["CREDIT"==e.transaction_type?a("span",[t._v(t._s(e.amount))]):t._e(),"DEBIT"==e.transaction_type?a("span",[t._v("-")]):t._e()]),a("td",["DEBIT"==e.transaction_type?a("span",[t._v(t._s(e.amount))]):t._e(),"CREDIT"==e.transaction_type?a("span",[t._v("-")]):t._e()]),a("td",[t._v(t._s(e.balance))]),a("td",[0==e.status?a("span",[t._v("Pending")]):t._e(),1==e.status?a("span",[t._v("Completed")]):t._e()])])})),0)]):t._e(),a("pagination",{attrs:{data:t.paymentDataPage},on:{"pagination-change-page":t.getUserPayments}}),t.paymentData.length?t._e():a("p",[t._v("No Data Found")])],1)],1),a("CModal",{attrs:{title:"Credit Amount",show:t.creditAmountModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.creditAmountModal=e}}},[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CInput",{attrs:{label:"Date",type:"date",horizontal:""},model:{value:t.creditAmountData.date,callback:function(e){t.$set(t.creditAmountData,"date",e)},expression:"creditAmountData.date"}}),a("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[a("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Amount ")]),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.creditAmountData.amount,expression:"creditAmountData.amount"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.creditAmountData.amount},on:{input:[function(e){e.target.composing||t.$set(t.creditAmountData,"amount",e.target.value)},function(e){t.creditAmountData.amount=t.creditAmountData.amount.replace(/[^0-9]/g,"").replace(/(\..*)\./g,"$1")}]}})])]),a("CTextarea",{attrs:{label:"Comments",horizontal:"",rows:"5"},model:{value:t.creditAmountData.comment,callback:function(e){t.$set(t.creditAmountData,"comment",e)},expression:"creditAmountData.comment"}})],1)],1),a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CButton",{attrs:{type:"button",size:"sm",color:"primary"},on:{click:function(e){return t.creditAmount()}}},[a("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1)],1)},r=[],n=a("bc26"),s={name:"Works",data:function(){return{paymentData:[],exportedData:[],paymentDataPage:{},userId:"",workId:"",creditAmountModal:!1,user_name:"",creditAmountData:{id:"",date:"",comment:"",amount:""}}},mixins:[n["a"]],created:function(){var t=this;t.userId=document.URL.split("/")[document.URL.split("/").length-1],t.getUserPayments()},methods:{getUserPayments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;axios.post(APP_URL+"/get-user-payments?page="+t,{userId:e.userId}).then((function(t){e.paymentData=t.data.res.data,e.paymentDataPage=t.data.res,e.user_name=t.data.user_name,e.exportedData=t.data.new_arr})).catch((function(t){}))}}},i=s,l=(a("28c0"),a("2877")),u=Object(l["a"])(i,o,r,!1,null,null,null);e["default"]=u.exports},bc26:function(t,e,a){"use strict";e["a"]={name:"CommonAdminMixin",data:function(){return{singleWork:{name:"",description:"",minBudget:"",maxBudget:"",status:"",id:"",amount:"",disabled:!1},editWorkModal:!1,options:[{label:"Pending",value:0},{label:"Progress",value:1},{label:"Deal",value:2},{label:"Completed",value:3},{label:"Delivered",value:4}],optionsPending:[{label:"Pending",value:0},{label:"Progress",value:1}],optionsProgress:[{label:"Progress",value:1},{label:"Deal",value:2}],optionsDeal:[{label:"Deal",value:2},{label:"Completed",value:3}],optionsCompleted:[{label:"Completed",value:3},{label:"Delivered",value:4}],optionsDelivered:[{label:"Delivered",value:4}],creditAmountModal:!1,creditAmountData:{userId:"",date:"",comment:"",amount:"",requestId:""},CategoryData:[],SubCategoryData:[]}},created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=this;axios.post(APP_URL+"/select-categories").then((function(e){t.CategoryData=e.data.res})).catch((function(t){}))},getSubCategories:function(t){var e=this;axios.post(APP_URL+"/select-sub-categories/"+t).then((function(t){e.SubCategoryData=t.data.res})).catch((function(t){}))},openModal:function(t,e,a){var o=this;o.creditAmountModal=!0,o.creditAmountData.userId=t,o.creditAmountData.amount=e,o.creditAmountData.requestId=a},creditAmount:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this;t.creditAmountData.date?t.creditAmountData.amount?t.creditAmountData.comment?axios.post(APP_URL+"/credit-amount",t.creditAmountData).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.creditAmountModal=!1,t.getUserPayments()}))})).catch((function(t){})):this.$swal({type:"error",title:"Error",text:"Comment is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Amount is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Date is required",showConfirmButton:!0})},getSingleWork:function(t){var e=this;axios.get(APP_URL+"/get-work-details/"+t).then((function(t){e.editWorkModal=!0,e.singleWork.name=t.data.res.name,e.singleWork.description=t.data.res.description,e.getCategories(),e.singleWork.category=t.data.res.category,e.getSubCategories(e.singleWork.category),e.singleWork.subcategory=t.data.res.sub_category,e.singleWork.minBudget=t.data.res.min_budget,e.singleWork.maxBudget=t.data.res.max_budget,e.singleWork.status=t.data.res.status,e.singleWork.id=t.data.res.id,e.singleWork.amount=t.data.res.amount})).catch((function(t){}))},updateWork:function(t){var e=this,a=this;""==a.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==a.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):a.singleWork.minBudget?a.singleWork.maxBudget?2!=a.singleWork.status||a.singleWork.amount?(a.singleWork.disabled=!0,isNaN(a.singleWork.status)&&(a.singleWork.status=a.singleWork.status.value),axios.post(APP_URL+"/update-work",a.singleWork).then((function(e){a.singleWork.disabled=!1,a.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(a.editWorkModal=!1,t)a.getWorkDetails(a.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?a.getWorks():a.getUserWorks()}}))})).catch((function(t){a.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})},updateClaimWork:function(t){var e=this,a=this;""==a.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==a.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):a.singleWork.minBudget?a.singleWork.maxBudget?2!=a.singleWork.status||a.singleWork.amount?(a.singleWork.disabled=!0,isNaN(a.singleWork.status)&&(a.singleWork.status=a.singleWork.status.value),axios.post(APP_URL+"/update-work",a.singleWork).then((function(e){a.singleWork.disabled=!1,a.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(a.editWorkModal=!1,t)a.getWorkDetails(a.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?a.getClaimedWorks():a.getUserWorks()}}))})).catch((function(t){a.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})}}}}}]);
//# sourceMappingURL=chunk-467ea858.312ea500.js.map