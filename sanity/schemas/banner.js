 const banner = {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'title2',
        title: 'Title2',
        type: 'string',
      },
      {
        name: 'isActive',
        title: 'isActive',
        type: 'boolean',
      },
     
       {
  
        name: 'url',
        title: 'url',
        type: 'string',
       },
       {
  
        name: 'urlTitle',
        title: 'urlTitle',
        type: 'string',
       },
  
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
    ] }

    export default banner