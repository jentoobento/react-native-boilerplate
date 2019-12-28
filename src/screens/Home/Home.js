import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import s from './styles';

class Home extends PureComponent {
  buttonClick = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.buttonContainer}>
          <TouchableOpacity onPress={this.buttonClick} style={s.button}>
            <Text>Go to the Profile Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
