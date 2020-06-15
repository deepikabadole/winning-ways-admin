(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4961ed10"],{"45cf":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("CRow",[o("CCol",{attrs:{lg:"12 card"}},[t.CategoryData.length?o("table",{staticClass:"table table-bordered mt-4"},[o("thead",[o("tr",[o("th",[t._v("S. No.")]),o("th",[t._v("Image")]),o("th",[t._v("Name")]),o("th",[t._v("Description")]),o("th",[t._v("Action")])])]),o("tbody",t._l(t.CategoryData,(function(e,a){return o("tr",[o("td",[t._v(t._s(a+1))]),o("td",[o("img",{attrs:{src:e.image,height:"50",width:"50"}})]),o("td",[t._v(t._s(e.category_name))]),o("td",[o("span",{domProps:{innerHTML:t._s(e.description)}})]),o("td",[0==e.offline_services?o("button",{staticClass:"btn btn-success",on:{click:function(o){return t.addCategoryToHomePage(e.id,2,1)}}},[t._v("Add")]):t._e(),1==e.offline_services?o("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.addCategoryToHomePage(e.id,2,0)}}},[t._v("Remove")]):t._e()])])})),0)]):t._e(),o("pagination",{attrs:{data:t.CategoryDataPage},on:{"pagination-change-page":t.getCategories}}),t.CategoryData.length?t._e():o("p",{staticClass:"p-3"},[t._v("No Data Found")])],1)],1)],1)},r=[],s=o("bc26"),n={name:"Categories",data:function(){return{CategoryData:[],CategoryDataPage:{}}},mixins:[s["a"]],created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;axios.post(APP_URL+"/get-categories?page="+t).then((function(t){e.CategoryData=t.data.res.data,e.CategoryDataPage=t.data.res})).catch((function(t){}))}}},i=n,l=(o("d197"),o("2877")),u=Object(l["a"])(i,a,r,!1,null,null,null);e["default"]=u.exports},"73a3":function(t,e,o){},bc26:function(t,e,o){"use strict";e["a"]={name:"CommonAdminMixin",data:function(){return{singleWork:{name:"",description:"",minBudget:"",maxBudget:"",status:"",id:"",amount:"",disabled:!1},editWorkModal:!1,options:[{label:"Pending",value:0},{label:"Progress",value:1},{label:"Deal",value:2},{label:"Completed",value:3},{label:"Delivered",value:4}],optionsPending:[{label:"Pending",value:0},{label:"Progress",value:1}],optionsProgress:[{label:"Progress",value:1},{label:"Deal",value:2}],optionsDeal:[{label:"Deal",value:2},{label:"Completed",value:3}],optionsCompleted:[{label:"Completed",value:3},{label:"Delivered",value:4}],optionsDelivered:[{label:"Delivered",value:4}],creditAmountModal:!1,creditAmountData:{userId:"",date:"",comment:"",amount:"",requestId:""},CategoryData:[],SubCategoryData:[]}},created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=this;axios.post(APP_URL+"/select-categories").then((function(e){t.CategoryData=e.data.res})).catch((function(t){}))},getSubCategories:function(t){var e=this;axios.post(APP_URL+"/select-sub-categories/"+t).then((function(t){e.SubCategoryData=t.data.res})).catch((function(t){}))},openModal:function(t,e,o){var a=this;a.creditAmountModal=!0,a.creditAmountData.userId=t,a.creditAmountData.amount=e,a.creditAmountData.requestId=o},creditAmount:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this;t.creditAmountData.date?t.creditAmountData.amount?t.creditAmountData.comment?axios.post(APP_URL+"/credit-amount",t.creditAmountData).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.creditAmountModal=!1,t.getUserPayments()}))})).catch((function(t){})):this.$swal({type:"error",title:"Error",text:"Comment is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Amount is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Date is required",showConfirmButton:!0})},getSingleWork:function(t){var e=this;axios.get(APP_URL+"/get-work-details/"+t).then((function(t){e.editWorkModal=!0,e.singleWork.name=t.data.res.name,e.singleWork.description=t.data.res.description,e.getCategories(),e.singleWork.category=t.data.res.category,e.getSubCategories(e.singleWork.category),e.singleWork.subcategory=t.data.res.sub_category,e.singleWork.minBudget=t.data.res.min_budget,e.singleWork.maxBudget=t.data.res.max_budget,e.singleWork.status=t.data.res.status,e.singleWork.id=t.data.res.id,e.singleWork.amount=t.data.res.amount})).catch((function(t){}))},updateWork:function(t){var e=this,o=this;""==o.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==o.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):o.singleWork.minBudget?o.singleWork.maxBudget?2!=o.singleWork.status||o.singleWork.amount?(o.singleWork.disabled=!0,isNaN(o.singleWork.status)&&(o.singleWork.status=o.singleWork.status.value),axios.post(APP_URL+"/update-work",o.singleWork).then((function(e){o.singleWork.disabled=!1,o.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(o.editWorkModal=!1,t)o.getWorkDetails(o.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?o.getWorks():o.getUserWorks()}}))})).catch((function(t){o.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})},updateClaimWork:function(t){var e=this,o=this;""==o.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==o.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):o.singleWork.minBudget?o.singleWork.maxBudget?2!=o.singleWork.status||o.singleWork.amount?(o.singleWork.disabled=!0,isNaN(o.singleWork.status)&&(o.singleWork.status=o.singleWork.status.value),axios.post(APP_URL+"/update-work",o.singleWork).then((function(e){o.singleWork.disabled=!1,o.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(o.editWorkModal=!1,t)o.getWorkDetails(o.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?o.getClaimedWorks():o.getUserWorks()}}))})).catch((function(t){o.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})}}}},d197:function(t,e,o){"use strict";var a=o("73a3"),r=o.n(a);r.a}}]);
//# sourceMappingURL=chunk-4961ed10.f46317aa.js.map