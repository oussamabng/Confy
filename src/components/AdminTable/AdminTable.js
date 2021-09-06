import React,{useState,useEffect} from 'react';
import axios from "axios";
import "./AdminTable.css";
import { Table,Icon } from 'semantic-ui-react'

const AdminTable = (props) => {
    const {headers,url,title} = props;
    const [data,setData] = useState([]);
    //? GET DATA TABLE
    useEffect(() => {
        axios.get("http://localhost:3004"+url)
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
        return () => {
            setData([]);
        }
    }, []);

    return (
        <div className="confy_admin_table">
            <Table striped>
                <Table.Header>
                <Table.Row>
                    {
                       headers && headers.map(elm=>
                            elm ?  <Table.HeaderCell>{elm}</Table.HeaderCell> : <Table.HeaderCell></Table.HeaderCell>
                        )
                    }
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    
                
                    {
                        data && data.length>0 && data.map(elm=>
                        <Table.Row>
                            {
                               elm.name &&  <Table.Cell>{elm.name}</Table.Cell>
                            }
                           {
                              elm.type &&   <Table.Cell>{elm.type}</Table.Cell>
                            }
                            
                             {
                              elm.date &&   <Table.Cell>{elm.date}</Table.Cell>
                            }
                            {
                              elm.n_place &&   <Table.Cell>{elm.n_place}</Table.Cell>
                            }
                            {
                              elm.responsable &&   <Table.Cell>{elm.responsable}</Table.Cell>
                            }
                            {
                              elm.admin &&  <Table.Cell>{elm.admin}</Table.Cell>
                            }
                            {
                            (title === "Conferences" || title === "Archive") && 
                            <Table.Cell>
                            <div className="last_table_item">
                                {
                                    title === "Conferences" && <p>Voir</p>
                                }
                                <Icon size="large" name="setting" />
                            </div>
                            </Table.Cell>
                    }
                        </Table.Row>
                        )
                    }
                      
                    

                  
                </Table.Body>
            </Table>
        </div>
    )
}

export default AdminTable
