import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";
const POKEMON_SPECIES_API = "https://pokeapi.co/api/v2/pokemon-species/";

export interface PokemonListInterface {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

// 가져올 타입
interface PokemonDetailInfoInterface {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

// species 타입
interface PokemonSpeciesInterface {
  color: {
    name: string;
  };
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
}

// 내보낼 타입
export interface PokemonDetailInterface {
  id: number;
  weight: number;
  height: number;
  name: string;
  korName: string;
  color: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorld: string;
    officialArtwork: string;
  };
  baseStats: {
    name: string;
    stat: number;
  }[];
}

const call = axios.create();

export const fetchPokemons = async () => {
  const res = await call.get<PokemonListInterface>(POKEMON_API);

  return res.data;
};

export const fetchPokemonsDetail = async (
  name: string
): Promise<PokemonDetailInterface> => {
  const res = await call.get<PokemonDetailInfoInterface>(
    `${POKEMON_API}${name}`
  );
  const speciesRes = await call.get<PokemonSpeciesInterface>(
    `${POKEMON_SPECIES_API}${name}`
  );
  const detail = res.data;
  const speciesDetail = speciesRes.data;

  const korName =
    speciesDetail.names.find((item) => {
      return item.language.name === "ko";
    })?.name ?? detail.name;

  return {
    id: detail.id,
    name: detail.name,
    color: speciesDetail.color.name,
    korName: korName,
    height: detail.height / 10,
    weight: detail.weight / 10,
    types: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorld: detail.sprites.other.dream_world.front_default,
      officialArtwork: detail.sprites.other["official-artwork"].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return { name: item.stat.name, stat: item.base_stat };
    }),
  };
};
