import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ViewProps, Animated } from "react-native";
import * as ui from '../assets'

export interface Props extends ViewProps {

}

export interface State {
	opacity: Animated.Value
	visible: boolean
}


export class ModalContainer extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props)
		this.state = {
			opacity: new Animated.Value(0),
			visible: false
		}
	}
	
	
  public hide = () => this.setState({ visible: false})
	public show = () => this.setState({ visible: true })
	public face = () => Animated.timing(this.state.opacity, { 
		toValue: this.state.visible ? 1 : 0,
		useNativeDriver: true,
		duration: 0.3 
	})

	render () {
		return (
			<Modal animationType={"slide"} transparent={true} visible={this.state.visible} onRequestClose={this.hide}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<Pressable style={[styles.button, styles.buttonClose]} onPress={this.hide}>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});