import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pins_actions';
import { setNumColumns, setHeight, setContent } from '../../actions/ui_actions'
import DocumentGrid from './document_grid'

const mapStateToProps = ({ entities }) => ({
  content: Object.values(entities.pins),
  type: "home"
})


const mapDispatchToProps = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  setCols: numCols => dispatch(setNumColumns(numCols)),
  setHeight: height => dispatch(setHeight(height)),
  setContent: content => dispatch(setContent(content))
})


export default connect(mapStateToProps, mapDispatchToProps)(DocumentGrid)