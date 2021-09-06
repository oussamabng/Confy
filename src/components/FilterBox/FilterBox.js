import React,{useState,useEffect} from 'react';
import "./FilterBox.css";
import { Search,Button } from 'semantic-ui-react';

import FilterItem from "./FilterItem.js";

const FilterBox = (props) => {
    const { title,filter,activeFilter } = props;
    const [active,setActive] = useState(activeFilter);

    const handleClickItem = (index)=>{
        setActive(index);
        //? OTHER FILTER LOGIC
    }

    useEffect(() => {
        setActive(activeFilter)
    }, []);

    return (
        <div className="confy_filterbox">
            <div className="search">
            <Search
                value={null}
                showNoResults={false}
                size="large"
                placeholder={"Recherche "+title}
            />
            <Button secondary>Rechercher</Button>
            </div>
            <div className="filter">
                {
                   filter && filter.map((title,index)=>
                        <FilterItem key={index} active={index===active} onClick={()=>handleClickItem(index)} title={title} />
                    )
                }
            </div>
        </div>
    )
}

export default FilterBox
