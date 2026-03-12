import React from 'react'
import { getSchema } from './schemas'
import { AutomaticCarousel } from './components/AutomaticCarousel';
import { LayoutImagesCards } from './components/LayoutImagesCards';

/* ----- Sections ----- */
import { Cp2Banner2 } from './components/cp2-banner2';
import { Cp4Imagen1 } from './components/cp4-imagen1';
/* ----- Sections ----- */


const Item = ({ ctx }: any) => {

    const filteredComponents = ctx?.filter((tab: any) => tab.show) ?? [];

    return (
        <div>
            {filteredComponents.map((comp: any, index: number) => {

                switch (comp?.itemType) {
                    case "Automatic Carousel":
                        return <AutomaticCarousel key={index} dataComponent={comp} />

                    case "Layout Images Cards":
                        return <LayoutImagesCards key={index} dataComponent={comp} />

                    case "Cp2 Banner 2":
                        return <Cp2Banner2 key={index} dataComponent={comp} />

                    case "Cp4 Imagen 1":
                        return <Cp4Imagen1 key={index} dataComponent={comp} />

                    default:
                        return null
                }
            })}
        </div>
    );
}

const GeneratorTabs = ({ components }: any) => {

    return (
        <>
            <Item ctx={components} />
        </>
    )
}

export default GeneratorTabs

GeneratorTabs.getSchema = () => getSchema()

