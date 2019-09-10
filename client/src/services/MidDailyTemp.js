class MidTemp {
  static getTemp (day, data) {
    var time
    var mid = 0
    var k = 0
    for (let i = 0; i < data.length; i++) {
      time = data[i].dt_txt.split(' ')
      time = time[0].split('-')
      if (time[2] == day) {
        mid = mid + data[i].main.temp
        k++
      }
    }
    mid = Math.round(mid / k - 273.15)
    return mid
  }
  static getTextMonth (month) {
    switch (month) {
      case 0: return 'Января'
      case 1: return 'Февраля'
      case 2: return 'Марта'
      case 3: return 'Апреля'
      case 4: return 'Мая'
      case 5: return 'Июня'
      case 6: return 'Июля'
      case 7: return 'Августа'
      case 8: return 'Сентября'
      case 9: return 'Октября'
      case 10: return 'Ноября'
      case 11: return 'Декабря'
    }
  }
  static getIcon (date, time) {
    var dayTime, clock, day
    day = time.getDate()
    time = time.getHours()
    for (let i = 0; i < date.length; i++) {
      dayTime = date[i].dt_txt.split(' ')
      clock = dayTime[1].split(':')
      dayTime = dayTime[0].split('-')
      if (dayTime[2] == day) {
        if (Math.abs(clock[0] - time) <= 3) {
          return date[i].weather[0].icon
        }
      }
    }
  }
  static CardObj (date, temperature, icon) {
    this.date = date
    this.temperature = temperature
    this.icon = icon
  }
}
export default MidTemp
