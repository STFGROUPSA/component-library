import React from 'react';
import { Link } from 'vtex.render-runtime';
import { SliderLayout } from "vtex.slider-layout";
import { useDevice } from 'vtex.device-detector';
import styles from './styles.css'
import { ITEM_TYPE } from '../../utils/constants';

interface Image {
    image: string;
    linkImage: string;
    titleImage: string;
    altImage: string;
    nameProduct?: string;
    priceProduct?: string;
}

/*

interface SecundaryImage extends Image {
    nameProduct: string;
    priceProduct: string;
}

interface CardImage {
    __editorItemTitle: string;
    cardsReverse: boolean;
    principalImage: Image[];
    secundaryImage: SecundaryImage[];
} */

// Configuración del slider
const sliderSettings = {
    itemsPerPage: {
        desktop: 1,
        tablet: 1,
        phone: 1
    },
    infinite: true,
    showNavigationArrows: 'always',
    showPaginationDots: 'always',
    /* autoplay: {
        timeout: 3000,
        stopOnHover: false
    }, */
    centerMode: 'disabled',
    slidesToScroll: 1
};

export const LayoutImagesCards = ({ dataComponent }: any) => {

    const { cardsReverse, principalImage, secundaryImage } = dataComponent;

    const { isMobile } = useDevice();

    return (
        <div
            className={styles.containerCards}
            style={{
                flexDirection: isMobile ? 'column' : cardsReverse ? 'row-reverse' : 'row',
                marginBottom: '20px'
            }}
        >
            <div className={styles.containerPrimaryImage}>
                <SliderLayout {...sliderSettings}>
                    {principalImage?.map((img: Image, idx: number) => (
                        <Link key={idx} to={img.linkImage} className={styles.primaryImage}>
                            <img src={img.image} alt={img.altImage} title={img.titleImage} style={{ width: '100%' }} />
                        </Link>
                    ))}
                </SliderLayout>

            </div>
            <div className={styles.containerSecundaryImages}>
                {secundaryImage?.map((img: Image, idx: number) => (
                    <Link className={styles.secundaryImage} key={idx} to={img.linkImage}>
                        <img src={img.image} alt={img.altImage} title={img.titleImage} />
                        <p>{img.nameProduct}</p>
                        <p>{img.priceProduct}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export const layoutImagesCards = {
    title: "Layout cards with images",
    description: "A customizable layout cards with images component",
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.LAYOUT_IMAGES_CARDS],
        },
        __editorItemTitle: {
            title: 'Sección name',
            type: 'string',
        },
        cardsReverse: {
            title: 'Cards Reverse',
            type: 'boolean',
            default: false,
        },
        principalImage: {
            type: 'array',
            title: 'Principal Images',
            items: {
                type: 'object',
                properties: {
                    image: {
                        title: 'Image',
                        type: 'string',
                        widget: {
                            'ui:widget': 'image-uploader',
                        },
                    },
                    linkImage: {
                        title: 'Link Principal Image',
                        type: 'string',
                    },
                    titleImage: {
                        title: 'Title Image',
                        type: 'string',
                    },
                    altImage: {
                        title: 'Alt Image',
                        type: 'string',
                    }
                }
            },
        },
        secundaryImage: {
            type: 'array',
            title: 'Secundary Images',
            items: {
                type: 'object',
                properties: {
                    image: {
                        title: 'Image',
                        type: 'string',
                        widget: {
                            'ui:widget': 'image-uploader',
                        },
                    },
                    linkImage: {
                        title: 'Link Secundary Image',
                        type: 'string',
                    },
                    titleImage: {
                        title: 'Title Image',
                        type: 'string',
                    },
                    altImage: {
                        title: 'Alt Image',
                        type: 'string',
                    },
                    nameProduct: {
                        title: 'Name Product',
                        type: 'string',
                    },
                    priceProduct: {
                        title: 'Price Product',
                        type: 'string',
                    }
                },
            }
        },
    }
}
