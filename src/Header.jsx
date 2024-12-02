import { Icon } from '@iconify/react';
const Header = () => {
    return<>
    <div className='Header-background'>

<nav class="navbar navbar-expand-lg text-white">
  <div class="container">
    <a class="navbar-brand text-white fs-5 fw-semibold" href="#">MNTN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <a class="nav-link fs-5 fw-semibold text-white" aria-current="page" href="#">Equipment</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link fs-5 fw-semibold text-white" href="#">About Us</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link fs-5 fw-semibold text-white" href="#">Blog</a>
        </li>
      </ul>
      <ul className="d-flex justify-content-center align-content-center text-center mt-3 ">
      <li class="nav-item d-flex text-white">
      <Icon className='fs-4 fw-bold' icon="line-md:account" />
          <a class="nav-link fs-5 mx-2 fw-semibold" href="#">Account</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>

    <div></div>
    
    
    </>
}

export default Header;