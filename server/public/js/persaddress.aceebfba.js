(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["persaddress"],{"26b2":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{margin:"20px"}},[a("el-button",{staticStyle:{margin:"0 auto"},attrs:{type:"primary",round:""},on:{click:e.handleAdd}},[e._v("新增地址")]),a("el-dialog",{attrs:{title:"地址",visible:e.dialogFormVisibleForAdd},on:{"update:visible":function(t){e.dialogFormVisibleForAdd=t}}},[a("el-form",{ref:"handleEditform",attrs:{model:e.handleEditform,rules:e.rules}},[a("el-form-item",{attrs:{label:"收货人","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.name,callback:function(t){e.$set(e.handleEditform,"name",t)},expression:"handleEditform.name"}})],1),a("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth,prop:"phone"}},[a("el-input",{attrs:{autocomplete:"off",maxlength:"11"},on:{input:function(t){e.handleEditform.phone=e.handleEditform.phone.replace(/[^\d]/g,"")}},model:{value:e.handleEditform.phone,callback:function(t){e.$set(e.handleEditform,"phone",t)},expression:"handleEditform.phone"}})],1),a("el-form-item",{attrs:{label:"收货地址","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.address,callback:function(t){e.$set(e.handleEditform,"address",t)},expression:"handleEditform.address"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisibleForAdd=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.AddOk("handleEditform")}}},[e._v("确 定")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"收货人",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.a_name))])]}}])}),a("el-table-column",{attrs:{label:"联系方式",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{attrs:{size:"medium"}},[e._v(e._s(t.row.a_phone))])]}}])}),a("el-table-column",{attrs:{label:"收货地址",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.a_address))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row.a_id,t.row.a_name,t.row.a_phone,t.row.a_address)}}},[e._v("编辑")]),a("el-dialog",{attrs:{title:"地址",visible:e.dialogFormVisibleForEdit},on:{"update:visible":function(t){e.dialogFormVisibleForEdit=t}}},[a("el-form",{attrs:{model:e.handleEditform}},[a("el-form-item",{attrs:{label:"收货人","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.name,callback:function(t){e.$set(e.handleEditform,"name",t)},expression:"handleEditform.name"}})],1),a("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth,prop:"phone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.phone,callback:function(t){e.$set(e.handleEditform,"phone",t)},expression:"handleEditform.phone"}})],1),a("el-form-item",{attrs:{label:"收货地址","label-width":e.formLabelWidth,prop:"address"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.handleEditform.address,callback:function(t){e.$set(e.handleEditform,"address",t)},expression:"handleEditform.address"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisibleForEdit=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.EditOk}},[e._v("确 定")])],1)],1),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row.a_id)}},slot:"reference"},[e._v("删除")])]}}])})],1)],1)},l=[],i=(a("b0c0"),a("bc3a")),d=a.n(i),r=(a("ed08"),a("5c96")),n={name:"",inject:["reload"],components:{},data:function(){return{_to:null,tableData:[],currentRow:null,dialogFormVisibleForEdit:!1,dialogFormVisibleForAdd:!1,handleEditform:{a_id:"",name:"",phone:"",address:""},rules:{name:[{required:!0,message:"请输入收货人姓名",trigger:"blur"}],phone:[{require:!0,message:"请输入收货人联系方式",trigger:"blur"},{max:11,message:"手机号码输入不正确",trigger:"blur"}],address:[{require:!0,message:"请输入收货人地址",trigger:"blur"}]},formLabelWidth:"100px"}},computed:{},created:function(){this._to=JSON.parse(localStorage.getItem("_to"))},mounted:function(){var e=this;this.$axios("/api/personal/address",{params:{user:this._to.data[0].u_name}}).then((function(t){e.tableData=t.data.data}))},methods:{handleEdit:function(e,t,a,o,l){this.dialogFormVisibleForEdit=!0,this.handleEditform.name=a,this.handleEditform.a_id=t,this.handleEditform.phone=o,this.handleEditform.address=l},EditOk:function(){var e=this;this.dialogFormVisibleForEdit=!1,d.a.put("/api/personal/updateAddAddress",{data:this.handleEditform}).then((function(t){e.reload()}))},handleAdd:function(){this.dialogFormVisibleForAdd=!0,this.handleEditform={}},AddOk:function(e){var t=this;this.dialogFormVisibleForAdd=!1,this.$refs[e].validate((function(a){if(void 0==t.$refs[e].model.name||void 0==t.$refs[e].model.address||void 0==t.$refs[e].model.phone)return Object(r["Message"])({message:"新增地址失败，信息填写不完整",type:"error"}),!1;d.a.post("/api/personal/AddAddress",{name:t.handleEditform.name,address:t.handleEditform.address,phone:t.handleEditform.phone,u_id:t._to.data[0].u_id}).then((function(e){t.reload()}))}))},handleDelete:function(e,t){var a=this;this.$confirm("确定删除该地址吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d.a.delete("/api/personal/deleteAddAddress",{params:{a_id:t}}).then((function(e){a.reload(),a.$message({type:"success",message:"删除成功!"})}))})).catch((function(){a.$message({type:"warning",message:"已取消删除"})}))}}},s=n,m=a("2877"),f=Object(m["a"])(s,o,l,!1,null,"0df7c18d",null);t["default"]=f.exports}}]);
//# sourceMappingURL=persaddress.aceebfba.js.map