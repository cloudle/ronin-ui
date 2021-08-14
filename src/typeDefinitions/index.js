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

export type IUserProfile = {
	id: string,
	balance?: number,
};

export type IExchangeRates = {
	VND: number,
	USD: number,
	EUR: number,
	YEN: number,
};

export type IExchange = {
	baseCurrency: ICurrency,
	rates: IExchangeRates,
};

export type ToggleModalOptions = {
	id: String,
	type: 'MODAL' | 'DROPDOWN',
	component: Element,
	containerLayout?: Layout,
	onReady?: Function,
	onClose?: Function,
};
