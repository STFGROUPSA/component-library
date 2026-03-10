import React from 'react';
import { index as RichText } from 'vtex.rich-text';
import { useDevice } from 'vtex.device-detector';
import { Image } from 'vtex.store-image';


import style from './style.css';
import { ITEM_TYPE } from '../../../utils/constants';

export const Cp4Imagen1 = ({ dataComponent }: any) => {

    const { text1, text2, text3, text4, imageDesktop1, imageMobile1, imageDesktop2, imageMobile2, imageDesktop3, imageMobile3 } = dataComponent;

    const { isMobile } = useDevice();

    return (
        <div className={style.containerSectionFour}>
            <div className={style.box1}>
                <div className={`${style.textContainer} ${style.text1}`}>
                    <RichText text={text1} />
                </div>
                <div className={style.imageContainer}>
                    <Image src={isMobile ? imageMobile1 : imageDesktop1} />
                </div>
                <div className={`${style.textContainer} ${style.text2}`}>
                    <RichText text={text2} />
                </div>
            </div>
            <div className={style.box2}>
                <div className={`${style.childBox} ${style.childBox1}`}>
                    <div className={style.imageContainer}>
                        <Image src={isMobile ? imageMobile2 : imageDesktop2} />
                    </div>
                    <div className={`${style.textContainer} ${style.text3}`}>
                        <RichText text={text3} />
                    </div>
                </div>
                <div className={`${style.childBox} ${style.childBox2}`}>
                    <div className={style.imageContainer}>
                        <Image src={isMobile ? imageMobile3 : imageDesktop3} />
                    </div>
                    <div className={`${style.textContainer} ${style.text4}`}>
                        <RichText text={text4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const cp4Imagen1 = {
    title: 'Section Four',
    description: 'A section with an image and text',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp4Imagen1],
        },
        text1: {
            title: 'Texto 1',
            type: 'string',
            widget: {
                'ui:widget': 'textarea',
            },
        },
        imageDesktop1: {
            title: 'Image Desktop',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        imageMobile1: {
            title: 'Image Mobile',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        text2: {
            title: 'Texto 2',
            type: 'string',
            widget: {
                'ui:widget': 'textarea',
            },
        },
        imageDesktop2: {
            title: 'Image Desktop 2',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        imageMobile2: {
            title: 'Image Mobile 2',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        text3: {
            title: 'Texto 3',
            type: 'string',
            widget: {
                'ui:widget': 'textarea',
            },
        },
        imageDesktop3: {
            title: 'Image Desktop 3',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        imageMobile3: {
            title: 'Image Mobile 3',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        text4: {
            title: 'Texto 4',
            type: 'string',
            widget: {
                'ui:widget': 'textarea',
            },
        },
    },
}

