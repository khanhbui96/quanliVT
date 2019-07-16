import React from 'react';

import {Route, Switch} from 'react-router-dom';

const showRoutes = routes => {
    return(
        routes.map((route, index)=>{
            return <Route
                key={index}
                exact = {route.exact}
                path = {route.path}
                component = {route.component}
            />
            })
    ) 
            
};
export default showRoutes
