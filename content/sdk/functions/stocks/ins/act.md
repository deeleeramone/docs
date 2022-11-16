---
title: act
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# act

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.insider.businessinsider_model.get_insider_activity

```python title='openbb_terminal/stocks/insider/businessinsider_model.py'
def get_insider_activity(symbol: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/businessinsider_model.py#L17)

Description: Get insider activity. [Source: Business Insider]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get insider activity data from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Insider activity data |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.insider.businessinsider_view.insider_activity

```python title='openbb_terminal/stocks/insider/businessinsider_view.py'
def insider_activity(data: pd.DataFrame, symbol: str, start_date: str, interval: str, limit: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/businessinsider_view.py#L32)

Description: Display insider activity. [Source: Business Insider]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Stock dataframe | None | False |
| symbol | str | Due diligence ticker symbol | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 3 years back | 3 | False |
| interval | str | Stock data interval | None | False |
| limit | int | Number of latest days of inside activity | None | False |
| raw | bool | Print to console | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>