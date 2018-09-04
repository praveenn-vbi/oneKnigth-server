import * as Dashboard from './controllers/dashboard'
import * as DashboardStats from './controllers/dashboard_stats'
import * as Joi from 'Joi'
const routes = [
    {
        method:'POST',
        path:'/createDashboard',
        handler:Dashboard.createDashboard,
        options: {
            validate : {
                payload : {
                    'name' : Joi.string().required()
                }
            }
        }
    },
    {
        method:'POST',
        path:'/newVisit',
        handler:Dashboard.newVisit,
        options: {
            validate : {
                payload : {
                    'dashboardId' : Joi.string().required(),
                    'viewName' : Joi.string().required(),
                },
               options : {
                allowUnknown: true
               }
            },
            
        }
    },{
        method:'GET',
        path:'/dashboardStats/{id}',
        handler:DashboardStats.getCompleteStats,
    },
    {
        method:'GET',
        path:'/dashboardStats/{id}/{count}',
        handler:DashboardStats.getRecentStats,
    }
];
export default routes;