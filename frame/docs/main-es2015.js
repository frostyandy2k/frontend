(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../feature/fc/fc.module": [
		"./src/feature/fc/fc.module.ts",
		"default~fcdemo-fcdemo-module~fcsystem-fcsystem-module~fctemplate-fctemplate-module~feature-fc-fc-mod~3aa4e3c1",
		"common",
		"feature-fc-fc-module"
	],
	"./fcdemo/fcdemo.module": [
		"./src/feature/fc/fcdemo/fcdemo.module.ts",
		"default~fcdemo-fcdemo-module~fcsystem-fcsystem-module~fctemplate-fctemplate-module~feature-fc-fc-mod~3aa4e3c1",
		"fcdemo-fcdemo-module"
	],
	"./fcsystem/fcsystem.module": [
		"./src/feature/fc/fcsystem/fcsystem.module.ts",
		"default~fcdemo-fcdemo-module~fcsystem-fcsystem-module~fctemplate-fctemplate-module~feature-fc-fc-mod~3aa4e3c1",
		"common",
		"fcsystem-fcsystem-module"
	],
	"./fctemplate/fctemplate.module": [
		"./src/feature/fc/fcdemo/fctemplate/fctemplate.module.ts",
		"default~fcdemo-fcdemo-module~fcsystem-fcsystem-module~fctemplate-fctemplate-module~feature-fc-fc-mod~3aa4e3c1",
		"fctemplate-fctemplate-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./_mock/_menus.ts":
/*!*************************!*\
  !*** ./_mock/_menus.ts ***!
  \*************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
/*menuname
 */
const menus = {
    P_MENUS: [
        {
            ID: '3ae5c74930da4b1e877efabee3af0005',
            PID: 'FC',
            MENUID: 'FC',
            MENUNAME: '快速开发平台',
            ENABLE: 'Y',
            WXMENU: 'N',
            MENUTYPE: 'MENU',
            HASCHILD: 'Y',
            MENUICON: 'icon iconfont icon-ppbs',
            SORT: 1000,
            ROUTER: '/fc',
            P_CHILDMENUS: [
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'FCIFRAME',
                    MENUNAME: '首页',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-iframe',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/fciframe'
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCCHART',
                    MENUNAME: '分析',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-tubiao',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fcchart',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCG1',
                            MENUNAME: '工厂1',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'FCG1',
                            HASCHILD: 'N',
                            PARENT: 'FC',
                            MENUICON: '',
                            SORT: 1152,
                            ROUTER: '/fcg2',
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCG2',
                            MENUNAME: '工厂2',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'FCG2',
                            HASCHILD: 'N',
                            PARENT: 'FC',
                            MENUICON: '',
                            SORT: 1152,
                            ROUTER: '/fcg2',
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCG3',
                            MENUNAME: '工厂3',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'FCG3',
                            HASCHILD: 'N',
                            PARENT: 'FC',
                            MENUICON: '',
                            SORT: 1152,
                            ROUTER: '/fcg2',
                        },
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'SYSTEM',
                    MENUNAME: '传感器管理',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-peizhi',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fctemplate',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '传感器列表',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/fctemplatelist',
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'SYSTEM',
                    MENUNAME: '系统管理',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-peizhi',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/system',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '基础设置',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'Y',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/sysbasic',
                            P_CHILDMENUS: [
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSROLE',
                                    MENUNAME: '权限管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSROLE',
                                    MENUICON: 'fc-icon-peizhi',
                                    HASCHILD: 'N',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/sysroleList'
                                },
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSMENU',
                                    MENUNAME: '用户管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSMENU',
                                    HASCHILD: 'N',
                                    MENUICON: 'fc-icon-peizhi',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/sysuserList'
                                },
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSMENU',
                                    MENUNAME: '菜单管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSMENU',
                                    HASCHILD: 'N',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/sysmenuList'
                                },
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSLOG',
                                    MENUNAME: '日志管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSMENU',
                                    HASCHILD: 'N',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/syslogList'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialog/syseditpassword.dialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialog/syseditpassword.dialog.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edituser-dialog\">\n  <form nz-form [formGroup]=\"validateForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"oldPassword\">旧密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"旧密码不能为空!\">\n        <input nz-input type=\"password\" formControlName=\"oldPassword\" id=\"oldPassword\" />\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"newPassword\" nzRequired>新密码</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"新密码不能为空!\">\n        <input nz-input type=\"password\" id=\"newPassword\" formControlName=\"newPassword\" />\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <div class=\"edituser-dialog-footer\">\n    <button nz-button nzSize=\"large\" style=\"margin-right: 10px;\" [nzType]=\"'default'\"\n      (click)=\"handleCancel()\">取消</button>\n    <button nz-button nzSize=\"large\" [nzType]=\"'primary'\" (click)=\"handleOk()\">确认修改</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "error页面,，这是一个错误\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot/forgot.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot/forgot.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "忘记密码\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <!-- 顶部工具栏 -->\n  <nz-header>\n    <div class=\"logo fc-header-left\">\n      <img src=\"assets/image/logo.png\" [ngStyle]=\"{'display': menuWidth===64 ?'none':'inline'}\" alt=\"logo\">\n      <img src=\"assets/image/small-logo.png\" [ngStyle]=\"{'display': menuWidth===64 ?'inline':'none'}\" alt=\"logo\">\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-toggle\"\n          [ngClass]=\"{'fc-icon-menufold-left':menuWidth===64,'fc-icon-menufold-right':menuWidth!==64}\"\n          (click)=\"toggleLayout()\"></i>\n      </div>\n<!--      <div class=\"fc-header-icon-wrap\">\n        <a href=\"https://github.com/FE-free/fc-angular\" target=\"_blank\"\n          title=\"icon iconfont fc-icon-github fc-header-github\"><i\n            class=\"icon iconfont fc-icon-github fc-header-github\"></i></a>\n      </div>-->\n    </div>\n    <div class=\"fc-header-right\">\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-icon fc-icon-information\" (click)=\"toggleSidebar()\" title=\"消息\"></i>\n      </div>\n      <div class=\"fc-header-icon-wrap fc-header-dropdown\">\n        <a nz-dropdown [nzDropdownMenu]=\"headerMenu\" [nzPlacement]=\"'bottomRight'\" [nzOverlayStyle]=\"{top:'18px' }\">\n          <nz-avatar class=\"avatar\" [nzSize]=\"32\" nzIcon=\"user\" [nzSrc]=\"avatar\"></nz-avatar>\n          <a class=\"text\">{{companyName}}</a>\n        </a>\n        <nz-dropdown-menu #headerMenu=\"nzDropdownMenu\">\n          <ul nz-menu>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-peizhi\"></i> 设置\n            </li>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-personnel\"></i> 个人中心\n            </li>\n            <li nz-menu-item (click)=\"editPassWord()\"> <i class=\"icon iconfont fc-header-icon fc-icon-password\"></i>\n              修改密码\n            </li>\n            <li nz-menu-item (click)=\"clearCache()\"> <i class=\"icon iconfont fc-header-icon fc-icon-password\"></i>\n              清除缓存\n            </li>\n            <li nz-menu-item (click)=\"siginout()\"> <i class=\" icon iconfont fc-header-icon fc-icon-tuichu\"></i> 退出\n            </li>\n          </ul>\n        </nz-dropdown-menu>\n      </div>\n    </div>\n  </nz-header>\n  <nz-layout style=\"width: 100%;\">\n    <!-- 菜单导航 -->\n    <nz-sider [(nzWidth)]=\"menuWidth\" Ø class=\"fc-sidebar-menu\">\n      <ul nz-menu [nzMode]=\"'inline'\" style=\"height: calc(100% - 40px);overflow: auto;\"\n        [nzInlineCollapsed]=\"menuIsCollapsed\">\n        <ng-container *ngFor=\"let menu of _menus\">\n          <!-- 一级菜单，没有下级 -->\n          <li nz-menu-item *ngIf=\"menu.HASCHILD==='N'\" (click)=\"selectedMenu(menu)\">\n            <span title>\n              <i class=\"icon iconfont menu-icon\" [ngClass]=\"menu.MENUICON\"></i>\n              <span class=\"first-level-title\">{{menu.MENUNAME}}</span>\n            </span>\n          </li>\n          <!-- 一级菜单，有下级 -->\n          <li nz-submenu [nzOpen]=\"true\"\n            *ngIf=\"menu.HASCHILD==='Y' && menu.P_CHILDMENUS && menu.P_CHILDMENUS.length!==0\">\n            <span title>\n              <i class=\"icon iconfont menu-icon\" [ngClass]=\"menu.MENUICON\"></i>\n              <span class=\"first-level-title\">{{menu.MENUNAME}}</span></span>\n            <ul>\n              <ng-container *ngFor=\"let childMenu of menu.P_CHILDMENUS\">\n                <!-- 二级菜单，没有下级 -->\n                <li nz-menu-item *ngIf=\"childMenu.HASCHILD==='N'\" (click)=\"selectedMenu(childMenu);\">\n                  <span title>\n                    <span>{{childMenu.MENUNAME}}</span>\n                  </span>\n                </li>\n                <!-- 二级菜单，有下级 -->\n                <li nz-submenu\n                  *ngIf=\"childMenu.HASCHILD==='Y' && childMenu.P_CHILDMENUS && childMenu.P_CHILDMENUS.length!==0\">\n                  <span title>\n                    <i class=\"icon iconfont menu-icon\" [ngClass]=\"childMenu.MENUICON\"></i>\n                    <span>{{childMenu.MENUNAME}}</span>\n                  </span>\n                  <ul>\n                    <ng-container *ngFor=\"let grandSonMenu of childMenu.P_CHILDMENUS\">\n                      <!-- 三级级菜单，没有下级 -->\n                      <li nz-menu-item *ngIf=\"grandSonMenu.HASCHILD==='N'\" (click)=\"selectedMenu(grandSonMenu);\">\n                        <span title>\n                          {{grandSonMenu.MENUNAME}}</span>\n                      </li>\n                      <!-- 三级菜单，有下级 -->\n                      <li nz-submenu\n                        *ngIf=\"grandSonMenu.HASCHILD==='Y' && grandSonMenu.P_CHILDMENUS && grandSonMenu.P_CHILDMENUS.length!==0\">\n                        <span title>\n                          {{grandSonMenu.MENUNAME}}</span>\n                        <ul>\n                          <li nz-menu-item *ngFor=\"let lastChidMenu of grandSonMenu.P_CHILDMENUS\"\n                            (click)=\"selectedMenu(lastChidMenu)\">\n                            <span title>\n                              {{lastChidMenu.MENUNAME}}</span>\n                          </li>\n                        </ul>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </li>\n              </ng-container>\n            </ul>\n          </li>\n        </ng-container>\n      </ul>\n      <!-- 切换布局控制按钮 -->\n      <div class=\"layout-toggle\">\n        <i class=\"icon iconfont fc-icon-arrowleft\" [ngClass]=\"{'arrowright':menuWidth===64}\" (click)=\"toggleLayout()\">\n        </i>\n      </div>\n    </nz-sider>\n    <nz-layout>\n      <!-- 选项卡导航 -->\n      <nz-tabset class=\"fc-tabnav\" [nzType]=\"'line'\" [nzSize]=\"'small'\" [(nzSelectedIndex)]=\"fcSelectedIndex\">\n        <nz-tab *ngFor=\"let tab of fcTabs;index as i\" (nzClick)=\"selectedTabMenu(tab)\" [nzTitle]=\"titleTemplate\">\n          <ng-template #titleTemplate>\n            <div [ngClass]=\"{'tab-home':i===0}\">\n              <i *ngIf=\"tab.icon!==''\" class=\"icon iconfont\" [ngClass]=\"tab.icon\"></i>\n              {{ tab.name }}<i *ngIf=\"i>0\" nz-icon type=\"close\" class=\"ant-tabs-close-x\" (click)=\"closeTabNav(tab)\"></i>\n            </div>\n          </ng-template>\n        </nz-tab>\n      </nz-tabset>\n      <!-- 内容区 -->\n      <nz-content class=\"fc-main-wrap\">\n        <div class=\"fc-main\">\n          <router-outlet [ngStyle]=\"{'height':'100%'}\"></router-outlet>\n        </div>\n      </nz-content>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>\n<!-- 消息侧边栏 -->\n<div class=\"navside\">\n  <nz-drawer [nzWidth]=\"300\" [nzMaskStyle]=\"{'height':'auto'}\" nzWrapClassName=\"navside-drawer\" [nzClosable]=\"false\"\n    [nzVisible]=\"navsideVisible\" nzPlacement=\"right\" nzTitle=\"\" (nzOnClose)=\"closeNavSide()\" #navside>\n    <nz-tabset>\n      <nz-tab [nzTitle]=\"titleTemplate\">\n        <ng-template #titleTemplate>未读消息</ng-template>\n        <div>\n          content1\n        </div>\n      </nz-tab>\n      <nz-tab [nzTitle]=\"titleTemplate\">\n        <ng-template #titleTemplate>已读消息</ng-template>\n        content2\n      </nz-tab>\n    </nz-tabset>\n  </nz-drawer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/lockscreen/lockscreen.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/lockscreen/lockscreen.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "锁屏\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signin/signin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-in\">\r\n  <div class=\"login-bg\">\r\n    <div class=\"login-content clearfix\">\r\n      <div class=\"login-left\">\r\n        <span class=\"project-name\"><img src=\"assets/image/logo.png\" height=\"90\" alt=\"logo\"></span>\r\n        <!-- <img class=\"map-img\" src=\"../../../assets/image/login_pic.png\"> -->\r\n        <!-- <img class=\"left-img\" src=\"../../../assets/image/login_left.png\"> -->\r\n      </div>\r\n      <div class=\"login-right\">\r\n        <div class=\"login-right-content\">\r\n          <h2 class=\"login-h2\">\r\n            欢迎登录\r\n          </h2>\r\n          <div class=\"sigin-error\">\r\n            <div class=\"sigin-error-in\" *ngIf=\"hasError\">\r\n              <i class=\"icon iconfont icon-error\"></i>\r\n              <span>{{msg}}</span>\r\n            </div>\r\n          </div>\r\n          <form>\r\n            <div class=\"user-box\">\r\n              <nz-input-group [nzSuffix]=\"userIdSuffix\" [nzPrefix]=\"userIdPrefix\">\r\n                <input type=\"text\" nz-input placeholder=\"请输入用户名admin\" [(ngModel)]=\"userId\" name=\"userId\" />\r\n              </nz-input-group>\r\n              <ng-template #userIdPrefix><i class=\"icon iconfont fc-icon-personnel\"></i></ng-template>\r\n              <ng-template #userIdSuffix><i nz-icon type=\"close-circle\" (click)=\"userId =''\" *ngIf=\"userId\"></i>\r\n              </ng-template>\r\n\r\n            </div>\r\n            <div class=\"user-box\">\r\n              <nz-input-group [nzSuffix]=\"pwdSuffix\" [nzPrefix]=\"pwdPrefix\">\r\n                <input type=\"password\" nz-input placeholder=\"请输入密码admin\" [(ngModel)]=\"password\" name=\"password\" />\r\n              </nz-input-group>\r\n              <ng-template #pwdPrefix><i class=\"icon iconfont fc-icon-password\"></i></ng-template>\r\n              <ng-template #pwdSuffix><i nz-icon type=\"close-circle\" (click)=\"password = ''\" *ngIf=\"password\"></i>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"user-box login-btn\">\r\n              <button nz-button nzType=\"primary\" (click)=\"login()\" [nzBlock]=\"true\">登录</button>\r\n            </div>\r\n         <!--   <div class=\"google-download\">\r\n              <p>本系统仅支持\r\n                <a href=\"../assets/browser/chromedev_x64-v71.0.3554.0.exe\">谷歌</a>和<a\r\n                  href=\"../assets/browser/360cse_9.5.0.138.exe\">360急速</a>浏览器</p>\r\n            </div>-->\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "注册\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_fccore_fccore_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/fccore/fccore.module */ "./src/fccore/fccore.module.ts");
/* harmony import */ var src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/fccore/service/user.service */ "./src/fccore/service/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _components_dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dialog/syseditpassword.dialog */ "./src/app/components/dialog/syseditpassword.dialog.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/lockscreen/lockscreen.component */ "./src/app/components/lockscreen/lockscreen.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/routereusestrategy.service */ "./src/app/service/routereusestrategy.service.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
























Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
let AppModule = class AppModule {
    constructor() { }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        entryComponents: [_components_dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_14__["SyseditpasswordComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"]),
            src_fccore_fccore_module__WEBPACK_IMPORTED_MODULE_10__["FccoreModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
            _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"],
            _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__["ForgotComponent"],
            _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_18__["LockscreenComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
            _components_dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_14__["SyseditpasswordComponent"]
        ],
        providers: [
            src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            _share_service__WEBPACK_IMPORTED_MODULE_23__["ShareService"],
            _service_layout_service__WEBPACK_IMPORTED_MODULE_21__["LayoutService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_22__["FcRouteReuseStrategy"] },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppModule);



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/fccore/service/user.service */ "./src/fccore/service/user.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lockscreen/lockscreen.component */ "./src/app/components/lockscreen/lockscreen.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");







const SignIn = 'signin';
const AppRoutes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]],
        children: [
            {
                path: 'error',
                component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"]
            },
            {
                path: 'fc',
                loadChildren: '../feature/fc/fc.module#FcModule'
            }
        ]
    },
    {
        path: SignIn,
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"]
    },
    {
        path: 'forgot',
        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"]
    },
    {
        path: 'lockscreen',
        component: _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["LockscreenComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/dialog/syseditpassword.dialog.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dialog/syseditpassword.dialog.ts ***!
  \*************************************************************/
/*! exports provided: SyseditpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyseditpasswordComponent", function() { return SyseditpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");




let SyseditpasswordComponent = class SyseditpasswordComponent {
    constructor(fb, subject) {
        this.fb = fb;
        this.subject = subject;
        // 原密码验证
        this.oldPasswordExplain = '';
        // 新密码验证
        this.newPasswordExplain = '';
        // 确认新密码验证
        this.confirmPasswordExplain = '';
        //验证旧密码
        this.formatOldValidator = (control) => {
            if (!control.value) {
                this.oldPasswordExplain = '旧密码不能为空！';
                return { confirm: true }; // 验证不能为空
            }
        };
        /**
         *
         *验证输入密码是否符号格式（长度不能少于多少位，必须有大小写，数字字母及特殊符号的组合）
         * @memberof EdituserComponent
         */
        this.formatValidator = (control) => {
            const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\=\,\.\?\|\(\)\{\}\[\#\@\`\~\!\<\>\;\:\'\"\_\&\%\]\*\/\\\+\^\$\-]).{6,16}$/;
            if (!control.value) {
                this.newPasswordExplain = '新密码不能为空！';
                return { format: true }; // 验证不能为空
            }
            else if (!regExp.test(control.value)) {
                this.newPasswordExplain = '请输入6-16位密码，且必须包含字母、数字、特殊字符、区分大小写！';
                return { format: true, error: true };
            }
            else if (control.value == this.validateForm.controls['oldPassword'].value) {
                this.newPasswordExplain = '新旧密码不能一致';
                return { format: true, error: true };
            }
        };
        /**
         *
         * 验证新密码输入是否一致
         * @memberof EdituserComponent
         */
        this.confirmNewPwdValidator = (control) => {
            if (!control.value) {
                return { required: true }; // 验证不能为空
            }
            else if (control.value !== this.validateForm.controls['newPassword'].value) {
                this.confirmPasswordExplain = '两次输入的密码不一致';
                return { confirm: true, error: true };
            }
        };
    }
    ngOnInit() {
        // 表单验证
        this.validateForm = this.fb.group({
            oldPassword: [null, [this.formatOldValidator]],
            newPassword: [null, [this.formatValidator]],
        });
    }
    /**
    * 获取名称
    * @param name
    */
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
    /**
     *
     *确定
     */
    handleOk() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        // 判断旧密码是否输入正确
        if (true) {
            //校验新密码
            this.subject.destroy('onCancel');
        }
        else {}
        ;
    }
    /**
     *
     *取消
     */
    handleCancel() {
        this.subject.destroy('onCancel');
    }
};
SyseditpasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SyseditpasswordComponent.prototype, "oldPassword", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SyseditpasswordComponent.prototype, "newPassword", void 0);
SyseditpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sys-editpassword',
        template: __webpack_require__(/*! raw-loader!./syseditpassword.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialog/syseditpassword.dialog.html"),
        styles: ["\n  ::ng-deep .edituser-dialog-wrap .ant-modal-body{\n    padding: 16px 0 0;\n  }\n  ::ng-deep .edituser-dialog .edituser-dialog-footer {\n    border-top: 1px solid #e9e9e9;\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    border-radius: 0 0 4px 4px;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"]])
], SyseditpasswordComponent);



/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ForgotComponent = class ForgotComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'forgot',
        template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot/forgot.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ForgotComponent);



/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var src_app_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/fccore/service/common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/syseditpassword.dialog */ "./src/app/components/dialog/syseditpassword.dialog.ts");
/* harmony import */ var src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/fccore/service/cache.service */ "./src/fccore/service/cache.service.ts");










let LayoutComponent = class LayoutComponent {
    constructor(router, activatedRoute, mainService, shareService, modalService, message) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.shareService = shareService;
        this.modalService = modalService;
        this.message = message;
        // 路由打开记录
        this.selectMenu = {};
        // 当前所有菜单
        this._menus = [];
        // 默认选中的索引
        this.fcSelectedIndex = 0;
        // 选项卡
        this.fcTabs = [];
        // 单位名称
        this.companyName = 'admin';
        // 菜单是否收起
        this.menuIsCollapsed = false;
        // 消息侧边栏
        this.navsideVisible = false;
        // 菜单导航的宽度
        this.menuWidth = 200;
        // 头像
        this.avatar = 'assets/image/avatar.jpeg';
        // 项目名
        this.projectName = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].projectName;
        this.fcTabs = [];
        // 点击左侧导航
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].subscribe('selectedMenu', (event) => {
            if (event) {
                this.selectMenu_1 = event.param;
                const tabOne = this.fcTabs.filter(tab => tab.content.MENUID === this.selectMenu_1.MENUID);
                if (tabOne.length > 0) {
                    this.fcSelectedIndex = tabOne[0].index;
                    this.selectedTabMenu(tabOne[0]);
                }
                else {
                    const tab = {
                        id: this.selectMenu_1.ID,
                        index: this.fcTabs.length,
                        enabled: false,
                        name: this.selectMenu_1.MENUNAME,
                        close: true,
                        icon: this.selectMenu_1.MENUICON,
                        content: this.selectMenu_1,
                        refresh: 'Y'
                    };
                    if (this.fcTabs.length === 0) {
                        tab.enabled = true;
                        tab.close = false;
                    }
                    this.fcTabs.push(tab);
                    this.fcSelectedIndex = tab.index;
                    this.selectedTabMenu(tab);
                }
            }
        });
    }
    /**
     * 发起事件
     */
    select() {
        this.shareService.switchProjectSubject.next({
            eventName: 'changeDate',
            param: {} // 参数
        });
    }
    /**
     * 显示时加载
     */
    ngOnInit() {
        // 所有的菜单
        this.allMenus = this.mainService.getMenus().P_MENUS;
        this._menus = this.allMenus[0].P_CHILDMENUS;
        // 默认选择某个菜单
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', {
            ID: '0',
            MENUID: 'HOME',
            ROUTER: 'home',
            PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].pid,
            MENUTYPE: 'INURL',
            MENUNAME: '首页',
            MENUICON: 'fc-icon-shouye'
        });
        // 导航选项卡
        if (this.fcTabs) {
            this.fcTabs = [];
            this.fcSelectedIndex = 0;
            if (this.fcTabs.length === 0) {
                this.fcTabs.push({
                    id: '0',
                    index: 0,
                    enabled: true,
                    name: '首页',
                    close: false,
                    icon: 'fc-icon-shouye',
                    refresh: 'N',
                    content: {
                        ID: '0',
                        MENUID: 'HOME',
                        ROUTER: 'home',
                        PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].pid,
                        MENUTYPE: 'INURL'
                    }
                });
            }
        }
        this.router.navigate(['/' + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_7__["environment"].pid.toLocaleLowerCase() + '/home']);
    }
    /**
     * 切换项目
     * @param item
     */
    switchProject(menu) {
        this._menus = [];
        this.allMenus.forEach(element => {
            if (element.PID === menu.PID) {
                this._menus = element.P_CHILDMENUS;
                this.projectName = element.MENUNAME;
            }
        });
    }
    toggleLayout() {
        this.menuWidth = this.menuWidth === 64 ? 200 : 64;
        this.menuIsCollapsed = this.menuIsCollapsed === true ? false : true;
    }
    /**
     * 打开或者关闭侧边栏
     */
    toggleSidebar() {
        this.navsideVisible = this.navsideVisible === false ? true : false;
    }
    /**
     * 关闭侧边栏
     */
    closeNavSide() {
        this.navsideVisible = false;
    }
    /**
     * 点击侧边栏外的区域关闭
     */
    _onOutsideClick(event) {
        if (this.navsideVisible) {
            const clickedEl = event.target;
            const classList = clickedEl.classList;
            // 点击的区域不包括此组件本身且不包含顶部工具栏的消息按钮
            if (!!classList.contains('ant-drawer') &&
                !classList.contains('fc-icon-information')) {
                this.navsideVisible = false;
            }
        }
    }
    /**
     * 选中菜单
     * @param menu
     */
    selectedMenu(menu) {
        menu.select = true;
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', menu);
    }
    /**
     * @description: 选中选项卡导航
     * @param {type}
     * @return:
     */
    selectedTabMenu(tabMenu) {
        let refresh = 'Y';
        // 判断路由是否打开过，如果已打开不刷新，反之，刷新
        refresh = (this.selectMenu[tabMenu.content.MENUID] && this.selectMenu[tabMenu.content.MENUID] !== '') ? 'N' : "Y";
        if (!this.selectMenu[tabMenu.content.MENUID]) {
            // 将该路由存放在路由打开记录中
            this.selectMenu[tabMenu.content.MENUID] = tabMenu.content.MENUID;
        }
        else {
            refresh = 'N';
        }
        this.mainService.navMenu(this.router, tabMenu.content, refresh);
    }
    /**
     * 关闭选项卡导航
     * @param tab
     */
    closeTabNav(tab) {
        this.selectMenu[tab.content.MENUID] = "";
        if (tab.close) {
            this.fcTabs.splice(this.fcTabs.indexOf(tab), 1);
            let i = 0;
            this.fcTabs.forEach(item => {
                item.index = i++;
            });
            if (this.fcTabs.length > 0) {
                // 如果关闭的选项卡索引 等于 激活的选项卡, 关闭选项卡后，打开选中索引前一个
                if (this.fcSelectedIndex && tab.index > this.fcSelectedIndex) {
                    src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', this.fcTabs[this.fcSelectedIndex]['content']);
                }
                else {
                    src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"].event('selectedMenu', this.fcTabs[this.fcSelectedIndex - 1]['content']);
                }
            }
        }
    }
    /**
     * 退出登录
     */
    siginout() {
        this.siginoutVisible = false;
        this.router.navigate(['/signin']);
    }
    /**
     * 修改密码
     */
    editPassWord() {
        const modal = this.modalService.create({
            nzTitle: '修改密码',
            nzContent: _dialog_syseditpassword_dialog__WEBPACK_IMPORTED_MODULE_8__["SyseditpasswordComponent"],
            nzWrapClassName: 'edituser-dialog-wrap',
            nzComponentParams: {
                oldPassword: '',
                newPassword: 'newPassword'
            },
            nzFooter: null
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        setTimeout(() => {
            const instance = modal.getContentComponent();
            instance.newPassword = 'passWord is changed';
        }, 2000);
    }
    /**
     * 清除缓存
     */
    clearCache() {
        src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_9__["CacheService"].clear();
        this.message.success('清除缓存成功！');
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
    { type: src_app_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navside', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    // 项目名
    )
], LayoutComponent.prototype, "navside", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutComponent.prototype, "_onOutsideClick", null);
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html"),
        styles: ["\n      .layout {\n        width: 100%;\n        height: 100%;\n      }\n      .logo {\n        height: 64px;\n        line-height: 64px;\n        float: left;\n      }\n      .logo:after, .fc-header-right:after {\n        content:'';\n        display: block;\n        clear: both;\n      }\n      .logo img{\n        margin-right: 20px;\n        vertical-align: top;\n        height: 50px;\n        margin-top: 7px;\n        margin-left: -10px;\n        float: left;\n      }\n      .logo .iconfont {\n        color: #fff;\n        font-size: 30px;\n        cursor: pointer;\n      }\n      .logo-text {\n        color: #fff;\n        font-size: 20px;\n      }\n      .fc-header-icon-wrap {\n        float: left;\n        transition: .2s;\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        line-height: 40px;\n        cursor: pointer;\n        margin-top: 12px;\n        margin-right: 10px;\n      }\n      .fc-header-icon-wrap:hover {\n        background: #40a9ff;\n        color: #fff;\n      }\n      .fc-header-dropdown {\n        width: auto;\n      }\n      .fc-header-left .icon {\n        float: none;\n        font-size: 24px;\n        cursor: pointer;\n      }\n      .fc-header-right {\n        height: 64px;\n        line-height: 64px;\n        float: right;\n        overflow: hidden;\n      }\n      .fc-header-right .fc-header-icon {\n        font-size: 24px;\n        color: #fff;\n        cursor: pointer;\n      }\n      .fc-header-right .text {\n        font-size: 16px;\n        color: #fff;\n        margin-right: 15px;\n        cursor: pointer;\n      }\n      .fc-header-right .text .iconfont {\n        margin-right: 5px;\n      }\n      .fc-header-right .avatar {\n        cursor: pointer;\n        float: left;\n        margin: 4px 10px 0 10px;\n      }\n      .sidebar-nav {\n        position: relative;\n      }\n      .layout-toggle {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        background-color: #f5f5f5;\n        border-right: 1px solid #e8e8e8;\n      }\n      .layout-toggle .iconfont {\n        color: #333333;\n        font-size: 18px;\n        cursor: pointer;\n        transition: transform ease-in 0.8;\n        display: inline-block;\n      }\n      .layout-toggle .iconfont.arrowright {\n        transform: rotate(180deg);\n      }\n      .layout-toggle .iconfont:hover {\n        color: #000000;\n        font-weight: bold;\n      }\n      .fc-main-wrap {\n        background: #f2f6f9;\n      }\n      .fc-main {\n        width: 100%;\n        height: 100%;\n        overflow:hidden;\n      }\n      ::ng-deep .navside-drawer.ant-drawer-content-wrapper {\n        background-color: #ffffff;\n        top: 64px;\n        height: calc(100% - 64px);\n      }\n      ::ng-deep .navside-drawer .ant-drawer-body {\n        padding: 0;\n      }\n      ::ng-deep .ant-tabs .anticon-close {\n        cursor: pointer;\n      }\n      ::ng-deep .fc-sidebar-menu {\n        background: #ffffff;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-item {\n        padding: 0!important;\n        text-align: center;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed {\n        width: 64px;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .first-level-title {\n        display: none;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-submenu {\n        text-align: center;\n      }\n      ::ng-deep\n        .fc-sidebar-menu\n        .ant-menu-inline-collapsed\n        > .ant-menu-submenu\n        > .ant-menu-submenu-title {\n        padding: 0 !important;\n      }\n      ::ng-deep .fc-sidebar-menu .menu-icon {\n        color: #333333;\n        margin-right: 10px;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .menu-icon {\n        margin-right: 0px;\n      }\n      ::ng-deep .ant-menu-popup::before {\n        opacity: 1;\n        background-color: red;\n      }\n      ::ng-deep .ant-menu-popup {\n        z-index: 1000;\n      }\n      ::ng-deep .fc-tabnav {\n        min-height: 40px;\n        background-color: #ffffff;\n        box-shadow: 0 3px 5px -6px #1890ff;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-bar {\n        margin-bottom: 0;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab {\n        margin-left: 0px;\n        margin-right: 0px;\n        padding: 8px 5px 8px 16px;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav-wrap {\n        margin-bottom: 0;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab .anticon {\n        margin-right: 8px;\n        font-size: 12px;\n        transform: scale(0.9);\n        margin-left: 10px;\n      }\n      .tab-home {\n        padding-right: 15px;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
        src_app_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/lockscreen/lockscreen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/lockscreen/lockscreen.component.ts ***!
  \***************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LockscreenComponent = class LockscreenComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
LockscreenComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LockscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lockscreen',
        template: __webpack_require__(/*! raw-loader!./lockscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/lockscreen/lockscreen.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LockscreenComponent);



/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fccore/service/cache.service */ "./src/fccore/service/cache.service.ts");





const PROJECT_NAME = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].projectName;
let SigninComponent = class SigninComponent {
    constructor(router) {
        this.router = router;
        this.hasError = false;
        this.msg = '用户名或者密码错误';
        this.userId = 'admin';
        this.password = 'admin';
    }
    ngOnInit() {
        if (this.loginValid(this.userId, this.password)) {
            this.router.navigate([
                '/' + src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].pid.toLocaleLowerCase() + '/home'
            ]);
        }
    }
    /**
     * 根据用户密码登录，并存储当前用户的相关信息
     */
    login() {
        if (this.loginValid(this.userId, this.password)) {
            this.hasError = false;
            src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('userinfo', { USERCODE: 'admin' });
            src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('token', 'ab2be4ef08c0418bab13a6a88c9772e7');
            this.router.navigate([
                '/' + src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].pid.toLocaleLowerCase() + '/home'
            ]);
        }
        else {
            this.hasError = true;
        }
    }
    loginValid(userId, password) {
        if (userId === 'admin' && password === 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.less */ "./src/app/components/signin/signin.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SigninComponent);



/***/ }),

