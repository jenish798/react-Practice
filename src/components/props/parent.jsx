import React from "react";
import ChildComponent from "./child";

const ParentComponent = () => {
    const parentData = 'Data from parent';
  
    return (
      <div>
        <ChildComponent data={parentData} />
      </div>
    );
  }
  
  export default ParentComponent;