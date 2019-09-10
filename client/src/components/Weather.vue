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
            :title="textcurrentdate"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text v-if="weatherData">
              {{ temp }}
            </b-card-text>
          </b-card>
        </div>
      </div>
    </b-row>
  </b-container>
  <div>
   <!-- {{weatherData.data.list}} -->
  </div>
</div>
</template>

<script>

import axios from 'axios'
// import WeatherApi from '@/services/WeatherOpenMapApi'
import MidTemp from '@/services/MidDailyTemp'
export default {

  data () {
    return {
      weatherData: null,
      temp: null,
      time: null
    }
  },
  methods: {

  },
  computed: {
    currentdate: function () {
      return new Date()
    },
    textcurrentdate: function () {
      return this.currentdate.getDate() + '.' + (this.currentdate.getMonth() + 1)
    }

  },

  mounted () {
    // WeatherApi.getApi(this.weatherData)
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?APPID=4502dec827ac30b2e0603b04f4d95e30&id=501175')
      .then(response => {
        this.weatherData = response
        this.time = this.currentdate
        this.temp = MidTemp.getTemp(this.time.getDate(), this.weatherData.data.list)
        console.log(this.time)
      })
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
