import React from 'react'

class BoardsIndex extends React.Component {

  componentDidMount() {
    const { fetchBoards, match } = this.props
    fetchBoards(this.props.userId)
  }
  render() {
    const { boards } = this.props
    if( !boards ) return null
    return(
      <div className="">
        <h1>Boards Index Renders</h1>
      </div>
    )
  }
}

export default BoardsIndex