/***/ "./src/app/components/signin/signin.less":
/*!***********************************************!*\
  !*** ./src/app/components/signin/signin.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-in {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.login-bg {\n  width: 100%;\n  height: 100%;\n  background: url('login_bg.jpeg') no-repeat fixed top;\n  background-size: 100% 100%;\n  position: fixed;\n}\n.login-bg .login-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -348px;\n  margin-top: -210px;\n  min-height: 400px;\n  height: 400px;\n  box-shadow: 0 1px 5px 0px rgba(50, 50, 50, 0.2);\n  background: #fff;\n}\n.login-bg .login-content .login-left {\n  float: left;\n  width: 390px;\n  height: 100%;\n  background: #4E8AEC;\n  position: relative;\n}\n.login-bg .login-content .login-left .map-img {\n  width: 336px;\n  height: 300px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -168px;\n  margin-top: -150px;\n}\n.login-bg .login-content .login-left .left-img {\n  width: 365px;\n  height: 156px;\n  position: absolute;\n  left: 50%;\n  margin-left: -182px;\n  top: 130px;\n}\n.login-bg .login-content .login-right {\n  float: right;\n  width: 296px;\n  height: 100%;\n  background: #fff;\n  position: relative;\n}\n.login-bg .login-content .login-right .login-right-content {\n  width: 80%;\n  position: absolute;\n  left: 30px;\n  top: 60px;\n}\n.login-bg .login-content .login-right .login-h2 {\n  width: 100%;\n  font-size: 16px;\n  color: #323232;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.login-bg .login-content .login-right .login-date {\n  margin-bottom: 5px !important;\n}\n.login-bg .login-content .login-right .user-box {\n  width: 100%;\n  height: 30px;\n  border-radius: 3px;\n  margin-bottom: 20px;\n}\n.login-bg .login-content .login-right .user-box .user-input {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  line-height: 30px;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  color: #666;\n  font-size: 12px;\n}\n.login-bg .login-content .login-right .user-box input::-webkit-input-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::-moz-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::-ms-input-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-webkit-input-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-moz-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-ms-input-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box .user-input:hover {\n  color: #666;\n  background-color: #ffffff;\n  border-color: #666;\n}\n.login-bg .login-content .login-right .user-box .user-input:focus {\n  color: #666;\n  border-color: #666 !important;\n  background-color: #fff;\n}\n.login-bg .login-content .login-right .save-word {\n  width: 100%;\n  text-align: center;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-inner-container {\n  width: 14px;\n  height: 14px;\n  border-color: #929292;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-layout .mat-checkbox-label {\n  font-size: 12px;\n  color: #666;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-frame {\n  border-width: 1px;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background: #3f77e4;\n}\n.login-bg .login-content .login-right .login-button {\n  display: block;\n  width: 100%;\n  height: 30px;\n  outline: none;\n  border: none;\n  background: #3f77e4;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.login-bg .login-content .login-right .login-button:hover {\n  background: #3f77e4;\n}\n.login-bg .login-content .login-right .login-btn {\n  margin-top: 7px;\n  margin-bottom: 54px;\n}\n.login-bg .login-content .login-right .google-download {\n  width: 100%;\n}\n.login-bg .login-content .login-right .google-download p {\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n}\n.login-bg .login-content .login-right .google-download a {\n  font-size: 12px;\n  color: #ff7573;\n  cursor: pointer;\n}\n.login-bg .user-input.ng-invalid {\n  border: 1px solid #ff7573 !important;\n}\n.login-bg .user-input.ng-valid {\n  border: 1px solid #aaa !important;\n}\n.login-bg .user-box {\n  position: relative;\n}\n.login-bg .required-color {\n  width: 100%;\n  height: 20px;\n  position: absolute;\n  left: 0;\n  top: 30px;\n  font-size: 12px;\n  text-align: center;\n  color: #ff7573;\n  z-index: 9;\n  border-radius: 2px;\n}\n.login-bg .required-color p {\n  height: 20px;\n  line-height: 20px;\n}\n/* 块级按钮文字不浮动 */\n:host ::ng-deep .login-btn .fc-button-block > span {\n  float: none;\n}\n.sigin-body .sigin-error {\n  width: 100%;\n  margin-bottom: 30px;\n  line-height: 24px;\n  box-sizing: border-box;\n  font-size: 14px;\n  margin-top: 20px;\n}\n.sigin-error-in {\n  background: #FEEEEB;\n  border: 1px solid #F15532;\n  color: #F15533;\n  text-align: left;\n  padding: 3px 6px;\n  margin-bottom: 20px;\n}\n.project-name {\n  font-size: 30px;\n  color: #fff;\n  display: block;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 40%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vQzovVXNlcnMvRlgxL0Rlc2t0b3AvbWFwLXVpKDIwMTkxMjE5KS9mZW54aS1wcm9kdWN0L3NyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDTEY7QURRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNORjtBRFNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUkY7QURXQTtFQUNFLDZCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1ZGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDWEY7QURjQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNaRjtBRFVBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ1pGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDWkY7QURVQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNaRjtBRGVBO0VBQ0UsNkJBQUE7QUNiRjtBRFlBO0VBQ0UsNkJBQUE7QUNiRjtBRFlBO0VBQ0UsNkJBQUE7QUNiRjtBRFlBO0VBQ0UsNkJBQUE7QUNiRjtBRGdCQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDZEY7QURpQkE7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDbEJGO0FEcUJBO0VBQ0UsaUJBQUE7QUNuQkY7QURzQkE7RUFDRSxtQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3JCRjtBRHdCQTtFQUNFLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDdkJGO0FEMEJBO0VBQ0UsV0FBQTtBQ3hCRjtBRDJCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN6QkY7QUQ0QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUMxQkY7QUQ2QkE7RUFDRSxvQ0FBQTtBQzNCRjtBRDhCQTtFQUNFLGlDQUFBO0FDNUJGO0FEK0JBO0VBQ0Usa0JBQUE7QUM3QkY7QURnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDL0JGO0FBQ0EsY0FBYztBRG9DZDtFQUNFLFdBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbkNGO0FEc0NBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDckNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4taW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9naW5fYmcuanBlZycpIG5vLXJlcGVhdCBmaXhlZCB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zNDhweDtcbiAgbWFyZ2luLXRvcDogLTIxMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzOTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNEU4QUVDO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubWFwLWltZyB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2OHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubGVmdC1pbWcge1xuICB3aWR0aDogMzY1cHg7XG4gIGhlaWdodDogMTU2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE4MnB4O1xuICB0b3A6IDEzMHB4O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjk2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1yaWdodC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDYwcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tZGF0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQ6aG92ZXIge1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCAudXNlci1pbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjOTI5MjkyO1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5zYXZlLXdvcmQgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnRuIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1NHB4O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5nb29nbGUtZG93bmxvYWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuZ29vZ2xlLWRvd25sb2FkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmdvb2dsZS1kb3dubG9hZCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmNzU3MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tYmcgLnVzZXItaW5wdXQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjc1NzMgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJnIC51c2VyLWlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLnVzZXItYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNzU3MztcbiAgei1pbmRleDogOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi8qIOWdl+e6p+aMiemSruaWh+Wtl+S4jea1ruWKqCAqL1xuXG46aG9zdCA6Om5nLWRlZXAgLmxvZ2luLWJ0biAuZmMtYnV0dG9uLWJsb2NrPnNwYW4ge1xuICBmbG9hdDogbm9uZTtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaWdpbi1lcnJvci1pbiB7XG4gIGJhY2tncm91bmQ6ICNGRUVFRUI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMTU1MzI7XG4gIGNvbG9yOiAjRjE1NTMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0MCU7XG59XG4iLCIubG9naW4taW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dpbi1iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2xvZ2luX2JnLmpwZWcnKSBuby1yZXBlYXQgZml4ZWQgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTM0OHB4O1xuICBtYXJnaW4tdG9wOiAtMjEwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzkwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzRFOEFFQztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1sZWZ0IC5tYXAtaW1nIHtcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTY4cHg7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubGVmdC1pbWcge1xuICB3aWR0aDogMzY1cHg7XG4gIGhlaWdodDogMTU2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE4MnB4O1xuICB0b3A6IDEzMHB4O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDI5NnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLXJpZ2h0LWNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG4gIHRvcDogNjBweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWRhdGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQ6aG92ZXIge1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogIzY2NjtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5zYXZlLXdvcmQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjOTI5MjkyO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnRuIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1NHB4O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuZ29vZ2xlLWRvd25sb2FkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5nb29nbGUtZG93bmxvYWQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2Njtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmdvb2dsZS1kb3dubG9hZCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmNzU3MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luLWJnIC51c2VyLWlucHV0Lm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3NTczICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYmcgLnVzZXItaW5wdXQubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYmcgLnVzZXItYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luLWJnIC5yZXF1aXJlZC1jb2xvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZjc1NzM7XG4gIHotaW5kZXg6IDk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5sb2dpbi1iZyAucmVxdWlyZWQtY29sb3IgcCB7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4vKiDlnZfnuqfmjInpkq7mloflrZfkuI3mta7liqggKi9cbjpob3N0IDo6bmctZGVlcCAubG9naW4tYnRuIC5mYy1idXR0b24tYmxvY2sgPiBzcGFuIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG4uc2lnaW4tYm9keSAuc2lnaW4tZXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zaWdpbi1lcnJvci1pbiB7XG4gIGJhY2tncm91bmQ6ICNGRUVFRUI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMTU1MzI7XG4gIGNvbG9yOiAjRjE1NTMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");





let SignupComponent = class SignupComponent {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
        this._projectName = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].projectName;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            uname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
        styles: ["\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/service/layout.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/layout.service.ts ***!
  \*******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _mock_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _mock/_menus */ "./_mock/_menus.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: layout业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-24 11:09:21
 */






let LayoutService = class LayoutService {
    constructor(Router, messageService, shareService) {
        this.Router = Router;
        this.messageService = messageService;
        this.shareService = shareService;
        // 项目名称
        this.pid = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].pid.toLocaleLowerCase();
    }
    /**
     * @description: 获取菜单信息
     * @param {type} []
     * @return:  []
     */
    getMenus() {
        return _mock_menus__WEBPACK_IMPORTED_MODULE_4__["menus"];
    }
    /**
     * 跳转路由
     * @param menu
     */
    navMenu(router, menu, refresh) {
        if (refresh === undefined) {
            refresh = 'Y';
        }
        if (menu.MENUTYPE === 'APP') {
            // 开启加载条
            // this.messageService.startAntLoading();
            let params = {
                queryParams: {
                    refresh: refresh,
                    ID: menu.ID,
                    MENUID: menu.MENUID,
                    MENUNAME: menu.MENUNAME,
                    MENUICON: menu.MENUICON,
                    MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER,
                    PID: menu.PID,
                    APPID: menu.APPID,
                    PARAM: menu.param
                }
            };
            // LogService.debug(params);
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], params)
                .then(() => {
                // this.providers.msgService.endAntLoading();
            })
                .catch(error => {
                console.log(error);
                // this.providers.msgService.endAntLoading();
                router.navigate(['/error']);
            });
        }
        else if (menu.MENUTYPE === 'INURL') {
            // 开启加载条
            // this.providers.msgService.startAntLoading();
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], {
                queryParams: {
                    refresh: refresh,
                    ID: menu.ID,
                    MENUID: menu.MENUID,
                    MENUNAME: menu.MENUNAME,
                    MENUICON: menu.MENUICON,
                    MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER,
                    PID: menu.PID,
                    APPID: menu.APPID,
                    PARAM: menu.param
                }
            })
                .then(() => {
            })
                .catch(error => {
                console.log(error);
            });
        }
        else {
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], {
                queryParams: {
                    refresh: refresh,
                    ID: menu.ID,
                    MENUID: menu.MENUID,
                    MENUNAME: menu.MENUNAME,
                    MENUTYPE: menu.MENUTYPE,
                    ROUTER: menu.ROUTER,
                    PID: menu.PID,
                    APPID: menu.APPID,
                    PARAM: menu.param,
                    MENUURL: menu.MENUURL
                }
            })
                .then(() => {
            })
                .catch(error => {
                console.log(error);
                router.navigate(['/error']);
            });
        }
    }
};
LayoutService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"] }
];
LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
        _share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"]])
], LayoutService);



