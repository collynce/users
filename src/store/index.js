import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swal from 'sweetalert2'

Vue.use(Vuex);
let user = sessionStorage.getItem("user");

export default new Vuex.Store({
	state: {
		users: [],
		loggedIn: !!user,
		user: user ? JSON.parse(user) : null,
		defaultUser: {
			username: 'admin',
			password: '1234'
		}
	},
	getters: {
		users: (state) => state.users,
		user: (state) => state.user,
		loggedIn: (state) => state.loggedIn
	},
	mutations: {
		set_users(state, payload) {
			state.users = payload;
		},
		set_loggedin_user(state, payload) {
			state.user = payload.username;
			sessionStorage.setItem('user', JSON.stringify({
				username: payload.username
			}))
		},
		logout(state) {
			state.user = {};
			sessionStorage.clear()
		}
	},
	actions: {
		getUsers({commit}, payload) {
			axios
				.get("/users.json")
				.then(({data}) => {
					commit("set_users", data);
				})
				.catch(() => {
				});
		},
		login({commit, state}, payload) {
			let username = payload.username;
			let password = payload.password;

			if (username !== state.defaultUser.username || password !== state.defaultUser.password) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Incorrect username or password'
				})
			} else {
				commit('set_loggedin_user', payload)
			}
		},
		logout({commit}, payload) {
			commit('logout')
		}
	},
});
