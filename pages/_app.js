import '../styles/globals.css' ;
import '../styles/tailwind.css' ;
import react  from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
  <div className='h-screen   bg-gray-900 text-gray-100'>
    <UserProvider>
   <Component {...pageProps} />
   </UserProvider>
  </div>
  


);
  };

export default MyApp