/***/ }),

/***/ "./src/app/service/routereusestrategy.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/routereusestrategy.service.ts ***!
  \*******************************************************/
/*! exports provided: FcRouteReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRouteReuseStrategy", function() { return FcRouteReuseStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");


class FcRouteReuseStrategy {
    /**
     * @description: 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断
     * @param {type}
     * @return:
     */
    shouldDetach(route) {
        if (route.routeConfig.path === 'home' || route.routeConfig.path === 'error') {
            return false; // 不允许路由复用
        }
        if (route.routeConfig['data'] && !route.routeConfig['data']['keepAlive']) {
            return false; // 不允许路由复用
        }
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        return true;
    }
    /**
     * @description: 当路由离开时会触发，存储路由,按path作为key存储路由快照&组件当前实例对象
     * @param {type}
     * @return:
     */
    store(route, handle) {
        if (route.routeConfig.path === 'signin') {
            FcRouteReuseStrategy.handlers = {};
        }
        let url = this.getRouteUrl(route);
        FcRouteReuseStrategy.handlers[url] = handle;
    }
    /**
     * @description:若 path 在缓存中有的都认为允许还原路由
     * @param {type}
     * @return:
     */
    shouldAttach(route) {
        if (route.queryParams['refresh'] === 'Y') {
            return false;
        }
        let url = this.getRouteUrl(route);
        return !!FcRouteReuseStrategy.handlers[url];
    }
    /**
     * @description: 从缓存中获取快照，若无则返回null
     * @param {type}
     * @return:
     */
    retrieve(route) {
        if (!route.routeConfig || route.queryParams['refresh'] === 'Y' || route.routeConfig.loadChildren) {
            return null;
        }
        let url = this.getRouteUrl(route);
        let rtn = FcRouteReuseStrategy.handlers[url];
        if (rtn !== undefined) {
            return rtn;
        }
        else {
            return null;
        }
    }
    /**
     * @description: 进入路由触发，判断是否同一路由
     * @param {type}
     * @return:
     */
    shouldReuseRoute(future, curr) {
        return (
        // 同一路由时复用路由
        future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params));
    }
    /**
     * @description:获取路由路径
     * @param {type}
     * @return:
     */
    getRouteUrl(route) {
        let path = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"].pid + '_' + route['routeConfig'].path;
        // let path = route['_routerState'].url.replace(/\//g, '_')
        return path;
    }
    /**
     * @description:
     * @param {type}
     * @return:
     */
    getRouteUrl0(route) {
        let namedOutletCount = 0;
        return (route.pathFromRoot.reduce((path, route) => {
            let config = route.routeConfig;
            if (config) {
                if (config.outlet && config.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_0__["PRIMARY_OUTLET"]) {
                    path += `(${config.outlet}:`;
                    namedOutletCount++;
                }
                else {
                    path += '/';
                }
                return (path += config.path);
            }
            return path;
        }, '') + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : ''));
    }
    /**
     * @description: 删除快照
     * @param {type}
     * @return:
     */
    static deleteRouteSnapshot(name) {
        if (FcRouteReuseStrategy.handlers[name]) {
            delete FcRouteReuseStrategy.handlers[name];
        }
        else {
            FcRouteReuseStrategy.waitDelete = name;
        }
    }
}
FcRouteReuseStrategy.handlers = {};


