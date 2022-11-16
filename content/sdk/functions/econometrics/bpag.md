---
title: bpag
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# bpag

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.econometrics.regression_model.get_bpag

```python title='openbb_terminal/econometrics/regression_model.py'
def get_bpag(model: pd.DataFrame) -> tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L626)

Description: Calculate test statistics for heteroscedasticity

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | Model containing residual values. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Test results from the Breusch-Pagan Test |  |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.econometrics.regression_view.display_bpag

```python title='openbb_terminal/econometrics/regression_view.py'
def display_bpag(model: statsmodels.regression.linear_model.RegressionResultsWrapper, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L182)

Description: Show Breusch-Pagan heteroscedasticity test

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | OLS model that has been fit. | None | False |
| export | str | Format to export data | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>