import { Desktop1 } from '../styled.tsx';
import React, {FC} from 'react';

type DesktopProps = {
    children?: React.ReactNode;
};

export const Desktop: FC<DesktopProps> = ({children}) => {
    return (
        <Desktop1>
            {children}
        </Desktop1>
    );
};