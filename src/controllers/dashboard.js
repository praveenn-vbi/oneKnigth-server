
import * as Boom from 'boom'
import * as Dashboard from '../models/dashboard'

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
    return Dashboard.insertNewVisit(request.payload)
    .then((response) =>{
        return response.result;
    }).catch(errorCallback);
}

const getStats =(request,h) =>{
    return Dashboard.getStats(request.params.id)
    .then((response)=>{
        return response.toArray();
    }).catch(errorCallback);
}

export {createDashboard,newVisit,getStats};