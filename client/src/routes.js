import React from 'react';
import About from './components/About';
import ListArmy from './components/Profiles/List';
import Test from './components/Profiles/Profile'
const routes  = [
    {
        path:'/',
        exact: true,
        component:()=><About/>
    },
    {
        path:'/test',
        exact: true,
        component:()=><ListArmy/>
    },
    
];

export default routes