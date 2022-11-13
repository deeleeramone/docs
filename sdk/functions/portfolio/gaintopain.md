---
title: gaintopain
description: Get Pain-to-Gain ratio based on historical data
---
# gaintopain

## portfolio_model.get_gaintopain_ratio

```python
def gaintopain(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1098)

Description: Get Pain-to-Gain ratio based on historical data

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of the portfolio's gain-to-pain ratio |

## Examples

