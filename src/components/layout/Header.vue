<template>
<div class="container">

  <b-navbar toggleable="lg" type="light" variant="lightdark" >
    <b-navbar-brand href="/">
      <img src="../../assets/img_ae_logo.svg" alt="Logo">
    </b-navbar-brand>
    
    <div class="navbar__phone ml-auto" >
      <a href="#"> 
      <img src="../../assets/btn_m_contact.svg" alt="phone"> </a>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
      <b-nav-item-dropdown class="menu__title" text="Company" center no-caret>
          <b-dropdown-item href="/aboutus">About US</b-dropdown-item>
          <b-dropdown-item href="/whychooseae">Why Choose APPLE English</b-dropdown-item>
          <b-dropdown-item href="/map">Map</b-dropdown-item>
        </b-nav-item-dropdown>


      <b-nav-item-dropdown class="menu__title" text="Academics" center no-caret>
          <b-dropdown-item href="#" disabled >Academics</b-dropdown-item>
          <b-dropdown-item href="#" disabled >Our Curriculum (정규) </b-dropdown-item>
          <b-dropdown-item href="/curriculum1">Our Curriculum (초등) </b-dropdown-item>
          <b-dropdown-item href="#" disabled >Our Curriculum (유치부) </b-dropdown-item>
        </b-nav-item-dropdown>


        <b-nav-item-dropdown class="menu__title" text="Registration & Admissions" center no-caret >
          <b-dropdown-item href="#" disabled>Registration</b-dropdown-item>
          <b-dropdown-item href="#" disabled>Admissions </b-dropdown-item>
        </b-nav-item-dropdown>

      <b-nav-item-dropdown class="menu__title" text="Community" center no-caret>
          <b-dropdown-item href="/notice">Notice</b-dropdown-item>
          <b-dropdown-item href="/community">Community</b-dropdown-item>
        </b-nav-item-dropdown>


      <b-nav-item-dropdown class="menu__title" text="For Parents" center no-caret >
          <b-dropdown-item href="#" disabled>입학일정</b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav >
        <a href="/login" align="center">
          <img src="../../assets/btn_login.svg" alt="menu">
          </a>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</div>

</template>


<script>
export default {
    name: 'header'
    
    
}

</script>

<style scoped>



</style>