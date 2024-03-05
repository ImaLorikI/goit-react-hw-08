import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContacts = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`contacts`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (dataContacts, thunkAPI) => {
    try {
      const response = await axios.post(`contacts`, dataContacts);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`contacts/${id}`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
