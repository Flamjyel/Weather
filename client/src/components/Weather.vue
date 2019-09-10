<template>
<div>
  <b-container>
    <b-row class="panel col-lg-12">
      <div class="header-panel col-lg-12">
        Погода в Ростове-на-Дону
      </div>
      <div class="body-panel col-lg-12" v-if="weatherData">
        <div>
          <b-card-group deck>
            <b-card v-for="item in arrayCard"
             :title= item.date
             :img-src = item.icon img-alt="Card image"img-top>
              <b-card-text>
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
    },
    textcurrentdate: function () {
      return this.currentdate.getDate() + '.' + (this.currentdate.getMonth() + 1)
    }

  },

  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?APPID=4502dec827ac30b2e0603b04f4d95e30&id=501175')
      .then(response => {
        this.weatherData = response
        this.time = this.currentdate
        for (let i = 0; i <= 2; i++) {
          this.temp = MidTemp.getTemp(this.time.getDate(), this.weatherData.data.list)
          this.arrayCard[i] = new MidTemp.CardObj(this.time.getDate() + ' ' + MidTemp.getTextMonth(this.time.getMonth()), this.temp)
          if (i === 0) {
            this.arrayCard[i].icon = 'static/icons/' + MidTemp.getIcon(this.weatherData.data.list, this.time) + '.png'
          }
          else {
            this.time.setHours(12)
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
