import {defineField, defineType} from 'sanity'

export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'disabled',
      title: 'Disabled',
      type: 'boolean',
      initialValue: 'false',
    },
  ],
}
