import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import {
  fetchPokemonsDetailAPI,
  PokemonDetailInterface,
} from "../Service/pokemonService";

// First, create the thunk
export const fetchPokemonsDetail = createAsyncThunk(
  "pokemon/fetchPokemonsDetail",
  async (name: string) => {
    const response = await fetchPokemonsDetailAPI(name);
    return response;
  },
  {
    condition: (name, { getState }) => {
      const { pokemonsDetail } = getState() as RootState;
      const pokemon = pokemonsDetail.pokemonsDetails[name];

      return !pokemon;
    },
  }
);

interface PokemonDetailState {
  pokemonsDetails: Record<string, PokemonDetailInterface>;
}

const initialState = {
  pokemonsDetails: {},
} as PokemonDetailState;

// Then, handle actions in your reducers:
const pokemonsDetailSlice = createSlice({
  name: "pokemonsDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPokemonsDetail.fulfilled,
      (state, action: PayloadAction<PokemonDetailInterface>) => {
        state.pokemonsDetails = {
          ...state.pokemonsDetails,
          [action.payload.name]: action.payload,
        };
      }
    );
  },
});

export const pokemonsDetailReducer = pokemonsDetailSlice.reducer;
