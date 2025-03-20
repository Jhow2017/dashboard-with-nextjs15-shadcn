import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentMounter } from '@ds/lib/component-mounter';

const textVariants = cva('font-roboto font-normal', {
    variants: {
        size: {
            xxlarge: 'text-[1.5rem] leading-[2rem]',
            xlarge: 'text-[1.25rem] leading-[1.75rem]',
            large: 'text-[1.125rem] leading-[1.625rem]',
            medium: 'text-[1rem] leading-[1.5rem]',
            small: 'text-[0.875rem] leading-[1.25rem]',
            xsmall: 'text-[0.75rem] leading-[1rem]',
        },
        fontWeight: {
            normal: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
        fontFamily: {
            roboto: 'font-roboto',
            inter: 'font-inter',
        },
        lineHeight: {
            tight: 'leading-tight',
            normal: 'leading-normal',
            loose: 'leading-loose',
        },
    },
    defaultVariants: {
        size: 'medium',
        fontWeight: 'normal',
        fontFamily: 'roboto',
        lineHeight: 'normal',
    },
});

type DsTextOwnProps = VariantProps<typeof textVariants>;

export type DsTextProps = {
    size?: DsTextOwnProps['size'];
    fontWeight?: DsTextOwnProps['fontWeight'];
    fontFamily?: DsTextOwnProps['fontFamily'];
    lineHeight?: DsTextOwnProps['lineHeight'];
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
};

const DsText = (props: DsTextProps) => {
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
