import { isEqual, } from 'lodash';

export const listItemEqual = (props, nextProps) => {
	return isEqual(props.item, nextProps.item);
}
