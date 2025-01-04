import { Component_type } from "../styled";
import { Frame18 } from "../styled";
import { Searchhoso } from "../styled";
import { FC } from "react";

export const SearchBar: FC<Component_type>= ({children}) => {
    return (
        <Frame18>
            <Searchhoso>
                {children}
            </Searchhoso>
        </Frame18>
    )
} 
