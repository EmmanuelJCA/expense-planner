import { useState } from "react";

const Message = ({children, type}) => {
    return (
        <div className={`alert ${type}`}>
            {children}
        </div>
    )
}

export default Message