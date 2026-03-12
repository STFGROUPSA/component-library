import React from 'react'
import { Video } from 'vtex.store-video'
import { ITEM_TYPE } from '../../utils/constants';

import style from './style.css'

interface Cp5Video1Props {
    loop?: boolean;
    autoplay?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    videoUrl: string;
}

export const Cp5Video1 = ({
    loop = false,
    autoplay = false,
    muted = false,
    playsInline = false,
    videoUrl = "https://studiofco.myvtex.com/api/dataentities/VF/documents/6ad66fe0-2b88-4efc-8e7d-4e8e1f6f0d58/video/attachments/SPRING_STF_1920X1080.mp4",
}: Cp5Video1Props) => {

    return (
        <div className={style.containerVideo}>
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
    )
}

export const cp5Video1 = {
    title: 'Cp5Video1',
    description: 'A section with a video',
    type: 'object',
    properties: {
        itemType: {
            enum: [ITEM_TYPE.Cp5Video1],
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
