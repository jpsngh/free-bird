export const reviews = {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
    
      {
        name: 'authorImage',
        title: 'Author Image ',
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
        name: 'review',
        title: 'Review',
        type: 'blockContent',
      },
      {
        name: 'authorWork',
        title: 'Author Work',
        type: 'string',
      }
     
    ],
  
   
  }

  export default reviews