import React from 'react';
import { index as RichText } from 'vtex.rich-text';
import { useDevice } from 'vtex.device-detector';
import { Image } from 'vtex.store-image';

import style from './style.css';
import { ITEM_TYPE } from '../../utils/constants';

export const Cp2Banner2 = ({ dataComponent }: any) => {

    const { title = "SPRING", imageDesktop = "https://studiofco.vtexassets.com/assets/vtex.file-manager-graphql/images/7e1986d0-4413-45a5-b1dc-42c52e9e7837___21a208036691ad31185c1843f8650646.jpg", imageMobile = "https://studiofco.vtexassets.com/assets/vtex.file-manager-graphql/images/5f3bdfa3-7dc8-46f4-9578-fc09faba2c58___2479df257b3dbc9dadd2d7ede155152e.jpg", backgroundColor1 = "#bcbcbc", backgroundColor2 = "#7b7b7b" } = dataComponent;

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

export const cp2Banner2 = {
    title: 'Cp2Banner2',
    description: 'A section with an image and text',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp2Banner2],
        },
        title: {
            title: 'Titlo de la sección',
            type: 'string'
        },
        imageDesktop: {
            title: 'Image Desktop',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            }
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
            }
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
