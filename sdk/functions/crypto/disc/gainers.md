---
title: gainers
description: Shows Largest Gainers - coins which gain the most in given period. [Source: CoinGecko]
---
# gainers

## crypto_disc_pycoingecko_model.get_gainers

```python
def gainers(interval: str, limit: int, sortby: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L252)

Description: Shows Largest Gainers - coins which gain the most in given period. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Time interval by which data is displayed. One from [1h, 24h, 7d, 14d, 30d, 60d, 1y] | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to
API documentation (see /coins/markets in https://www.coingecko.com/en/api/documentation) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top Gainers  - coins which gain most in price in given period of time.
Columns: Symbol, Name, Volume, Price, %Change_{interval}, Url |

## Examples

