import {dashboardVisits,dashboards} from '../collections';
import * as UID from 'uuid/v1';
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

const insertNewVisit = (payload) =>{
    return dashboardVisits.then(dashboardVisitsCol => {
        payload.createdOn = new Date();
        return dashboardVisitsCol.insertOne(payload);
    });
}

const getStats = (dashboardId) =>{
    return dashboardVisits.then(dashboardVisitsCol =>{
        return dashboardVisitsCol.find({dashboardId})
    });
}
export {createDashboard,insertNewVisit,getStats};