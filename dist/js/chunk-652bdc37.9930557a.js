(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-652bdc37"],{"0d62":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("CRow",[o("CButton",{staticClass:"btn-edit",attrs:{type:"button",size:"sm",color:"primary"},on:{click:function(e){return t.getSingleWork(t.workData.id)}}},[t._v(" Edit ")])],1),o("div",{staticClass:"card p-4"},[o("CRow",[o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Client Name")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.name))])]),o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Work Description")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.description))])])],1),o("CRow",[o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Min Budget")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.min_budget)+" "),o("span",{staticClass:"fa fa-rupee-sign"})])]),o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Max Budget")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.max_budget)+" "),o("span",{staticClass:"fa fa-rupee-sign"})])])],1),o("CRow",[o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Phone")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.phone)+" ")])]),o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Posted By")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.username)+" ")])])],1),o("CRow",[o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Status")])]),o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t._f("getStatus")(t.workData.status,t.workData.status))+" ")])]),t.workData.image?o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Image")])]):t._e(),t.workData.image?o("CCol",{attrs:{lg:"3"}},[o("img",{attrs:{src:t.workData.image,height:"80",width:"80"}})]):t._e()],1),o("CRow",[t.workData.amount?o("CCol",{attrs:{lg:"3"}},[o("b",[t._v("Amount")])]):t._e(),t.workData.amount?o("CCol",{attrs:{lg:"3"}},[o("p",[t._v(t._s(t.workData.amount)+" ")])]):t._e()],1)],1),0!=t.workData.status?o("CRow",[o("CCol",{staticClass:"mt-5 text-left",attrs:{lg:"6"}},[o("b",[t._v("Followup Details")])]),o("CCol",{attrs:{lg:"1"}}),t.workData.status<4?o("CCol",{staticClass:"mt-5 text-right",attrs:{lg:"3"}},[o("CButton",{staticClass:"mr-1",attrs:{color:"primary"},on:{click:function(e){t.addFollowupModal=!0}}},[t._v(" Take Followup ")])],1):t._e(),o("CCol",{staticClass:"mt-5 text-right",attrs:{lg:"2"}},[t.workData.status<=3?o("CButton",{staticClass:"mr-1",attrs:{color:"primary"},on:{click:t.closeWork}},[t._v(" Close Work ")]):t._e()],1),o("div",{staticClass:"col-12 card mt-3"},[t.followUpData.length?o("table",{staticClass:"table table-bordered mt-5"},[o("thead",[o("tr",[o("th",[t._v("S. No.")]),o("th",[t._v("Followup Date")]),o("th",[t._v("Comment")]),o("th",[t._v("Next Followup Date")]),t.workData.status<4?o("th",[t._v("Action")]):t._e()])]),o("tbody",t._l(t.followUpData,(function(e,a){return o("tr",[o("td",[t._v(t._s(a+1))]),o("td",[t._v(t._s(t._f("formatDate")(e.created_at)))]),o("td",{staticClass:"pre-format"},[t._v(t._s(e.comment))]),o("td",[t._v(t._s(t._f("formatDateTime")(e.next_followup_date)))]),t.workData.status<4?o("td",[o("CButton",{staticClass:"mr-3",attrs:{type:"button",size:"sm",color:"primary"},on:{click:function(o){return t.getSingleWorkFollowup(e.id)}}},[t._v("Edit ")]),o("CButton",{attrs:{type:"button",size:"sm",color:"danger"},on:{click:function(o){return t.deleteWorkFollowup(e.id)}}},[t._v(" Delete ")])],1):t._e()])})),0)]):t._e(),o("pagination",{attrs:{data:t.followUpDataPage},on:{"pagination-change-page":t.getWorkFollowup}}),t.followUpData.length?t._e():o("CCol",{staticClass:"mt-5 mb-5",attrs:{lg:"12"}},[t._v("No Data Found")])],1)],1):t._e(),o("CModal",{attrs:{title:"Take Followup",show:t.addFollowupModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.addFollowupModal=e}}},[o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CTextarea",{attrs:{label:"Comment",placeholder:"Comment...",horizontal:"",rows:"5"},model:{value:t.addWorkFollowupData.comment,callback:function(e){t.$set(t.addWorkFollowupData,"comment",e)},expression:"addWorkFollowupData.comment"}}),o("CInput",{attrs:{label:"Next Followup Date",type:"date",horizontal:""},model:{value:t.addWorkFollowupData.nextFollowupDate,callback:function(e){t.$set(t.addWorkFollowupData,"nextFollowupDate",e)},expression:"addWorkFollowupData.nextFollowupDate"}})],1)],1),o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.addWorkFollowupData.disabled},on:{click:t.takeWorkFollowup}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1),o("CModal",{attrs:{title:"Update Followup",show:t.editFollowupModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.editFollowupModal=e}}},[o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CTextarea",{attrs:{label:"Comment",placeholder:"Comment...",horizontal:"",rows:"5"},model:{value:t.singleWorkFollowupData.comment,callback:function(e){t.$set(t.singleWorkFollowupData,"comment",e)},expression:"singleWorkFollowupData.comment"}}),o("CInput",{attrs:{label:"Next Followup Date",type:"date",horizontal:""},model:{value:t.singleWorkFollowupData.nextFollowupDate,callback:function(e){t.$set(t.singleWorkFollowupData,"nextFollowupDate",e)},expression:"singleWorkFollowupData.nextFollowupDate"}})],1)],1),o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.singleWorkFollowupData.disabled},on:{click:t.updateWorkFollowup}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1),o("CModal",{attrs:{title:"Update Work",show:t.editWorkModal,color:"primary",size:"lg","hide-footer":""},on:{"update:show":function(e){t.editWorkModal=e}}},[o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CInput",{attrs:{label:"Client Name",type:"text",horizontal:""},model:{value:t.singleWork.name,callback:function(e){t.$set(t.singleWork,"name",e)},expression:"singleWork.name"}}),o("CTextarea",{attrs:{label:"Work Description",placeholder:"Work Description",horizontal:"",rows:"5"},model:{value:t.singleWork.description,callback:function(e){t.$set(t.singleWork,"description",e)},expression:"singleWork.description"}}),o("CInput",{attrs:{label:"Min Budget",type:"text",horizontal:""},model:{value:t.singleWork.minBudget,callback:function(e){t.$set(t.singleWork,"minBudget",e)},expression:"singleWork.minBudget"}}),o("CInput",{attrs:{label:"Max Budget",type:"text",horizontal:""},model:{value:t.singleWork.maxBudget,callback:function(e){t.$set(t.singleWork,"maxBudget",e)},expression:"singleWork.maxBudget"}}),o("div",{staticClass:"form-group form-row",attrs:{role:"group"}},[o("label",{staticClass:"col-form-label col-sm-3"},[t._v(" Status ")]),o("div",{staticClass:"col-sm-9"},[0==t.singleWork.status?o("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?o:o[0])}}},t._l(t.optionsPending,(function(e){return o("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),1==t.singleWork.status?o("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?o:o[0])}}},t._l(t.optionsProgress,(function(e){return o("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),2==t.singleWork.status?o("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?o:o[0])}}},t._l(t.optionsDeal,(function(e){return o("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),3==t.singleWork.status?o("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?o:o[0])}}},t._l(t.optionsCompleted,(function(e){return o("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),4==t.singleWork.status?o("select",{directives:[{name:"model",rawName:"v-model",value:t.singleWork.status,expression:"singleWork.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleWork,"status",e.target.multiple?o:o[0])}}},t._l(t.optionsDelivered,(function(e){return o("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e(),5==t.singleWork.status?o("span",[t._v("Closed")]):t._e()])]),2==t.singleWork.status?o("CInput",{attrs:{label:"Amount",type:"text",horizontal:""},model:{value:t.singleWork.amount,callback:function(e){t.$set(t.singleWork,"amount",e)},expression:"singleWork.amount"}}):t._e()],1)],1),o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CButton",{attrs:{type:"button",size:"sm",color:"primary",disabled:t.singleWork.disabled},on:{click:function(e){return t.updateWork(1)}}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit ")],1)],1)],1)],1)],1)},l=[],s=o("bc26"),r={name:"Works",data:function(){return{workData:{},followUpData:[],followUpDataPage:{},workId:"",addWorkFollowupData:{comment:"",nextFollowupDate:"",disabled:!1},addFollowupModal:!1,editFollowupModal:!1,singleWorkFollowupData:{comment:"",nextFollowupDate:"",id:"",disabled:!1}}},mixins:[s["a"]],created:function(){var t=this,e=document.URL.split("/")[document.URL.split("/").length-1];console.log(e),t.workId=e,t.getWorkDetails(e),t.getWorkFollowup()},methods:{closeWork:function(){var t=this;t.$swal({title:"Are you sure?",text:"You want to close this work",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes"}).then((function(e){e.value&&axios.get(APP_URL+"/close-work/"+t.workId).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.getWorkDetails(t.workId),t.getWorkFollowup()}))})).catch((function(t){}))}))},getWorkDetails:function(t){var e=this;axios.get(APP_URL+"/get-work-details/"+t).then((function(t){e.workData=t.data.res})).catch((function(t){}))},deleteWorkFollowup:function(t){var e=this;e.$swal({title:"Are you sure?",text:"You want to delete",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes"}).then((function(o){o.value&&axios.get(APP_URL+"/delete-work-followup/"+t).then((function(t){e.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){e.getWorkFollowup()}))})).catch((function(t){}))}))},getWorkFollowup:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;axios.post(APP_URL+"/get-work-followup/"+e.workId+"?page="+t).then((function(t){e.followUpData=t.data.res.data,e.followUpDataPage=t.data.res})).catch((function(t){}))},getSingleWorkFollowup:function(t){var e=this;axios.post(APP_URL+"/get-single-work-followup/"+t).then((function(t){e.singleWorkFollowupData.id=t.data.res.id,e.singleWorkFollowupData.nextFollowupDate=t.data.res.next_followup_date,e.singleWorkFollowupData.comment=t.data.res.comment,e.editFollowupModal=!0})).catch((function(t){}))},takeWorkFollowup:function(){var t=this,e=this;e.addWorkFollowupData.disabled=!0,axios.post(APP_URL+"/take-work-followup/"+e.workId,e.addWorkFollowupData).then((function(t){e.addWorkFollowupData.disabled=!1,e.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){e.addWorkFollowupData.comment="",e.addWorkFollowupData.nextFollowupDate="",e.addFollowupModal=!1,e.getWorkFollowup()}))})).catch((function(o){e.addWorkFollowupData.disabled=!1,t.$swal({type:"error",title:"error",text:o.response.data.message,showConfirmButton:!0})}))},updateWorkFollowup:function(){var t=this,e=this;e.singleWorkFollowupData.disabled=!0,axios.post(APP_URL+"/update-work-followup",e.singleWorkFollowupData).then((function(t){e.singleWorkFollowupData.disabled=!1,e.$swal({type:"success",title:"Success",text:t.data.message,showConfirmButton:!0}).then((function(){e.editFollowupModal=!1,e.getWorkFollowup()}))})).catch((function(o){e.singleWorkFollowupData.disabled=!1,t.$swal({type:"error",title:"error",text:o.response.data.message,showConfirmButton:!0})}))}}},n=r,i=(o("fe80"),o("2877")),u=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=u.exports},"5a89":function(t,e,o){},bc26:function(t,e,o){"use strict";e["a"]={name:"CommonAdminMixin",data:function(){return{singleWork:{name:"",description:"",minBudget:"",maxBudget:"",status:"",id:"",amount:"",disabled:!1},editWorkModal:!1,options:[{label:"Pending",value:0},{label:"Progress",value:1},{label:"Deal",value:2},{label:"Completed",value:3},{label:"Delivered",value:4}],optionsPending:[{label:"Pending",value:0},{label:"Progress",value:1}],optionsProgress:[{label:"Progress",value:1},{label:"Deal",value:2}],optionsDeal:[{label:"Deal",value:2},{label:"Completed",value:3}],optionsCompleted:[{label:"Completed",value:3},{label:"Delivered",value:4}],optionsDelivered:[{label:"Delivered",value:4}],creditAmountModal:!1,creditAmountData:{userId:"",date:"",comment:"",amount:"",requestId:""},CategoryData:[],SubCategoryData:[]}},created:function(){var t=this;t.getCategories()},methods:{getCategories:function(){var t=this;axios.post(APP_URL+"/select-categories").then((function(e){t.CategoryData=e.data.res})).catch((function(t){}))},getSubCategories:function(t){var e=this;axios.post(APP_URL+"/select-sub-categories/"+t).then((function(t){e.SubCategoryData=t.data.res})).catch((function(t){}))},openModal:function(t,e,o){var a=this;a.creditAmountModal=!0,a.creditAmountData.userId=t,a.creditAmountData.amount=e,a.creditAmountData.requestId=o},creditAmount:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this;t.creditAmountData.date?t.creditAmountData.amount?t.creditAmountData.comment?axios.post(APP_URL+"/credit-amount",t.creditAmountData).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){t.creditAmountModal=!1,t.getUserPayments()}))})).catch((function(t){})):this.$swal({type:"error",title:"Error",text:"Comment is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Amount is required",showConfirmButton:!0}):this.$swal({type:"error",title:"Error",text:"Date is required",showConfirmButton:!0})},getSingleWork:function(t){var e=this;axios.get(APP_URL+"/get-work-details/"+t).then((function(t){e.editWorkModal=!0,e.singleWork.name=t.data.res.name,e.singleWork.description=t.data.res.description,e.getCategories(),e.singleWork.category=t.data.res.category,e.getSubCategories(e.singleWork.category),e.singleWork.subcategory=t.data.res.sub_category,e.singleWork.minBudget=t.data.res.min_budget,e.singleWork.maxBudget=t.data.res.max_budget,e.singleWork.status=t.data.res.status,e.singleWork.id=t.data.res.id,e.singleWork.amount=t.data.res.amount})).catch((function(t){}))},updateWork:function(t){var e=this,o=this;""==o.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==o.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):o.singleWork.minBudget?o.singleWork.maxBudget?2!=o.singleWork.status||o.singleWork.amount?(o.singleWork.disabled=!0,isNaN(o.singleWork.status)&&(o.singleWork.status=o.singleWork.status.value),axios.post(APP_URL+"/update-work",o.singleWork).then((function(e){o.singleWork.disabled=!1,o.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(o.editWorkModal=!1,t)o.getWorkDetails(o.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?o.getWorks():o.getUserWorks()}}))})).catch((function(t){o.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})},updateClaimWork:function(t){var e=this,o=this;""==o.singleWork.name?this.$swal({type:"error",title:"error",text:"Please Enter Client Name",showConfirmButton:!0}):""==o.singleWork.description?this.$swal({type:"error",title:"error",text:"Please Enter Work Description",showConfirmButton:!0}):o.singleWork.minBudget?o.singleWork.maxBudget?2!=o.singleWork.status||o.singleWork.amount?(o.singleWork.disabled=!0,isNaN(o.singleWork.status)&&(o.singleWork.status=o.singleWork.status.value),axios.post(APP_URL+"/update-work",o.singleWork).then((function(e){o.singleWork.disabled=!1,o.$swal({type:"success",title:"Success",text:e.data.message,showConfirmButton:!0}).then((function(){if(o.editWorkModal=!1,t)o.getWorkDetails(o.singleWork.id);else{var e=document.URL.split("/")[document.URL.split("/").length-1];isNaN(e)?o.getClaimedWorks():o.getUserWorks()}}))})).catch((function(t){o.singleWork.disabled=!1,e.$swal({type:"error",title:"error",text:t.response.data.message,showConfirmButton:!0})}))):this.$swal({type:"error",title:"error",text:"Please Enter Work Final Amount",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Maximum Budget",showConfirmButton:!0}):this.$swal({type:"error",title:"error",text:"Please Enter Work Minimum Budget",showConfirmButton:!0})}}}},fe80:function(t,e,o){"use strict";var a=o("5a89"),l=o.n(a);l.a}}]);
//# sourceMappingURL=chunk-652bdc37.9930557a.js.map