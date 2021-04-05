import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View, ViewProps, Animated, Easing, SafeAreaView, TouchableOpacity } from 'react-native';
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
		easing: Easing.inOut(Easing.ease),
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
						<ModalContact placeholder={"colin@wallwisher.com"} />
						<ModalInputs placeholder={"Please enter your message here..."} />
					</View>
				</SafeAreaView>
			</Modal>
		)
	}
}

const ModalContact = (props:{ placeholder: string }) => 
	<View style={styles.contactContainer}>
	<TextInput placeholder={props.placeholder} style={styles.contactStyle}
						 underlineColorAndroid={ui.transparent}
						 placeholderTextColor={ui.placeholder}
						 keyboardType={'email-address'}
						 autoCapitalize={'none'}
						 returnKeyType={'next'}
						 autoCorrect={false}
						 multiline={false}
						 /></View>

const ModalInputs = (props:{ placeholder: string }) => 
	<View style={styles.inputContainer}>
	<TextInput placeholder={props.placeholder} style={styles.inputStyle} 
	           underlineColorAndroid={ui.transparent}
						 placeholderTextColor={ui.placeholder}
						 keyboardType={'default'}
						 autoCorrect={true}
						 autoFocus={true}
						 multiline={true}
						 /></View>


const ModalHeader = (props:{ title: string}) => 
	<View style={styles.headerContainer}>
		<Text style={styles.headerStyle}>{props.title}</Text>
	</View>

const ModalButton = (props: { title: string }) => 
	<TouchableOpacity style={styles.buttonContainer}>
		<Text style={styles.headerStyle}>{props.title}</Text>
	</TouchableOpacity>

const styles = StyleSheet.create({
	buttonCotainer: {

	},
  container: {
    justifyContent: "center",
    alignItems: "center",
		margin: 16,
		flex: 1,
  },
  card: {
		width: '100%',
		height: '90%',
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
	headerContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.07)',
		alignItems: 'center',
		borderRadius: 20,
		width: '100%',
	},
	headerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white',
		padding: ui.padding * 2,
	},
	contactContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.07)',
		marginTop: ui.padding,
		padding: ui.padding * 2,
		borderRadius: 20,
		width: '100%',
	},
	contactStyle: {
		fontSize: 18,
		color: 'white',
	},
	inputContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.07)',
		padding: ui.padding * 2,
		marginTop: ui.padding,
		borderRadius: 20,
		width: '100%',
		flex: 1,
	},
	inputStyle: {
		textAlignVertical: 'top',
		color: 'white',
		fontSize: 18,
		padding: 0,
		flex: 1,
	},
});