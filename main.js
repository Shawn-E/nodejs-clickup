const { create } = require('axios');

class ClickUp {
  constructor(token, {
    baseURL = 'https://api.clickup.com/api/v2' // Base URL For ClickUp API
  } = {}) {
    this.client = create({ baseURL, headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  }

    /**
     * Creates a task in a specific list
     * @param {Number} listId list to create the task in
     * @param {Object} task_data object including all the values and settings of the task
     * @returns {Object} returns a object with all the data from the request
     */
    async createTask(listId, task_data) {
        try {
            const { data } = await this.client.post(`/list/${listId}/task`, {
                ...task_data
            })
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    /**
     * deletes a task given the task id
     * @param {Number} taskId 
     * @returns {Object} returns a object with all the data from the request
     */
    async deleteTask(taskId) {
        try {
            const { data } = await this.client.delete(`/task/${taskId}`, { 

            })
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    /**
     * Comments on a task by id
     * @param {Number} taskId 
     * @param {Object} comment_data 
     * @returns {Object} returns a object with all the data from the request
     */
    async commentOnTask(taskId, comment_data) {
        try {
            const { data } = await this.client.post(`/task/${taskId}/comment`, { 
                ...comment_data
            })
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    /**
     * Updates a task by the id
     * @param {Number} taskId 
     * @param {Object} task_data 
     * @returns {Object} returns a object with all the data from the request
     */
    async updateTask(taskId, task_data) {
        try {
            const { data } = await this.client.put(`/task/${taskId}`, { 
                ...task_data
            })
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    // 1.1.0

    /**
     * Grabs a task by task id
     * @param {Number} taskId the task id to get
     * @param {Boolean} include_subtasks include the sub task or not 
     * @returns {Object} returns a object with all the data from the request
     */
    async getTask(taskId, include_subtasks) {
        try {
            const { data } = await this.client.get(`/task/${taskId}?include_subtasks=${include_subtasks}`)
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }
    /**
     * 
     * @param {Number} listId 
     * @param {Object} filters 
     * @returns 
     */
    async getTasks(listId, filters) {
        const querys = new URLSearchParams(filters).toString();
        try {
            const { data } = await this.client.get(`/list/${listId}/task?${querys}`)
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }


}

module.exports = ClickUp;