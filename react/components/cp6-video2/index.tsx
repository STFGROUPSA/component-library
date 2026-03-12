import React from 'react'
import { Video } from 'vtex.store-video'

import { ITEM_TYPE } from '../../utils/constants'
import style from './style.css'

interface Cp6Video2Props {
    title: string;
    backgroundImage: string;
    loop?: boolean;
    autoplay?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    videoUrl: string;
}

export const Cp6Video2 = ({
    title,
    backgroundImage = '',
    loop = false,
    autoplay = false,
    muted = false,
    playsInline = false,
    videoUrl = "https://studiofco.myvtex.com/api/dataentities/VF/documents/6ad66fe0-2b88-4efc-8e7d-4e8e1f6f0d58/video/attachments/SPRING_STF_1920X1080.mp4",
}: Cp6Video2Props) => {

    console.log(backgroundImage, videoUrl, 'dataComponent')

    return (
        <div className={style.containerImageVideo} style={{ backgroundImage: backgroundImage }}>
            <h2>{title}</h2>
            <div>
                <Video
                    src={videoUrl}
                    loop={loop}
                    autoPlay={autoplay}
                    muted={muted}
                    playsInline={playsInline}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export const cp6Video2 = {
    title: 'Cp6Video2',
    description: 'A section with a video',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp6Video2],
        },
        title: {
            title: 'Title',
            type: 'string',
        },
        backgroundImage: {
            title: 'Background Image',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            }
        },
        loop: {
            title: 'Loop',
            type: 'boolean',
        },
        autoplay: {
            title: 'Autoplay',
            type: 'boolean',
        },
        muted: {
            title: 'Muted',
            type: 'boolean',
        },
        playsInline: {
            title: 'Plays Inline',
            type: 'boolean',
        },
        videoUrl: {
            title: 'Video URL',
            type: 'string',
        },
    },
}