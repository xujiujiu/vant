(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{250:function(e,s,t){"use strict";t.r(s);var a=t(90),n={i18n:{"zh-CN":{searchResult:[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"黄龙万科中心G座"},{name:"黄龙万科中心H座",address:"杭州市西湖区"}]},"en-US":{searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}},data:function(){return{areaList:a.a,searchResult:[]}},methods:{onSave:function(){this.$toast(this.$t("save"))},onDelete:function(){this.$toast(this.$t("delete"))},onChangeDetail:function(e){this.searchResult=e?this.$t("searchResult"):[]}}},i=t(7),r=Object(i.a)(n,function(){var e=this.$createElement,s=this._self._c||e;return s("demo-section",[s("demo-block",{attrs:{title:this.$t("basicUsage")}},[s("van-address-edit",{attrs:{"area-list":this.areaList,"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":this.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:this.onSave,delete:this.onDelete,"change-detail":this.onChangeDetail}})],1)],1)},[],!1,null,null,null);s.default=r.exports}}]);