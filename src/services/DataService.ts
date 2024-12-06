import axios from 'axios';

import { ApiResponse, Fact, User } from '../interfaces/interfaces';

export const getUsers = async ( page: number = 1 ): Promise<ApiResponse<User[]>> => {
  try {
    const { data } = await axios.get(`https://randomuser.me/api/?page=${ page }&results=25`);
    
    return {
      success: true, 
      data: data.results
    }
  } catch (error) {
    console.log('error', error);
    return {
      success: false,
      data: []
    }
  }
}

export const getFacts = async ( page: number ): Promise<ApiResponse<Fact[]>> => {
  try {
    
    const { data } = await axios.get(`https://catfact.ninja/facts/?page=${ page }&limit=25`);

    return {
      success: true,
      data: data.data
    }

  } catch (error) {
    return {
      success: false,
      data: [],
      error
    }
  }
}