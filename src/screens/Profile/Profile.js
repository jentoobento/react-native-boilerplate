import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  addPerson as addPersonAction,
} from '../../redux/actions/peopleAction';
import s from './styles';

const mapStateToProps = state => ({
  person: state.people.person,
});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (name) => dispatch(addPersonAction(name)),
});

class Profile extends PureComponent {
  buttonClick = () => {
    const {addPerson} = this.props;
    addPerson('Mr. Fuzzywuzzy Dinklebooth');
  }

  render() {
    const {person} = this.props;
    return (
      <View style={s.container}>
        <View style={s.buttonContainer}>
          <TouchableOpacity onPress={this.buttonClick} style={s.button}>
            <Text>Add Person to the Store</Text>
          </TouchableOpacity>
          <Text>{person} is in the store.</Text>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