/***/ }),

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShareService = class ShareService {
    constructor() {
        // 切换项目名称
        this.switchProjectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShareService);



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    pid: "FC",
    projectName: "fenxi-product",
    systemurl: "/server/",
    apiurl: "/server/api/",
    logurl: "/server/api/",
    authurl: "/server/api/",
    wsurl: "",
    license: ''
};


/***/ }),

/***/ "./src/fccore/fccore.module.ts":
/*!*************************************!*\
  !*** ./src/fccore/fccore.module.ts ***!
  \*************************************/
/*! exports provided: FccoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FccoreModule", function() { return FccoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _service_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/dao.service */ "./src/fccore/service/dao.service.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/log.service */ "./src/fccore/service/log.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/message.service */ "./src/fccore/service/message.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台核心模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 14:49:10
 */












Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
let FccoreModule = class FccoreModule {
};
FccoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ],
        declarations: [],
        providers: [
            _service_dao_service__WEBPACK_IMPORTED_MODULE_8__["DaoService"],
            _service_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"],
            _service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _service_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"],
            _service_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"]
        ],
        bootstrap: []
    })
], FccoreModule);



/***/ }),

/***/ "./src/fccore/service/cache.service.ts":
/*!*********************************************!*\
  !*** ./src/fccore/service/cache.service.ts ***!
  \*********************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 缓存服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:41:24
 */
