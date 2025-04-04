import React, { Component } from 'react'
import { Button, Platform, Text, View } from 'react-native'

export default class DetailsScreen extends Component<any,any,any> {
    constructor(props:any){
        super(props)
    }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details Screen</Text>
        {Platform.OS !== 'web' ? (
          <Button title="Go Back" onPress={() => this.props?.navigation.goBack()} />
        ) : null}
      </View>
    )
  }
}
