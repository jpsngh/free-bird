export const cta = {
    name: 'cta',
    title: 'Cta',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name : 'slug',
        title : 'Slug',
        type: "slug",
        options :{source :"title"}
      },
    
      {
        name: 'image',
        title: 'Background Image ',
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
        name: 'paragrah',
        title: 'Paragraph Body',
        type: 'string',
      },{
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
      
    ],
  
   
  }

  export default cta