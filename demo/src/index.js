import React, {Component} from 'react'
import {render} from 'react-dom'

import {Button, Input} from '../../src'

class Demo extends Component {
  state = {loading: false}

  handleToggleLoading = () => {
    this.setState({loading: !this.state.loading})
  }

  handleChange = () => {
    console.log("changed!");
  }

  render() {
    return <div>
      <h1>react-loading-button Demo</h1>

      <h2>Static</h2>
      <Button>Load</Button>
      <Button loading>Loading</Button>

      <h2>Dynamic</h2>
      <Button loading={this.state.loading}>
        {this.state.loading ? 'Loading' : 'Load'}
      </Button>
      <button type="button" onClick={this.handleToggleLoading}>
        Toggle Loading
      </button>

      <Input type="text" value="@Prasanna" onChange={this.handleChange}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))