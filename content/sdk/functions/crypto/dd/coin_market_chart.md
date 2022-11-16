---
title: coin_market_chart
description: OpenBB SDK Function
---

# coin_market_chart

## openbb_terminal.cryptocurrency.due_diligence.pycoingecko_model.get_coin_market_chart

```python title='openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py'
def get_coin_market_chart(symbol: str, vs_currency: str, days: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py#L222)

Description: Get prices for given coin. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| vs_currency | str | currency vs which display data | None | False |
| days | int | number of days to display the data | None | False |
| kwargs | None | unspecified keyword arguments | None | None |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Prices for given coin<br/>Columns: time, price, currency |

## Examples

