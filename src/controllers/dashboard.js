
import * as Boom from 'boom'
import * as Dashboard from '../models/dashboard'
import * as DashboardViews from '../models/dashboard_views'

const errorCallback = (err) =>{
    console.log(err);
    return Boom.err(err);
}
const createDashboard  = (request,h) =>{
   return Dashboard.createDashboard(request.payload.name)
    .then((response)=>{
        return response.ops[0];
    }).catch(errorCallback);
}

const newVisit = (request,h) =>{
    return DashboardViews.insertNewVisit(request.payload)
    .then((response) =>{
        return response.result;
    }).catch(errorCallback);
}

export {createDashboard,newVisit};