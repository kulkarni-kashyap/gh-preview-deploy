import{r as e,h as o,i as t}from"./p-c5706edf.js";import{h as i}from"./p-20ad09be.js";import{i as l}from"./p-03a7ba41.js";let a=class{constructor(o){e(this,o)}render(){return o("div",{class:"content"},o("slot",null))}};a.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex:1;flex:1;overflow-y:auto;font-size:14px;font-weight:400;color:#12344d;line-height:20px}.content{padding:12px 32px 32px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}';var n=function(e,o,t,i){var l,a=arguments.length,n=a<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,t,i);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(n=(a<3?l(n):a>3?l(o,t,n):l(o,t))||n);return a>3&&n&&Object.defineProperty(o,t,n),n};let s=class{constructor(o){e(this,o),this.submitText="",this.cancelText="",this.submitDisabled=!1,this.submitColor="primary",this.custom=null,this.submit=()=>{},this.close=()=>{}}componentWillLoad(){null===this.custom&&(this.custom=i(this.el))}render(){return o("div",{class:"modal-footer-container"},o("div",{class:"modal-footer"},this.custom?o("slot",null):o("span",null,o("fw-button",{color:"secondary",onClick:()=>this.close()},this.cancelText),o("fw-button",{color:this.submitColor,disabled:this.submitDisabled,onClick:()=>this.submit()},this.submitText))))}get el(){return t(this)}};n([l({keyName:"modal.ok"})],s.prototype,"submitText",void 0),n([l({keyName:"modal.cancel"})],s.prototype,"cancelText",void 0),s.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-footer-container{padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;background-color:#f3f5f7;border-radius:0 0 4px 4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:none;flex:none}.modal-footer-container fw-button{margin-left:12px}';let r=class{constructor(o){e(this,o),this.icon="",this.custom=null}componentWillLoad(){null===this.custom&&(this.custom=i(this.el))}renderIcon(){return o("span",{class:"modal-title-icon"},o("fw-icon",{name:this.icon,size:16}))}render(){return o("div",{class:"modal-header-container"},o("div",{class:"modal-header"},this.custom?o("slot",null):o("div",{class:"modal-header-body"},o("div",{class:"modal-title"},""!==this.icon?this.renderIcon():null,o("label",{class:"title-label"},this.titleText)),this.description&&o("label",{class:"description"},this.description))))}get el(){return t(this)}};r.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-header-container{padding:32px 32px 0;position:relative;background:#fff;border-radius:4px 4px 0 0;-webkit-transition:all 0.1s linear;transition:all 0.1s linear;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:none;flex:none}.modal-header-container .modal-header{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;font-size:18px;font-weight:600;line-height:24px}.modal-header-container .modal-header .modal-header-body{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:0px}.modal-header-container .modal-header .modal-header-body .modal-title{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:10px}.modal-header-container .modal-header .modal-header-body .modal-title .modal-title-icon{width:auto;height:24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-header-container .modal-header .modal-header-body .modal-title .title-label{font-size:18px;font-weight:600;line-height:24px}.modal-header-container .modal-header .modal-header-body .description{font-size:14px;font-weight:400;color:#475867;line-height:20px;padding:6px 0px}';export{a as fw_modal_content,s as fw_modal_footer,r as fw_modal_title}