export default {
  name: 'legalDocument',
  title: 'Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'URL',
      title: 'Internal Name',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'entity',
      title: 'Entity',
      type: 'reference',
      to: [{type: 'legalEntities'}],
    },
    {
      title: 'Version',
      name: 'version',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      title: 'Upload Document',
      name: 'uploadDoc',
      type: 'file',
    },
  ],
}
