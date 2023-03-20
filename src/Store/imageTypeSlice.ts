import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { POKEMON_IMAGE_TYPE } from "../Constants";

export type PokemonImageType =
  typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE];

export interface ImageTypeInterface {
  type: PokemonImageType;
}

const initialState: ImageTypeInterface = {
  type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT,
};

export const imageTypeSlice = createSlice({
  name: "imageType",
  initialState,
  reducers: {
    changeImageType: (state, action: PayloadAction<ImageTypeInterface>) => {
      state.type = action.payload.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeImageType } = imageTypeSlice.actions;

export const imageTypeReducer = imageTypeSlice.reducer;
