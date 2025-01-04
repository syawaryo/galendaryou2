import { Frame9 as StyledFrame9 } from "../styled.tsx";
import React, {FC} from 'react';

type Frame9Props = {
    children?: React.ReactNode;
};

export const Frame9: FC<Frame9Props> = ({children}) => {
    return (
        <StyledFrame9>
            {children}
        </StyledFrame9>
    )

};