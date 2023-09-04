from pydantic import BaseModel, Field
from typing import Optional, List
from uuid import UUID,uuid4
from enum import Enum

class Type(str, Enum):
    Bug= "Bug"
    Dark= "Dark"
    Dragon= "Dragon"
    Electric= "Electric"
    Fairy= "Fairy"
    Fighting= "Fighting"
    Fire= "Fire"
    Flying= "Flying"
    Ghost= "Ghost"
    Grass= "Grass"
    Ground= "Ground"
    Ice= "Ice"
    Normal= "Normal"
    Poison= "Poison"
    Psychic= "Psychic"
    Rock= "Rock"
    Steel= "Steel"
    Water= "Water"


class Pokemon(BaseModel):
    id: Optional[UUID] = uuid4()
    name: str
    types: List[Type]
    description: Optional[str] = None