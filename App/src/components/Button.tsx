import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import * as ui from '../assets'

export type ButtonProps = {
	text?: string
	open?: Function 
}

/** Button
 * Renders a simple button with centered text which triggers the open function when pressed.
 * @param text string that is displayed
 * @param open function that is triggered when pressed
 * @returns JSX.Element
 */
export const Button = (props: ButtonProps) =>
		<TouchableOpacity style={styles.container} onPress={() => props?.open?.()}>
			<Text style={styles.font}>{props.text}</Text>
		</TouchableOpacity>


/** Button Specific Styles 
 * 
 */
const styles = StyleSheet.create({
	container: {
		...ui.styles.content,
		...ui.styles.fontShadow,
		...ui.styles.shadow,
		backgroundColor: ui.blue,
		padding: ui.padding,
		
		flex: 0
	},
	font: {
		...ui.styles.fontShadow,
		...ui.styles.font,
	}
})