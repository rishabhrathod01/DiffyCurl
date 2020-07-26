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
  : `curl --location --request POST 'https://btfast.streak.tech/backtest_service' \
--header 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) ReactNativeDebugger/0.10.7 Chrome/78.0.3904.130 Electron/7.1.9 Safari/537.36' \
--header 'Origin: file://' \
--header '__RN_DEBUGGER_SET_HEADER_REQUEST_referer: https://api.streak.tech/dashboard_metrics/' \
--header 'cookie1: csrftoken=jFViPWnSOcVADr0QV9lTuw9jetZG09eLrHcxLWSuycyE4VaUxHkvvV3dr4FzGsE7;sessionid=rgoivzcrhc30whnhw4xo9mhsso4fpf6o' \
--header 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
--data-raw ''`
