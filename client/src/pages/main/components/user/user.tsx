import React from "react";

export const User = ({userName, id}) => {
    return (<div style={{background: 'silver', borderRadius: '4px', padding: '5px'}} >
        {userName}
    </div>)
}