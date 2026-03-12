import React from 'react'
import { useDevice } from 'vtex.device-detector';
import { Image } from 'vtex.store-image';
import { Link } from 'vtex.render-runtime';

import { ITEM_TYPE } from '../../utils/constants'
import style from './style.css';

interface Cp1Banner1Props {
    imageDesktop: string;
    imageMobile: string;
    link: string;
}

export const Cp1Banner1 = ({ imageDesktop, imageMobile, link }: Cp1Banner1Props) => {

    const { isMobile } = useDevice();

    console.log(imageDesktop, imageMobile, 'dataComponent')
    return (
        <div className={style.containerBanner}>
            <Link to={link} className={style.banner}>
                <Image src={isMobile ? imageMobile : imageDesktop} />
            </Link>

        </div>
    )
}

export const cp1Banner1 = {
    title: 'Cp1Banner1',
    description: 'A section with an image',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp1Banner1],
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
        link: {
            title: 'Url Link',
            type: 'string',
        }
    },
}
