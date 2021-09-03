<template>
	<div class="task">
		<input type="checkbox" @change="setTaskCompleted" />
		<p v-if="completed == false && editing == false">{{ name }}</p>
		<p v-else-if="completed == true && editing == false" class="taskCompleted">
			{{ name }}
		</p>

		<input type="text" v-if="editing == true" v-model="newName" />

		<button v-if="editing == false">Edit</button>
		<button v-if="editing == false">Delete</button>

		<button v-if="editing == true">Done</button>
		<button v-if="editing == true">Cancel</button>
	</div>
</template>

<script>
export default {
	name: 'racoondevstudio-exam',

	data() {
		return {
			editing: false,
			newName: '',
		}
	},

	props: {
		id: String,
		name: String,
		completed: Boolean,
	},

	methods: {
		setTaskCompleted() {
			// if (this.completed) {
			// 	$e
			// }
		},
	},
}
</script>
