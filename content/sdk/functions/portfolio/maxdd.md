---
title: maxdd
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# maxdd

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.portfolio.portfolio_model.get_maximum_drawdown

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_maximum_drawdown(portfolio_engine: portfolio_model.PortfolioEngine, is_returns: bool) -> Series
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1590)

Description: Calculate the drawdown (MDD) of historical series.  Note that the calculation is done

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of input values | None | False |
| is_returns | bool | Flag to indicate inputs are returns | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Series | Holdings series |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.portfolio.portfolio_view.display_maximum_drawdown

```python title='openbb_terminal/portfolio/portfolio_view.py'
def display_maximum_drawdown(portfolio_engine: portfolio_model.PortfolioEngine, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L1112)

Description: Display maximum drawdown curve

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioEngine | PortfolioEngine object | None | False |
| export | str | Format to export data | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>