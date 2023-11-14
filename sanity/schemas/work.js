const work = {
 
    name :"header2",
    title:"Header2",
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
        name:"url",
        title:"url",
        type:"url"
    },{
        name:"url2",
        title:"url2",
        type:"url"
    },{
        name:"url3",
        title:"url3",
        type:"url"
    },{
        name:"url4",
        title:"url4",
        type:"url"
    }
    
    ,{
        name :"btn1",
        title:"btn1",
        type:"string"

    },
        {
            name :"btn2",
            title:"btn2",
            type:"string"
    
        },{
            name :"btn3",
            title:"btn3",
            type:"string"
    
        },{
            name :"btn4",
            title:"btn4",
            type:"string"
    
        },
    ]


}

export default work