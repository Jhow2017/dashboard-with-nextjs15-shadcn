import React from 'react';

//types
import { DsTitleTypes } from './types';

//@ds
import { ComponentMounter } from '@ds/lib/component-mounter';

//variants
import { titleVariants } from './titleVariants';

const DsTitle = (props: DsTitleTypes) => {
    const {
        as,
        size,
        fontWeight,
        fontFamily,
        lineHeight,
        children,
        className,
        ...rest
    } = props;
    return (
        <ComponentMounter
            as={as || 'h1'}
            className={titleVariants({
                size,
                fontWeight,
                fontFamily,
                lineHeight,
                className,
            })}
            {...rest}
        >
            {children}
        </ComponentMounter>
    );
};

export default DsTitle;
