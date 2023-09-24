from fastapi import APIRouter, HTTPException
from api.utils import normalize_input
from api.models import Pokemon
from api.db import db
from uuid import UUID


router = APIRouter()


@router.get("/")
async def main():
    return "Bem vindo ao CRUD Pokedex"


@router.get("/pokemon")
async def show_pokemons():
    return db


@router.get("/pokemon/{pokemon_name}", response_model=Pokemon)
async def get_pokemon_by_name(pokemon_name: str):
    for pokemon in db:
        if normalize_input(pokemon.name) == normalize_input(pokemon_name):
            return pokemon
    raise HTTPException(status_code=404, detail="Pokemon not found")


@router.post("/pokemon")
async def create_pokemon(pokemon: Pokemon):
    db.append(pokemon)
    return pokemon


@router.delete("/pokemon/{pokemon_id}")
async def delete_pokemon(pokemon_id: UUID):
    for pokemon in db:
        if pokemon.id == pokemon_id:
            db.remove(pokemon)
            return HTTPException(status_code=200, detail="Pokemon deleted.")
    raise HTTPException(status_code=404, detail="Pokemon not found.")


# @router.patch("/pokemon/{pokemon_id}")
# async def update_partial_pokemon(pokemon_id: UUID):
#     for pokemon in db:
#         if pokemon.id == pokemon_id:
