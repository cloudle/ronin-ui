import { isEqual, } from 'lodash';

export * from './constant';
export * from './normalize';
export * from './ui';

export const router = {
	navigate: () => {},
};

export const setNavigate = (val) => {
	router.navigate = val;
};

export const listItemEqual = (props, nextProps) => {
	return isEqual(props.item, nextProps.item);
}