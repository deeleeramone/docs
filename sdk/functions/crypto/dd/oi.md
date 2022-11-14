---
title: oi
description: OpenBB SDK Function
---
# oi

## crypto_dd_coinglass_model.get_open_interest_per_exchange

```python
def o) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L148)

Description: Returns open interest by exchange for a certain symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto Symbol to search open interest futures (e.g., BTC) | None | False |
| interval | int | Frequency (possible values are: 0 for ALL, 2 for 1H, 1 for 4H, 4 for 12H), by default 0 | 0 | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | open interest by exchange and price |

## Examples




# VIEW

# oi

## crypto_dd_coinglass_view.display_open_interest

```python
def o) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L56)

Description: Displays open interest by exchange for a certain cryptocurrency

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to search open interest (e.g., BTC) | None | False |
| interval | int | Frequency (possible values are: 0 for ALL, 2 for 1H, 1 for 4H, 4 for 12H), by default 0 | 0 | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

