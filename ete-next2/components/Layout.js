import React from 'react'
import { StoreProvider } from '../utils/Store'
import NavBar from './NavBar'

//import Modal from './Modal'

function Layout({children}) {
    return (
                 <div>
                   <NavBar />
                   {children}
                </div>
    )
}

export default Layout