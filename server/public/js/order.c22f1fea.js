(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{"03ab":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{margin:"20px"}},[a("Order",{attrs:{tableData:e.tableData,visible:e.visible},on:{finish:e.Finish,setdelivery:e.SetDelivery,cancel:e.CancelOrder}})],1)},o=[],l=a("bc3a"),n=a.n(l),s=a("5c96"),r=a("f510"),d={name:"",inject:["reload"],components:{Order:r["a"]},data:function(){return{tableData:[],visible:!0}},computed:{},created:function(){},mounted:function(){var e=this;n.a.get("/api/admin/order").then((function(t){e.tableData=t.data.data}))},methods:{SetDelivery:function(e){var t=this,a=e.id;e.status;n.a.patch("/api/personal/cancelorder",{id:a,status:2}).then((function(e){Object(s["Message"])({message:"已设置发货",type:"success"}),t.reload()}))},CancelOrder:function(e){var t=this,a=e.id;e.status;n.a.patch("/api/personal/cancelorder",{id:a,status:3}).then((function(e){Object(s["Message"])({message:"已取消订单",type:"success"}),t.reload()}))},Finish:function(e){var t=this,a=e.id;e.status;n.a.patch("/api/personal/cancelorder",{id:a,status:4}).then((function(e){Object(s["Message"])({message:"已完成",type:"success"}),t.reload()}))}}},c=d,m=a("2877"),u=Object(m["a"])(c,i,o,!1,null,"5a88009f",null);t["default"]=u.exports},f510:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{margin:"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"商品名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.g_name))])]}}])}),a("el-table-column",{attrs:{label:"收货人",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{attrs:{size:"medium"}},[e._v(e._s(t.row.o_name))])]}}])}),a("el-table-column",{attrs:{label:"联系方式",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{attrs:{size:"medium"}},[e._v(e._s(t.row.o_phone))])]}}])}),a("el-table-column",{attrs:{label:"收货地址",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.o_address))])]}}])}),a("el-table-column",{attrs:{label:"订单创建时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.o_time))])]}}])}),a("el-table-column",{attrs:{label:"订单状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{attrs:{size:"medium"}},[e._v(" "+e._s(1==t.row.o_status?"未发货":2==t.row.o_status?"已发货":3==t.row.o_status?"已取消":4==t.row.o_status?"已完成":""))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.ViewDetails(t.$index,t.row)}}},[e._v("查看详情")]),a("el-dialog",{attrs:{title:"订单详情",visible:e.dialogFormVisibleForEdit},on:{"update:visible":function(t){e.dialogFormVisibleForEdit=t}}},[a("el-form",{attrs:{model:e.handleEditform,disabled:!0}},[a("el-form-item",{attrs:{label:"订单号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.o_id,callback:function(t){e.$set(e.handleEditform,"o_id",t)},expression:"handleEditform.o_id"}})],1),a("el-form-item",{attrs:{label:"图书名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.g_name,callback:function(t){e.$set(e.handleEditform,"g_name",t)},expression:"handleEditform.g_name"}})],1),a("el-form-item",{attrs:{label:"收货人","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.a_address,callback:function(t){e.$set(e.handleEditform,"a_address",t)},expression:"handleEditform.a_address"}})],1),a("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.a_phone,callback:function(t){e.$set(e.handleEditform,"a_phone",t)},expression:"handleEditform.a_phone"}})],1),a("el-form-item",{attrs:{label:"订单创建时间","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.o_time,callback:function(t){e.$set(e.handleEditform,"o_time",t)},expression:"handleEditform.o_time"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{label:"下单用户","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.u_name,callback:function(t){e.$set(e.handleEditform,"u_name",t)},expression:"handleEditform.u_name"}})],1),a("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.o_remark,callback:function(t){e.$set(e.handleEditform,"o_remark",t)},expression:"handleEditform.o_remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisibleForEdit=!1}}},[e._v("确 定")])],1)],1),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){return e.SetDelivery(t.$index,t.row.o_id,t.row.o_status)}},slot:"reference"},[e._v("设置发货")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){return e.CancelOrder(t.$index,t.row.o_id,t.row.o_status)}},slot:"reference"},[e._v("取消订单")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){return e.finished(t.$index,t.row.o_id,t.row.o_status)}},slot:"reference"},[e._v("完成")])]}}])})],1)],1)])},o=[],l={name:"",inject:["reload"],props:["tableData","visible"],components:{},data:function(){return{dialogFormVisibleForEdit:!1,formLabelWidth:"100px",handleEditform:{o_id:"",g_name:"",a_address:"",a_phone:"",o_remark:"",o_time:"",u_name:""}}},computed:{},created:function(){},mounted:function(){},methods:{ViewDetails:function(e,t){this.dialogFormVisibleForEdit=!0,this.handleEditform.o_id=t.o_id,this.handleEditform.g_name=t.g_name,this.handleEditform.a_address=t.o_address,this.handleEditform.a_phone=t.o_phone,this.handleEditform.o_remark=t.o_remark,this.handleEditform.o_time=t.o_time,this.handleEditform.u_name=t.u_name},SetDelivery:function(e,t,a){this.$emit("setdelivery",{id:t,status:a})},CancelOrder:function(e,t,a){this.$emit("cancel",{id:t,status:a})},finished:function(e,t,a){this.$emit("finish",{id:t,status:a})}}},n=l,s=a("2877"),r=Object(s["a"])(n,i,o,!1,null,"67a335a4",null);t["a"]=r.exports}}]);
//# sourceMappingURL=order.c22f1fea.js.map