/*menuname
 */
export const menus = {
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
            }]
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
