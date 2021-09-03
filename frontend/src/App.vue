<template>
	<div class="toDoTasks">
		<div class="add">
			<h2>Add Task</h2>
			<hr />
			<input type="text" v-model="newTask" />
			<button @click="setTask">Add</button>
		</div>
		<div class="toDo">
			<h2>To Do</h2>
			<hr />
			<div v-for="t in tasksToDo" :key="`${t._id}`">
				<task :id="t._id" :name="t.name" :completed="t.completed" />
			</div>
		</div>
		<div class="completed">
			<h2>Completed</h2>
			<hr />
			<div v-for="t in completedTasks" :key="`${t._id}`">
				<task :id="t._id" :name="t.name" :completed="t.completed" />
			</div>
		</div>
	</div>
</template>

<script>
import task from './components/task.vue'

import api from '@/api'

export default {
	name: 'racoondevstudio-exam',
	components: {
		task,
	},

	data() {
		return {
			tasks: [],
			tasksToDo: [],
			completedTasks: [],
			newTask: '',
		}
	},

	created() {
		this.getCompletedTasks(), this.getToDoTasks()
	},

	methods: {
		async getCompletedTasks() {
			const tasks = await api.getTasks()
			tasks.map((task) => {
				if (task.completed) {
					this.completedTasks.push(task)
				}
			})
		},
		async getToDoTasks() {
			const tasks = await api.getTasks()
			tasks.map((task) => {
				if (!task.completed) {
					this.tasksToDo.push(task)
				}
			})
		},
		async setTask() {
			if (!/^[' ']+/.test(this.newTask) && this.newTask !== '') {
				try {
					const res = await api.setTask({ name: this.newTask })
					if (res) {
						this.getToDoTasks()
						this.$forceUpdate()
					}
				} catch (error) {
					console.log(error)
				}
			}
		},
		async taskcompleted(data, id) {
			try {
				const res = await api.updateTask(data, id)
				if (res) {
					this.getCompletedTasks()
					this.$forceUpdate()
					// let i = 0
					// tasksToDo.filter((task) => task._id !== id)
					// completedTasks.push({
					// 	_id: id,
					// 	...data,
					// })
				}
			} catch (error) {
				console.log(error)
			}
		},

		async deleteTask(id) {
			try {
				const res = await api.updateTask(id)
				if (res) {
					console.log(res)
					this.getToDoTasks()
					this.getCompletedTasks()
					this.$forceUpdate()
				}
			} catch (error) {
				console.log(error)
			}
		},
	},
}
</script>
