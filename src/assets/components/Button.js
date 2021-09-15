
import React from "react";

function Button({children, isDisabled})   {
    return  (
        <button disabled={isDisabled}>{children}</button>
    );
}

export default Button;