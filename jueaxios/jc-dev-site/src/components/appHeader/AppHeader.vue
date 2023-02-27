<template>
  <header>
    <nav class="container">
      <a href="/"><img  src="../../assets/jcdev2.png" alt="JCDev" id="logo" /></a>
      <img  
        v-on:click="openMenu"
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" 
        alt="Abrir menu" 
        id="menu-button"
      >

      <div 
        v-on:click="closeMenu"
        id="menu-overlay"
        v-if="menuActive"
      >
        
      </div>
      <div id="menu-itens" :class="{active:menuActive}" >
        <a href="/"><img src="../../assets/jcdev2.png" alt="JCDev" id="menu-logo" /></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Vídeos</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>


