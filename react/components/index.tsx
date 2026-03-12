import React from 'react'

import { LayoutImagesCards } from "./LayoutImagesCards";
import { Cp1Banner1 } from "./cp1-banner1";
import { Cp2Banner2 } from "./cp2-banner2";
import { Cp3Producto1 } from "./cp3-producto1";
import { Cp4Imagen1 } from "./cp4-imagen1";
import { Cp5Video1 } from './cp5-video1';
import { Cp6Video2 } from './cp6-video2';

import style from "./style.css"

export const ComponentManager = ({ components, gap, background }: any) => {

    const filteredComponents = components?.filter((tab: any) => tab.show) ?? [];

    const designeContainer: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: `${gap}px`,
        backgroundColor: background,
    }

    return (
        <div className={style.containerManager} style={designeContainer}>
            {filteredComponents.map((comp: any, index: number) => {

                switch (comp?.itemType) {

                    case "Layout Images Cards":
                        return <LayoutImagesCards key={index} {...comp} />

                    case "Cp1 Banner 1":
                        return <Cp1Banner1 key={index} {...comp} />

                    case "Cp2 Banner 2":
                        return <Cp2Banner2 key={index} {...comp} />

                    case "Cp3 Producto 1":
                        return <Cp3Producto1 key={index} {...comp} />

                    case "Cp4 Imagen 1":
                        return <Cp4Imagen1 key={index} {...comp} />

                    case "Cp5 Video 1":
                        return <Cp5Video1 key={index} {...comp} />

                    case "Cp6 Video 2":
                        return <Cp6Video2 key={index} {...comp} />

                    default:
                        return null
                }
            })}
        </div>
    );
}

export const componentManager = {
    gap: {
        title: 'Gap between components',
        description: 'Spacing between components (in px)',
        type: 'number',
        default: 2,
    },
    background: {
        title: 'Background color',
        description: 'Background color for the component library',
        type: 'string',
        default: '#ffffff',
        widget: {
            'ui:widget': 'color',
        },
    },
}