class CacheService {
    static set(key, value) {
        if (value instanceof Object) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            window.localStorage.setItem(key, value);
        }
    }
    ;
    static get(key, defaultValue) {
        var v = window.localStorage.getItem(key);
        if (v === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(v);
            }
            catch (e) {
                return v;
            }
        }
    }
    ;
    static clear() {
        window.localStorage.clear();
    }
    ;
    static clearByKey(key) {
        window.localStorage.removeItem(key);
    }
    ;
    static setS(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    ;
    static getS(key, defaultValue) {
        var obj = window.sessionStorage.getItem(key);
        if (obj === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(obj);
            }
            catch (e) {
                return obj;
            }
        }
    }
    ;
    static clearS() {
        window.sessionStorage.clear();
    }
    ;
    static clearSByKey(key) {
        window.sessionStorage.removeItem(key);
    }
    ;
    static objToString(obj) {
        var _this = this;
        if (obj && obj !== null) {
            if (typeof (obj) === 'string') {
                return obj;
            }
            if (typeof (obj) === 'object') {
                var rtn_1 = {};
                Object.keys(obj).forEach(function (key) {
                    var value = obj[key];
                    if (typeof (value) === 'object') {
                        rtn_1[key] = _this.objToString(value);
                    }
                    else {
                        rtn_1[key] = value;
                    }
                });
                return JSON.stringify(rtn_1);
            }
            if (typeof (obj) === 'number') {
                return obj + "";
            }
        }
        else {
            return "";
        }
    }
    ;
}


