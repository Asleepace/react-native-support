import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ModalProps } from "react-native";
import * as ui from '../assets'

export interface Props extends ModalProps {

}

export interface State {
	visible: boolean
}


export class ModalContainer extends React.Component<Props, State> {
  state = { visible: false }
  public setVisible = (visible: boolean) => this.setState({ visible })
	public toggle = () => this.setVisible(!this)
	public show = () => this.setVisible(true)
	public hide = () => this.setVisible(false)
  render() {
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