import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View, ViewProps, Animated, Easing, SafeAreaView } from 'react-native';
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
				<SafeAreaView style={styles.container}>
					<View style={styles.card}>
						<ModalHeader title={"Customer Support"} />
						<ModalInputs placeholder={"colin@wallwisher.com"} multiline={false} />
						<ModalInputs placeholder={"Please enter your message here..."} multiline={false} />
					</View>
				</SafeAreaView>
			</Modal>
		)
	}
}

const ModalInputs = (props:{ placeholder: string, multiline: boolean }) => 
	<View style={styles.inputFrame}>
	<TextInput placeholder={props.placeholder} style={styles.inputStyle} multiline={props.multiline}
						 placeholderTextColor={"rgba(255, 255, 255, 0.7)"} /></View>


const ModalHeader = (props:{ title: string}) => 
	<View style={styles.headerFrame}>
		<Text style={styles.headerTitle}>{props.title}</Text>
	</View>

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
		margin: 16,
		flex: 1,
  },
  card: {
		width: '99%',
		height: '99%',
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
	background: {
		position: 'absolute',
		left:0, right:0, top:0, bottom: 0,
		backgroundColor: ui.black,
		flex: 1,
	},
	headerTitle: {
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white',
		padding: 20,
	},
	headerFrame: {
		backgroundColor: 'rgba(0, 0, 0, 0.07)',
		alignItems: 'center',
		borderRadius: 20,
		width: '100%',
	},
	inputFrame: {
		backgroundColor: 'rgba(0, 0, 0, 0.07)',
		borderRadius: 20,
		padding: ui.padding * 2,
		marginTop: ui.padding,
		width: '100%',
	},
	inputStyle: {
		fontSize: 18,
		color: 'white',
		minHeight: 200,
		textAlignVertical: 'top'
	}
});