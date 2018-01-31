import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/dataManage/dataIntegration/repeatCheck.vue'
import dataManageindex from './views/dataManage/index.vue'
import Form from './views/setting/Form.vue'
import Page4 from './views/Monitor/Page4.vue'
import echarts from './views/Monitor/echarts.vue'



let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },

    {
        path: '/',
        component: Home,
        name: '',
        hidden: true
    },
    {
        path: '/Home',
        component: Home,
        name: '',
        hidden: true
    },

    {
        path: '/dataManage',
        name: '数据管理',
        component:Home,
        iconCls: 'fa fa-laptop',//图标样式class
        children: [
           {
           path: '/dataManage/dataIntegration',
           name: '数据集成' ,
           component: dataManageindex,
           iconCls: 'fa fa-genderless',
           children:
           [
              { path: 'repeatCheck', component:Table, name: '数据查重' },
              { path: 'dataConfig', component: Table, name: '数据集成配置' },
              { path: 'CEICImport', component: Table, name: 'CEIC数据导入' },
              { path: 'dataImport', component: Table, name: '数据导入' },
              { path: 'indicatorImport', component: Table, name: '平台指标信息导入' },
           ]
         },
         {
             path: '/dataManage/indicatorConfig',
             name: '经济指标设置',
             iconCls: 'fa fa-genderless',
             children:
             [
                { path: 'indicatorManage', component: Table, name: '指标信息管理' },
                { path: 'idrDataOptionManage', component: Table, name: '指标数据项管理' },
                { path: 'indicatorTypeManage', component: Table, name: '指标类别管理' },
                { path: 'indicatorAreaManage', component: Table, name: '指标区域管理' },
                { path: 'indicatorProviderManage', component: Table, name: '指标提供者管理' },
                { path: 'orgForecastWarnningManage', component: Table, name: '机构预测预警管理' },
             ]
         },

         {
             path: '/dataManage/indicatorDataManage',
             name: '指标数据管理',
             iconCls: 'fa fa-genderless',
             children:
             [
                { path: 'indicatorDayBaseManage', component: Table, name: '日度数据管理' },
                { path: 'indicatorMonthBaseManage', component: Table, name: '月度数据管理' },
                { path: 'indicatorQuarterBaseManage', component: Table, name: '季度数据管理' },
                { path: 'indicatorYearBaseManage', component: Table, name: '年度数据管理' },

             ]
         },
        ]
    },


    {
        path: '/analysisTool',
        name: '基本分析工具',
        component:Home,
        iconCls: 'fa fa-random',//图标样式class
        children: [
           {
           path: 'Statistics',
           name: '基本统计量' ,
           iconCls: 'fa fa-genderless',
           component: Table,
         },
         {
             path: 'seasonAjust',
             name: '季节调整',
             iconCls: 'fa fa-genderless',

         },

         {
             path: 'relation',
             name: '相关性分析',
             iconCls: 'fa fa-genderless',
         },

         {
             path: 'relation',
             name: '峰谷图分析',
             iconCls: 'fa fa-genderless',
         },

         {
             path: 'relation',
             name: '指标初选',
             iconCls: 'fa fa-genderless',
         },
         {
             path: 'relation',
             name: '复合一致指标',
             iconCls: 'fa fa-genderless',
         },

         {
             path: 'relation',
             name: '格兰杰因果检验',
             iconCls: 'fa fa-genderless',
         },

         {
             path: 'relation',
             name: '单指标序列直接滤波',
             iconCls: 'fa fa-genderless',
         },
        ]
    },


];


export default routes;
