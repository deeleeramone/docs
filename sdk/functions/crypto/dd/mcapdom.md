---
title: mcapdom
description: OpenBB SDK Function
---
# mcapdom

## crypto_dd_messari_model.get_marketcap_dominance

```python
def mcapdom(symbol: str, interval: str, start_date: str, end_date: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L80)

Description: Returns market dominance of a coin over time

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check market cap dominance | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| start_date | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end_date | int | End date like string (e.g., 2021-10-01) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | market dominance percentage over time |

## Examples




# VIEW

# mcapdom

## crypto_dd_messari_view.display_marketcap_dominance

```python
def mcapdo) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L174)

Description: Display market dominance of a coin over time

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check market cap dominance | None | False |
| start_date | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end_date | int | End date like string (e.g., 2021-10-01) | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

