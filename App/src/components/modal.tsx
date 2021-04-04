import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ViewProps, Animated, Easing, SafeAreaView } from 'react-native';
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
	
  public hide = () => this.setState({ visible: false}, this.fade)
	public show = () => this.setState({ visible: true })
	public fade = () => Animated.timing(this.state.opacity, { 
		useNativeDriver: true,
		easing: Easing.ease,
		duration: 400,
		toValue: 0.3,
	}).start()


	render () {
		const { opacity, visible } = this.state
		return (
			<Modal animationType={"slide"} transparent={true} visible={visible} onRequestClose={this.hide} onShow={this.fade}>
				<Animated.View style={{ ...styles.background, opacity }} />
				<SafeAreaView style={styles.centeredView}>
					<View style={styles.modalView}>
						{ this.props.children }
					</View>
				</SafeAreaView>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
		margin: 16,
		flex: 1,
  },
  modalView: {
		width: '100%',
		height: '100%',
    backgroundColor: "#2C3E4F",
    borderRadius: 20,
    padding: ui.padding,
    shadowColor: ui.black,
		alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.32,
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
  },
	background: {
		position: 'absolute',
		left:0, right:0, top:0, bottom: 0,
		backgroundColor: ui.black,
		flex: 1,
	}
});