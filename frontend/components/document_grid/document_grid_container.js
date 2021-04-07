import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pins_actions';
import { setColumns, setHeight } from '../../actions/ui_actions'
import DocumentGrid from './document_grid'

const mapStateToProps = ({ entities }) => ({
  pins: entities.pins
})


const mapDispatchToProps = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  setCols: numCols => dispatch(setColumns(numCols)),
  setHeight: height => dispatch(setHeight(height))
})


export default connect(mapStateToProps, mapDispatchToProps)(DocumentGrid)