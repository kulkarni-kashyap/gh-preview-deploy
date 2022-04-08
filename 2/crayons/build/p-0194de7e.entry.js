import{r as t,c as e,h as i,e as s}from"./p-c5706edf.js";import{T as o,i as a}from"./p-ddbd1431.js";var n=function(t,e,i,s){var o,a=arguments.length,n=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let h=class{constructor(i){t(this,i),this.fwChange=e(this,"fwChange",7),this.page=1,this.perPage=10,this.buttonGroupLabel="",this.previousButtonLabel="",this.nextButtonLabel="",this.isLoading=!1}async previousPage(){this.goToPrevious()}async nextPage(){this.goToNext()}getLastPage(){return Math.ceil(this.total/this.perPage)}getStartRecord(){return Math.max((this.page-1)*this.perPage+1,1)}getEndRecord(){return Math.min(this.start+this.perPage-1,this.total)}handlePage(t){t>this.getLastPage()||(this.start=this.getStartRecord(),this.end=this.getEndRecord())}handleTotal(){this.end=this.getEndRecord()}componentWillLoad(){this.page=Math.min(this.page,this.getLastPage()),this.start=this.getStartRecord(),this.end=this.getEndRecord()}goToPrevious(){this.page=Math.max(1,this.page-1),this.fwChange.emit({page:this.page})}goToNext(){this.page=Math.min(this.getLastPage(),this.page+1),this.fwChange.emit({page:this.page})}render(){return i(s,null,i("div",{class:"current-record",innerHTML:o.t("pagination.content",{start:this.start,end:this.end,total:this.total})}),i("fw-button-group",{label:this.buttonGroupLabel},i("fw-button",{disabled:1===this.start||this.isLoading,color:"secondary",size:"icon","aria-label":this.previousButtonLabel,onFwClick:()=>this.goToPrevious()},i("fw-icon",{name:"chevron-left"})),i("fw-button",{disabled:this.end===this.total||this.isLoading,color:"secondary",size:"icon","aria-label":this.nextButtonLabel,onFwClick:()=>this.goToNext()},i("fw-icon",{name:"chevron-right"}))))}static get watchers(){return{page:["handlePage"],total:["handleTotal"]}}};n([a({keyName:"pagination.buttonGroupLabel"})],h.prototype,"buttonGroupLabel",void 0),n([a({keyName:"pagination.previousButtonLabel"})],h.prototype,"previousButtonLabel",void 0),n([a({keyName:"pagination.nextButtonLabel"})],h.prototype,"nextButtonLabel",void 0),h.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.current-record{color:#6f7c87;margin-left:10px;margin-right:14px;line-height:20px;font-size:14px}.current-record .record{font-weight:700}';export{h as fw_pagination}