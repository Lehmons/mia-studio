export default {
  type: 'object',
  name: 'imageBlock',
  title: 'Image Block',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
          description: 'Ensure alt text is filled in for accessibility',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      media: 'image',
    },
  },
}
