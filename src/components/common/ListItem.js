import React, { PureComponent } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './../../actions';

class ListItem extends PureComponent {

  componentWillUpdate() {
    console.log('update');
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <View style={{ flex: 1, paddingLeft: 25, paddingRight: 25 }}>
          <Text>{library.item.description}</Text>
        </View>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;
    return (
      <TouchableWithoutFeedback
        style={{}}
        onPress={() => {
          this.props.selectLibrary(id);
        }}
      >
        <View>
          <View>
            <Text style={titleStyle}>{title}</Text>
          </View>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectorLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
