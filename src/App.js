import React, { useState } from 'react'
import Landingpage from './components/pages/Landingpage/Landingpage'
import Modulepage from './components/pages/Modulepage/Modulepage';
import { Routes,Route } from  'react-router-dom'
import Module1 from './components/pages/Modulepage/Allmodules/Module1';
import Module2 from './components/pages/Modulepage/Allmodules/Module2';
import Module3 from './components/pages/Modulepage/Allmodules/Module3';
import Module4 from './components/pages/Modulepage/Allmodules/Module4';
import Module5 from './components/pages/Modulepage/Allmodules/Module5';
import Searchpage from './components/pages/Searchpage/Searchpage';

const App = () => {
  const [moduleselected,setmoduleselected] = useState(true);
  const [showmodules,setshowmodules] = useState(false);
 
  const moduleselcet = () =>{
    setmoduleselected(false)
  }

  const selectedmodulenumber = ()=>{
    setmoduleselected(true)
    setshowmodules(true)
  }

  return (
    <>
        { moduleselected  && !showmodules && <Landingpage onselect={moduleselcet}/> }
        { !moduleselected  && !showmodules && <Modulepage onselect={selectedmodulenumber}/> }
        <Routes>
          <Route exact path='/modules' element={<Modulepage />}/>
          <Route exact path='/module1' element={<Module1 />}/>
          <Route exact path='/module2' element={<Module2 />}/>
          <Route exact path='/module3' element={<Module3 />}/>
          <Route exact path='/module4' element={<Module4 />}/>
          <Route exact path='/module5' element={<Module5 />}/>
          <Route exact path='/search' element={<Searchpage />}/>
        </Routes>
        {/* <Searchpage /> */}
    </>
  )
}

export default App