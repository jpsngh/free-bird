export const transformations = {
 
    name :"transformations",
    title:"transformations",
    type : "document",
    fields:[
    
    {
        
            name : 'name',
            title : 'Name',
            type  : "array",
            of:[{type:"block"}],
    
        
    },
    
    {
        name : 'slug',
        title : 'Slug',
        type: "slug",
        options :{source :"name"}
    },{
        name : 'content',
        title : 'Content',
        type  : "array",
        of:[{type:"block"}],

    },{
        name : "image1",
        title : "Image 1",
        type:"image",
        fields:[
            {
                name:"alt",
                title:"alt",
                type:"string",
            }
        ],
    },{
        name : "image2",
        title : "Image 2",
        type:"image",
        fields:[
            {
                name:"alt",
                title:"alt",
                type:"string",
            }
        ],
    },
]
}