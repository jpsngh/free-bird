/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["cdn.sanity.io","www.freebirdhealthclub.ca","images.unsplash.com","tailwindui.com","dummyimage.com","files.edgestore.dev","img.clerk.com","www.kettlebellkings.com"],
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
    headers: () => [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
        },
      ],
   

    
}

module.exports = nextConfig
