<template>
<nav class="navbar container-fluid">
      <h1>Weather</h1>
</nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  background-color: #196360;
  box-shadow: 0 5px 30px 10px #ffffff;
}
h1 {
  color:aliceblue;
  font-size: 450%;
  letter-spacing: 5px;
  font-style: normal;
  padding-left: 15%;
}
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px) {

.navbar {
  min-width: 100%;
	height: 20%;
	text-align: center;
}
h1 {
    font-size: 400%;
    padding: 0;
}}

</style>
