<template>
	<div>
		<div class="grid-container">
			<div class="menu-icon">
				<strong>&#9776;</strong>
			</div>
			<aside class="aside">
				<div class="aside_close-icon">
					<strong>&times;</strong>
				</div>
				<ul class="aside_list">
					<li class="aside_list-item" @click="$router.push({name:'dashboard'})">Dashboard</li>
					<li class="aside_list-item" @click="$router.push({name:'dashboard'})">Users</li>
					<li class="aside_list-item">Settings</li>
				</ul>

				<div class="username" @click="logout">< {{user.username}}</div>
			</aside>
			<main class="main">
				<h3>Users</h3>
				<placeholder v-if="fetchingData"/>
				<div v-if="!fetchingData" class="main_overview">
					<div
							class="main_overview_card"
							v-for="(user, index) in users"
							:key="index"
							:style="{'background': 'url(' + user.image + ') no-repeat center center / cover' }"
							@click="showDetails(user)"
					>
						<div class="middle">
							<div class="text">
								<p><strong>{{user.name}}</strong></p>
								<p>{{user.address.city}}</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
		<modal @close="showModal=false" v-if="showModal" :user="selectedUser"/>
	</div>
</template>

<script>
	import {mapGetters} from "vuex";
	import modal from "@/components/modal";
	import placeholder from "@/components/partials/placeholder";

	export default {
		name: "index",
		components: {
			modal,
			placeholder
		},
		data() {
			return {
				fetchingData: false,
				showModal: false,
				selectedUser: {}
			}
		},
		computed: {
			...mapGetters({
				users: 'users',
				user: 'user'
			})
		},
		methods: {
			getUsers() {
				this.fetchingData = true
				this.$store.dispatch('getUsers')
						.then(() => {
							setTimeout(() => {
								this.fetchingData = false
							}, 3000)
						})
						.catch(() => {

						})
			},
			showDetails(user) {
				this.showModal = true;
				this.selectedUser = user;
			},
			logout() {
				this.$store.dispatch('logout')
			}
		},
		mounted() {
			this.getUsers();
			const menuIcon = document.querySelector('.menu-icon');
			const aside = document.querySelector('.aside');
			const asideClose = document.querySelector('.aside_close-icon');

			function toggle(el, className) {
				if (el.classList.contains(className)) {
					el.classList.remove(className);
				} else {
					el.classList.add(className);
				}
			}

			menuIcon.addEventListener('click', function () {
				toggle(aside, 'active');
			});

			asideClose.addEventListener('click', function () {
				toggle(aside, 'active');
			});
		}
	};
</script>

<style scoped lang="scss"></style>
