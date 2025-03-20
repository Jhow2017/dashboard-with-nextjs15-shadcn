import { VariantProps } from 'class-variance-authority';

//types
import { ComponentMounterTypes } from '@ds/lib/component-mounter';

//variants
import { textVariants } from './textVariants';

type DsTextOwnProps = VariantProps<typeof textVariants>;

export type DsTextTypes = {
    size?: DsTextOwnProps['size'];
    fontWeight?: DsTextOwnProps['fontWeight'];
    fontFamily?: DsTextOwnProps['fontFamily'];
    lineHeight?: DsTextOwnProps['lineHeight'];
} & ComponentMounterTypes;
