export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/LoginTest',
        // component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    // redirect: '/admin/sub-page',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    icon: 'crown',
    routes: [
      {
        path: '/test',
        redirect: '/test/page1',
      },
      {
        path: '/test/page1',
        name: 'sub-page1',
        icon: 'smile',
        component: './MyTestPage/Page1',
      },
      {
        path: '/test/page2',
        name: 'sub-page2',
        icon: 'smile',
        component: './MyTestPage/Page2',
      },
      {
        path: '/test/page3',
        name: 'sub-page3',
        icon: 'smile',
        component: './MyTestPage/Page3',
      },
      {
        path: '/test/page4Form',
        name: 'sub-page4Form',
        icon: 'smile',
        component: './MyTestPage/Page4Form',
      },
      {
        path: '/test/Page4TablePro',
        name: 'sub-page4TablePro',
        icon: 'smile',
        component: './MyTestPage/Page4TablePro',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
