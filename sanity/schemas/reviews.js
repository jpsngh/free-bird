export const reviews = {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 10,
        },
      },
    
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },{
        name:"month",
        title:"Month",
        type:"string"
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name:"author",
        title:"Author",
        type:"string"
      },
      {
        name: 'authorImage',
        title: 'Author Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }
    ],
  
   
  }

  export default reviews