import { Toaster } from 'react-hot-toast';


export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>  
    {children}
    <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}