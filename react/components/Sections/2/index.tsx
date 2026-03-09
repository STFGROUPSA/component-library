import React from 'react';
import { index as RichText } from 'vtex.rich-text';
import { useDevice } from 'vtex.device-detector';
import { Image } from 'vtex.store-image';

import style from './style.css';
import { ITEM_TYPE } from '../../../utils/constants';

export const SectionTwo = ({ dataComponent }: any) => {

    const { title, imageDesktop, imageMobile, backgroundColor1, backgroundColor2 } = dataComponent;

    const { isMobile } = useDevice();

    return (
        <div className={style.containerSectionTwo}>
            <div className={style.box1} style={{ backgroundColor: backgroundColor1 }}>
                <div className={style.imageContainer}>
                    <Image src={isMobile ? imageMobile : imageDesktop} />
                </div>
                <div className={style.textContainer}>
                    <RichText text={title} />
                </div>
            </div>
            <div className={style.box2} style={{ backgroundColor: backgroundColor2 }}>

            </div>
        </div>
    )
}

export const sectionTwo = {
    title: 'Section Two',
    description: 'A section with an image and text',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.SECTION_TWO],
        },
        title: {
            title: 'Titlo de la sección',
            type: 'string',
            default: 'SPRING'
        },
        imageDesktop: {
            title: 'Image Desktop',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        imageMobile: {
            title: 'Image Mobile',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        backgroundColor1: {
            title: 'Background Color Box 1',
            type: 'string',
            widget: {
                'ui:widget': 'color',
            },
        },
        backgroundColor2: {
            title: 'Background Color Box 2',
            type: 'string',
            widget: {
                'ui:widget': 'color',
            },
        },
    },
}
