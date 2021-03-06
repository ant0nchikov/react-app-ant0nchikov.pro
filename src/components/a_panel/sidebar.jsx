import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="logo_admin">
        <span class="fs-4">ant&#216;nchikov.pro</span></div>
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
            <a class="nav-link a_side" href="#">
            <i class="fas fa-home feather"></i>Главная
                </a>
            </li>
            <li class="nav-item">
            <a class="nav-link a_side" href="#">
            <i class="fas fa-flag-checkered feather"></i>Заказы
                </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
              <i class="fas fa-file-invoice-dollar feather"></i>Отчеты
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
              <i class="fas fa-user-secret feather"></i>
               Клиенты
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
              <i class="far fa-comments feather"></i>Отзывы
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
              <i class="far fa-chart-bar feather"></i>
                Статистика
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
              <i class="fas fa-tools feather"></i>
               Настройки
              </a>
            </li>
          </ul>
  
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Добавить</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Статью
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Проект портфолио
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link a_side" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Заметку
              </a>
            </li>
          </ul>
        </div>
        <div class="sign_out"><NavLink to="/" class="sign_out_fa"><i class="fas fa-sign-out-alt" ></i> Выйти</NavLink></div>
        
      </nav>
    )
}

export default Sidebar
