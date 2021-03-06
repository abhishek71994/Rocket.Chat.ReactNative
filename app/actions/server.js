import { SERVER } from './actionsTypes';

export function setServer(server) {
	return {
		type: SERVER.SELECT,
		server
	};
}
export function serverRequest(server) {
	return {
		type: SERVER.REQUEST,
		server
	};
}

export function addServer(server) {
	return {
		type: SERVER.ADD,
		server
	};
}


export function serverSuccess() {
	return {
		type: SERVER.SUCCESS
	};
}

export function serverFailure(err) {
	return {
		type: SERVER.FAILURE,
		err
	};
}


export function changedServer(server) {
	return {
		type: SERVER.CHANGED,
		server
	};
}

export function gotoAddServer() {
	return {
		type: SERVER.GOTO_ADD
	};
}