/***/ }),

/***/ "./src/fccore/service/common.service.ts":
/*!**********************************************!*\
  !*** ./src/fccore/service/common.service.ts ***!
  \**********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:42:53
 */


let CommonService = class CommonService {
    constructor() {
        this.base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        this.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    }
    /**
     * 发生事件
     * @param actCode 事件名称
     */
    static event(eventName, param) {
        this.eventEmit.emit({
            eventName: eventName,
            param: param
        });
    }
    /**
     * 订阅事件
     * @param 获取
     * @param 方法
     */
    static subscribe(actCode, func) {
        return this.eventEmit.subscribe(function (value) {
            if (value.eventName === actCode) {
                return func(value);
            }
            else {
                return func(null);
            }
        });
    }
    /**
     * base64编码
     * @param {Object} str
     */
    base64encode(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += '==';
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
                out += this.base64EncodeChars.charAt((c2 & 0xf) << 2);
                out += '=';
                break;
            }
            c3 = str.charCodeAt(i++);
            out += this.base64EncodeChars.charAt(c1 >> 2);
            out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            out += this.base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
            out += this.base64EncodeChars.charAt(c3 & 0x3f);
        }
        return out;
    }
    /**
     * base64解码
     * @param {Object} str
     */
    base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            /* c1 */
            do {
                c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            /* c2 */
            do {
                c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = this.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = this.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
    /**
     * utf16转utf8
     * @param {Object} str
     */
    utf16to8(str) {
        var out, i, len, c;
        out = '';
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x0001 && c <= 0x007f) {
                out += str.charAt(i);
            }
            else if (c > 0x07ff) {
                out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
            }
            else {
                out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
            }
        }
        return out;
    }
    /**
     * utf8转utf16
     * @param {Object} str
     */
    utf8to16(str) {
        var out, i, len, c;
        var char2, char3;
        out = '';
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += str.charAt(i - 1);
                    break;
                case 12:
                case 13:
                    // 110x xxxx 10xx xxxx
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                    break;
                case 14:
                    // 1110 xxxx10xx xxxx10xx xxxx
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0));
                    break;
            }
        }
        return out;
    }
    /**
     * 加密
     */
    static enCode64(str) {
        if (str == undefined) {
            return '';
        }
        return this.base64encode(this.utf16to8(str));
    }
    /**
     * base64解密
     */
    static deCode64(str) {
        if (str == undefined) {
            return '';
        }
        return this.utf8to16(this.base64decode(str));
    }
    /**
     * 根据模块及资源获取到url
     * @param moduleId 模块id
     * @param resId 资源id
     */
    static getUrlBy(moduleId, resId, act) {
        return moduleId + '/' + resId + '/' + act;
    }
    /**
     * 获取随机数
     * @param n 范围内的数值
     */
    static Random(n) {
        var chars = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
        var res = '';
        for (var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random() * 35);
            res += chars[id];
        }
        return res;
    }
    /**
     * 获取当前时间戳
     */
    static getMilliseconds() {
        return Date.now();
    }
    /**
     * 获取时间戳
     * @param date 当前时间
     */
    static getMillisecondsFromDate(date) {
        return Date.parse(date);
    }
    /**
     * 秒数转时间
     * @param seconds 秒数
     */
    static getDateByMilliseconds(seconds) {
        return new Date(seconds);
    }
    /**
     * 获取当前时间秒数
     */
    static getTimestamp() {
        return this.getMilliseconds() / 1000;
    }
    /**
     * 根据指定日期获取秒数
     * @param date 指定日期
     */
    static getTimestampFromDate(date) {
        return Date.parse(date) / 1000;
    }
    /**
     * 秒数转日期
     * @param seconds 秒数
     */
    static getDateByTimetamp(seconds) {
        return new Date(seconds * 1000);
    }
    /**
     * 获取当前年月
     * @param seg 分隔符 / -
     */
    static getYearMonth(seg) {
        if (seg === void 0) {
            seg = '-';
        }
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        if (month < 10) {
            return myDate.getFullYear() + seg + '0' + month;
        }
        else {
            return myDate.getFullYear() + seg + month;
        }
    }
    /**
     * 获取当前年月日
     * @param seg 分隔符
     */
    static getDate(seg) {
        if (seg === void 0) {
            seg = '-';
        }
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var value = '';
        if (month < 10) {
            value = myDate.getFullYear() + seg + '0' + month;
        }
        else {
            value = myDate.getFullYear() + seg + month;
        }
        if (day < 10) {
            value += seg + '0' + day;
        }
        else {
            value += seg + day;
        }
        return value;
    }
    /**
     * @description: 时间格式化处理
     * @param {type} 格式化字符串
     * @return:
     */
    static dateFormat(date, fmt) {
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp('(' + k + ')').test(fmt))
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        return fmt;
    }
    /**
     * @description: 时间格式化处理
     * @param {type} 格式化字符串
     * @return:
     */
    static stringDateFormat(dateStr, fmt) {
        return this.dateFormat(this.stringToDate(dateStr), fmt);
    }
    /**
     * @description: 时间戳格式化处理
     * @param {type} 格式化
     * @return:
     */
    static timestampFormat(timestamp, fmt) {
        return this.dateFormat(new Date(timestamp), fmt);
    }
    /**
     * 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
     * result （分钟）
     */
    static stringToDate(fDate) {
        if (!fDate) {
            return null;
        }
        var fullDate = fDate.split('-');
        if (fullDate.length > 1) {
            return new Date(Date.parse(fDate.replace(/-/g, '/')));
        }
        fullDate = fDate.split('/');
        if (fullDate.length > 1) {
            return new Date(Date.parse(fDate.replace(/\//g, '/')));
        }
        var year = '';
        var month = '';
        var day = '';
        if (fDate.length > 7) {
            year = fDate.substr(0, 4);
            month = fDate.substr(4, 2);
            day = fDate.substr(6, 2);
        }
        var hour = '';
        var min = '';
        if (fDate.length > 11) {
            hour = fDate.substr(8, 2);
            min = fDate.substr(10, 2);
        }
        var second = '';
        if (fDate.length > 13) {
            second = fDate.substr(12, 2);
        }
        if (fDate.length === 8)
            return new Date(Date.parse(year + '/' + month + '/' + day));
        if (fDate.length === 12)
            return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min));
        if (fDate.length === 14)
            return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + second));
    }
    /**
     * 数值格式化
     * @param num 数值
     * @param format 格式化
     */
    static numberFormat(num, format) {
        var numberal = window['numeral'](num);
        return numberal.format(format);
    }
    /****
     * 替换文件
     * text :为源文件
     * rep:需要替换的符号
     * rex:替换后的符号
     * **/
    static textReplaceAll(text, regexp, replacement) {
        return text.replace(regexp, replacement);
    }
    /**
     * md5加密
     * @param string 被md5加密的字符串
     */
    static md5Encode(str) {
        function RotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }
        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 0x80000000;
            lY8 = lY & 0x80000000;
            lX4 = lX & 0x40000000;
            lY4 = lY & 0x40000000;
            lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
            if (lX4 & lY4) {
                return lResult ^ 0x80000000 ^ lX8 ^ lY8;
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
                }
                else {
                    return lResult ^ 0x40000000 ^ lX8 ^ lY8;
                }
            }
            else {
                return lResult ^ lX8 ^ lY8;
            }
        }
        function F(x, y, z) {
            return (x & y) | (~x & z);
        }
        function G(x, y, z) {
            return (x & z) | (y & ~z);
        }
        function H(x, y, z) {
            return x ^ y ^ z;
        }
        function I(x, y, z) {
            return y ^ (x | ~z);
        }
        function FF(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function GG(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function HH(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function II(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function ConvertToWordArray(str) {
            var lWordCount;
            var lMessageLength = str.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition);
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }
        function WordToHex(lValue) {
            var WordToHexValue = '', WordToHexValue_temp = '', lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = '0' + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }
        function Utf8Encode(str) {
            str = str.replace(/\r\n/g, '\n');
            var utftext = '';
            for (var n = 0; n < str.length; n++) {
                var c = str.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if (c > 127 && c < 2048) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        }
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        str = Utf8Encode(str);
        x = ConvertToWordArray(str);
        a = 0x67452301;
        b = 0xefcdab89;
        c = 0x98badcfe;
        d = 0x10325476;
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
            b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
            a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
            c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
            c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
            a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
            a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
            a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
            a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
            c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
            c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
            b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
            c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
            d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
            c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
            a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
            d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
            b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
            a = AddUnsigned(a, AA);
            b = AddUnsigned(b, BB);
            c = AddUnsigned(c, CC);
            d = AddUnsigned(d, DD);
        }
        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return temp.toLowerCase();
    }
    /**
     *
     * @param {当前值} value
     * @param {默认值} defaultValue
     */
    static getVbyNull(value, defaultValue) {
        if (value === null || value === undefined || value === 'null') {
            return defaultValue;
        }
        else {
            return value;
        }
    }
    /**
     *
     * @description 数组转树结构
     * @param list 数据列表
     * @param parentValue 上级编码的值
     * @param code 编码
     * @param name 名称
     * @param subtitle 小标题
     * @param parent 父级编码字段
     */
    static listtotree(list, parentValue, code, name, parent) {
        let _this = this;
        let nodes = [];
        list.forEach(function (item) {
            if (parentValue === item[parent]) {
                var node_1 = {
                    id: item.ID,
                    expanded: true,
                    code: item[code],
                    name: item[name],
                    children: [],
                    hasChildren: false,
                    DATA: item
                };
                list.forEach(function (child) {
                    if (item[code] === child[parent]) {
                        var childNode = {
                            id: item.ID,
                            expanded: false,
                            code: child[code],
                            name: child[name],
                            children: [],
                            hasChildren: false,
                            DATA: child
                        };
                        childNode.children = _this.listtotree(list, child[code], code, name, parent);
                        node_1.hasChildren = true;
                        node_1.children.push(childNode);
                    }
                });
                nodes.push(node_1);
            }
        });
        return nodes;
    }
    /**
     * 把字符串的参数替换成data中有的值参数形式为:{PARAMID:''}
     * @param data 数据对象
     * @param dataStr 字符串
     */
    static getStringFilterByParam(data, dataStr) {
        var rtn = '';
        var ds = dataStr.split(':{');
        ds.forEach(function (item) {
            if (item.indexOf('}') === -1) {
                rtn += item;
            }
            else {
                var dcs = item.split('}');
                if (dcs.length > 1) {
                    rtn += data[dcs[0]] + dcs[1];
                }
            }
        });
        return rtn;
    }
    /**
     *
     * @description 数组转树结构
     * @param id id值
     * @param list 数据列表
     * @param parentValue 上级编码的值
     * @param code 编码
     * @param name 名称
     * @param subtitle 小标题
     * @param parent 父级编码字段
     * @param childFieldCode 是否有子节点的名称
     */
    static listtotreeasync(list, code, name, childFieldCode) {
        var _this = this;
        var nodes = [];
        list.forEach(function (item) {
            var node = {
                id: item.ID,
                code: item[code],
                name: _this.getStringFilterByParam(item, name),
                subTitle: item[code],
                hasChildren: false,
                expanded: false,
                disableCheckbox: false,
                DATA: item
            };
            if (item[childFieldCode] === 'Y') {
                node.hasChildren = true;
            }
            nodes.push(node);
        });
        return nodes;
    }
    /**
     * 当前值作为observable
     * 适合在有值的适合返回
     * @param {?} 当前值
     * @return {?}
     */
    static createObservable(obj) {
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            observer.next(obj);
            observer.complete();
        });
    }
    /**
     * 串行执行两个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    //  createObservableConcat(obs1: Observable<any>, obs2: Observable<any>): Observable<any> {
    //   return Observable.concat(obs1, obs2)
    // }
    /**
     * 并行执行多个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    //  createObservableJoin(obs1: Observable<any>[]): Observable<any> {
    //   return Observable.forkJoin(obs1)
    // }
    /**
     * 复制对象
     * @param obj 复制对象
     */
    static cloneObj(obj, exceptKey) {
        if (typeof obj === 'string') {
            return obj + '';
        }
        let datas = {};
        Object.keys(obj).forEach(function (key) {
            if (exceptKey && exceptKey.length !== 0) {
                if (exceptKey !== key) {
                    datas[key] = obj[key];
                }
            }
            else {
                datas[key] = obj[key];
            }
        });
        return datas;
    }
    /**
     * 复制对象
     * @param obj 复制对象
     */
    static cloneArray(objs, exceptKey) {
        let _this = this;
        if (typeof objs === 'string') {
            return objs + '';
        }
        let datas = [];
        Object.keys(objs).forEach(function (key) {
            if (exceptKey && exceptKey.length !== 0) {
                if (exceptKey !== key) {
                    if (typeof objs === 'object') {
                        datas.push(_this.cloneObj(objs[key], exceptKey));
                    }
                    else {
                        datas.push(objs[key]);
                    }
                }
            }
            else {
                datas.push(_this.cloneObj(objs[key]));
            }
        });
        return datas;
    }
};
CommonService.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonService);



