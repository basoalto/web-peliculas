import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment';

@Injectable()
export class AuthService {
  token: string = environment.Authorization;
  apiUrl: string = environment.url;

  /**
   * Realiza la autenticación y obtiene el token de autorización.
   * @returns Una promesa que se resuelve con los datos de autenticación.
   * @throws Error en caso de que ocurra un error.
   */
  async login(): Promise<any> {
    const response = await axios.get(`${this.apiUrl}`, {
      headers: {
        accept: 'application/json',
        Authorization: `${this.token}`
      }
    });

    try {
      return response.data;
    } catch (error) {
      throw new Error('Error');
    }
  }

  /**
   * Obtiene las películas más populares.
   * @returns Una promesa que se resuelve con los datos de las películas recientes.
   * @throws Error en caso de que ocurra un error al obtener las películas.
   */
  async peliculasRecientes(): Promise<any> {
    const response = await axios.get(`${this.apiUrl}movie/popular?language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `${this.token}`
      }
    });

    try {
      return response.data.results;
    } catch (error) {
      throw new Error('Error');
    }
  }

  /**
   * Obtiene las series más populares.
   * @returns Una promesa que se resuelve con los datos de las series recientes.
   * @throws Error en caso de que ocurra un error al obtener las series.
   */
  async seriesRecientes(): Promise<any> {
    const response = await axios.get(`${this.apiUrl}tv/popular?language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `${this.token}`
      }
    });

    try {
      return response.data.results;
    } catch (error) {
      throw new Error('Error');
    }
  }
}
