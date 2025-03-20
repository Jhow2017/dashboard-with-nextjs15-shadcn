import React from 'react';

//types
import { DsTextTypes } from './types';

//@ds
import { ComponentMounter } from '@ds/lib/component-mounter';

//variants
import { textVariants } from './textVariants';

const DsText = (props: DsTextTypes) => {
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
            as={as || 'p'}
            className={textVariants({
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

export default DsText;
