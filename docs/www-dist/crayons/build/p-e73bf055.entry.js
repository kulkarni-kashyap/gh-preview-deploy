import{r as t,c as i,h as s,i as a}from"./p-c5706edf.js";let e=class{constructor(s){t(this,s),this.fwChange=i(this,"fwChange",7),this.label="",this.activeTabIndex=0,this.variant="normal"}syncTabsAndPanels(){this.tabs=Array.from(this.el.querySelectorAll("fw-tab")).filter((t=>!t.disabled)),this.panels=Array.from(this.el.querySelectorAll("fw-tab-panel"))}init(){this.syncTabsAndPanels(),this.assignAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],!1)}createPanelIfRequired(){let t=0;this.tabs=Array.from(this.el.querySelectorAll("fw-tab")),this.tabs.map((i=>{if(i.tabHeader){i.setAttribute("panel","panel-"+t++),i.setAttribute("slot","tab");const s=document.createElement("fw-tab-panel");s.innerHTML=i.innerHTML,s.setAttribute("id","fw-tab-panel-"+t++),s.setAttribute("name",i.getAttribute("panel")||i.panel),this.el.appendChild(s)}}))}assignAriaLabels(){Array.from(this.el.querySelectorAll("fw-tab")).map((t=>{const i=this.panels.find((i=>i.name===t.getAttribute("panel")||t.panel));i&&(t.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",t.getAttribute("id")))}))}async activateTab(t,i){t&&(this.activeTabIndex=t),i&&(this.activeTabName=i),this.setActiveTab(this.getActiveTab(),!1)}setActiveTab(t,i=!0){if(t&&t!==this.activeTab&&!t.disabled){this.activeTab=t,this.activeTabIndex=this.tabs.indexOf(t),this.tabs.map((t=>t.active=t===this.activeTab));const s=this.activeTab.getAttribute("panel")||this.activeTab.panel;this.panels.map((t=>t.active=t.name===s)),i&&this.fwChange.emit({tabIndex:this.activeTabIndex,tabName:this.activeTab.id})}}componentWillLoad(){this.init()}connectedCallback(){this.createPanelIfRequired(),this.tabsMutation=new MutationObserver((()=>{this.init()})),this.tabMutation=new MutationObserver((t=>{t.some((t=>"disabled"===t.attributeName))&&this.syncTabsAndPanels()})),this.tabsMutation.observe(this.el,{childList:!0,attributes:!0}),Array.from(this.el.querySelectorAll("fw-tab")).forEach((t=>{this.tabMutation.observe(t,{attributes:!0})}))}disconnectedCallback(){var t,i;null===(t=this.tabsMutation)||void 0===t||t.disconnect(),null===(i=this.tabMutation)||void 0===i||i.disconnect(),this.tabsMutation=void 0,this.tabMutation=void 0}getActiveTab(){return this.activeTabIndex&&this.tabs[this.activeTabIndex]||this.tabs.find((t=>t.id===this.activeTabName||t.active))}handleClick(t){const i=t.target.closest("fw-tab");(null==i?void 0:i.closest("fw-tabs"))===this.el&&i&&this.setActiveTab(i)}handleKeyDown(t){const i=t.target.closest("fw-tab");if((null==i?void 0:i.closest("fw-tabs"))===this.el)switch(t.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":t.preventDefault()}}handleKeyUp(t){const i=t.target.closest("fw-tab");if((null==i?void 0:i.closest("fw-tabs"))===this.el&&void 0!==this.activeTabIndex){let i=this.activeTabIndex;switch(t.code){case"ArrowLeft":case"ArrowUp":i=(i-1+this.tabs.length)%this.tabs.length;break;case"ArrowRight":case"ArrowDown":i=(i+1)%this.tabs.length;break;default:return}this.tabs[i].focus(),this.setActiveTab(this.tabs[i])}}render(){return s("div",{class:"tabs"},s("div",{class:"tabs__items__nav"+("box"===this.variant?"__box":"")},s("div",{class:"tabs__items__tabs",role:"tablist","aria-label":this.label},s("slot",{name:"tab"}))),s("slot",null))}get el(){return a(this)}};e.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.tabs{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--fw-tabs-width, "inherit");height:var(--fw-tabs-height, "inherit")}.tabs__items__nav{padding:0;padding-left:var(--fw-tabs-padding-left, 12px);padding-right:var(--fw-tabs-padding-right, 12px);margin-left:var(--fw-tabs-margin-l, 0);margin-right:var(--fw-tabs-margin-r, 0);display:-ms-flexbox;display:flex;border-bottom:1px solid #ebeff3;overflow-x:auto;overflow-y:hidden}.tabs__items__nav__box{background-color:#f5f7f9;border:1px solid #ebeff3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.tabs__items__tabs{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative}';export{e as fw_tabs}