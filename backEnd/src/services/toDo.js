import MongoLib from '../lib/mongo'

export default class ToDoService {
	constructor() {
		this.collection = 'tasks'
		this.storage = new MongoLib()
	}

	async getTask() {
		const tasks = await this.storage.get(this.collection)
		return tasks ?? {}
	}

	async setTask(task) {
		const taskId = await this.storage.create(this.collection, task)
		return taskId
	}

	async updateTask(task, taskId) {
		const updatedTaskId = await this.storage.update(
			this.collection,
			task,
			taskId
		)
		return updatedTaskId
	}

	async deleteTask(taskId) {
		const deleletedTaskId = await this.storage.delete(this.collection, taskId)
		return deleletedTaskId
	}
}
