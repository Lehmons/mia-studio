export default {
  type: 'document',
  name: 'artist',
  title: 'Artist',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => `/${input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)}`,
      },
    },
    {
      title: 'Discipline',
      name: 'discipline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [{type: 'imageBlock'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'blocks.length',
    },
    prepare({title, blocks}) {
      return {
        title: title ? title : 'No title defined',
        subtitle: blocks ? `${blocks} blocks` : 'No blocks defined',
      }
    },
  },
}
