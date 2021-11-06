import React from 'react'
import { NavLink } from 'react-router-dom'

function header1() {
    return (
    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
     <span class="fs-4 logo">ant&#216;nchikov.pro</span>
     <span class="qr_c"><i class="fas fa-qrcode"></i></span>
     <input class="form-control me-2 inp_g" type="search" placeholder="Поиск" aria-label="Поиск по сайту" />
     <NavLink to="/sign_in"><span class="s_sign"><i class="fa fa-sign-in sign_in" aria-hidden="true"></i></span></NavLink>
    </header>
    )
}

export default header1
