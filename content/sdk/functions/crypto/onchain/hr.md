---
title: hr
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# hr

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.glassnode_model.get_hashrate

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py'
def get_hashrate(symbol: str, interval: str, start_date: str, end_date: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py#L374)

Description: Returns dataframe with mean hashrate of btc or eth blockchain and symbol price

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Blockchain to check hashrate (BTC or ETH) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| interval | str | Interval frequency (e.g., 24h) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | mean hashrate and symbol price over time |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.glassnode_view.display_hashrate

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py'
def display_hashrate(symbol: str, start_date: str, end_date: str, interval: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py#L318)

Description: Plots dataframe with mean hashrate of btc or eth blockchain and symbol price.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Blockchain to check mean hashrate (BTC or ETH) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| interval | str | Interval frequency (possible values are: 24, 1w, 1month) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>