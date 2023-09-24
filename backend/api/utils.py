from unidecode import unidecode


def normalize_input(input: str):
    input = input.lower()
    input = unidecode(input)
    input = input.replace(" ", "")
    return input
