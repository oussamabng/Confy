import React,{useState,useEffect} from 'react';
import axios from "axios";
import "./AdminTable.css";
import { Table,Icon } from 'semantic-ui-react';
import SeetingsCard from '../SeetingsCard/SeetingsCard.js';


const SettingsIcon = (props)=>{
    const [show,setShow] = useState(false);
    

    const handleSettingsClick = ()=>{
        setShow(prevState=>!prevState);
    }
    return (
        <>
        <Icon size="large" name="setting" onClick={handleSettingsClick} />
        { show && <SeetingsCard /> }
        </>
    );
}

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
                               elm.profession &&  <Table.Cell>{elm.profession}</Table.Cell>
                            }
                           {
                              elm.type &&   <Table.Cell>{elm.type}</Table.Cell>
                            }
                            
                            {
                              elm.date &&   <Table.Cell>{elm.date}</Table.Cell>
                            }
                            {
                                elm.date_of_birth &&   <Table.Cell>{elm.date_of_birth}</Table.Cell>
                            }
                            {
                              elm.email &&   <Table.Cell>{elm.email}</Table.Cell>
                            }
                            {
                              elm.n_place &&   <Table.Cell>{elm.n_place}</Table.Cell>
                            }
                            {
                                elm.n_page &&   <Table.Cell>{elm.n_page}</Table.Cell>
                            }
                            {
                              elm.responsable &&   <Table.Cell>{elm.responsable}</Table.Cell>
                            }
                            {
                                elm.auteur &&   <Table.Cell>{elm.auteur}</Table.Cell>
                              }
                            {
                              elm.admin &&  <Table.Cell>{elm.admin}</Table.Cell>
                            }
                            {
                            <Table.Cell>
                            <div className="last_table_item">
                                {
                                    title === "Conferences" && <p>Voir</p>
                                }
                                {
                                    title === "Articles" && elm.accepted !== null && <span style={{
                                        color:elm.accepted ? "#01FFA0" : "#FFB808",
                                    }}>{elm.accepted ? "Accepté" : "En attente"}</span>
                                }
                                <SettingsIcon />    
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
