const isDevelopment = process.env.NODE_ENV === 'development'
export const curl1 = !isDevelopment
    ? ''
    : `curl 'https://github.com/users/Rishabh-Rathod/feature_preview/indicator_check' \
  -H 'Connection: keep-alive' \
  -H 'sec-ch-ua: "Google Chrome";v="87", "\"Not;A\\Brand";v="99", "Chromium";v="87"' \
  -H 'Accept: application/json' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://github.com/Rishabh-Rathod/DiffyCurl/edit/master/src/mock/curls.js' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'Cookie: _octo=GH1.1.1182097356.1605597366; tz=Asia%2FCalcutta; _device_id=4f66c97977783ceddd33ebc47c4e7248; user_session=KVyL71OcaHqlpDvvDLwGsj90C5vfPGzre3LQUJ4vkKLdf5VT; __Host-user_session_same_site=KVyL71OcaHqlpDvvDLwGsj90C5vfPGzre3LQUJ4vkKLdf5VT; tz=Asia%2FCalcutta; logged_in=yes; dotcom_user=Rishabh-Rathod; has_recent_activity=1; _gh_sess=oDer07g%2B5tfjlXsI%2BUKLaxiwvzeh4KIC10lXYtsVVABn0O5DqpRfl7uyrLsZ2T0%2FIkDo44PdOXNh3p8O6tQR7eCa8FgrbwBTf3%2BtRvqSrUbWgiIy62FCLEakmbSna0q4IP5F3PsSb1HXtf7DRAV9CdZqdDf367cxOGb%2B%2BzbuhIG6vT6C4C9j2E3Ei4pImqm8IUoD%2BKfmB0%2B99lFVWMRD3GPKnKEzWVZwymghcqFlF9z%2FxWqSeuc7a%2B59yUIQCRwehhVx01TdOp1zONBMzkgNHL3bfNAMlNZFFQCRYeQ60Im4T%2Bve6YctZZmj13vQ0XeXqH1FQkHtm2iC2jix4XnXDiLn3YIevWk%2BtPwnDPdxQzsgPm%2FFNtwktGRPXvgDMuVU5FLTFk3pE4Lz1cEnWnQduakyB10a9UNPAmhvv08Tb44Z%2BIZHusirkvYy8cSDlVEjR%2FGYXmJPXZsPZBwbRuw3fgGskxzrDeaFWVuxsLAjk5dDkuw4DZUvOx5EUanOK6BtaMklNiOKH7V%2FDe%2F402%2BbBDKUWh6QW0MBzJTHXrj6y14Az52eIwe8eZtiR%2Fjtx7JL%2BIp0kR9SaHqSrePAw8QVmO0WCHxZuM%2B9Ih1zskznnC3gRznknJrY%2FktWk2TVkHp%2B57jNZGq%2FIbISFCYbvfR8igroYgLU2qr4IWyEukHw8WofoDQp1mvNJxDRbsPjt%2B%2BcbW5MUFOH3jabXjzwytHESOzVnBoyTi6Kr7i%2FLbdPVoyksrNqbKORVu15mZ1WEp%2FLs30IBnzc%2FQcgewFljKr0EvX7Yyohitr7q6Mb%2Fm2j9qIeJqhSQeIggRDuNmSBW24zJuoDgp5LdwA7Et5eJZ5YtbsTR0gDFBMycX%2F98s1%2F%2BPqf0KIqumwcn2RvuxSk6ARqt4QRc7KKMdMQEazqP%2FrPcBmE3ZJcqC8tOL0Oxw%3D%3D--22FgSwXohtkWG85P--mitnnN4Gko0h3oR91qlkMA%3D%3D' \
  -H 'If-None-Match: W/"b086cd16a5d1e1190981cda623503729"' \
  --compressed`

export const curl2 = !isDevelopment
    ? ''
    : `curl 'https://github.com/Rishabh-Rathod/DiffyCurl/security/overall-count' \
  -H 'Connection: keep-alive' \
  -H 'sec-ch-ua: "Google Chrome";v="87", "\"Not;A\\Brand";v="99", "Chromium";v="87"' \
  -H 'Accept: text/fragment+html' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://github.com/Rishabh-Rathod/DiffyCurl/edit/master/src/mock/curls.js' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'Cookie: _octo=GH1.1.1182097356.1605597366; tz=Asia%2FCalcutta; _device_id=4f66c97977783ceddd33ebc47c4e7248; user_session=KVyL71OcaHqlpDvvDLwGsj90C5vfPGzre3LQUJ4vkKLdf5VT; __Host-user_session_same_site=KVyL71OcaHqlpDvvDLwGsj90C5vfPGzre3LQUJ4vkKLdf5VT; tz=Asia%2FCalcutta; logged_in=yes; dotcom_user=Rishabh-Rathod; has_recent_activity=1; _gh_sess=oDer07g%2B5tfjlXsI%2BUKLaxiwvzeh4KIC10lXYtsVVABn0O5DqpRfl7uyrLsZ2T0%2FIkDo44PdOXNh3p8O6tQR7eCa8FgrbwBTf3%2BtRvqSrUbWgiIy62FCLEakmbSna0q4IP5F3PsSb1HXtf7DRAV9CdZqdDf367cxOGb%2B%2BzbuhIG6vT6C4C9j2E3Ei4pImqm8IUoD%2BKfmB0%2B99lFVWMRD3GPKnKEzWVZwymghcqFlF9z%2FxWqSeuc7a%2B59yUIQCRwehhVx01TdOp1zONBMzkgNHL3bfNAMlNZFFQCRYeQ60Im4T%2Bve6YctZZmj13vQ0XeXqH1FQkHtm2iC2jix4XnXDiLn3YIevWk%2BtPwnDPdxQzsgPm%2FFNtwktGRPXvgDMuVU5FLTFk3pE4Lz1cEnWnQduakyB10a9UNPAmhvv08Tb44Z%2BIZHusirkvYy8cSDlVEjR%2FGYXmJPXZsPZBwbRuw3fgGskxzrDeaFWVuxsLAjk5dDkuw4DZUvOx5EUanOK6BtaMklNiOKH7V%2FDe%2F402%2BbBDKUWh6QW0MBzJTHXrj6y14Az52eIwe8eZtiR%2Fjtx7JL%2BIp0kR9SaHqSrePAw8QVmO0WCHxZuM%2B9Ih1zskznnC3gRznknJrY%2FktWk2TVkHp%2B57jNZGq%2FIbISFCYbvfR8igroYgLU2qr4IWyEukHw8WofoDQp1mvNJxDRbsPjt%2B%2BcbW5MUFOH3jabXjzwytHESOzVnBoyTi6Kr7i%2FLbdPVoyksrNqbKORVu15mZ1WEp%2FLs30IBnzc%2FQcgewFljKr0EvX7Yyohitr7q6Mb%2Fm2j9qIeJqhSQeIggRDuNmSBW24zJuoDgp5LdwA7Et5eJZ5YtbsTR0gDFBMycX%2F98s1%2F%2BPqf0KIqumwcn2RvuxSk6ARqt4QRc7KKMdMQEazqP%2FrPcBmE3ZJcqC8tOL0Oxw%3D%3D--22FgSwXohtkWG85P--mitnnN4Gko0h3oR91qlkMA%3D%3D' \
  --compressed`