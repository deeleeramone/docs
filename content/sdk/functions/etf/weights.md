---
title: weights
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# weights

<Tabs>
<TabItem value="model" label="Model" default>

Return sector weightings allocation of ETF. [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/yfinance_model.py#L15)

```python
def get_etf_sector_weightings(name: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | ETF name | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary with sector weightings allocation |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display sector weightings allocation of ETF. [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/yfinance_view.py#L27)

```python
def display_etf_weightings(name: str, raw: bool, min_pct_to_display: float, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | ETF name | None | False |
| raw | bool | Display sector weighting allocation | None | False |
| min_pct_to_display | float | Minimum percentage to display sector | None | False |
| export | str | Type of format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>