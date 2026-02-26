// eslint-disable-next-line @typescript-eslint/naming-convention
export const __editorItemTitle = {
    title: 'Nombre del tab',
    default: 'Ítem',
    type: 'string',
}

export const show = {
    title: 'Do you want to show the section?',
    type: 'boolean',
    default: true,
}

export const device = {
    title: 'Device to be displayed',
    enumNames: ['Both', 'Desktop', 'Mobile'],
    enum: ['Both', 'Desktop', 'Mobile'],
    default: "Both",
    widget: {
        'ui:widget': 'select',
    },
}
