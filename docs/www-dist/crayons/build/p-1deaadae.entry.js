import{r as t,h as e,e as o,i}from"./p-c5706edf.js";let s=0,a=class{constructor(e){t(this,e)}connectedCallback(){this.tabName?(this.el.id=this.tabName,this.el.removeAttribute("tab-name")):this.el.id="fw-tab-"+s++}render(){return e(o,{"aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled||!this.active?"-1":"0",role:"tab"},e("div",{class:"tab "+(this.disabled?"disabled":"")+(this.active?"active":"")},this.tabHeader?this.tabHeader:e("slot",null)))}get el(){return i(this)}};a.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.tab{display:-ms-inline-flexbox;display:inline-flex;white-space:nowrap;cursor:pointer;-ms-flex-align:center;align-items:center;padding:10px 8px;line-height:20px;color:#475867;font-size:14px;font-weight:400;margin:0 4px;}.tab:hover:not(.disabled){padding-bottom:8px;border-bottom:2px solid #92a2b1}.tab.active:not(.disabled){padding-bottom:8px;border-bottom:2px solid #2c5cc5;color:#2c5cc5;font-weight:600}.tab.disabled{cursor:not-allowed;color:#92a2b1}.tab:focus{outline:none;border-bottom:none;-webkit-box-shadow:none;box-shadow:none}.tab:focus::after{outline:none;border-radius:2px;-webkit-box-shadow:inset 0 0 0 2px #2c5cc5;box-shadow:inset 0 0 0 2px #2c5cc5}::slotted(a){text-decoration:none;color:#475867}';export{a as fw_tab}