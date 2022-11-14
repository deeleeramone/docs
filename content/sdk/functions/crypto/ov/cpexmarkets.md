---
title: cpexmarkets
description: OpenBB SDK Function
---
# cpexmarkets

## crypto_ov_coinpaprika_model.get_exchanges_market

```python
def cpexmarkets(exchange_id: str, symbols: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L346)

Description: List markets by exchange ID [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange_id | str | identifier of exchange e.g for Binance Exchange -> binance | None | False |
| symbols | str | Comma separated quotes to return e.g quotes=USD,BTC | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | pair, base_currency_name, quote_currency_name, market_url,
category, reported_volume_24h_share, trust_score, |

## Examples




# VIEW

# cpexmarkets

## crypto_ov_coinpaprika_view.display_exchange_markets

```python
def cpexmarkets(exchange: str, sortby: str, ascend: bool, limit: int, links: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L266)

Description: Get all markets for given exchange [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange | str | Exchange identifier e.g Binance | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| links | bool | Flag to display urls | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

