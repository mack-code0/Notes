import React, { useState } from 'react'
import Draggable from './Draggable'
import RightSection from './RightSection'
import SideNav from "./SideNav"

function Main() {
  const [openSideNav, setOpenSideNav] = useState(false)
  const openSideNavHandler = (bool) => {
    setOpenSideNav(bool)
  }
  return (
    <main className="w-100 d-flex">
      <SideNav openSideNav={openSideNav} />
      <RightSection openSideNavHandler={openSideNavHandler} />
      <Draggable />
    </main>
  )
}

export default Main