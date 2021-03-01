var __assign=Object.assign;!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue"),require("chart.js")):"function"==typeof define&&define.amd?define(["vue","chart.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Vue3ChartJs=t(e.Vue,e.Chart)}(this,(function(e,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(t);const n=["beforeInit","afterInit","beforeUpdate","afterUpdate","beforeLayout","afterLayout","beforeDatasetsUpdate","afterDatasetsUpdate","beforeDatasetUpdate","afterDatasetUpdate","beforeRender","afterRender","beforeDraw","afterDraw","beforeDatasetsDraw","afterDatasetsDraw","beforeDatasetDraw","afterDatasetDraw","beforeEvent","afterEvent","resize","destroy"],o=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase(),d=n.map((e=>o(e))),s=e.defineComponent({name:"Vue3ChartJs",props:{type:{type:String,required:!0},data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]}},emits:d,setup(t,{emit:a}){const d=e.ref(null),s=n.reduce(((e,t)=>{const r={};return r[t]=()=>a(o(t),d),__assign(__assign({},e),r)}),{}),u=e.reactive({chart:null,debouncedID:null,plugins:[s,...t.plugins]}),i=()=>u.chart&&u.chart.destroy(),f=()=>{i(),u.chart=new r.default(d.value.getContext("2d"),{type:t.type,data:t.data,options:t.options,plugins:u.plugins})};return e.onMounted((()=>f())),e.onUnmounted((()=>i())),{state:u,chartRef:d,render:f,update:()=>u.chart&&u.chart.update(),destroy:i,debouncedReload:(e,t)=>{u.debouncedID&&window.clearTimeout(u.debouncedID),u.debouncedID=window.setTimeout((()=>e()),t)}}},watch:{"data.data":{handler:function(){return this.debouncedReload((()=>{this.state.chart.data=this.data,this.update()}),500)},deep:!0}},render:()=>e.h("canvas",{ref:"chartRef"})});return s.install=e=>{e.component(s.name,s)},s}));
