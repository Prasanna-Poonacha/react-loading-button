import t from 'prop-types'
import React, {Component} from 'react'

class Input extends Component {
  static propTypes = {
    text: t.string,
    type: t.string
  }
  static defaultProps = {
    type: 'input',
  }
  render() {
    let {text, type, ...props} = this.props
    return <input value={text} type={type} {...props} />
  }
}

export default Input