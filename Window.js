import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class Window extends Component {
  render() {
    return (
        <View>
            <Image
                src={'https://reactnative.dev/img/tiny_logo.png'}
            />
        </View>
    )
  }
}

export default Window;