import * as Dashboard from './controllers/dashboard'
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
        handler:Dashboard.getStats,
    }
];
export default routes;