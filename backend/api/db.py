from typing import List
from uuid import uuid4
from api.models import Pokemon, Type

db: List[Pokemon] = [
    Pokemon(
        id=uuid4(),
        name="Bulbasauro",
        types=[Type.Grass, Type.Poison],
        description="There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    ),
    Pokemon(
        id=uuid4(),
        name="Chamander",
        types=[Type.Fire],
        description="It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    ),
    Pokemon(
        id=uuid4(),
        name="Squirtle",
        types=[Type.Water],
        description="When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    ),
]