/***/ }),

/***/ "./src/fccore/service/dao.service.ts":
/*!*******************************************!*\
  !*** ./src/fccore/service/dao.service.ts ***!
  \*******************************************/
/*! exports provided: FCCONFIG, DaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCCONFIG", function() { return FCCONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoService", function() { return DaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 前后端通道
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:25
 */






const FCCONFIG = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"];
let DaoService = class DaoService {
    constructor(http) {
        this.FCCONFIG = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.http = http;
        this.cacheService = _cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"];
        this.commonService = _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"];
    }
    /**
     * 获取请求选项对象
     */
    getOptions() {
        let options = {};
        return options;
    }
    /**
     * 获取参数列对象
     * @param param 参数
     * @param isArray 是否是数组 默认为false
     */
    getParamOpt(param) {
        if (param instanceof Array) {
            return { DATA: param };
        }
        else {
            return { DATA: [param] };
        }
    }
    /**
     * 获取默认的参数,url中的参数
     *
     */
    getDefaultParams() {
        var str = 'TOKEN=';
        var token = this.cacheService.getS('token', '');
        if (token !== null) {
            str += token + '&';
        }
        else {
            str += '&';
        }
        str += 'LAT=0&LNG=0&TIMESTAMP=' + this.commonService.getTimestamp();
        return str;
    }
    /**
     *
     * @param url 请求url
     * @param params
     */
    getWithPromise(url, params) {
        let rtn = '';
        Object.keys(params).forEach(key => {
            if (params[key] instanceof String) {
                rtn += key + '=' + encodeURIComponent(params[key]) + '&';
            }
        });
        return this.http
            .get(url + '?' + rtn)
            .toPromise()
            .catch(this.handleError);
    }
    /**
     * 执行get查询，如http://ip:port/url?param=
     * @param url 请求全路径
     * @param params 参数内容
     */
    getBase(url, params) {
        var rtn = '';
        Object.keys(params).forEach(function (key) {
            rtn += key + '=' + encodeURIComponent(params[key]) + '&';
        });
        rtn += this.getDefaultParams();
        return this.http.get(url + '?' + rtn);
    }
    /**
     * 通过post方法
     * @param url 请求资源
     * @param reqOpts 请求参数
     */
    postBase(url, body) {
        return this.http.post(url, body);
    }
    /**
     * 通过post方法
     * @param url 请求资源
     * @param reqOpts 请求参数
     */
    postByParams(url, body) {
        return this.http.post(url, this.getParamOpt(body));
    }
    /**
     * @description 异常统一处理，抛出异常内容
     * @param err 错误内容
     */
    handleError(error) {
        if (error.status === 401) {
        }
        else {
            return Promise.reject(error.message || error);
        }
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromApi(url, params) {
        return this.getBase(FCCONFIG.apiurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromApi(url, params) {
        return this.postByParams(FCCONFIG.apiurl + url, params);
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromSystem(url, params) {
        return this.getBase(FCCONFIG.systemurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromSystem(url, params) {
        return this.postByParams(FCCONFIG.systemurl + url, params);
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromLog(url, params) {
        return this.getBase(FCCONFIG.logurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromLog(url, params) {
        return this.postByParams(FCCONFIG.logurl + url, params);
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromAuth(url, params) {
        return this.getBase(FCCONFIG.authurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromAuth(url, params) {
        return this.postByParams(FCCONFIG.authurl + url, params);
    }
    /**
     * 连接ws并监听消息
     */
    connectionWs(userId) {
        let _this = this;
        this.ws = new WebSocket(FCCONFIG.wsurl + '/' + userId);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            ;
            (_this.ws.onmessage = function (event) {
                observer.next(event.data);
            }),
                (_this.ws.onerror = function (event) {
                    observer.error(event);
                }),
                (_this.ws.onclose = function () {
                    observer.complete();
                });
        });
    }
    /**
     * 发送消息
     * @param message 发送消息体
     */
    sendMessage(message) {
        this.ws.send(message);
    }
};
DaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DaoService);



/***/ }),

/***/ "./src/fccore/service/log.service.ts":
/*!*******************************************!*\
  !*** ./src/fccore/service/log.service.ts ***!
  \*******************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dao.service */ "./src/fccore/service/dao.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */




let LogService = class LogService {
    constructor(daoService, cacheService) {
        this.daoService = daoService;
        this.cacheService = cacheService;
        this.moduleId = 'SYSTEM';
        this.resId = 'SYSLOG';
    }
    debug(msg) {
        if (!this.daoService.FCCONFIG.production) {
            console.log(msg);
        }
    }
    info(msg) {
        if (!this.daoService.FCCONFIG.production) {
            console.log(msg);
        }
    }
    error(msg) {
        throw new Error(msg);
    }
    /**
     * 记录行为日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    writeBehavior(moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(moduleId, resId, LOGTYPE.BEHAVIOR, act, LOGLEVEL.INFO, param, result, reason ? reason : '');
        }
        this.info( true ? reason : undefined);
    }
    /**
     * 记录操作日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    writeAction(moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(moduleId, resId, LOGTYPE.ACTION, act, LOGLEVEL.INFO, param, result, reason ? reason : '');
        }
        this.info( true ? reason : undefined);
    }
    /**
     * 记录错误日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    writeError(moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(LOGTYPE.ERROR, moduleId, resId, act, LOGLEVEL.ERROR, param, result, reason ? reason : '');
        }
        this.error( true ? reason : undefined);
    }
    /**
     *
     * @param type 日志类型 操作日志：ACTION;错误日志：ERROR；行为日志：BEHAVIOR；
     * @param act 操作
     * @param level 级别
     * @param param 输入参数
     * @param result 结果
     * @param reason 原因
     */
    write(type, moduleId, resId, act, level, param, result, reason) {
        let userInfo = _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"].getS('userinfo');
        let log = {
            LOGTIME: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getTimestamp(),
            SYSTEM: this.daoService.FCCONFIG.pid,
            USERID: userInfo ? userInfo.USERCODE : '',
            ACTION: act,
            MODULEID: moduleId,
            RESID: resId,
            LOGTYPE: type,
            LEVEL: level,
            PARAMS: JSON.stringify(param),
            RESULT: result,
            REASON: reason,
            CLIENTTYPE: 'CLIENT'
        };
        this.daoService
            .postFromLog(_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getUrlBy(this.moduleId, this.resId, 'CREATE'), log)
            .subscribe(function () { });
    }
};
LogService.ctorParameters = () => [
    { type: _dao_service__WEBPACK_IMPORTED_MODULE_4__["DaoService"] },
    { type: _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"] }
];
LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dao_service__WEBPACK_IMPORTED_MODULE_4__["DaoService"], _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
], LogService);



/***/ }),

/***/ "./src/fccore/service/message.service.ts":
/*!***********************************************!*\
  !*** ./src/fccore/service/message.service.ts ***!
  \***********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description:消息服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-16 17:42:39
 */
class MessageService {
    constructor() {
    }
}


/***/ }),

/***/ "./src/fccore/service/user.service.ts":
/*!********************************************!*\
  !*** ./src/fccore/service/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 用户服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:44:14
 */




// @Injectable() 装饰器会接受该服务的元数据对象
let UserService = class UserService {
    constructor(router) {
        this.router = router;
    }
    /**
     *
     * @param route
     * @param state
     */
    canActivate(route, state) {
        var user = this.getUserInfo();
        // 判断是否登录成功
        if (user && user.USERCODE !== undefined) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    }
    /**
     * @description 系统登录
     * @param userId 用户编码
     * @param password 用户密码
     */
    login(userId, password) {
        var param = {
            USERID: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].enCode64(userId),
            PASSWORD: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].enCode64(password),
            AID: 'SYSUSER'
        };
        // this.logService.writeAction(this.moduleId, this.serviceId, InterfaceMethod.LOGIN, param, '登录', '')
        return this.daoService.getFromAuth(_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getUrlBy(this.moduleId, this.serviceId, 'LOGIN'), param);
    }
    /**
     * @description 存储用户数据
     * @param data 登陆后返回数据
     */
    storeUserInfo(data) {
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('userinfo', data.DATA);
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('token', data.TOKEN);
    }
    /**
     * @description 获取登录用户数据内容
     */
    getUserInfo() {
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('admin', { USERCODE: 'admin' });
        return _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].getS('userinfo');
    }
    /**
     * @description 用户注销
     */
    logout(userInfo) {
        if (userInfo) {
            var param = { USERID: userInfo.USERCODE, AID: 'SYSUSER' };
            // 请求注销
            this.logService.writeAction(this.moduleId, this.serviceId, 'LOGOUT', param, '注销', '');
            return this.daoService.getFromAuth(_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getUrlBy(this.moduleId, this.serviceId, 'LOGOUT'), param);
        }
        else {
            return _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].createObservable({ CODE: '0', MSG: '操作成功' });
        }
    }
    /**
     * 清除用户信息
     */
    clearUserinfo() {
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].clearSByKey('userinfo');
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].clearSByKey('token');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserService);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/@grapecity/spread-sheets/index.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment.dev */ "./src/environments/environment.dev.ts");





_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_2__["Spread"].Sheets.LicenseKey = ''; // 正式环境需要购买
if (_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\FX1\Desktop\map-ui(20191219)\fenxi-product\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map