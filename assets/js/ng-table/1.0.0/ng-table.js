/*! ngTable v1.0.0-beta.4 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/ng-table - New BSD License */

!function(a,b){"use strict";return"function"==typeof define&&define.amd?void define(["angular"],function(a){return b(a)}):b(a)}(window.angular||null,function(a){"use strict";return function(){a.module("ngTable",[])}(),function(){a.module("ngTable").value("ngTableDefaults",{params:{},settings:{}})}(),function(){function b(b){function c(b,c){var f=b.charAt(0).toUpperCase()+b.substring(1),g={};return g["on"+f]=d(b),g["publish"+f]=e(b),a.extend(c,g)}function d(c){return function(d){var e=a.identity,g=b;if(2===arguments.length?a.isFunction(arguments[1].$new)?g=arguments[1]:e=arguments[1]:arguments.length>2&&(g=arguments[1],e=arguments[2]),a.isObject(e)){var h=e;e=function(a){return a===h}}return g.$on("ngTable:"+c,function(a,b){if(!b.isNullInstance){var c=f(arguments,2),g=[b].concat(c);e.apply(this,g)&&d.apply(this,g)}})}}function e(a){return function(){var c=["ngTable:"+a].concat(Array.prototype.slice.call(arguments));b.$broadcast.apply(b,c)}}function f(a,b){return Array.prototype.slice.call(a,null==b?1:b)}var g={};return g=c("afterCreated",g),g=c("afterReloadData",g),g=c("datasetChanged",g),g=c("pagesChanged",g)}a.module("ngTable").factory("ngTableEventsChannel",b),b.$inject=["$rootScope"]}(),function(){function b(){function b(){c()}function c(){f=g}function d(b){var c=a.extend({},f,b);c.aliasUrls=a.extend({},f.aliasUrls,b.aliasUrls),f=c}function e(){function b(b,c){return a.isObject(b)&&(b=b.id),-1!==b.indexOf("/")?b:e.getUrlForAlias(b,c)}function c(a){return f.aliasUrls[a]||f.defaultBaseUrl+a+f.defaultExt}var d,e={config:d,getTemplateUrl:b,getUrlForAlias:c};return Object.defineProperty(e,"config",{get:function(){return d=d||a.copy(f)},enumerable:!0}),e}var f,g={defaultBaseUrl:"ng-table/filters/",defaultExt:".html",aliasUrls:{}};this.$get=e,this.resetConfigs=c,this.setConfig=d,b(),e.$inject=[]}a.module("ngTable").provider("ngTableFilterConfig",b),b.$inject=[]}(),function(){function b(){function b(b){function d(d){var e=d.settings().filterOptions;return a.isFunction(e.filterFn)?e.filterFn:b(e.filterFilterName||c.filterFilterName)}function e(){return b(c.sortingFilterName)}function f(a,b){if(!b.hasFilter())return a;var c=b.filter(!0),e=Object.keys(c),f=e.reduce(function(a,b){return a=j(a,c[b],b)},{}),g=d(b);return g.call(b,a,f,b.settings().filterOptions.filterComparator)}function g(a,b){var c=a.slice((b.page()-1)*b.count(),b.page()*b.count());return b.total(a.length),c}function h(a,b){var c=b.orderBy(),d=e(b);return c.length?d(a,c):a}function i(b,c){if(null==b)return[];var d=a.extend({},k,c.settings().dataOptions),e=d.applyFilter?f(b,c):b,i=d.applySort?h(e,c):e;return d.applyPaging?g(i,c):i}function j(a,b,c){var d=c.split("."),e=a,f=d[d.length-1],g=e,h=d.slice(0,d.length-1);return h.forEach(function(a){g.hasOwnProperty(a)||(g[a]={}),g=g[a]}),g[f]=b,e}var k={applyFilter:!0,applySort:!0,applyPaging:!0};return i.applyPaging=g,i.getFilterFn=d,i.getOrderByFn=e,i}var c=this;c.$get=b,c.filterFilterName="filter",c.sortingFilterName="orderBy",b.$inject=["$filter"]}a.module("ngTable").provider("ngTableDefaultGetData",b),b.$inject=[]}(),function(){function b(a){function b(b){return function(){var c=a.defer(),d=b.apply(this,[c].concat(Array.prototype.slice.call(arguments)));return d||(d=c.promise),d}}return b}a.module("ngTable").factory("ngTableGetDataBcShim",b),b.$inject=["$q"]}(),function(){a.module("ngTable").factory("ngTableColumn",[function(){function b(){return{"class":c(""),filter:c(!1),groupable:c(!1),filterData:a.noop,headerTemplateURL:c(!1),headerTitle:c(""),sortable:c(!1),show:c(!0),title:c(""),titleAlt:c("")}}function c(a){var b=a,c=function(){return b};return c.assign=function(a,c){b=c},c}function d(c,d){var e=Object.create(c),f=b();for(var g in f)void 0===e[g]&&(e[g]=f[g]),a.isFunction(e[g])||!function(a){var b=function(){return c[a]};b.assign=function(b,d){c[a]=d},e[a]=b}(g),function(a){var b=e[a];e[a]=function(){return 0===arguments.length?b.call(c,d):b.apply(c,arguments)},b.assign&&(e[a].assign=b.assign)}(g);return e}return{buildColumn:d}}])}(),function(){a.module("ngTable").factory("NgTableParams",["$q","$log","$filter","ngTableDefaults","ngTableGetDataBcShim","ngTableDefaultGetData","ngTableEventsChannel",function(b,c,d,e,f,g,h){var i=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},j=function(d,j){function k(b){var c=C.groupOptions&&C.groupOptions.defaultSort;if(a.isFunction(b))return null==b.sortDirection&&(b.sortDirection=c),b;if(a.isString(b)){var d={};return d[b]=c,d}if(a.isObject(b)){for(var e in b)null==b[e]&&(b[e]=c);return b}return b}function l(a){var b=[];for(var c in a)b.push(("asc"===a[c]?"+":"-")+c);return b}function m(){var b={params:B};return a.isFunction(B.group)&&(b.groupSortDirection=B.group.sortDirection),b}function n(){var b=B.filter&&B.filter.$,c=t&&t.params.filter&&t.params.filter.$;return!a.equals(b,c)}function o(){C.filterOptions.filterDelay===y.filterDelay&&C.total<=C.filterOptions.filterDelayThreshold&&C.getData===A.getData&&(C.filterOptions.filterDelay=0)}function p(){var a=C.getDataFnAdaptor(C.getData);return b.when(a.call(C,v))}function q(){var a=C.getGroupsFnAdaptor(C.getGroups);return b.when(a.call(C,v))}function r(a){var c=C.interceptors||[];return c.reduce(function(a,c){var d=c.response&&c.response.bind(c)||b.when,e=c.responseError&&c.responseError.bind(c)||b.reject;return a.then(function(a){return d(a,v)},function(a){return e(a,v)})},a())}function s(){function c(a){return g(a.settings().dataset,a)}function d(c){var d,e=c.group(),f=void 0;if(a.isFunction(e))d=e,f=e.sortDirection;else{var h=Object.keys(e)[0];f=e[h],d=function(a){return a[h]}}var i=c.settings(),j=i.dataOptions;i.dataOptions={applyPaging:!1};var k=i.getDataFnAdaptor(i.getData),m=b.when(k.call(i,c));return m.then(function(b){var e={};a.forEach(b,function(a){var b=d(a);e[b]=e[b]||{data:[],$hideRows:!i.groupOptions.isExpanded,value:b},e[b].data.push(a)});var h=[];for(var j in e)h.push(e[j]);if(f){var k=g.getOrderByFn(),m=l({value:f});h=k(h,m)}return g.applyPaging(h,c)})["finally"](function(){i.dataOptions=j})}return{getDataFnAdaptor:a.identity,getGroupsFnAdaptor:a.identity,getData:c,getGroups:d}}"boolean"==typeof d&&(this.isNullInstance=!0);var t,u,v=this,w=!1,x=function(){C.debugMode&&c.debug&&c.debug.apply(c,arguments)},y={filterComparator:void 0,filterDelay:500,filterDelayThreshold:1e4,filterFilterName:void 0,filterFn:void 0,filterLayout:"stack"},z={defaultSort:"asc",isExpanded:!0},A=s();this.data=[],this.parameters=function(b,c){if(c=c||!1,a.isDefined(b)){for(var d in b){var e=b[d];if(c&&d.indexOf("[")>=0){for(var f=d.split(/\[(.*)\]/).reverse(),g="",h=0,j=f.length;j>h;h++){var l=f[h];if(""!==l){var m=e;e={},e[g=l]=i(m)?parseFloat(m):m}}"sorting"===g&&(B[g]={}),B[g]=a.extend(B[g]||{},e[g])}else B[d]="group"===d?k(b[d]):i(b[d])?parseFloat(b[d]):b[d]}return x("ngTable: set parameters",B),this}return B},this.settings=function(b){if(a.isDefined(b)){b.filterOptions&&(b.filterOptions=a.extend({},C.filterOptions,b.filterOptions)),b.groupOptions&&(b.groupOptions=a.extend({},C.groupOptions,b.groupOptions)),a.isArray(b.dataset)&&(b.total=b.dataset.length),b.getData&&b.getData.length>1&&(b.getDataFnAdaptor=f),b.getGroups&&b.getGroups.length>2&&(b.getGroupsFnAdaptor=f);var c=C.dataset;C=a.extend(C,b),a.isArray(b.dataset)&&o();var d=b.hasOwnProperty("dataset")&&b.dataset!=c;return d&&(w&&this.page(1),w=!1,h.publishDatasetChanged(this,b.dataset,c)),x("ngTable: set settings",C),this}return C},this.page=function(b){return a.isDefined(b)?this.parameters({page:b}):B.page},this.total=function(b){return a.isDefined(b)?this.settings({total:b}):C.total},this.count=function(b){return a.isDefined(b)?this.parameters({count:b,page:1}):B.count},this.filter=function(b){if(a.isDefined(b)&&a.isObject(b))return this.parameters({filter:b,page:1});if(b===!0){for(var c=Object.keys(B.filter),d={},e=0;e<c.length;e++){var f=B.filter[c[e]];null!=f&&""!==f&&(d[c[e]]=f)}return d}return B.filter},this.group=function(b,c){if(!a.isDefined(b))return B.group;var d={page:1};if(a.isFunction(b)&&a.isDefined(c))b.sortDirection=c,d.group=b;else if(a.isDefined(b)&&a.isDefined(c)){var e={};e[b]=c,d.group=e}else d.group=b;return this.parameters(d),this},this.sorting=function(b){if(2==arguments.length){var c={};return c[b]=arguments[1],this.parameters({sorting:c}),this}return a.isDefined(b)?this.parameters({sorting:b}):B.sorting},this.isSortBy=function(b,c){return void 0!==c?a.isDefined(B.sorting[b])&&B.sorting[b]==c:a.isDefined(B.sorting[b])},this.orderBy=function(){return l(B.sorting)},this.generatePagesArray=function(a,b,c,d){arguments.length||(a=this.page(),b=this.total(),c=this.count());var e,f,g,h,i;if(d=d&&6>d?6:d,i=[],h=Math.ceil(b/c),h>1){i.push({type:"prev",number:Math.max(1,a-1),active:a>1}),i.push({type:"first",number:1,active:a>1,current:1===a}),f=Math.round((C.paginationMaxBlocks-C.paginationMinBlocks)/2),g=Math.max(2,a-f),e=Math.min(h-1,a+2*f-(a-g)),g=Math.max(2,g-(2*f-(e-g)));for(var j=g;e>=j;)i.push(j===g&&2!==j||j===e&&j!==h-1?{type:"more",active:!1}:{type:"page",number:j,active:a!==j,current:a===j}),j++;i.push({type:"last",number:h,active:a!==h,current:a===h}),i.push({type:"next",number:Math.min(h,a+1),active:h>a})}return i},this.isDataReloadRequired=function(){return!w||!a.equals(m(),t)||n()},this.hasFilter=function(){return Object.keys(this.filter(!0)).length>0},this.hasGroup=function(b,c){return null==b?a.isFunction(B.group)||Object.keys(B.group).length>0:a.isFunction(b)?null==c?B.group===b:B.group===b&&b.sortDirection===c:null==c?-1!==Object.keys(B.group).indexOf(b):B.group[b]===c},this.hasFilterChanges=function(){var b=t&&t.params.filter;return!a.equals(B.filter,b)||n()},this.url=function(b){function c(a,c){b?e.push(c+"="+encodeURIComponent(a)):e[c]=encodeURIComponent(a)}function d(b,c){return"group"===c?!0:a.isDefined(b)&&""!==b}b=b||!1;var e=b?[]:{};for(var f in B)if(B.hasOwnProperty(f)){var g=B[f],h=encodeURIComponent(f);if("object"==typeof g){for(var i in g)if(d(g[i],f)){var j=h+"["+encodeURIComponent(i)+"]";c(g[i],j)}}else!a.isFunction(g)&&d(g,f)&&c(g,h)}return e},this.reload=function(){var c=this,d=null;C.$loading=!0,t=a.copy(m()),w=!0,d=r(c.hasGroup()?q:p),x("ngTable: reload data");var e=c.data;return d.then(function(a){return C.$loading=!1,u=null,c.data=a,h.publishAfterReloadData(c,a,e),c.reloadPages(),C.$scope&&C.$scope.$emit("ngTableAfterReloadData"),a})["catch"](function(a){return u=t,t=null,w=!1,b.reject(a)})},this.hasErrorState=function(){return!(!u||!a.equals(u,m()))},this.reloadPages=function(){var b;return function(){var c=b,d=v.generatePagesArray(v.page(),v.total(),v.count());a.equals(c,d)||(b=d,h.publishPagesChanged(this,d,c))}}();var B={page:1,count:10,filter:{},sorting:{},group:{}};a.extend(B,e.params);var C={$scope:null,$loading:!1,dataset:null,total:0,defaultSort:"desc",filterOptions:a.copy(y),groupOptions:a.copy(z),counts:[10,25,50,100],interceptors:[],paginationMaxBlocks:11,paginationMinBlocks:5,sortingIndicator:"span"};return this.settings(A),this.settings(e.settings),this.settings(j),this.parameters(d,!0),h.publishAfterCreated(this),this};return j}]),a.module("ngTable").factory("ngTableParams",["NgTableParams",function(a){return a}])}(),function(){a.module("ngTable").controller("ngTableController",["$scope","NgTableParams","$timeout","$parse","$compile","$attrs","$element","ngTableColumn","ngTableEventsChannel",function(b,c,d,e,f,g,h,i,j){function k(a){if(a&&!b.params.hasErrorState()){b.params.settings().$scope=b;var c=b.params,d=c.settings().filterOptions;if(c.hasFilterChanges()){var e=function(){c.page(1),c.reload()};d.filterDelay?n(e,d.filterDelay):e()}else c.reload()}}function l(){return(b.$columns||[]).filter(function(a){return a.show(b)})}function m(){function a(a,c){a.hasGroup()?(b.$groups=c||[],b.$groups.visibleColumnCount=l().length):b.$data=c}function c(a,c){b.pages=c}function d(a){return b.params===a}j.onAfterReloadData(a,b,d),j.onPagesChanged(c,b,d)}b.$filterRow={},b.$loading=!1,b.hasOwnProperty("params")||(b.params=new c(!0)),b.params.settings().$scope=b;var n=function(){var a=0;return function(b,c){d.cancel(a),a=d(b,c)}}();b.$watch("params",function(a,b){a!==b&&a&&a.reload()},!1),b.$watch("params.isDataReloadRequired()",k),this.compileDirectiveTemplates=function(){if(!h.hasClass("ng-table")){b.templates={header:g.templateHeader?g.templateHeader:"ng-table/header.html",pagination:g.templatePagination?g.templatePagination:"ng-table/pager.html"},h.addClass("ng-table");var c=null,d=!1;a.forEach(h.children(),function(a){"THEAD"===a.tagName&&(d=!0)}),d||(c=a.element(document.createElement("thead")).attr("ng-include","templates.header"),h.prepend(c));var e=a.element(document.createElement("div")).attr({"ng-table-pagination":"params","template-url":"templates.pagination"});h.after(e),c&&f(c)(b),f(e)(b)}},this.loadFilterData=function(c){a.forEach(c,function(c){var d;if(d=c.filterData(b,{$column:c}),!d)return void delete c.filterData;if(a.isObject(d)&&(a.isObject(d.promise)||a.isFunction(d.then))){var e=a.isFunction(d.then)?d:d.promise;return delete c.filterData,e.then(function(b){a.isArray(b)||a.isFunction(b)||a.isObject(b)||(b=[]),c.data=b})}return c.data=d})},this.buildColumns=function(a){return a.map(function(a){return i.buildColumn(a,b)})},this.parseNgTableDynamicExpr=function(a){if(!a||a.indexOf(" with ")>-1){var b=a.split(/\s+with\s+/);return{tableParams:b[0],columns:b[1]}}throw new Error("Parse error (expected example: ng-table-dynamic='tableParams with cols')")},this.setupBindingsToInternalScope=function(c){var d=e(c);if(b.$watch(d,function(c){a.isUndefined(c)||(b.paramsModel=d,b.params=c)},!1),g.showFilter&&b.$parent.$watch(g.showFilter,function(a){b.show_filter=a}),b.$groupRow={},g.showGroup){var f=e(g.showGroup);b.$parent.$watch(f,function(a){b.$groupRow.show=a}),f.assign&&b.$watch("$groupRow.show",function(a){f.assign(b.$parent,a)})}else b.$watch("params.hasGroup()",function(a){b.$groupRow.show=a});g.disableFilter&&b.$parent.$watch(g.disableFilter,function(a){b.$filterRow.disabled=a})},m()}])}(),function(){a.module("ngTable").directive("ngTable",["$q","$parse",function(b,c){return{restrict:"A",priority:1001,scope:!0,controller:"ngTableController",compile:function(b){var d,e,f=[],g=0,h=[];return a.forEach(b.find("tr"),function(b){h.push(a.element(b))}),d=h.filter(function(a){return!a.hasClass("ng-table-group")})[0],e=h.filter(function(a){return a.hasClass("ng-table-group")})[0],d?(a.forEach(d.find("td"),function(b){var d=a.element(b);if(!d.attr("ignore-cell")||"true"!==d.attr("ignore-cell")){var h=function(a){return d.attr("x-data-"+a)||d.attr("data-"+a)||d.attr(a)},i=function(a,b){d.attr("x-data-"+a)?d.attr("x-data-"+a,b):d.attr("data"+a)?d.attr("data"+a,b):d.attr(a,b)},j=function(b){var d=h(b);if(!d)return void 0;var e,g=function(b,g){return void 0!==e?e:c(d)(b,a.extend(g||{},{$columns:f}))};return g.assign=function(a,b){var f=c(d);f.assign?f.assign(a.$parent,b):e=b},g},k=h("title-alt")||h("title");k&&d.attr("data-title-text","{{"+k+"}}"),f.push({id:g++,title:j("title"),titleAlt:j("title-alt"),headerTitle:j("header-title"),sortable:j("sortable"),"class":j("header-class"),filter:j("filter"),groupable:j("groupable"),headerTemplateURL:j("header"),filterData:j("filter-data"),show:d.attr("ng-if")?j("ng-if"):void 0}),e&&i("ng-if","$columns["+(f.length-1)+"].show(this)")}}),function(a,b,c,d){a.$columns=f=d.buildColumns(f),d.setupBindingsToInternalScope(c.ngTable),d.loadFilterData(f),d.compileDirectiveTemplates()}):void 0}}}])}(),function(){a.module("ngTable").directive("ngTableDynamic",[function(){return{restrict:"A",priority:1001,scope:!0,controller:"ngTableController",compile:function(b){var c;return a.forEach(b.find("tr"),function(b){b=a.element(b),b.hasClass("ng-table-group")||c||(c=b)}),c?(a.forEach(c.find("td"),function(b){var c=a.element(b),d=function(a){return c.attr("x-data-"+a)||c.attr("data-"+a)||c.attr(a)},e=d("title");e||c.attr("data-title-text","{{$columns[$index].titleAlt(this) || $columns[$index].title(this)}}");var f=c.attr("ng-if");f||c.attr("ng-if","$columns[$index].show(this)")}),function(a,b,c,d){var e=d.parseNgTableDynamicExpr(c.ngTableDynamic);d.setupBindingsToInternalScope(e.tableParams),d.compileDirectiveTemplates(),a.$watchCollection(e.columns,function(b){a.$columns=d.buildColumns(b),d.loadFilterData(a.$columns)})}):void 0}}}])}(),function(){function b(a){function b(b,c,d){var e=a(d.ngTableColumnsBinding).assign;e&&b.$watch("$columns",function(a){var c=(a||[]).slice(0);e(b,c)})}var c={restrict:"A",require:"ngTable",link:b};return c}a.module("ngTable").directive("ngTableColumnsBinding",b),b.$inject=["$parse"]}(),function(){a.module("ngTable").directive("ngTablePagination",["$compile","ngTableEventsChannel",function(b,c){return{restrict:"A",scope:{params:"=ngTablePagination",templateUrl:"="},replace:!1,link:function(d,e){c.onAfterReloadData(function(a){d.pages=a.generatePagesArray()},d,function(a){return a===d.params}),d.$watch("templateUrl",function(c){if(!a.isUndefined(c)){var f=a.element(document.createElement("div"));f.attr({"ng-include":"templateUrl"}),e.append(f),b(f)(d)}})}}}])}(),function(){function b(b,c){b.config=c,b.getFilterCellCss=function(a,b){if("horizontal"!==b)return"s12";var c=Object.keys(a).length,d=parseInt(12/c,10);return"s"+d},b.getFilterPlaceholderValue=function(b){return a.isObject(b)?b.placeholder:""}}a.module("ngTable").controller("ngTableFilterRowController",b),b.$inject=["$scope","ngTableFilterConfig"]}(),function(){function b(){var a={restrict:"E",replace:!0,templateUrl:"ng-table/filterRow.html",scope:!0,controller:"ngTableFilterRowController"};return a}a.module("ngTable").directive("ngTableFilterRow",b),b.$inject=[]}(),function(){function b(b){function c(){b.getGroupables=g,b.getGroupTitle=f,b.getVisibleColumns=h,b.groupBy=i,b.isSelectedGroup=j,b.toggleDetail=l,b.$watch("params.group()",k,!0)}function d(){var a;a=b.params.hasGroup(b.$selGroup,"asc")?"desc":b.params.hasGroup(b.$selGroup,"desc")?"":"asc",b.params.group(b.$selGroup,a)}function e(a){return b.$columns.filter(function(c){return c.groupable(b)===a})[0]}function f(c){return a.isFunction(c)?c.title:c.title(b)}function g(){var a=b.$columns.filter(function(a){return a.groupable(b)});return m.concat(a)}function h(){return b.$columns.filter(function(a){return a.show(b)})}function i(a){j(a)?d():b.params.group(a.groupable?a.groupable(b):a)}function j(a){return a.groupable?a.groupable(b)===b.$selGroup:a===b.$selGroup}function k(c){var d=e(b.$selGroup);if(d&&d.show.assign&&d.show.assign(b,!0),a.isFunction(c))m=[c],b.$selGroup=c,b.$selGroupTitle=c.title;else{var f=Object.keys(c||{})[0],g=e(f);g&&(b.$selGroupTitle=g.title(b),b.$selGroup=f,g.show.assign&&g.show.assign(b,!1))}}function l(){return b.params.settings().groupOptions.isExpanded=!b.params.settings().groupOptions.isExpanded,b.params.reload()}var m=[];c()}a.module("ngTable").controller("ngTableGroupRowController",b),b.$inject=["$scope"]}(),function(){function b(){var a={restrict:"E",replace:!0,templateUrl:"ng-table/groupRow.html",scope:!0,controller:"ngTableGroupRowController",controllerAs:"dctrl"};return a}a.module("ngTable").directive("ngTableGroupRow",b),b.$inject=[]}(),function(){function b(a){function b(b,c){var d=b.sortable&&b.sortable();if(d){var e=a.params.settings().defaultSort,f="asc"===e?"desc":"asc",g=a.params.sorting()&&a.params.sorting()[d]&&a.params.sorting()[d]===e,h=c.ctrlKey||c.metaKey?a.params.sorting():{};h[d]=g?f:e,a.params.parameters({sorting:h})}}a.sortBy=b}a.module("ngTable").controller("ngTableSorterRowController",b),b.$inject=["$scope"]}(),function(){function b(){var a={restrict:"E",replace:!0,templateUrl:"ng-table/sorterRow.html",scope:!0,controller:"ngTableSorterRowController"};return a}a.module("ngTable").directive("ngTableSorterRow",b),b.$inject=[]}(),function(){function b(){var a={restrict:"A",controller:c};return a}function c(b,c,d,e){function f(){j=c(d.ngTableSelectFilterDs)(b),b.$watch(function(){return j.data},g)}function g(){i(j).then(function(a){a&&!h(a)&&a.unshift({id:"",title:""}),a=a||[],b.$selectData=a})}function h(a){for(var b,c=0;c<a.length;c++){var d=a[c];if(d&&""===d.id){b=!0;break}}return b}function i(b){var c=a.isFunction(b.data)?b.data():b.data;return e.when(c)}var j={};f()}a.module("ngTable").directive("ngTableSelectFilterDs",b),b.$inject=[],c.$inject=["$scope","$parse","$attrs","$q"]}(),a.module("ngTable").run(["$templateCache",function(a){a.put("ng-table/filterRow.html",'<tr ng-show="show_filter" class="ng-table-filters"> <th data-title-text="{{$column.titleAlt(this) || $column.title(this)}}" ng-repeat="$column in $columns" ng-if="$column.show(this)" class="filter" ng-class="params.settings().filterOptions.filterLayout===\'horizontal\' ? \'filter-horizontal\' : \'\'"> <div ng-repeat="(name, filter) in $column.filter(this)" ng-include="config.getTemplateUrl(filter)" class="filter-cell" ng-class="[getFilterCellCss($column.filter(this), params.settings().filterOptions.filterLayout), $last ? \'last\' : \'\']"> </div> </th> </tr> '),a.put("ng-table/filters/number.html",'<input type="number" name="{{name}}" ng-disabled="$filterRow.disabled" ng-model="params.filter()[name]" class="input-filter form-control" placeholder="{{getFilterPlaceholderValue(filter, name)}}"/> '),a.put("ng-table/filters/select-multiple.html",'<select ng-options="data.id as data.title for data in $column.data" ng-disabled="$filterRow.disabled" multiple ng-multiple="true" ng-model="params.filter()[name]" class="filter filter-select-multiple form-control" name="{{name}}"> </select> '),a.put("ng-table/filters/select.html",'<select ng-options="data.id as data.title for data in $selectData" ng-table-select-filter-ds="$column" ng-disabled="$filterRow.disabled" ng-model="params.filter()[name]" class="filter filter-select form-control" name="{{name}}"> <option style="display:none" value=""></option> </select> '),a.put("ng-table/filters/text.html",'<input type="text" name="{{name}}" ng-disabled="$filterRow.disabled" ng-model="params.filter()[name]" class="input-filter form-control" placeholder="{{getFilterPlaceholderValue(filter, name)}}"/> '),a.put("ng-table/groupRow.html",'<tr ng-if="params.hasGroup()" ng-show="$groupRow.show" class="ng-table-group-header"> <th colspan="{{getVisibleColumns().length}}" class="sortable" ng-class="{ \'sort-asc\': params.hasGroup($selGroup, \'asc\'), \'sort-desc\':params.hasGroup($selGroup, \'desc\') }"> <a href="" ng-click="isSelectorOpen=!isSelectorOpen" class="ng-table-group-selector"> <strong class="sort-indicator">{{$selGroupTitle}}</strong> <button class="btn btn-default btn-xs ng-table-group-close" ng-click="$groupRow.show=false; $event.preventDefault(); $event.stopPropagation();"> <span class="glyphicon glyphicon-remove"></span> </button> <button class="btn btn-default btn-xs ng-table-group-toggle" ng-click="toggleDetail(); $event.preventDefault(); $event.stopPropagation();"> <span class="glyphicon" ng-class="{ \'glyphicon-resize-small\': params.settings().groupOptions.isExpanded, \'glyphicon-resize-full\': !params.settings().groupOptions.isExpanded }"></span> </button> </a> <div class="list-group" ng-if="isSelectorOpen"> <a href="" class="list-group-item" ng-repeat="group in getGroupables()" ng-click="groupBy(group)"> <strong>{{ getGroupTitle(group)}}</strong> <strong ng-class="isSelectedGroup(group) && \'sort-indicator\'"></strong> </a> </div> </th> </tr> '),a.put("ng-table/header.html","<ng-table-group-row></ng-table-group-row> <ng-table-sorter-row></ng-table-sorter-row> <ng-table-filter-row></ng-table-filter-row> "),a.put("ng-table/pager.html",'<div class="ng-cloak ng-table-pager" ng-if="params.data.length"> <div ng-if="params.settings().counts.length" class="ng-table-counts btn-group pull-right"> <button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default"> <span ng-bind="count"></span> </button> </div> <ul ng-if="pages.length" class="pagination ng-table-pagination"> <li ng-class="{\'disabled\': !page.active && !page.current, \'active\': page.current}" ng-repeat="page in pages" ng-switch="page.type"> <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a> <a ng-switch-when="first" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="page" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a> <a ng-switch-when="last" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a> </li> </ul> </div> '),a.put("ng-table/sorterRow.html",'<tr class="ng-table-sort-header"> <th title="{{$column.headerTitle(this)}}" ng-repeat="$column in $columns" ng-class="{ \'sortable\': $column.sortable(this), \'sort-asc\': params.sorting()[$column.sortable(this)]==\'asc\', \'sort-desc\': params.sorting()[$column.sortable(this)]==\'desc\' }" ng-click="sortBy($column, $event)" ng-if="$column.show(this)" ng-init="template=$column.headerTemplateURL(this)" class="header {{$column.class(this)}}"> <div ng-if="!template" class="ng-table-header" ng-class="{\'sort-indicator\': params.settings().sortingIndicator==\'div\'}"> <span ng-bind="$column.title(this)" ng-class="{\'sort-indicator\': params.settings().sortingIndicator==\'span\'}"></span> </div> <div ng-if="template" ng-include="template"></div> </th> </tr> ')}]),a.module("ngTable")});
//# sourceMappingURL=ng-table.min.js.map