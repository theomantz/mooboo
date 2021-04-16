import React from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import * as SearchApiUtils from '../../util/search_api_util'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      autoCompleteResults: {
        boards: null,
        pins: null,
        users: null
      },
      itemSelected: {},
      showItemSelected: false
    }

  };

  getAutoCompleteResults(e) {
    this.setState({
      term: e.currentTarget.value
     })
    SearchApiUtils.search(this.state.term)
     .then(response => this.setState({ 
       autoCompleteResults: {
         boards: response.boards,
         pins: response.pins,
         users: response.users
       }
      }))
  }

  renderBoardList() {
    const { boards } = this.state.autoCompleteResults
    if( !boards || !boards.length ) return null
      const boardsList = boards.map(board => {
        return(
        <Link to={`boards/${board.id}`} key={uuid()}>
          <span key={uuid()}>{board.title}</span>
        </Link>
        )
      })
    return (
      <div className="board-autocomplete-list">
        <h1 className="boards-header">Boards</h1>
        {boardsList}
      </div>
    );
  }

  renderPinList() {
    const { pins } = this.state.autoCompleteResults
    if( !pins || !pins.length ) return null
      const pinsList = pins.map(pin => {
        return(
        <Link to={`pins/${pin.uploader_id}/${pin.id}`} key={uuid()}>
          <span key={uuid()}>{pin.title}</span> 
        </Link>
        )
      })
      return (
        <div className="pin-autocomplete-list">
          <h1 className="pins-header">Pins</h1>
          {pinsList}
        </div>
      );
  }

  renderUserList() {
    const { users } = this.state.autoCompleteResults
    if ( !users || !users.length ) return null;
      const usersList = users.map(user => {
        return(
        <Link to={`users/${user.id}`} key={uuid()}>
          <span key={uuid()}>{user.username}</span> 
        </Link>
        )
      })
    return (
      <div className="user-autocomplete-list">
        <h1 className="user-header">Users</h1>
        {usersList}
      </div>
    );
  }

  renderAutoCompleteList() {
    return(
      <div className='search-autocomplete-list'>
        {this.renderBoardList()}
        {this.renderPinList()}
        {this.renderUserList()}
      </div>
    )
  }
  
  render() {
    return (
      <div className='outer-search-container'>
        <div className='search-bar-input-container'>
          <input
            type='text'
            className='search-bar'
            value={this.state.term}
            onChange={e => this.getAutoCompleteResults(e)}
            />
        </div>
        {this.renderAutoCompleteList()}
      </div>
    )
  }


}

export default SearchBar