import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem.js';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        style={{
          flex: 1,
          width: '100%'
        }}
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.title}
      />
    );
  }
}
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
