import React from 'react'
import { getSchema } from './schemas'
import { AutomaticCarousel } from './components/AutomaticCarousel';
import { LayoutImagesCards } from './components/LayoutImagesCards';

/* ----- Sections ----- */
import { SectionTwo } from './components/Sections/2';
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

                    case "Section 2":
                        return <SectionTwo key={index} dataComponent={comp} />

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

