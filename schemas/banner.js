export default {
  name: 'banner',
  type: 'object',
  title: 'Banners',
  fields: [
    {
      name: 'DesktopImage',
      title: 'Desktop Image',
      type: 'image',
    },
    {
      name: 'MobileImage',
      title: 'Mobile Image',
      type: 'image',
    },
    {
      name: 'link',
      type: 'url',
    },
  ],
}
