import React from 'react'
import { Image } from 'vtex.store-image';
import { Link } from 'vtex.render-runtime';

import { ITEM_TYPE } from '../../utils/constants'
import style from './style.css'

interface Cp8Producto2Props {
    image1: string;
    productName1: string;
    productPrice1: string;
    productUrl1: string;
    image2: string;
    productName2: string;
    productPrice2: string;
    productUrl2: string;
    colorTextAll?: string;
}

export const Cp8Producto2 = ({
    image1 = "https://dummyimage.com/959x1194/d6d6d6/fff.jpg",
    productName1 = "Product 1",
    productPrice1 = "$100",
    productUrl1 = "#",
    image2 = "https://dummyimage.com/959x1194/d6d6d6/fff.jpg",
    productName2 = "Product 2",
    productPrice2 = "$150",
    productUrl2 = "#",
    colorTextAll = "#000000"
}: Cp8Producto2Props) => {

    return (
        <div className={style.containerProducts}>
            <Link to={productUrl1} className={style.containerImage}>
                <Image src={image1} />
                <div className={style.containerTexts}>
                    <p className={style.paragraph} style={{ color: colorTextAll}}>
                        {productName1}
                    </p>
                    <p className={style.paragraph} style={{ color: colorTextAll}}>
                        {productPrice1}
                    </p>
                </div>
            </Link>
            <Link to={productUrl2} className={style.containerImage}>
                <Image src={image2} />
                <div className={style.containerTexts}>
                    <p className={style.paragraph} style={{ color: colorTextAll}}>
                        {productName2}
                    </p>
                    <p className={style.paragraph} style={{ color: colorTextAll}}>
                        {productPrice2}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export const cp8Producto2 = {
    title: 'Cp8Producto2',
    description: 'A section with two products and text',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp8Producto2],
        },
        image1: {
            title: 'Image 1',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        productName1: {
            title: 'Product Name 1',
            type: 'string',
        },
        productPrice1: {
            title: 'Product Price 1',
            type: 'string',
        },
        productUrl1: {
            title: 'Product URL 1',
            type: 'string',
        },
        image2: {
            title: 'Image 2',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },
        productName2: {
            title: 'Product Name 2',
            type: 'string',
        },
        productPrice2: {
            title: 'Product Price 2',
            type: 'string',
        },
        productUrl2: {
            title: 'Product URL 2',
            type: 'string',
        },
        colorTextAll: {
            title: 'Color Text',
            type: 'string',
            default: '#000000',
            widget: {
                'ui:widget': 'color',
            },
        }
    }
}
