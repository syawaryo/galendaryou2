import { Frame5 as StyledFrame5 } from "../styled";
import { FC } from "react";
import { Component_type } from "../styled";



export const Frame5:FC<Component_type> = ({children}) => {
    return (
        <StyledFrame5>
            {children}
        </StyledFrame5>
    )
}