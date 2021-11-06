import React from 'react'
import { NavLink } from 'react-router-dom'

function Layout1() {
    return (
      
        <main>
            <div class="row g-5">
      <div class="col-md-6">
        <h1 >Разработка</h1>
        <p class="fs-5">
      - Кроссплатформенных сайтов<br/>
      - Веб-приложений<br/>
      - Мобильных приложений<br/>
      - Прикладных решений 1С</p>
      </div>

      <div class="col-md-6 dvconsole">
    <div class="loader"><span class="text_console">ant&#216;nchikov.pro</span>:<span class="tilda_c">~</span>$ <span id="typed"></span>
   <br />
</div>        
    </div>
            </div>

            <div class="mb-5">
      <button class="btn btn-primary btn-lg px-4">Оставить заявку</button>
    </div>

    <hr class="col-3 col-md-2 mb-5" />
    <div class="row g-5">
      <div class="col-md-6">
        <h2>Проекты</h2>
        <p>Ознакомьтесь с проектами с открытым исходным кодом в описании или в репозитории на GitHub.</p>
        <ul class="icon-list">
          <li><span rel="noopener" target="_blank">Bootstrap npm starter</span></li>
          <li class="text-muted">Bootstrap Parcel starter (coming soon!)</li>
          <NavLink to="/projects">Просмотреть все</NavLink>
        </ul>
      </div>

      <div class="col-md-6">
        <h2>Портфолио</h2>
        <p>Для просмотра всех работ нажмите "Просмотреть все". <br />Последние работы:</p>
        <ul class="icon-list">
          <li><span>Landing page MaxiEkonom</span></li>
          <li><span>Сайт RusDivo</span></li>
          <li><span>Bootstrap Parcel guide</span></li>
          <NavLink to="/portfolio">Просмотреть все</NavLink>
        </ul>
      </div>
    </div>
    <div class="row g-5">


      <div class="col-md-6">
        <h2>Контактная информация</h2>
        <li><i class="fab fa-telegram-plane"></i> <span>@ant0nchikov</span></li>
          <li><i class="fab fa-vk"></i> <span>vk.com/ant0nchikov</span></li>
          <li><i class="fab fa-github"></i> <span>github.com/ant0nchikov</span></li>
          <li><i class="fas fa-print"></i> <span>Резюме</span></li>
      </div>
    </div>

        </main>
    )
}

export default Layout1
