import { useEffect, useState, } from 'react';
import { useSelector, } from 'react-redux';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { router, denormalize, } from '../global';

export const useInsets = useSafeAreaInsets;
export const useUserProfile = (required = false) => {
	const userProfile = useSelector(({ app }) => app.profile);
	const profileReady = useSelector(({ app }) => app.profileReady);

	useEffect(() => {
		if (required && profileReady && !userProfile?.id) {
			router.navigate('/login');
		}
	}, [profileReady]);

	return userProfile;
};

export const useDenormalized = (selector, normalizedFields) => {
	const source = useSelector(selector);

	return denormalize(source.toJS(), normalizedFields);
};

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		onChangeText: value => setValue(value),
	};
};
