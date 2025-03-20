import React, { ReactNode } from 'react';

export type ComponentMounterTypes = {
    as?: React.ElementType;
    children?: ReactNode;
    className?: string;
};
export const ComponentMounter = (props: ComponentMounterTypes) => {
    const { as, children, ...attr } = props;
    const Component = as || 'div';
    return <Component {...attr}>{children}</Component>;
};
