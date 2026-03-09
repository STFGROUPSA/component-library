import { automaticCarousel } from "../components/AutomaticCarousel"
import { layoutImagesCards } from "../components/LayoutImagesCards"

/* ----- Sections ----- */
import { sectionTwo } from "../components/Sections/2"

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
                            sectionTwo
                        ],
                    },
                },
            }
        },
    },
})
