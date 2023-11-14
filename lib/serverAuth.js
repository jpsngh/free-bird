
import {authOptions} from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

const serverAuth = async (req,res) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email || typeof session.user.email !== 'string') {
    throw new Error('No session found');
  } 


    const currentUser = "jp"



  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
};

export default serverAuth;