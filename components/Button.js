import React from "react";

const Button = (props) => {

    const status = "Borrow";

    if(!props.checkout){
        status = 'Checkedout'
    }

    return (
        <div>
            <button type='submit'>{status}</button>
        </div>
    )
};

export default Button;
