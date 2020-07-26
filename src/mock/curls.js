const isDevelopment = process.env.NODE_ENV === 'development'
export const curl1 = !isDevelopment
  ? ''
  : `curl --location --request POST 'https://bt2.streak.tech/backtest_service' \
--header 'authority: bt2.streak.tech' \
--header 'accept: application/json, text/plain, */*' \
--header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' \
--header 'authorization: csrftoken=QzqrSUwWaAHtT40p804lUOjvn3811DBGWklHHRMSTTcK5C5Deiuq36TSjRBHkexy;csrfmiddlewaretoken=QzqrSUwWaAHtT40p804lUOjvn3811DBGWklHHRMSTTcK5C5Deiuq36TSjRBHkexy;sessionid=ddjdtofowkce0p7yvdsnh7l0aeo42tb6' \
--header 'x-csrftoken: ddjdtofowkce0p7yvdsnh7l0aeo42tb6' \
--header 'content-type: application/x-www-form-urlencoded' \
--header 'origin: http://localhost:3000' \
--header 'sec-fetch-site: cross-site' \
--header 'sec-fetch-mode: cors' \
--header 'sec-fetch-dest: empty' \
--header 'referer: http://localhost:3000/backtests' \
--header 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
--data-raw '{
    "algo_desc": "null",
    "algo_name": "webstr34",
    "algo_pref": "",
    "algo_state": {
    },
    "algo_uuid": "cbd3083f-e996-4603-86ff-2e927cf8b2d6",
    "chart_type": "candlestick",
    "commission": 0,
    "create_plus": false,
    "csrfmiddlewaretoken": "QzqrSUwWaAHtT40p804lUOjvn3811DBGWklHHRMSTTcK5C5Deiuq36TSjRBHkexy",
    "dt_start": "11/04/2020",
    "dt_stop": "09/07/2020",
    "entry_logic": "adx(14) lower than 24 and stochastic(14,fast,yes) crosses above Stochastic(14,Slow,Yes,0) and close higher than Opening Range(High,hour)",
    "equities": "7b22494e445553494e44424b223a224e5345222c2243414e424b223a224e5345222c2242414e4448414e424e4b223a224e5345222c224158495342414e4b223a224e5345227d",
    "exit_logic": "",
    "holding_type": "CNC/NRML",
    "html_block": "",
    "min_candle_freq": 4,
    "order_type": "CNC/NRML",
    "position_qty": "10",
    "position_type": "BUY",
    "quantity": "10",
    "scripList": [
        {
            "segment": "NSE",
            "symbol": "INDUSINDBK"
        },
        {
            "segment": "NSE",
            "symbol": "CANBK"
        },
        {
            "segment": "NSE",
            "symbol": "BANDHANBNK"
        },
        {
            "segment": "NSE",
            "symbol": "AXISBANK"
        }
    ],
    "stop_loss": "1.0",
    "symbols": [
        [
            "NSE",
            "AXISBANK"
        ]
    ],
    "take_profit": "2.0",
    "time_frame": "5min",
    "trade_time_given": "True",
    "trading_start_time": "09:00",
    "trading_stop_time": "23:59",
    "user_uuid": "14388d80-d574-4ffa-81a3-9659fcf94a0a",
    "version": "2"
}
'`

export const curl2 = !isDevelopment
  ? ''
  : `curl 'https://api.streak.world/marketplace_deploy/'     -H 'authority: api.streak.world'     -H 'accept: application/json, text/plain, /'     -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'     -H 'authorization: csrftoken=deO8pMk7u67QFlZ7iKtSrC773s2OKnnAP52KckbBGO1iyukPZRn8Yy7z5V4a4mgS;csrfmiddlewaretoken=deO8pMk7u67QFlZ7iKtSrC773s2OKnnAP52KckbBGO1iyukPZRn8Yy7z5V4a4mgS;sessionid=vh3igxcejm178405nyyumr1eeh7mvmz5'     -H 'x-csrftoken: vh3igxcejm178405nyyumr1eeh7mvmz5'     -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8'     -H 'origin: https://streak.world'     -H 'sec-fetch-site: same-site'     -H 'sec-fetch-mode: cors'     -H 'sec-fetch-dest: empty'     -H 'referer: https://streak.world/algos?tab=discover'     -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8'     --data-raw 'live_period=30&deployment_type=Paper%20trading&frequency=0&order_type=MARKET&algo_subscription_uuid=222f9766-c293-4a30-bd00-42edde505948&algo_uuid=0d0c9f23-a119-4aa8-9406-a677ae31a6e6&seg_sym_list=%5B%5B%22NYSE%22%2C%22LMT%22%5D%2C%5B%22NYSE%22%2C%22MDT%22%5D%2C%5B%22NASDAQ%22%2C%22ADBE%22%5D%2C%5B%22NYSE%22%2C%22JNJ%22%5D%2C%5B%22NYSE%22%2C%22MA%22%5D%2C%5B%22NYSE%22%2C%22NEE%22%5D%2C%5B%22NYSE%22%2C%22V%22%5D%2C%5B%22NASDAQ%22%2C%22GOOGL%22%5D%5D&seg_sym_quantity_list=%5B%5B%22NYSE%22%2C%22LMT%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NYSE%22%2C%22MDT%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NASDAQ%22%2C%22ADBE%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NYSE%22%2C%22JNJ%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NYSE%22%2C%22MA%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NYSE%22%2C%22NEE%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NYSE%22%2C%22V%22%2C1%2C%22Test%20Prod%22%5D%2C%5B%22NASDAQ%22%2C%22GOOGL%22%2C1%2C%22Test%20Prod%22%5D%5D&take_profit=2&stop_loss=1&quantity=undefined&interval=hour&broker=&csrfmiddlewaretoken=deO8pMk7u67QFlZ7iKtSrC773s2OKnnAP52KckbBGO1iyukPZRn8Yy7z5V4a4mgS'     --compressed`
