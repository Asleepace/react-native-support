import { StyleSheet } from 'react-native';

/** Colors - default colors that appear throughout the app **/
export const color = '#EBEFF1'
export const gray = '#202429'
export const blue = '#61dafb'
export const navy = '#2A7FB7'
export const white = 'white'
export const black = 'black'
export const shadow = 'rgba(0, 0, 0, 0.3)'
export const highlight = 'rgba(255, 255, 255, 0.77)'
export const contrast = 'rgba(0, 0, 0, 0.7)'
export const transparent = 'transparent'
export const placeholder = 'rgba(255, 255, 255, 0.33)'


/** Numeric - default numberic values for padding, margin etc **/
export const fontFamily = 'System'
export const letterSpacing = undefined
export const textShadowOffset = { width: 0, height: 1}
export const textShadowColor = shadow
export const textShadowRadius = 2
export const fontWeight = '600'
export const borderRadius = 8
export const lineHeight = 22
export const fontSize = 18
export const padding = 8
export const width = '%100'

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
		padding,
		flex: 1
	},
	content: {
		borderRadius,
		padding,
	},
	font: {
		letterSpacing,
		fontFamily,
		fontWeight,
		lineHeight,
		fontSize,
		color: '#B8C9F0'
	},
	fontShadow: {
		textShadowColor,
		textShadowOffset,
		textShadowRadius,
	},
	shadow: {
		shadowColor: black,
		shadowOpacity: 0.3,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 1,
		}
	},
	center: {
		justifyContent: 'center', 
		alignItems: 'center'
	},
	flex: {
		flex: 1
	}
})
