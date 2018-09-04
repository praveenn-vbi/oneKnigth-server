import {dashboardVisits} from '../collections';

const getVisitsOfDashboard = (dashboardId) =>{
    return dashboardVisits.then(dashboardVisitsCol =>{
        return dashboardVisitsCol.find({dashboardId})
    });
}

const insertNewVisit = (payload) =>{
    return dashboardVisits.then(dashboardVisitsCol => {
        payload.createdOn = new Date();
        return dashboardVisitsCol.insertOne(payload);
    });
}

export {insertNewVisit,getVisitsOfDashboard};