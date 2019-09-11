<template>
<div>
  <b-container class="content">
    <b-row class="panel col-lg-12">
      <div class="header-panel col-lg-12">
        Погода в Ростове-на-Дону
      </div>
      <div class="body-panel col-lg-12" v-if="weatherData">
        <div>
          <b-card-group deck class="weather-cards">
            <b-card v-for="item in arrayCard" :title= item.date class="card">
             <b-card-img :src = item.icon alt="Card image" class="img-card"></b-card-img>
              <b-card-text class="text-card">
                {{ item.temperature }}
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </b-row>
  </b-container>
</div>
</template>

<script>

import axios from 'axios'
import MidTemp from '@/services/MidDailyTemp'
export default {

  data () {
    return {
      weatherData: null,
      temp: null,
      time: null,
      arrayCard: []
    }
  },
  methods: {

  },
  computed: {
    currentdate: function () {
      return new Date()
    }

  },

  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?APPID=4502dec827ac30b2e0603b04f4d95e30&id=501175')
      .then(response => {
        this.weatherData = response
        this.time = this.currentdate
        for (let i = 0; i <= 3; i++) {
          if (i === 0) {
            this.temp = Math.round(this.weatherData.data.list[0].main.temp - 273.15) + '℃'
            this.arrayCard[i] = new MidTemp.CardObj()
            this.arrayCard[i].date = 'Сейчас'
            this.arrayCard[i].temperature = this.temp
            this.arrayCard[i].icon = 'static/icons/' + this.weatherData.data.list[0].weather[0].icon + '.png'
          }
          else {
            this.temp = MidTemp.getTemp(this.time.getDate(), this.weatherData.data.list) + '℃'
            this.time.setHours(12)
            this.arrayCard[i] = new MidTemp.CardObj(this.time.getDate() + ' ' + MidTemp.getTextMonth(this.time.getMonth()), this.temp)
            this.arrayCard[i].icon = 'static/icons/' + MidTemp.getIcon(this.weatherData.data.list, this.time) + '.png'
          }
          this.time.setDate(this.time.getDate() + 1)
        }
      })
  }

}
</script>

<style>
.panel {
   margin-top: 15%;
   clear: both;
}

.header-panel {
  font-size: 200%;
  color:aliceblue;
  padding-left: 15%;
  height: 10%;
  background-color: #196360;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

}

.body-panel {
  background-color: #acd5e7;
  border: solid 1px #196360;
}

.weather-cards {
  padding: 2%;
}
.card {
  border:2px solid #196360;
  background-color: #ffffff;
}
.img-card {
  display: block;
  width: 50%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
}
.text-card {
  text-align: center;
  font-size: 200%;
  padding: 3%;
}
.content {
  height: 100%;
  margin-bottom: 15%;
}
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px) {

.header-panel {
  min-width: 100%;
	height: 20%;
	text-align: center;
  font-size: 100%;
}
}


</style>
