import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import s from './styles';

const mapStateToProps = state => ({
  person: state.people.person,
});

class Home extends PureComponent {
  buttonClick = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  }

  render() {
    const {person} = this.props;
    return (
      <View style={s.container}>
        <View style={s.buttonContainer}>
          <TouchableOpacity onPress={this.buttonClick} style={s.button}>
            <Text>Go to the Profile Screen</Text>
          </TouchableOpacity>
          <Text>{person} is in the store.</Text>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(Home);
