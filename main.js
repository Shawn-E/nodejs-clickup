const { create } = require('axios');

class ClickUp {
  constructor(token, {
    baseURL = 'https://api.clickup.com/api/v2'
  } = {}) {
    this.client = create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  }

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

    async deleteTask(taskId) {
        try {
            const { data } = await this.client.delete(`/task/${taskId}`, { 

            })
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

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

}




module.exports = ClickUp;