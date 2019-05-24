// 导入文件时, 如果没有 ./, 默认从node_modules查找文件
import routesComponent from './routesComponent.js'

//路由配置
export default [

	{
		path: '/',
		name: 'Main',
		component: routesComponent.Main,
			children:[
				{
					path: '/MyCenter',
					name: 'MyCenter',
					component: routesComponent.MyCenter
				},
				{
					path: '/Index',
					name: 'Index',
					component: routesComponent.Index
				},
				{
					path: '/Classify',
					name: 'Classify',
					component: routesComponent.Classify
				},
				{
					path: '/Shopcart',
					name: 'Shopcart',
					component: routesComponent.Shopcart
				}
//				{
//				path: '*',
//				redirect: {name:'Index'}
//				}
//				
			]
	},

	{
		path: '/Login',
		name: 'Login',
		component: routesComponent.Login
	},
	
	{
		path: '/Register',
		name: 'Register',
		component: routesComponent.Register
	},
	{
		path: '/animate',
		name: 'animate',
		component: routesComponent.animate
	},
	{
		path: '/MyCenter',
		name: 'MyCenter',
		component: routesComponent.MyCenter
	},
	{
		path: '/Shop/:pid',
		name: 'Shop',
		component: routesComponent.Shop
	},
	{
		path: '/Order',
		name: 'Order',
		component: routesComponent.Order
	},
	{
		path: '/Test',
		name: 'Test',
		component: routesComponent.Test
	},
	{
		path: '/search',
		name: 'search',
		component: routesComponent.search
	}
]