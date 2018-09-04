import * as Boom from 'boom'
import * as DashboardViews from '../models/dashboard_views'

const errorCallback = (err) =>{
    console.log(err);
    return Boom.err(err);
}



const getCompleteStats =(request,h) =>{
    return DashboardViews.getVisitsOfDashboard(request.params.id)
    .then((response)=>{
        return response.toArray();
    }).catch(errorCallback);
}

// const getStatsByView =(request,h) =>{
//     return DashboardViews.getVisitsOfDashboard(request.params.id)
//     .then((response)=>{
//         let visits = response.toArray();
        
//     }).catch(errorCallback);
// }

const getRecentStats = (request,h) =>{
    return DashboardViews.getVisitsOfDashboard(request.params.id)
    .then((response)=>{
        return response.sort({"createdOn":-1})
               .limit(parseInt(request.params.count))
               .toArray();
    }).catch(errorCallback);
}

export {getCompleteStats,getRecentStats};