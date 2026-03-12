
import { componentManager } from "../components"
import { layoutImagesCards } from "../components/LayoutImagesCards"

import { cp1Banner1 } from "../components/cp1-banner1"
import { cp2Banner2 } from "../components/cp2-banner2"
import { cp3Producto1 } from "../components/cp3-producto1"
import { cp4Imagen1 } from "../components/cp4-imagen1"
import { cp5Video1 } from "../components/cp5-video1"
import { cp6Video2 } from "../components/cp6-video2"

import { ITEM_TYPE } from "../utils/constants"
import { __editorItemTitle, show } from "../utils/utils"

function getComponents(itemType: any) {
    const arr = Array()

    for (const prop in itemType) {
        arr.push(itemType[prop])
    }

    return arr
}

export const getSchema = () => ({
    title: 'Component library',
    description: 'A collection of reusable components for building landing pages.',
    type: 'object',
    properties: {
        ...componentManager,
        components: {
            title: "Components",
            type: 'array',
            items: {
                properties: {
                    __editorItemTitle: {
                        title: 'Component name',
                        default: 'Ítem',
                        type: 'string',
                    },
                    show,
                    itemType: {
                        title: 'Tipo de componente',
                        description: 'Type of component to render',
                        enum: getComponents(ITEM_TYPE),
                        enumNames: getComponents(ITEM_TYPE),
                    }
                },
                dependencies: {
                    itemType: {
                        oneOf: [
                            layoutImagesCards,
                            cp1Banner1,
                            cp2Banner2,
                            cp3Producto1,
                            cp4Imagen1,
                            cp5Video1,
                            cp6Video2,
                        ],
                    },
                },
            }
        },
    },
})
