// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/Filter.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"contentSection" class\x3d"content-section"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"desktopAddSection" class\x3d"desktop-add-section hidden"\x3e\r\n\t\t\t\x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"btnAddExpDesktop" class\x3d"add-with-icon add-expression jimu-float-leading jimu-state-disabled"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addAnotherExpression}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"btnAddSetDesktop" class\x3d"add-with-icon add-set jimu-float-leading jimu-state-disabled"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addSet}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"matchMsg" class\x3d"match-msg"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"oneOrZeroMsg" tabindex\x3d"0" style\x3d"display:none;"\x3e${nls.oneOrZeroMsg}\x3c/div\x3e\r\n\t\t\t\x3cselect data-dojo-attach-point\x3d"allAnySelect" data-dojo-type\x3d"jimu/dijit/formSelect" class\x3d"dijit-form-Select restrict-select-width" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\x3coption value\x3d"AND" selected\x3e${nls.matchMsgAll}\x3c/option\x3e\r\n\t\t\t\t\x3coption value\x3d"OR"\x3e${nls.matchMsgAny}\x3c/option\x3e\r\n\t\t\t\x3c/select\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"allExpsBox" data-dojo-attach-point\x3d"allExpsBox"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"errorSection" class\x3d"hidden"\x3e\r\n\t\t\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"errorTip" class\x3d"error-tip"\x3e\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"mobileAddSection" class\x3d"mobile-add-section hidden"\x3e\r\n\t\t\x3cdiv role\x3d"button" tabindex\x3d"0" title\x3d"${nls.addAnotherExpression}" class\x3d"jimu-btn jimu-btn-vacation jimu-float-leading jimu-state-disabled" data-dojo-attach-point\x3d"btnAddExpMobile"\x3e\r\n\t\t\t+ ${nls.addAnotherExpression}\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv role\x3d"button" tabindex\x3d"0" title\x3d"${nls.addSet}" class\x3d"jimu-btn jimu-btn-vacation jimu-float-leading jimu-state-disabled" data-dojo-attach-point\x3d"btnAddSetMobile"\x3e\r\n\t\t\t+ ${nls.addSet}\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"noFilterTipSection" class\x3d"no-filter-tip hidden" tabindex\x3d"0"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dijit/a11yclick dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/Filter.html jimu/filterUtils jimu/utils jimu/LayerInfos/LayerInfos jimu/dijit/_filter/ValueProviderFactory dijit/registry dojo/_base/lang dojo/_base/html dojo/_base/array dojo/aspect dojo/Deferred esri/request ./_SingleFilter ./_FilterSet jimu/dijit/formSelect ./LoadingIndicator".split(" "),function(l,m,t,u,v,w,x,y,z,n,A,B,C,d,e,h,q,p,r,D,E){return u([v,
w,x,z,t],{templateString:y,baseClass:"jimu-filter",declaredClass:"jimu.dijit.Filter",nls:null,autoSwitchMode:!0,_validOptions:!1,_layerDefinition:null,_popupFieldsInfo:[],_def:null,valueProviderFactory:null,featureLayerId:null,layerInfosObj:null,mode:"desktop",noFilterTip:"",enableAskForValues:!1,mobileBreakWidth:600,runtime:!1,widgetId:"",postMixInProperties:function(){this.nls=window.jimuNls.filterBuilder;this.nls.add=window.jimuNls.common.add;this.nls.apply=window.jimuNls.common.apply;this.layerInfosObj=
A.getInstanceSync();this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._setDesktopMode();this.noFilterTip&&"string"===typeof this.noFilterTip&&(this.noFilterTipSection.innerHTML=n.sanitizeHTML(this.noFilterTip));this._bindBtnsEvent()},startup:function(){this.inherited(arguments);this.autoUpdateMode()},resize:function(){this.autoUpdateMode()},_bindBtnsEvent:function(){this.own(l(this.btnAddExpDesktop,m,d.hitch(this,function(){this._onBtnAddExpClick()})));this.own(l(this.btnAddSetDesktop,
m,d.hitch(this,function(){this._onBtnAddSetClick()})));this.own(l(this.btnAddExpMobile,m,d.hitch(this,function(){this._onBtnAddExpClick()})));this.own(l(this.btnAddSetMobile,m,d.hitch(this,function(){this._onBtnAddSetClick()})))},autoUpdateMode:function(){this.autoSwitchMode&&(this._clearMode(),this.domNode.clientWidth>=this.mobileBreakWidth?this._setDesktopMode():this._setMobileMode())},setMode:function(a){"desktop"===a?this._setDesktopMode():"mobile"===a&&this._setMobileMode()},_setMode:function(a){this.mode=
a;this._setModeClass(this.mode)},_setModeClass:function(a){e.removeClass(this.domNode,"desktop-mode");e.removeClass(this.domNode,"mobile-mode");e.addClass(this.desktopAddSection,"hidden");e.addClass(this.mobileAddSection,"hidden");a&&e.addClass(this.domNode,a+"-mode")},_clearMode:function(){this._setModeClass("")},_setDesktopMode:function(){this._setMode("desktop");e.removeClass(this.desktopAddSection,"hidden")},_setMobileMode:function(){this._setMode("mobile");e.removeClass(this.mobileAddSection,
"hidden")},reset:function(){this.isBuilding()||(this.removeAllFilters(),this.url=null,this.isHosted=!1,this._layerDefinition=null,this._popupFieldsInfo=[],this.valueProviderFactory=this.partsObj=this.expr=this.featureLayerId=null)},isBuilding:function(){return this._def&&!this._def.isFulfilled()},build:function(a){var b=new p;this.isBuilding()?b.reject("Filter is already building."):(this._def=null,this.reset(),this.url=a.url,this.isHosted=n.isHostedService(this.url),this._layerDefinition=a.layerDefinition,
this.featureLayerId=a.featureLayerId,a.widgetId&&(this.widgetId=a.widgetId),a.partsObj?(this.partsObj=this._updatePartsObj(a.partsObj),this._def=this._init("partsObj")):(this.expr=a.expr||"1\x3d1",this._def=this._init("expr")),b=this._def);return b},buildByExpr:function(a,b,c){console.warn("Filter#buildByExpr() method is deprecated, please use Filter#build() instead.");return this.build({url:a,expr:b,layerDefinition:c,featureLayerId:this.featureLayerId})},buildByFilterObj:function(a,b,c){console.warn("Filter#buildByFilterObj() method is deprecated, please use Filter#build() instead.");
return this.build({url:a,partsObj:b,layerDefinition:c,featureLayerId:this.featureLayerId})},_updatePartsObj:function(a){h.forEach(a,d.hitch(this,function(b){b.parts?h.forEach(b.parts,d.hitch(this,function(c){c.interactiveObj&&!0===c.interactiveObj.cascade?c.interactiveObj.cascade="previous":!1===c.interactiveObj.cascade&&(c.interactiveObj.cascade="none")})):b.interactiveObj&&!0===b.interactiveObj.cascade?b.interactiveObj.cascade="previous":!1===b.interactiveObj.cascade&&(b.interactiveObj.cascade=
"none")}));return a},removeAllFilters:function(){this._destroyAllFilters()},_getLayerDefinitionRaw:function(a,b){var c=new p;b?c.resolve(b):(this.loading.show(),r({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(f){this.domNode?(this.loading.hide(),c.resolve(f)):c.reject()}),d.hitch(this,function(f){console.error(f);c.reject();this.domNode&&this.loading.hide()})));return c},_validateLayerDefinition:function(a){return this._isObject(a)},_init:function(a){var b=
new p;if(!this._isString(this.url))return b.reject(),b;var c=d.hitch(this,function(){setTimeout(d.hitch(this,function(){this.emit("change");b.resolve()}),1500)}),f=d.hitch(this,function(){e.addClass(this.errorSection,"hidden");this.removeAllFilters();if(this.featureLayerId){this._tryOverrideFieldAliases(this.featureLayerId,this._layerDefinition);var g=this.layerInfosObj.getLayerOrTableInfoById(this.featureLayerId).getPopupInfo()}var k=this._layerDefinition.fields;k&&0<k.length?(this._popupFieldsInfo=
g?n.completePopupFieldFromLayerField(k,g.fieldInfos):k,(k=h.filter(k,d.hitch(this,function(F){return 0<=this._supportFieldTypes.indexOf(F.type)})))&&0<k.length?(this._validOptions=!0,e.removeClass(this.btnAddSetDesktop,"jimu-state-disabled"),e.removeClass(this.btnAddExpDesktop,"jimu-state-disabled"),e.removeClass(this.btnAddSetMobile,"jimu-state-disabled"),e.removeClass(this.btnAddExpMobile,"jimu-state-disabled"),this.createFieldsStore(),this.valueProviderFactory=new B({url:this.url,layerDefinition:this._layerDefinition,
featureLayerId:this.featureLayerId}),"expr"===a?this._isString(this.expr)?("1\x3d1"===this.expr.replace(/\s/gi,"")&&this.removeAllFilters(),this._parseExpr(this.expr)?c():b.reject()):b.reject():"partsObj"===a?this._validatePartsObj(this.partsObj)?(this._parsePartsObj(this.partsObj),c()):b.reject():this._validatePartsObj(this.partsObj)?(this._parsePartsObj(this.partsObj),c()):this._isString(this.expr)?this._parseExpr(this.expr)?c():b.reject():(this.removeAllFilters(),c())):(this._showErrorOptions(this.nls.error.noFilterFields),
b.reject())):(g&&(this._popupFieldsInfo=g.fieldInfos),b.reject())});this._validateLayerDefinition(this._layerDefinition)?f():(this.loading.show(),r({url:this.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(g){this.domNode?(this.loading.hide(),this._layerDefinition=g,f()):b.reject()}),d.hitch(this,function(g){console.error(g);b.reject();this.domNode&&this.loading.hide()})));return b},_tryOverrideFieldAliases:function(a,b){if(a=this.layerInfosObj.getLayerOrTableInfoById(a))if(a=
a.getPopupInfo())if(a=a.fieldInfos,b=b.fields,a&&0<a.length&&b&&0<b.length){var c={};h.forEach(a,d.hitch(this,function(f){f.fieldName&&(c[f.fieldName]=f)}));h.forEach(b,d.hitch(this,function(f){var g=c[f.name];g&&g.label&&(f.alias=g.label)}))}},toJson:function(){var a={logicalOperator:this.allAnySelect.value,parts:[]},b=this._getAllSingleFiltersAndFilterSets();if(0===b.length)return a.expr="1\x3d1",a;h.forEach(b,d.hitch(this,function(c){c=c.toJson();a.parts.push(c)}));return h.every(a.parts,d.hitch(this,
function(c){return!!c}))&&0<a.parts.length?(a.expr=this.getExprByFilterObj(a),a):null},toValidJson:function(){var a={logicalOperator:this.allAnySelect.value,parts:[]},b=this._getAllSingleFiltersAndFilterSets();if(0===b.length)return a.expr="1\x3d1",a;h.forEach(b,d.hitch(this,function(c){(c=c.toJson())&&a.parts.push(c)}));a.expr=0<a.parts.length?this.getExprByFilterObj(a):"1\x3d1";return a},createFieldsStore:function(){if(this._layerDefinition.fields&&0!==this._layerDefinition.fields.length){var a=
d.clone(this._layerDefinition.fields);0===this.setFieldsStoreByFieldInfos(a)&&this._showErrorOptions(this.nls.error.noFilterFields)}else this._showErrorOptions(this.nls.error.noFilterFields)},_parsePartsObj:function(a){this._validatePartsObj(a)&&(this.removeAllFilters(),this._buildEditUIByPartsObj(a))},_parseExpr:function(a){this._destroyAllFilters();var b=null;if(!this._validateLayerDefinition(this._layerDefinition))return b;if(!a||"string"!==typeof a)return this._showErrorOptions(this.nls.error.invalidSQL),
b;if("1\x3d1"===this.expr.replace(/\s/gi,""))return b={expr:"1\x3d1",parts:[],logicalOperator:"AND"};try{b=this.getFilterObjByExpr(a)}catch(c){b=null,console.error(c)}b?this._buildEditUIByPartsObj(b):this._showErrorOptions(this.nls.error.cantParseSQL);return b},_buildEditUIByPartsObj:function(a){a&&(this._destroyAllFilters(),h.forEach(a.parts,d.hitch(this,function(b){b.parts?this._addFilterSet(b):b.fieldObj&&b.operator&&b.valueObj&&this._addSingleFilter(b)})),this._setValutForAllAnySelect(a.logicalOperator),
this._setFilterMsgUI(a.parts.length))},_addSingleFilter:function(a){a={widgetId:this.widgetId,url:this.url,layerInfo:this._layerDefinition,popupFieldsInfo:this._popupFieldsInfo,stringFieldType:this._stringFieldType,dateFieldType:this._dateFieldType,numberFieldTypes:this._numberFieldTypes,part:a,OPERATORS:d.mixin({},this.OPERATORS),enableAskForValues:this.enableAskForValues,isHosted:this.isHosted,valueProviderFactory:this.valueProviderFactory,runtime:this.runtime};a=new D(a);a.placeAt(this.allExpsBox);
a.startup();this.own(q.after(a,"_destroySelf",d.hitch(this,function(){this._checkFilterNumbers();this._focusOnMobileAdd();this.emit("change")})));this.own(l(a,"change",d.hitch(this,function(){this.emit("change")})));this._checkFilterNumbers();return a},_focusOnMobileAdd:function(){e.hasClass(this.mobileAddSection,"hidden")||this.btnAddExpMobile.focus()},_addFilterSet:function(a){a={widgetId:this.widgetId,url:this.url,layerInfo:this._layerDefinition,popupFieldsInfo:this._popupFieldsInfo,stringFieldType:this._stringFieldType,
dateFieldType:this._dateFieldType,numberFieldTypes:this._numberFieldTypes,partsObj:a,OPERATORS:d.mixin({},this.OPERATORS),enableAskForValues:this.enableAskForValues,isHosted:this.isHosted,valueProviderFactory:this.valueProviderFactory,runtime:this.runtime};a=new E(a);a.placeAt(this.allExpsBox);a.startup();this.own(q.after(a,"_destroySelf",d.hitch(this,function(){this._checkFilterNumbers();this._focusOnMobileAdd();this.emit("change")})));this.own(l(a,"change",d.hitch(this,function(){this.emit("change")})));
this._checkFilterNumbers();return a},_destroyAllFilters:function(){for(var a=this._getAllSingleFiltersAndFilterSets();0<a.length;)a[0].destroy(),a.splice(0,1);this._checkFilterNumbers()},_getAllSingleFiltersAndFilterSetsDoms:function(){var a=[];this.allExpsBox.childNodes&&0<this.allExpsBox.childNodes.length&&h.forEach(this.allExpsBox.childNodes,d.hitch(this,function(b){(e.hasClass(b,"jimu-single-filter")||e.hasClass(b,"jimu-filter-set"))&&a.push(b)}));return a},_getAllSingleFiltersAndFilterSets:function(){var a=
this._getAllSingleFiltersAndFilterSetsDoms();return h.map(a,d.hitch(this,function(b){return C.byNode(b)}))},_setValutForAllAnySelect:function(a){this.allAnySelect.set("value",a)},_setFilterMsgUI:function(a){2>a?(this._setValutForAllAnySelect("AND"),e.setStyle(this.allAnySelect.domNode,"display","none"),e.setStyle(this.oneOrZeroMsg,"display","block")):(e.setStyle(this.oneOrZeroMsg,"display","none"),e.setStyle(this.allAnySelect.domNode,"display","inline-table"))},_checkFilterNumbers:function(){var a=
this._getAllSingleFiltersAndFilterSetsDoms();this._setFilterMsgUI(a.length);0<a.length?e.addClass(this.noFilterTipSection,"hidden"):e.removeClass(this.noFilterTipSection,"hidden");this.emit("filter-number-change")},_showErrorOptions:function(a){console.error(a);e.addClass(this.errorSection,"hidden");this.errorTip.innerHTML=a;this.loading.hide()},_onBtnApplyClicked:function(){this.emit("apply")},_onBtnAddSetClick:function(){this._layerDefinition&&this._validOptions&&(this._addFilterSet(),this.emit("change"))},
_onBtnAddExpClick:function(){this._layerDefinition&&this._validOptions&&(this._addSingleFilter(),this.emit("change"))}})});