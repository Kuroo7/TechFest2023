import { useEffect, useState } from 'react';
import './App.css'
import Mroutes from './pages/Mroutes'
import PreLoader from './components/PreLoader/PreLoader';
import { useLocation } from 'react-router';
function App() {
  const {search} = useLocation();
  var s = search.split('=')
  const [showSite, setSite] = useState(s[1])
  useEffect(() => {
    window.location.hash='#'+s[s.length-1]
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
