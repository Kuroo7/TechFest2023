import { useEffect, useState } from 'react';
import './App.css'
import Mroutes from './pages/Mroutes'
import PreLoader from './components/PreLoader/PreLoader';
function App() {
  const [showSite, setSite] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setSite(true)
    }, 4000)// eslint-disable-next-line
  }, [])
  return (
    <>
      {(showSite)
        ? <Mroutes /> :
        <PreLoader />
      }
      {/* <PreLoader /> */}
    </>
  )
}

export default App
