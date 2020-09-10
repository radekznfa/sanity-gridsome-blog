
export default {
  name: 'propertyPage',
  type: 'document',
  title: 'Property Page',
  fields: [
    {
      name: 'proertyname',
      type: 'string',
      title: 'Property Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This value appears in the URL ofh.ca/properties/this-new-property',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'featureHighlights',
      type: 'array',
      title: 'Feature Highlights',
      of: [{type: 'block'}]
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current'
    }
  }
}
