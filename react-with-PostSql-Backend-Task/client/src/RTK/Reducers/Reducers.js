import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// ------------------All Asyn Reducers are below ------------------//

let initialState = {
  
  status: null,
  allData: [],
  CrediantialsSaverStatus: false,
  
}

// ------------------All data Getter Setter Reducers ------------------//



// asyn defaultData
export const defaultData = createAsyncThunk(
  'mainSlice/defaultData',
  async () => {
    const data = await axios.get('/defaultData')
    return data.data;
  }
)



// new Actor KYC dataHnadler
export const CrediantialsSaver = createAsyncThunk(
  'mainSlice/CrediantialsSaver',
  async ({ body }) => {
    console.log('reducersVody',body);
    const data = await axios.post('http://localhost:8080/crediantialssaver', { body });
    return await data.data;
  }
)
 








// asyn setter
const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    LOG_OUT: (state) => {
      state.status = null;
      state.allData = [];
    },
  },
  extraReducers: {


    // ------------------Response defaultData ------------------//

    [defaultData.pending]: (state) => {
      state.status = 'loading';
    },
    [defaultData.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.allActors = payload.message;
        state.loader = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [defaultData.rejected]: (state) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },



    // ------------------Response defaultAdminData ------------------//




    // registgrarion handler 
    [CrediantialsSaver.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.CrediantialsSaverStatus = false;
    },
    [CrediantialsSaver.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Registered !',
          text: `${payload.message}`,
        })
        state.CrediantialsSaverStatus = true;
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
        state.restDoneRes = false;
      }
    },
    [CrediantialsSaver.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Reset Password`,
      })
    },


    // end of all Extra Reducers reducers
  },
})











export const { LOG_OUT } = mainSlice.actions;



// ------------------All Asyn Getter Setter Reducers Exporter ------------------//

export const mainReducer = mainSlice.reducer;

