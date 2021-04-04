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
import { Button } from './src/components/Button'
import * as common from './src/assets'


 export default () => {
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={styles.flex} contentContainerStyle={styles.container}>
          <Button text={"Open support"} open={() => console.log('Button pressed!')} />
       </ScrollView>
     </SafeAreaView>
   );
 };

const styles = StyleSheet.create({
  ...common.styles,
})
