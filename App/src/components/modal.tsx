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
				<SafeAreaView style={styles.container}>
					<View style={styles.card}>
						<ModalHeader title={"Customer Support"} />
					</View>
				</SafeAreaView>
			</Modal>
		)
	}
}


interface ModalHeaderProps { title: string}
const ModalHeader = (props: ModalHeaderProps) => 
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
		width: '90%',
		height: '90%',
    backgroundColor: "#2C3E4F",
    borderRadius: 20,
    padding: ui.padding * 2,
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
		padding: 20,
	},
	headerFrame: {
		backgroundColor: 'rgba(0, 0, 0, 0.15)',
		borderRadius: 20,
		width: '100%',
	}
});