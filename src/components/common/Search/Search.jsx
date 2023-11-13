import React from 'react';
import Breadcrumbs from "../../features/Breadcrumbs/Breadcrumbs";
import NewFurniture from "../../features/NewFurniture/NewFurniture";
import NewFurnitureContainer from "../../features/NewFurniture/NewFurnitureContainer";

const Search = () => {
  return (
    <div className='container pt-5'>
      <Breadcrumbs category={"New Furniture"}/>
      <NewFurnitureContainer/>
    </div>
  );
};

export default Search;
