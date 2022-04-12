import{r as t,h as i,i as e}from"./p-c5706edf.js";import{h as s}from"./p-20ad09be.js";import{T as h}from"./p-03a7ba41.js";const o=["input","select","textarea"];let r=class{constructor(i){t(this,i),this.type="TEXT",this.required=!1,this.hint="",this.placeholder="",this.choices=[],this.fieldProps={},this.touched=!1,this.error="",this.hasSlot=!1}renderControl(){var t,e,s,o,r,l,n,a,d,c,b,v,u,f,p,m,O,j,x,g;if(this.hasSlot)return null;if(!this.name)return null;let w;switch(this.type){case"TEXT":case"NUMBER":case"DECIMAL":case"EMAIL":case"TEL":case"URL":{const s="DECIMAL"===this.type?"number":null===(t=this.type)||void 0===t?void 0:t.toLowerCase(),o=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,type:s}),null===(e=this.controlProps)||void 0===e?void 0:e.inputProps(this.name,s)),{state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});w=i("fw-input",Object.assign({},o,{ref:t=>this.crayonsControlRef=t}));break}case"PARAGRAPH":{const t=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required}),null===(s=this.controlProps)||void 0===s?void 0:s.inputProps(this.name,null===(o=this.type)||void 0===o?void 0:o.toLowerCase())),{state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});w=i("fw-textarea",Object.assign({},t,{ref:t=>this.crayonsControlRef=t}))}break;case"DATE":{const t=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required}),null===(r=this.controlProps)||void 0===r?void 0:r.inputProps(this.name,null===(l=this.type)||void 0===l?void 0:l.toLowerCase())),{state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});w=i("fw-datepicker",Object.assign({},t,{readonly:!0,ref:t=>this.crayonsControlRef=t}))}break;case"CHECKBOX":{const t=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:"",required:this.required}),null===(n=this.controlProps)||void 0===n?void 0:n.checkboxProps(this.name,null===(a=this.type)||void 0===a?void 0:a.toLowerCase())),{state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});w=i("fw-checkbox",Object.assign({},t,{ref:t=>this.crayonsControlRef=t}),this.label)}break;case"RADIO":{const t=null===(d=this.controlProps)||void 0===d?void 0:d.radioProps(this.name,null===(c=this.type)||void 0===c?void 0:c.toLowerCase()),e=Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,"allow-empty":!0,state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})}),t);w=i("fw-radio-group",Object.assign({},e,{ref:t=>this.crayonsControlRef=t}),null===(b=this.choices)||void 0===b?void 0:b.map((t=>i("fw-radio",{name:this.name,value:t[e.optionValuePath]||t.value,state:this.touched&&this.error?"error":"normal"},t[e.optionLabelPath]||t.value))))}break;case"DROPDOWN":case"MULTI_SELECT":{const t=null===(v=this.controlProps)||void 0===v?void 0:v.selectProps(this.name,null===(u=this.type)||void 0===u?void 0:u.toLowerCase());let e=Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,multiple:"MULTI_SELECT"===this.type,state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});e=Object.assign(Object.assign(Object.assign({},e),t),{options:this.choices}),w=i("fw-select",Object.assign({},e,{ref:t=>this.crayonsControlRef=t}))}break;case"RELATIONSHIP":{const t=null===(f=this.controlProps)||void 0===f?void 0:f.selectProps(this.name,null===(p=this.type)||void 0===p?void 0:p.toLowerCase()),e=Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});Array.isArray(t.value)&&"object"==typeof t.value[0]&&(e.selectedOptions=t.value),(null===(m=e.selectedOptions)||void 0===m?void 0:m.length)>0?null===(O=this.crayonsControlRef)||void 0===O||O.setSelectedOptions(e.selectedOptions):t.value||null===(j=this.crayonsControlRef)||void 0===j||j.setSelectedOptions([]),e.noDataText="Start Typing...",w=i("fw-select",Object.assign({},e,{ref:t=>this.crayonsControlRef=t}))}break;case"TIME":{const t=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required}),null===(x=this.controlProps)||void 0===x?void 0:x.inputProps(this.name,null===(g=this.type)||void 0===g?void 0:g.toLowerCase())),{state:this.touched&&this.error?"error":"normal","hint-text":this.hint,"error-text":h.t(this.error,{field:this.label||this.name})});w=i("fw-timepicker",Object.assign({},t,{ref:t=>this.crayonsControlRef=t}))}}return w}componentWillLoad(){this.handleSlotChange()}async setFocus(){var t,i,e,s;this.hasSlot?null===(s=null===(e=this.slotElement)||void 0===e?void 0:e.focus)||void 0===s||s.call(e):await(null===(i=null===(t=this.crayonsControlRef)||void 0===t?void 0:t.setFocus)||void 0===i?void 0:i.call(t))}handleSlotChange(){var t;this.hasSlot=s(this.el),this.slotElement=null===(t=[...this.el.querySelectorAll("*")].filter((t=>{var i;return o.includes(null===(i=null==t?void 0:t.tagName)||void 0===i?void 0:i.toLowerCase())})))||void 0===t?void 0:t[0]}render(){return i("div",{class:"form-control-container"},this.renderControl(),this.hasSlot&&i("label",{htmlFor:this.name,class:{label:!0,required:this.required}},this.label),i("slot",null),this.hasSlot&&!(this.touched&&this.error)&&i("div",{class:"hint",id:`hint-${this.name}`},this.hint),this.hasSlot&&this.touched&&this.error&&i("div",{class:"error",id:`error-${this.name}`},h.t(this.error,{field:this.label||this.name})))}get el(){return e(this)}};r.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.error{color:#d72d30;font-weight:400;font-size:12px;line-height:20px;padding-top:4px;padding-left:2px}label{font-size:12px;color:#475867;font-weight:600;margin-bottom:4px;padding-left:2px;display:block}label.required::after{content:"*";position:relative;display:inline-block;top:2px;font-size:14px;color:#d72d30;padding-left:2px;font-weight:700}.hint{font-weight:400;font-size:12px;color:#475867;line-height:20px;padding-top:4px;padding-left:2px}.form-control-container{margin:1em 0em}';export{r as fw_form_control}