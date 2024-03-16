import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [click, setClicked] = useState(true)

  const MenuIcon = () => {
    setClicked(!click)

  }

  useEffect(() => {
    const navbar = document.querySelector(".buttons");

    if (click == true) {
      navbar.classList.add("display-none")
    }
    else {
      navbar.classList.remove("display-none")
    }
  }, [click])


  return (
    <header>
    <nav className='navbar'>
      <img src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6eD0TCCyQD1FqcNaf-tDNV6e~sJMa-jiSFacpyn5Xi~QLa3nO7DhLjaNAxvLwkiLRDWC~OwMtGA2litWF-K0zDvZsSkSZzoZQmhMmQvIZ06XpZdJwrFDAeG-Qte6awSq20VCLxbUYukIOMY2Uy5t-Uwad3zbHO3EW~qsdPeKQRTHOR7n1NOIIHhhl~f8R95XNIgff5mpCttw~J2SahXwMuYvLcJlMbFhUCk3zvljqbyLvPxFvxsedHnPdxzdAf5kkD4nwbsoawxIFus~skDmMKwI~915FyUQEZBiYqR8sxaCg~qDNFwcm7UY8Bwgc2kdY2FVi-WoKGG6uGNZrutXQ__" alt="" className="logo" />

      <div className="search">
        <input type="text" className="srh" placeholder='Search...' />
        <i className="fa-solid fa-magnifying-glass srh"></i>
      </div>

      <i id='bar' className={click ? "fa-solid fa-bars" : "fa-solid fa-x"} onClick={MenuIcon}></i>

      <div className="buttons">
        <button className='nav_btn'>Explore</button>
        <button className='nav_btn'>Hobbies</button>
        <i className="fa-solid fa-bell nav_btn"></i>
        <i className="fa-solid fa-cart-shopping nav_btn"></i>
        <button className='nav_btn'>Sign-In</button>
      </div>

    </nav>
  </header>
  )
}

export default Navbar
