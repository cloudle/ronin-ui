export * from './constant';

const routerInstance = {
	navigate: () => {},
};

export const setNavigate = (val) => {
	routerInstance.navigate = val;
};

export const router = routerInstance;