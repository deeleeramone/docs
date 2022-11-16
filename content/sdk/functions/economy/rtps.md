---
title: rtps
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rtps

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.economy.alphavantage_model.get_sector_data

```python title='openbb_terminal/economy/alphavantage_model.py'
def get_sector_data() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L19)

Description: Get real-time performance sector data

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Real-time performance data |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.economy.alphavantage_view.realtime_performance_sector

```python title='openbb_terminal/economy/alphavantage_view.py'
def realtime_performance_sector(raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_view.py#L27)

Description: Display Real-Time Performance sector. [Source: AlphaVantage]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| raw | bool | Output only raw data | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>