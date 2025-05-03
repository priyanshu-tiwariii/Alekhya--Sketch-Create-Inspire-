import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface CollaborativeState {
  isCollaborative: boolean;
    collaborativeRole: string | null;
    };

    const initialState: CollaborativeState = {
      isCollaborative: false,
      collaborativeRole: "USER",
    };


    const collaborativeSlice = createSlice({
        name : 'collaborative',
        initialState,
        reducers: {
            setIsCollaborative: (state, action: PayloadAction<boolean>) => {
                state.isCollaborative = action.payload;
            },
            setCollaborativeRole: (state, action: PayloadAction<string | null>) => {
                state.collaborativeRole = action.payload;
            },
            toggleCollaborativeMode(state) {
                state.isCollaborative = !state.isCollaborative;
              },
        
        },

    })

    export const {setIsCollaborative, setCollaborativeRole,toggleCollaborativeMode} = collaborativeSlice.actions;
    export default collaborativeSlice.reducer;


