import AsyncStorage from '@react-native-community/async-storage';
import { ApolloClient, InMemoryCache, HttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uri = API_ENDPOINT;
const basicLink = new HttpLink({ uri, fetch, });

const authLink = setContext(async (_, { headers: originalHeaders, }) => {
	const userId = await AsyncStorage.getItem('userId');
	const headers = { ...originalHeaders, };

	if (userId) {
		headers.Authorization = `Bearer ${userId}`;
	}

	return { headers, };
});

export const graphQlClient = new ApolloClient({
	link: authLink.concat(basicLink),
	cache: new InMemoryCache(),
});