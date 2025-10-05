import React from 'react'

const Weather = ({temprature}) => {
  if (temprature < 12) {
    return <h1>It's Cold Outside</h1>
  }
    else if (temprature >= 12 && temprature <= 30) {
        return <h1>It's Pleasant Outside</h1>
    }
    else {
        return <h1>It's Hot Outside</h1>
    }
}

export default Weather