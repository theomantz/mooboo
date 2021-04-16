import React from 'react'
import GridLoader from 'react-spinners/GridLoader'
class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.loading
    }
  }

  render() {
    if( !this.state.loading ) return null
    return (
      <div className="grid-loader-container">
        <GridLoader color={"#14613B"} 
          loading={this.state.loading} 
          margin={2}
          size={15} />
      </div>
    );
  }
}

export default Loading