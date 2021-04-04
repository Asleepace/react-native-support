/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ModalContainer } from './src/components/modal'
import { Button } from './src/components/button'
import * as common from './src/assets'


export default class App extends React.Component<{}> {

  private modal: React.RefObject<ModalContainer> = React.createRef()

  private showModal = () => this.modal.current?.show()
  private hideModal = () => this.modal.current?.hide()

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={styles.flex} contentContainerStyle={styles.container}>
          <Button text={"Open support"} open={this.showModal} />
          <ModalContainer ref={this.modal} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
...common.styles,
})
