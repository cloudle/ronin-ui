import { isArray, isFunction, } from 'lodash';
import Immutable from 'immutable';

export function normalize(sources: Array<Object>, idField = 'id') {
	const entries = [];
	const entities = {};

	for (let i = 0; i < sources.length; i += 1) {
		const currentItem = sources[i];
		const itemId = isFunction(idField) ? idField(currentItem) : currentItem[idField];

		entries.push(itemId);
		entities[itemId] = currentItem;
	}

	return Immutable.Map({
		entries: Immutable.Set(entries),
		entities: Immutable.fromJS(entities),
	});
}

export function denormalize(source, normalizedFields) {
	if (isArray(normalizedFields)) {
		for (let i = 0; i < normalizedFields.length; i += 1) {
			const key = normalizedFields[i];
			const normalizedSource = source[key];
			source[key] = normalizedSource.entries.map(id => normalizedSource.entities[id]);
		}

		return source;
	}

	return source.entries.map(id => source.entities[id]);
}