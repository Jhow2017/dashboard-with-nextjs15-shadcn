import { VariantProps } from 'class-variance-authority';

//@ds
import {
    ComponentMounterTypes,
} from '@ds/lib/component-mounter';
import { titleVariants } from './titleVariants';


type DsTitleOwnProps = VariantProps<typeof titleVariants>;

export type DsTitleTypes = {
    size?: DsTitleOwnProps['size'];
    fontWeight?: DsTitleOwnProps['fontWeight'];
    fontFamily?: DsTitleOwnProps['fontFamily'];
    lineHeight?: DsTitleOwnProps['lineHeight'];
} & ComponentMounterTypes;