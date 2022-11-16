---
title: macd
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# macd

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.technical_analysis.momentum_model.macd

```python title='openbb_terminal/common/technical_analysis/momentum_model.py'
def macd(data: pd.Series, n_fast: int, n_slow: int, n_signal: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L61)

Description: Moving average convergence divergence

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Values for calculation | None | False |
| n_fast | int | Fast period | None | False |
| n_slow | int | Slow period | None | False |
| n_signal | int | Signal period | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of technical indicator |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.technical_analysis.momentum_view.display_macd

```python title='openbb_terminal/common/technical_analysis/momentum_view.py'
def display_macd(data: pd.Series, n_fast: int, n_slow: int, n_signal: int, symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L126)

Description: Plots MACD signal

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Values to input | None | False |
| n_fast | int | Fast period | None | False |
| n_slow | int | Slow period | None | False |
| n_signal | int | Signal period | None | False |
| symbol | str | Stock ticker | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>