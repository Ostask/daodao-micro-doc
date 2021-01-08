export default [
    {
        title: "开始",
        path: "/",
    },
    {
        title: "创建微前端应用",
        path: "/daodaochild",
        children:[
            {
                title:'创建主应用',
                path:"/daodaochild"
            },
            {
                title:'创建子应用',
                path:"/daodaochild/list"
            }
        ]
    },
    {
        title: "功能示例",
        path: "/daodaodemo",
        children:[
            {
                title:'百度地图示例',
                path:"/daodaodemo"
            },
            {
                title:'3d示例',
                path:"/daodaodemo/three"
            },
            {
                title:'获取主应用数据',
                path:"/daodaodemo/data"
            },
            {
                title:'子应用调用接口',
                path:"/daodaodemo/query"
            },
            {
                title:'echarts示例',
                path:"/daodaodemo/charts"
            }
        ]
    },
    {
        title: "原理介绍",
        path: "/daodaochild",
        children:[
            {
                title:'改造主应用',
                path:"/daodaochild/changeMainApp"
            },
            {
                title:'改造子应用',
                path:"/daodaochild/changeChildApp"
            },
            {
                title:'注册子应用',
                path:"/daodaochild/injectApp"
            },
            {
                title:'应用间通信',
                path:"/daodaochild/actions"
            }
        ]
    }
]