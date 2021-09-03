import express from 'express'

import { api } from '../config/envServer'
import ToDo from '../services/toDo'
import validationHandler from '../utils/middlewares/validationHandler'
import {
	initialTaskSchema,
	generalTaskSchema,
} from '../utils/schema/taskSchema'

const router = express.Router()
const toDo = new ToDo()

router.get('/', (req, res, next) => {
	res.send({
		ProjectName: api.name,
		Server: api.server,
		Repository: 'https://github.com/betonajera9/RacoonDevStudio-Exam',
		Author: 'Beto Najera',
	})
})

// To Do
router.get('/tasks', async (req, res, next) => {
	try {
		const tasks = await toDo.getTask()
		res.status(200).send(tasks)
	} catch (error) {
		console.log(error)
	}
})

router.post(
	'/tasks',
	validationHandler(initialTaskSchema),
	async (req, res, next) => {
		try {
			const task = req.body.completed
				? req.body
				: { ...req.body, completed: false }

			const taskId = await toDo.setTask(task)

			res.status(200).send(taskId)
		} catch (error) {
			console.log(error)
		}
	}
)

router.put(
	'/tasks/:taskId',
	validationHandler(generalTaskSchema),
	async (req, res, next) => {
		try {
			const tasks = await toDo.updateTask(req.body, req.params.taskId)

			res.status(200).send(tasks)
		} catch (error) {
			console.log(error)
		}
	}
)

router.delete('/tasks/:taskId', async (req, res, next) => {
	try {
		const tasks = await toDo.deleteTask(req.params.taskId)

		res.status(200).send(tasks)
	} catch (error) {
		console.log(error)
	}
})

export default router
