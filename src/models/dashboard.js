import {dashboards} from '../collections';
import {getRandomNumber} from '../utils'
const createDashboard = (dashboardName) =>{
    return dashboards.then((dashboardsCol)=>{
        return dashboardsCol.countDocuments().then((count)=>{
            const randomNumber = getRandomNumber();
            const dashboardId = "VBX_DASHBOARD_"+randomNumber+"_"+count;
            return dashboardsCol.insertOne({name:dashboardName,id:dashboardId,createdOn: new Date()});
        });
    });
}

export {createDashboard};