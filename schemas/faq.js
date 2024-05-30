import languages from './languages'

export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      required: true,
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {type: 'image'},
        {
          name: 'Banners',
          type: 'banner',
          title: 'Banners',
        },
        // maybe temp here, maybe we need, will see
        {type: 'table', title: 'Table', name: 'table'},
        {
          name: 'groupedImages',
          type: 'object',
          title: 'Grouped Images',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'banner1',
              title: 'Banner 1',
              type: 'banner',
            },
            {
              name: 'banner2',
              title: 'Banner 2',
              type: 'banner',
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'categories'}],
      required: true,
    },
    {
      name: 'URL',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 96,
      },
      required: true,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'popular',
      title: 'Popular',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'disabled',
      title: 'Disabled',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'language',
      title: 'Language',
      type: 'reference',
      to: [{type: languages.name}],
      validation: (rule) => rule.required(),
    },
  ],
}
