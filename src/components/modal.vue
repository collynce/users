<template>
	<div>
		<div id="myModal" class="modal">
			<div class="modal-content">
				<div class="modal-header">
					<span class="close" @click="$emit('close')">&times;</span>
				</div>
				<div class="modal-body">
					<div class="flex">
						<div
								class="flex-cell image"
								:style="{'background': 'url(' + user.image + ') no-repeat center center / cover' }"
						>

						</div>
						<div class="flex-cell content">
							<p>Name: {{user.name}}</p>
							<p>Email: {{user.email}}</p>
							<p>Phone: {{user.phone}}</p>
							<p>Address: {{user.address.street + ', ' + user.address.city}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "modal",
		props: ['user']
	}
</script>

<style scoped>

</style>