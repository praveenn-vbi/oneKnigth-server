import {MongoClient} from 'mongodb'

const url = 'mongodb://localhost:27017';
const dbName = 'oneknight';
const dbPromise = MongoClient.connect(url).then((client) => {
    return client.db(dbName);
});
const dashboardVisits = dbPromise.then((db)=>{
    return db.collection('dashboard_visits');
});

const dashboards = dbPromise.then((db)=>{
    return db.collection('dashboards');
});

export {dashboardVisits,dashboards}


  