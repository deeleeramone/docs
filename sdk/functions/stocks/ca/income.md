---
title: income
description: OpenBB SDK Function
---
# income

## stocks_ca_marketwatch_model.get_income_comparison

```python
def income(similar: List[str], timeframe: str, quarter: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/marketwatch_model.py#L73)

Description: Get income data. [Source: Marketwatch]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of tickers to compare.
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| timeframe | str | Column header to compare | None | False |
| quarter | bool | Whether to use quarterly statements, by default False | False | True |
| export | str | Format to export data | None | True |

## Returns

None

## Examples




# VIEW

# income

## stocks_ca_marketwatch_view.display_income_comparison

```python
def income(symbols: List[str], timeframe: str, quarter: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/marketwatch_view.py#L22)

Description: Display income data. [Source: Marketwatch]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of tickers to compare. Enter tickers you want to see as shown below:
["TSLA", "AAPL", "NFLX", "BBY"]
You can also get a list of comparable peers with
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| timeframe | str | What year to look at | None | False |
| quarter | bool | Whether to use quarterly statements, by default False | False | True |
| export | str | Format to export data | None | True |

## Returns

None

## Examples

