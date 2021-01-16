const isDevelopment = true || process.env.NODE_ENV === 'development'
export const curl1 = !isDevelopment
  ? ''
  : `curl --location --request GET 'https://pokeapi.co/api/v2/generation/?limit=5' \
  --header 'Authorization: secret-unique-code' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "count": 7,
    "next": "https://pokeapi.co/api/v2/generation/?offset=2&limit=5",
    "previous": null,
    "results": [
        {
            "name": "generation-ii",
            "url": "https://pokeapi.co/api/v2/generation/2/"
        }
    ]
  }'`

export const curl2 = !isDevelopment
  ? ''
  : `curl --location --request GET 'https://pokeapi.co/api/v2/generation/?limit=2' \
  --header 'Authorization: secret-unique-code' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "count": 7,
    "next": "https://pokeapi.co/api/v2/generation/?offset=2&limit=2",
    "previous": null,
    "results": [
        {
            "name": "generation-i",
            "url": "https://pokeapi.co/api/v2/generation/1/"
        },
        {
            "name": "generation-ii",
            "url": "https://pokeapi.co/api/v2/generation/2/"
        }
    ]
  }'`
