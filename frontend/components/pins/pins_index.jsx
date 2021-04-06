// import React from 'react';

// class PinIndex extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {
//     this.props.fetchPins()
//   };

//   render() {
//     if(this.props.pins) {
//       const pinItems = this.props.pins.map(pin => {
//         return(<li>
//         <h3>{pin.title}</h3>
//         <p>{pin.description}</p>
//         <p>{pin.uploader_id}</p>
//       </li>)
//     })
//     } else { const pinItems = null }
//     return(
//       <ul>
//         {pinItems}
//       </ul>
//     )
//   }


// }

// export default PinIndex;