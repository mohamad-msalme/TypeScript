import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {ModelRequest} from "../models/Model"
interface HasId {
  id?: number
}

export class Axios<T extends HasId> implements ModelRequest<T>{
  private axiosInstance : AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  async getRecords(): Promise<T[]> {
    try {
      const response = await this.axiosInstance.get('');
      return response.data as T[];
    } catch (error) {
      throw error('There is something went wrong');
    }
  }

  async getRecordById(id: number): Promise<T> {
    try {
      const response = await this.axiosInstance.get(`${id}`);
      return response.data as T; 
    } catch (error) {
      
    }
  }

  async newRecorde(data: T) : Promise<T> {
    try {
      const response = await this.axiosInstance.post('', data);
      return response.data as T
    } catch (error) {
      throw error('There is something went wrong');
    }
  }

  async removeRecorde(id: number) : Promise<void> {
    try {
      await this.axiosInstance.delete(`${id}`);
    } catch (error) {
      throw new error('There is something went wrong');
    }
  }

  async updateRecorde(data: T) : Promise<T> {
    try {
      const response = await this.axiosInstance.patch(`${data.id}`, data)
      return response.data as T
      
    } catch (error) {
      throw new error('There is something went wrong');
    }
  }
}