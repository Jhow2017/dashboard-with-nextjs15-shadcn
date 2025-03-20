import { cva } from 'class-variance-authority';


export const titleVariants = cva('font-inter font-bold', {
    variants: {
        size: {
            xxlarge: 'text-[3rem] leading-[3.5rem]',
            xlarge: 'text-[2.5rem] leading-[3rem]',
            large: 'text-[2rem] leading-[2.5rem]',
            medium: 'text-[1.75rem] leading-[2rem]',
            small: 'text-[1.5rem] leading-[1.75rem]',
            xsmall: 'text-[1.25rem] leading-[1.5rem]',
        },
        fontWeight: {
            normal: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
        fontFamily: {
            inter: 'font-inter',
            roboto: 'font-roboto',
        },
        lineHeight: {
            tight: 'leading-tight',
            normal: 'leading-normal',
            loose: 'leading-loose',
        },
    },
    defaultVariants: {
        size: 'medium',
        fontWeight: 'bold',
        fontFamily: 'inter',
        lineHeight: 'normal',
    },
});
