---
title: psi_q
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# psi_q

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.dark_pool_shorts.quandl_model.get_short_interest

```python title='openbb_terminal/stocks/dark_pool_shorts/quandl_model.py'
def get_short_interest(symbol: str, nyse: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/quandl_model.py#L18)

Description: Plots the short interest of a stock. This corresponds to the

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ticker to get short interest from | None | False |
| nyse | bool | data from NYSE if true, otherwise NASDAQ | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | short interest volume data |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.dark_pool_shorts.quandl_view.short_interest

```python title='openbb_terminal/stocks/dark_pool_shorts/quandl_view.py'
def short_interest(symbol: str, nyse: bool, limit: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/quandl_view.py#L96)

Description: Plot the short interest of a stock. This corresponds to the

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ticker to get short interest from | None | False |
| nyse | bool | data from NYSE if true, otherwise NASDAQ | None | False |
| limit | int | Number of past days to show short interest | None | False |
| raw | bool | Flag to print raw data instead | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>