import React, { useState } from 'react'
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
    </main>
  )
}

export default Main