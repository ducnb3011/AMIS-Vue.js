<template>
  <div id="app">
    <TheNavbar/>
    <TheHeader/>
    <TheContent/>
  </div>
</template>

<script>

import TheNavbar from './components/layout/TheNavbar.vue'
import TheContent from './components/layout/TheContent.vue'
import TheHeader from './components/layout/TheHeader.vue'


export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheContent
  }
}
</script>

<style>
@import './style/base/button.css';
@import './style/base/icon.css';
@import './style/base/table.css';
@import './style/base/input.css';
body {
    margin: 0;
}

.bg-primary {
    background-color: #01B075;
}


.text-align-center{
    text-align: center;
}

.text-align-right{
    text-align: right;
}

a{
    text-decoration: none;
    color: #000;;
    cursor: pointer;
}
body{
    font-family: notosans-regular;
    font-size: 13px;
}
.hide {
    display: none;
    opacity: 0;
    cursor: default;
}
.required:after {
    content:" *";
    color: red;
}

@font-face {
    font-family: 'notosans-bold';
    src: url('assets/fonts/notosans-bold.3ede5aff.woff2') format('opentype');
}
@font-face {
    font-family: 'notosans-italic';
    src: url('assets/fonts/notosans-italic.1c1aaac9.woff2') format('opentype');
}
@font-face {
    font-family: 'notosans-regular';
    src: url('assets/fonts/notosans-regular.2cb88a13.woff2') format('opentype');
}
@font-face {
    font-family: 'notosans-semibold';
    src: url('assets/fonts/notosans-semibold.df3e6dc4.woff2') format('opentype');
}
</style>
