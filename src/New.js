import React, { Component } from 'react'
import {connect} from 'react-redux'; 

class New extends Component {
  render() {
    return (
      <div>
        <h2>
          Đây là component news
        </h2>
        <button onClick={() => this.props.userEditStatus()}>Click di</button>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userEditStatus: () => {
      dispatch({type:'EDIT_STATUS'})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(New)


