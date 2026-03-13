const API_URL = "http://localhost:8000";

export const apiClient = {
  async getUsers() {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  },

  async createUser(user: { name: string; email: string; password: string }) {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return response.json();
  },

  async processData(value: number, label: string) {
    const response = await fetch(`${API_URL}/data/process`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value, label }),
    });
    return response.json();
  },

  async getStats() {
    const response = await fetch(`${API_URL}/data/stats`);
    return response.json();
  },

  async predict(features: number[]) {
    const response = await fetch(`${API_URL}/ml/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ features }),
    });
    return response.json();
  },
};