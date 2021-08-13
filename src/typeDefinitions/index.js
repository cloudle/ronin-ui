export type Element = React.Element<*>;

export type Style =
	| { [key: string]: any }
	| number
	| false
	| null
	| void
	| Array<Style>;

export type Layout = {
	x: number,
	y: number,
	width: number,
	height: number,
};

export type LayoutEvent = {
	nativeEvent: {
		layout: Layout,
	},
};

export type ICurrency = 'VND' | 'USD' | 'EUR' | 'YEN';

export type IAsset = {
	currency: ICurrency,
	value?: number,
};