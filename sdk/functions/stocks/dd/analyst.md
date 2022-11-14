---
title: analyst
description: OpenBB SDK Function
---
# analyst

## stocks_dd_finviz_model.get_analyst_data

```python
def analyst(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/finviz_model.py#L33)

Description: Get analyst data. [Source: Finviz]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| DataFrame | Analyst price targets |

## Examples

