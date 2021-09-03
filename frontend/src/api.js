const url = process.env.VUE_APP_URL

const getTasks = async () => {
	try {
		const res = await fetch(`${url}/tasks`, {
			method: 'GET',
		})

		return await res.json()
	} catch (err) {
		console.error(err)
	}
}

const setTask = async (data) => {
	try {
		console.log(data)
		const res = await fetch(`${url}/tasks`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		return res.json().insertedId
	} catch (error) {
		console.log(error)
	}
}

const updateTask = async (data, id) => {
	try {
		const res = await fetch(`${url}/tasks/${id}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		return res.json()
	} catch (error) {
		console.log(error)
	}
}
const deleteTask = async (id) => {
	try {
		const res = await fetch(`${url}/tasks/${id}`, {
			method: 'DELETE',
		})

		return res.json()
	} catch (error) {
		console.log(error)
	}
}

export default {
	getTasks,
	setTask,
	updateTask,
	deleteTask,
}
