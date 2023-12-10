import Image from 'next/image'
import Link from 'next/link'
  
  export default function TeamList({authors}) {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {authors.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5">
            <Link href={`/author/${person.slug}`}> 
            <div className="flex min-w-0 gap-x-4 p-5">
              <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.image} height={100} width={100} alt="hey" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Expertise  {person.expertise}</p>
              </div>
            </div>
            </Link>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end p-5">
              <p className="text-sm leading-6 text-gray-900">{person.author_role}</p>
         
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Expertise -- {person.expertise} 
                </p>
       
            </div>
          </li>
        ))}
      </ul>
    )
  }
  