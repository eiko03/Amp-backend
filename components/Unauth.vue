<template>
<div class="unauth-container d-flex align-center justify-center" style="height: 100vh; text-align: center;">
  <div class="d-flex flex-column justify-center alight-center">
  <h1 class="unauth1">Hey! You're not supposed to see that...</h1>
  <h2 class="unauth2">If you're already a creator, or looking to become one...</h2>
  <div class="buttons mt-5">
    <nuxt-link to="/login" class="btn">Login</nuxt-link>
    <nuxt-link to="/register" class="btn">Register</nuxt-link>
  </div>
  </div>
</div>
</template>
<style>
  .btn {
    border: 1px solid black;
    padding: 10px 30px;
    text-decoration: none;
    color: white!important;
    background-color: #232323;
    border-radius: 14px;
  }


</style>
