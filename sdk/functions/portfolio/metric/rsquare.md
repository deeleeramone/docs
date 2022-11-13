---
title: rsquare
description: Class method that retrieves R2 Score for portfolio and benchmark selected
---
# rsquare

## portfolio_model.get_r2_score

```python
def rsquare(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L794)

Description: Class method that retrieves R2 Score for portfolio and benchmark selected

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with R2 Score between portfolio and benchmark for different periods |

## Examples

