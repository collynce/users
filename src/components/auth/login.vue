<template>
	<div class="login-form">
		<p class="login-form-heading">Sign in to your account</p>
		<form @submit.prevent="login">
			<input
					class="login-form-input"
					type="text"
					placeholder="Enter username"
					name="username"
					id="username"
					v-model="form.username"
			/>
			<input
					class="login-form-input"
					type="password"
					placeholder="Enter password"
					name="password"
					id="password"
					v-model="form.password"
			/>
<!--			<input-->
<!--					v-model="form.remember"-->
<!--					class=""-->
<!--					type="checkbox"/>-->
<!--			<span>Keep me signed in</span>-->
			<button class="button" type="submit">SIGN IN</button>
		</form>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "login",
		data() {
			return {
				form: {}
			};
		},
		computed: {},
		methods: {
			login() {
				this.$store.dispatch('login', this.form)
			}
		}
	};
</script>

<style scoped></style>
