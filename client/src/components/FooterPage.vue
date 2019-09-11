<template>
<div class="fluid-container footer">
    <p class="text-center"><a href="http://openweathermap.org">OpenWeatherMap</a></p>
</div>

</template>
<script>

export default {

}
</script>

<style>
.footer {
  background-color: #196360;
  height: 150px;
  padding: 17px 0 18px 0;
  margin-bottom: 0px;
  margin-top: auto;
  clear: both;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
}

a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #acd5e7;
  text-decoration: none;
}
p {
    font-size: 120%;
}
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px) {

.footer {
  min-width: 100%;
	height: 20%;
	text-align: center;
  position: relative;
}
}


</style>
