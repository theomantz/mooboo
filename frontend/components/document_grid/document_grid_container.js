import { connect } from 'react-redux';
import DocumentGrid from './document_grid'
import { fetchPins } from '../../actions/pins_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { setNumColumns, setHeight, setContent } from '../../actions/ui_actions'

const mapStateToProps = ({ entities, ui }) => ({
  content: Object.values(entities.pins),
  columns: ui.document.columns,
  type: "home",
})


const mapDispatchToProps = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  setHeight: height => dispatch(setHeight(height)),
  setContent: content => dispatch(setContent(content)),
  setCols: numCols => dispatch(setNumColumns(numCols)),
})


export default connect(mapStateToProps, mapDispatchToProps)(DocumentGrid)