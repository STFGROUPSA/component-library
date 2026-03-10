import { automaticCarousel } from "../components/AutomaticCarousel"
import { layoutImagesCards } from "../components/LayoutImagesCards"

/* ----- Sections ----- */
import { cp2Banner2 } from "../components/Sections/cp2-banner2"
import { cp4Imagen1 } from "../components/Sections/cp4-imagen1"

/* ----- Sections ----- */

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
                            automaticCarousel,
                            cp2Banner2,
                            cp4Imagen1
                        ],
                    },
                },
            }
        },
    },
})
