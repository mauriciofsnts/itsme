import BackgroundImage from "../components/css/backgroundImage"

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

const cssPropertieConfig = [
  // {
  //   name: 'Background Color',
  //   options: [{ label: 'Color', value: 'color', type: 'text' }],
  // },
  {
    name: 'Background Image',
    render: BackgroundImage,
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
    ],
  },
]

export { properties, cssPropertieConfig }
