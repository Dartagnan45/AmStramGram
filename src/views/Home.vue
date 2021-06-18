<template>
  <div class="home">
    <div class="container">
      <div class="imag"></div>
      <div class="text-container">
        <span></span>
        <h1><Hello class="card-title" title="AmstramGram" /></h1>
        <p>
          Vous êtes dans la même situation que Homer vous ne savez pas quoi
          choisir alors vous êtes au bon endroit. Avec AmStramGram laissez le
          destiin choisir pour vous !
        </p>
        <router-link to="/amStramGram">
          <button type="button" class="btn button">Entrer</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from "../components/Hello.vue";
export default {
  name: "Home",
  components: { Hello },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");

/** code by webdevtrick ( https://webdevtrick.com ) **/
* {
  transition: 0.33s ease all;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  display: inline-block;
  width: 50px;
  height: 5px;
  background-color: #ff3434;
  margin-bottom: 30px;
}

div.container {
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
}

h1 {
  font-weight: 600;
  font-size: 36px;
  margin: 0 0 15px;
}

p {
  font-weight: 300;
  line-height: 24px;
  margin: 0 0 30px 0;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  color: #ff3434;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 5px;
  left: -5px;
}
a:hover {
  color: #ff3434;
}
a::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: calc(50%);
  left: 0;
  width: 100%;
  height: 40%;
  pointer-events: none;
  background: #80edff;
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
  transition: transform 0.33s;
}
a:hover::before {
  transform: scale3d(1, 1, 1);
  transform-origin: 0% 50%;
}

div.imag {
  max-height: 360px;
  width: 100%;
  background: url("../assets/giphy.gif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 0px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  transform: translateX(-80px);
  border: none;
}

div.text-container {
  margin: 60px 45px 55px;
}

@media screen and (min-width: 768px) {
  div.container {
    flex-direction: row;
    width: 100%;
  }
  div.imag {
    height: 420px;
    min-width: 360px;
  }
  div.text-container {
    margin: 0 60px;
    max-width: 660px;
  }
}
@media screen and (min-width: 1024px) {
  div.container {
    max-width: 1200px;
  }
}
</style>
