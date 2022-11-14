---
title: psi_sg
description: OpenBB SDK Function
---
# psi_sg

## stocks_dps_stockgrid_model.get_short_interest_volume

```python
def psi_sg(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L122)

Description: Get price vs short interest volume. [Source: Stockgrid]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to get data from | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Short interest volume data | None | None |
| List | None | Price data | None | None |

## Returns

None

## Examples




# VIEW

# psi_sg

## stocks_dps_stockgrid_view.short_interest_volume

```python
def psi_sg(symbol: str, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_view.py#L122)

Description: Plot price vs short interest volume. [Source: Stockgrid]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to plot for | None | False |
| limit | int | Number of last open market days to show | None | False |
| raw | bool | Flag to print raw data instead | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

