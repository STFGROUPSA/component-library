import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'vtex.render-runtime';
import { Icon } from 'vtex.store-icons';

import getProductsCollection from '../../graphql/getProductsCollection.gql';
import style from './styles.css';
import { ITEM_TYPE } from '../../utils/constants';

interface Product {
    productName: string;
    link: string;
    priceRange?: {
        listPrice: {
            lowPrice: number;
            highPrice: number;
        };
    };
    items: {
        images: {
            imageUrl: string;
        }[];
    }[];
}

interface Cp3Producto1Props {
    title?: string;
    showTitle?: boolean;
    showArrows?: boolean;
    showProgressBar?: boolean;
    activeShelf?: boolean;
    collection?: string;
    hideUnavailableItems?: boolean;
    orderBy?: string;
    totalProducts?: number;
}

export const Cp3Producto1 = ({
    title = 'Productos relacionados',
    showTitle = false,
    showArrows = false,
    showProgressBar = false,
    activeShelf = false,
    collection = '13205',
    hideUnavailableItems = false,
    orderBy = 'OrderByTopSaleDESC',
    totalProducts = 30,
}: Cp3Producto1Props) => {
    const [dataProducts, setDataProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const barRef = useRef<HTMLDivElement | null>(null);
    const scrollInterval = useRef<number | null>(null);

    // 1. Función única para actualizar la barra
    const updateBarProgress = () => {
        if (!containerRef.current || !barRef.current) return;

        const el = containerRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;

        // Evitamos división por cero si no hay scroll disponible
        if (maxScroll <= 0) return;

        const percent = (el.scrollLeft / maxScroll) * 100;
        barRef.current.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    };

    // 2. Efecto para escuchar el scroll manual (dedos/mouse)
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateBarProgress);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', updateBarProgress);
            }
        };
    }, [loading]); // Se vuelve a bindear cuando los datos cargan y el ref existe

    const { data, loading: loadingQuery, error } = useQuery(getProductsCollection, {
        variables: { collection, totalProducts, hideUnavailableItems, orderBy },
    });

    useEffect(() => {
        if (loadingQuery) {
            setLoading(true);
            return;
        }
        if (data) {
            setLoading(false);
            setDataProducts(data.products);
        }
    }, [data, loadingQuery, error]);

    const startScroll = (direction: 'left' | 'right') => {
        stopScroll();
        scrollInterval.current = window.setInterval(() => {
            if (!containerRef.current) return;
            containerRef.current.scrollLeft += direction === 'left' ? -8 : 8;

            // Ya no necesitamos actualizar la barra aquí manualmente,
            // porque el evento 'scroll' se disparará solo.
        }, 10);
    };

    const stopScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    if (loading) return null;

    return (
        <div className={style['container-carousel']}>
            <span className={style['title-carousel']}>
                {showTitle && title}
            </span>
            <div
                ref={containerRef}
                className={`${style['container-image']} ${activeShelf ? style['active-shelf'] : ''}`}
                id="responsiveContainerLinkList"
                style={{ overflowX: 'auto', scrollBehavior: 'smooth' }} // Asegúrate de tener scroll horizontal habilitado
            >
                {dataProducts.map((product, index) => {
                    const { productName, link, items } = product;
                    return (
                        <Link to={link} className={style['image-link']} key={index}>
                            <img src={items[0]?.images[0]?.imageUrl} alt={productName} />
                        </Link>
                    );
                })}
                {showArrows && (
                    <div className={style['container-butonns']}>
                        <button
                            className={style['button-scroll-left']}
                            onMouseEnter={() => startScroll('left')}
                            onMouseLeave={stopScroll}
                            onTouchStart={() => startScroll('left')}
                            onTouchEnd={stopScroll}
                        >
                            <Icon id={'nav-thin-caret--left'} />
                        </button>

                        <button
                            className={style['button-scroll-right']}
                            onMouseEnter={() => startScroll('right')}
                            onMouseLeave={stopScroll}
                            onTouchStart={() => startScroll('right')}
                            onTouchEnd={stopScroll}
                        >
                            <Icon id={'nav-thin-caret--right'} />
                        </button>
                    </div>
                )}
            </div>

            {showProgressBar && (
                <div className={style['scroll-progress-container']}>
                    <div ref={barRef} className={style['scroll-progress-bar']} style={{ width: '0%' }} />
                </div>
            )}
        </div>
    );
};


export const cp3Producto1 = {
    title: "Automatic Carousel",
    description: "A carousel that scrolls automatically when the user hovers over the arrows.",
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp3Producto1],
        },
        __editorItemTitle: {
            title: 'Sección name',
            type: 'string',
        },
        showTitle: {
            title: 'Mostrar título del carrusel',
            type: 'boolean',
            default: false,
        },
        showArrows: {
            title: 'Mostrar flechas de navegación',
            type: 'boolean',
            default: false,
        },
        showProgressBar: {
            title: 'Mostrar barra de progreso',
            type: 'boolean',
            default: false,
        },
        title: {
            title: 'Título del carrusel',
            type: 'string',
            default: 'Productos relacionados',
        },
        totalProducts: {
            title: 'Número total de productos a mostrar',
            type: 'number',
            default: 30,
        },
        activeShelf: {
            title: 'Activar la vista tipo shelf',
            type: 'boolean',
            default: false,
        },
        collection: {
            title: 'Colección de productos',
            type: 'string',
            default: '13205',
        },
        hideUnavailableItems: {
            title: 'Ocultar productos no disponibles',
            type: 'boolean',
            default: false,
        },
        orderBy: {
            title: 'Ordenar productos por',
            type: 'string',
            enum: ['OrderByTopSaleDESC', 'OrderByReleaseDateDESC', 'OrderByPriceDESC', 'OrderByPriceASC'],
            enumNames: ['Más vendidos', 'Fecha de lanzamiento', 'Precio descendente', 'Precio ascendente'],
            default: 'OrderByTopSaleDESC',
        }
    },
}
