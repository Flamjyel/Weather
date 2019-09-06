<template>
<div>
  <b-container>
    <b-row class="panel col-lg-12">
      <div class="header-panel col-lg-12">
        Погода в Ростове-на-Дону
      </div>
      <div class="body-panel col-lg-12">
        <div class="card-weather">
          <b-card
            title="Cреднесуточная температура"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ Math.round(weatherData.data.list[0].main.temp - 273,15) }}
            </b-card-text>
          </b-card>
        </div>
      </div>
    </b-row>
  </b-container>
  <!-- <div>
    <button v-on:click="getdataTemp">test</button>
  </div> -->
</div>
</template>

<script>

import axios from 'axios'
export default {

  data () {
    return {
      weatherData: null
    }
  },
  methods: {
    getDataTemp () {
      var day = new Date()
      console.log(day)
      return day.getData()
    }

  },

  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?APPID=4502dec827ac30b2e0603b04f4d95e30&id=501175')
      .then(response => (this.weatherData = response))
    console.log(this.weatherData)
  }

}
</script>

<style>
.panel {
   margin-top: 10%;
}

.header-panel {
  font-size: 200%;
  color:aliceblue;
  padding-left: 15%;
  height: 10%;
  background-color: #162955;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

}

.body-panel {
  background-color: #d3d3d3;
}

.card-weather {
  padding-top: 2%;
}

</style>
