import axios from 'axios'
import { Account, Application, Goal, Tag, Transaction, User } from './types'

const API_URL = 'https://localhost:7081/api'

export async function getUser(): Promise<User | null> {
  try {
    const response = await axios.get(`${API_URL}/User`)
    return response.data[0]
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getAccounts(): Promise<Account[] | null> {
  try {
    const response = await axios.get(`${API_URL}/Account`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getApplications(): Promise<Application[] | null> {
  try {
    const response = await axios.get(`${API_URL}/Application`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getGoals(): Promise<Goal[] | null> {
  try {
    const response = await axios.get(`${API_URL}/Goal`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getTags(): Promise<Tag[] | null> {
  try {
    const response = await axios.get(`${API_URL}/Tag`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getTransactions(): Promise<Transaction[] | null> {
  try {
    const response = await axios.get(`${API_URL}/Transaction`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function createGoal(): Promise<Goal | null> {
  try {
    const response = await axios.post(`${API_URL}/Goal`, {
      name: 'New Goal',
      targetAmount: 0,
      balance: 0,
      targetDate: new Date(),
      created: new Date(),
    })
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function updateGoal(goalId: string, updatedGoal: Goal): Promise<boolean> {
  try {
    await axios.put(`${API_URL}/Goal/${goalId}`, updatedGoal)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
