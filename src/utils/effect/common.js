import { useEffect, } from 'react';
import { useSelector, } from 'react-redux';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { router, } from '../global';

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
