import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Header from "../../components/Header/Header.js";
import FilterBox from "../../components/FilterBox/FilterBox.js";
import AdminTable from "../../components/AdminTable/AdminTable.js";

const AdminDashboard =(props)=>{
    return ( 
        <>
            <Sidebar active={props.title} />
            <Header title={props.title} />
            <FilterBox title={props.title} filter={props.filter} activeFilter={props.activeFilter} />
            <AdminTable headers={props.headers} url={props.url} title={props.title} />
        </>
    )
}

export default AdminDashboard;
