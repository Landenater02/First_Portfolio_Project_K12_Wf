/*! Built with http://stenciljs.com */
const{h:t}=window.components;var e;!function(t){t.Properties="icon-cogwheel",t.Change="icon-l-cols-30-70"}(e||(e={}));class o{constructor(){this.render=(()=>t("div",{class:"ktc-header-button"},t("a",{onClick:()=>this.buttonClick.emit()},t("i",{"aria-hidden":"true",title:this.buttonTooltip,class:this.icon}))))}static get is(){return"kentico-header-button"}static get encapsulation(){return"shadow"}static get properties(){return{buttonTooltip:{type:String,attr:"button-tooltip"},icon:{type:"Any",attr:"icon"}}}static get events(){return[{name:"buttonClick",method:"buttonClick",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[class*=\" icon-\"][data-kentico-header-button], [class^=icon-][data-kentico-header-button]{font-family:Core-icons;display:inline-block;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:none}[class^=icon-][data-kentico-header-button]:before{content:\"\\e619\"}.ktc-icon-only[data-kentico-header-button]:before{content:none}[data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]{position:relative}[data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]   a[data-kentico-header-button]   i[data-kentico-header-button]{cursor:pointer;color:#fff;padding:8px 4px}[data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]   a[data-kentico-header-button]   .icon-cogwheel[data-kentico-header-button]:before{content:\"\\e6a7\"}[data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]   a[data-kentico-header-button]   .icon-l-cols-30-70[data-kentico-header-button]:before{content:\"\\e641\"}[is-template-button=true][data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]{width:32px;height:32px;background-color:#a15700;cursor:pointer}[is-template-button=true][data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]:hover{z-index:10000}[is-template-button=true][data-kentico-header-button-host]   .ktc-header-button[data-kentico-header-button]   a[data-kentico-header-button]   i[data-kentico-header-button]{padding:8px;opacity:1}"}}export{o as KenticoHeaderButton};