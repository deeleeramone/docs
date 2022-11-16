---
title: poly_financials
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# poly_financials

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.fundamental_analysis.polygon_model.get_financials

```python title='openbb_terminal/stocks/fundamental_analysis/polygon_model.py'
def get_financials(symbol: str, statement: str, quarterly: bool, ratios: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/polygon_model.py#L17)

Description: Get ticker financial statements from polygon

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Financial statement data to retrieve, can be balance, income or cash | None | False |
| quarterly | bool | Flag to get quarterly reports, by default False | False | False |
| ratios | bool | Shows percentage change, by default False | False | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Balance Sheets or Income Statements |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.fundamental_analysis.polygon_view.display_fundamentals

```python title='openbb_terminal/stocks/fundamental_analysis/polygon_view.py'
def display_fundamentals(symbol: str, statement: str, limit: int, quarterly: bool, ratios: bool, plot: list, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/polygon_view.py#L26)

Description: Display tickers balance sheet or income statement

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Either balance or income | None | False |
| limit | int | Number of results to show, by default 10 | 10 | False |
| quarterly | bool | Flag to get quarterly reports, by default False | False | False |
| ratios | bool | Shows percentage change, by default False | False | False |
| plot | list | List of row labels to plot | None | False |
| export | str | Format to export data | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>