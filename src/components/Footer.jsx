import React from 'react'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  // console.log(year);

  return (
    <footer>
      <div>Copyright © { year } by Kwok Yew Weng. All rights reserved.</div>
    </footer>
  )
}

export default Footer
