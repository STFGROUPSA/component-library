import React from 'react'
import { getSchema } from './schemas'
import { ComponentManager } from './components'

const ComponentLibrary = (props: any) => {

    return (
        <>
            <ComponentManager {...props} />
        </>
    )
}

export default ComponentLibrary

ComponentLibrary.getSchema = () => getSchema()

