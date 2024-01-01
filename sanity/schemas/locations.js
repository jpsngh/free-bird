const location = {
 
    name :"location",
    title:"Location",
    type : "document",
    fields:[
    
    {
        
            name : 'headline',
            title : 'Headline',
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
        name : "image",
        title : "image",
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
        title : "image2",
        type:"image",
        fields:[
            {
                name:"alt",
                title:"alt",
                type:"string",
            }
        ],
    },
    {
        name:"url",
        title:"url",
        type:"url"
    },{
        name :"btn",
        title:"btn",
        type:"string"

    },
    {
        name :"address1",
        title:"address1",
        type:"string"

    }, {
        name :"address2",
        title:"address2",
        type:"string"

    },
       
    ]


}

export default location