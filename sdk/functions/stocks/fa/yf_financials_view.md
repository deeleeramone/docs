---
title: yf_financials
description: Display tickers balance sheet, income statement or cash-flow
---
# yf_financials

## stocks_fa_yahoo_finance_view.display_fundamentals

```python
def yf_financials(symbol: str, statement: str, limit: int, ratios: bool, plot: list, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_view.py#L382)

Description: Display tickers balance sheet, income statement or cash-flow

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Possible values are:

- cash-flow
- financials for Income
- balance-sheet | None | False |
| limit | int | Number of periods to show | None | False |
| ratios | bool | Shows percentage change | None | False |
| plot | list | List of row labels to plot | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

