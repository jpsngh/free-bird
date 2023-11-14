/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["cdn.sanity.io","www.freebirdhealthclub.ca","images.unsplash.com","tailwindui.com","dummyimage.com","www.kettlebellkings.com"],
        remotePatterns:[{
             protocol:"https",
             hostname :"cdn.sanity.io",
             port :"",
             
        },{
            protocol:"https",
            hostname :"freebirdhealthclub.ca",
            port :"",
        },{
            protocol:"https",
            hostname :"images.unsplash.com",
            port :"",
        },
            {
                protocol:"https",
                hostname :"tailwindui.com",
                port :"",
            }
        
        
         
          ]
    },
    
   

    
}

module.exports = nextConfig
