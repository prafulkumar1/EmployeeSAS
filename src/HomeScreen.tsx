import React, { Component } from 'react'
import { Button, Platform, Text, View } from 'react-native'

export default class HomeScreen extends Component<any,any,any> {
    constructor(props:any){
        super(props)
    }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        {Platform.OS !== 'web' ? (
          <Button title="Go to Details" onPress={() => this.props?.navigation.navigate('Details')} />
        ) : null}
      </View>
    )
  }
}
