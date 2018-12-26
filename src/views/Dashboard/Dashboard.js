import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAccountInfo} from "../../redux/actions/user";


class Dashboard extends Component {

  constructor(props) {
    super(props)
    console.log('PROPS', props)

    this.state = {}

  }

  componentDidMount() {
    this.props.dispatch(fetchAccountInfo('GBBPH3S3J5WVIXTXYU4S4H752UJL3HEARCAXTFLN2RISS66AARICDHA6'))
  }

  render() {
    return (
      <div>

      </div>
    )
  }

}

Dashboard = connect(function (state) {
  return {...state}
})(Dashboard)

export default Dashboard

