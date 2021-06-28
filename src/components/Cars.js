import React, { Component } from 'react'

export default class Cars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: ["MC", "Benz", "Ford"]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.cars.map((item => <h1 key={item}>{item}</h1>))
        }
      </div>
    )
  }
}
