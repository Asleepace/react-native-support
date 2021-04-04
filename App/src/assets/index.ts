import { StyleSheet } from 'react-native';

/** Colors - default colors that appear throughout the app **/
export const gray = '#202429'
export const blue = '#61dafb'
export const white = 'white'
export const black = 'black'

/** Numeric - default numberic values for padding, margin etc **/
export const padding = 8
export const borderRadius = 8


/** Styles - common files that are used throughout the application **/
export const flex = { flex: 1 }
export const center = { justifyContent: 'center', alignItems: 'center' }
export const container = { ...flex, ...center}


/** Fonts - common font values and styles **/
export const styles = StyleSheet.create({
	container: {
		backgroundColor: gray,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	content: {
		borderRadius,
		padding,
	},
	font: {
		fontFamily: 'Roboto',
		fontWeight: '700',
		lineHeight: 22,
		color: 'white',
		size: 16,
	},
	center: {
		justifyContent: 'center', 
		alignItems: 'center'
	},
	flex: {
		flex: 1
	}
})
