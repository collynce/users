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
					required
					v-model="form.username"
			/>
			<input
					class="login-form-input"
					type="password"
					placeholder="Enter password"
					name="password"
					id="password"
					required
					v-model="form.password"
			/>
			<!--			<input-->
			<!--					v-model="form.remember"-->
			<!--					class=""-->
			<!--					type="checkbox"/>-->
			<!--			<span>Keep me signed in</span>-->
			<button class="button" type="submit" :disabled="submitting || !canSubmit">SIGN IN</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				form: {},
				submitting: false
			};
		},
		computed: {
			canSubmit() {
				return this.form.username
						&& this.form.username !== ''
						&& this.form.password
						&& this.form.password !== ''
			}
		},
		methods: {
			login() {
				this.submitting = true
				this.$store.dispatch('login', this.form).then(() => {
					this.submitting = false;
				})
			}
		}
	};
</script>

<style scoped></style>
