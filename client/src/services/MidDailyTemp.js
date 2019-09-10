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
    console.log(mid)
    return mid
  }
  //     data.list
}
export default MidTemp
