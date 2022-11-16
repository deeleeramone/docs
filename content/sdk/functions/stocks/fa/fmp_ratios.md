---
title: fmp_ratios
description: OpenBB SDK Function
---

# fmp_ratios

## openbb_terminal.stocks.fundamental_analysis.fmp_model.get_key_ratios

```python title='openbb_terminal/stocks/fundamental_analysis/fmp_model.py'
def get_key_ratios(symbol: str, limit: int, quarterly: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/fmp_model.py#L457)

Description: Get key ratios

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number to get | None | False |
| quarterly | bool | Flag to get quarterly data, by default False | False | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of key ratios |

## Examples

