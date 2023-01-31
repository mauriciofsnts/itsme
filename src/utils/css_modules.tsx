import Box from '../components/css/box'

const properties = [
  {
    name: 'Layout',
    properties: [
      'Flexbox Items',
      'Flexbox Menu Bar',
      'Flexbox Gallery',
      'Grid Items',
      'Grid Page',
      'Float',
    ],
  },
  {
    name: 'Background',
    properties: ['Background Color', 'Background Gradient', 'Background Image'],
  },
  {
    name: 'Border',
    properties: ['Border', 'Border Radius', 'Box Shadow'],
  },
  {
    name: 'Transform',
    properties: ['Translate', 'Rotate', 'Scale', 'Skew'],
  },
  {
    name: 'Filter',
    properties: [
      'Blur',
      'Brightness',
      'Contrast',
      'Grayscale',
      'Hue-Rotate',
      'Invert',
      'Saturate',
      'Sepia',
    ],
  },
  {
    name: 'Text',
    properties: ['Text', 'Text Shadow'],
  },
]

type ICssPropertieConfig = {
  name: string
  render: React.FC<any>
  initialValues: any
  options: {
    label: string
    value: string
    type: string
    options?: {
      label: string
      value: string
    }[]
  }[]
}

const cssPropertieConfig: ICssPropertieConfig[] = [
  {
    name: 'Border',
    render: Box,
    initialValues: {
      border: '1px solid #6875da',
    },
    options: [
      {
        label: 'Border',
        value: 'border',
        type: 'text',
      },
    ],
  },

  {
    name: 'Border Radius',
    render: Box,
    initialValues: {
      borderRadius: '0px',
    },
    options: [
      {
        label: 'Border Radius',
        value: 'borderRadius',
        type: 'text',
      },
    ],
  },

  

  {
    name: 'Background Color',
    render: Box,
    initialValues: {
      backgroundColor: '#6875da',
    },
    options: [
      {
        label: 'Color',
        value: 'backgroundColor',
        type: 'color',
      },
    ],
  },

  {
    name: 'Background Image',
    render: Box,
    initialValues: {
      backgroundImage:
        'https://cdn.pixabay.com/photo/2012/09/06/21/33/landscape-56314_960_720.png',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#6875da',
    },
    options: [
      { label: 'Image URL', value: 'backgroundImage', type: 'text' },
      {
        label: 'Position',
        value: 'backgroundPosition',
        type: 'select',
        options: [
          { label: 'Left top', value: 'left top' },
          { label: 'Left center', value: 'left center' },
          { label: 'Left bottom', value: 'left bottom' },
          { label: 'Center top', value: 'center top' },
          { label: 'Center', value: 'center' },
          { label: 'Center bottom', value: 'center bottom' },
          { label: 'Right top', value: 'right top' },
          { label: 'Right', value: 'right' },
          { label: 'Right bottom', value: 'right bottom' },
        ],
      },

      {
        label: 'Size',
        value: 'backgroundSize',
        type: 'select',
        options: [
          { label: 'Auto', value: 'auto' },
          { label: 'Cover', value: 'cover' },
          { label: 'Contain', value: 'contain' },
        ],
      },

      {
        label: 'Repeat',
        value: 'backgroundRepeat',
        type: 'select',
        options: [
          { label: 'No repeat', value: 'no-repeat' },
          { label: 'Repeat', value: 'repeat' },
          { label: 'Repeat X', value: 'repeat-x' },
          { label: 'Repeat Y', value: 'repeat-y' },
        ],
      },

      {
        label: 'Color',
        value: 'backgroundColor',
        type: 'color',
      },
    ],
  },
]

export { properties, cssPropertieConfig }
export type { ICssPropertieConfig }
