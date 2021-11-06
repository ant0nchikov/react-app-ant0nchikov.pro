import React from 'react'
import { NavLink } from 'react-router-dom'

function Sign_in() {
    return (
        <main class="form-signin">
  <form>
    <span class="fs-4 logo_sign">ant&#216;nchikov.pro</span>
    <h1 class="h3 mb-3 fw-normal"> </h1>
    <br/>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Логин</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Пароль</label>
    </div>
<br/>
    <NavLink to="/admin"><button class="w-100 btn btn-lg btn-primary btn_sign" type="submit">Войти</button></NavLink>
    <NavLink to="/">Вернуться на главную</NavLink>
    <p class="mt-5 mb-3 text-muted">© Aleksandr Antonchikov, ant0nchikov.pro 2019-2021, All Right Reserved.</p>
  </form>
</main>
    )
}

export default Sign_in
