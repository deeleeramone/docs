# trading_pairs

## crypto_dd_binance_model._get_trading_pairs

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L20)

Description: Helper method that return all trading pairs on binance. Methods ause this data for input for e.g

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| List[dict] | list of dictionaries in format:
[
{'symbol': 'ETHBTC', 'status': 'TRADING', 'baseAsset': 'ETH', 'baseAssetPrecision': 8,
'quoteAsset': 'BTC', 'quotePrecision': 8, 'quoteAssetPrecision': 8,
'baseCommissionPrecision': 8, 'quoteCommissionPrecision': 8,
'orderTypes': ['LIMIT', 'LIMIT_MAKER', 'MARKET', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT'],
'icebergAllowed': True,
'ocoAllowed': True,
'quoteOrderQtyMarketAllowed': True,
'isSpotTradingAllowed': True,
'isMarginTradingAllowed': True,
'filters': [{'filterType': 'PRICE_FILTER', 'minPrice': '0.00000100',
'maxPrice': '922327.00000000', 'tickSize': '0.00000100'},
{'filterType': 'PERCENT_PRICE', 'multiplierUp': '5', 'multiplierDown': '0.2', 'avgPriceMins': 5},
{'filterType': 'LOT_SIZE', 'minQty': '0.00100000', 'maxQty': '100000.00000000', 'stepSize': '0.00100000'},
{'filterType': 'MIN_NOTIONAL', 'minNotional': '0.00010000', 'applyToMarket': True, 'avgPriceMins': 5},
{'filterType': 'ICEBERG_PARTS', 'limit': 10}, {'filterType': 'MARKET_LOT_SIZE', 'minQty': '0.00000000',
'maxQty': '930.49505347', 'stepSize': '0.00000000'}, {'filterType': 'MAX_NUM_ORDERS', 'maxNumOrders': 200},
{'filterType': 'MAX_NUM_ALGO_ORDERS', 'maxNumAlgoOrders': 5}], 'permissions': ['SPOT', 'MARGIN']},
...
] |

## Examples

