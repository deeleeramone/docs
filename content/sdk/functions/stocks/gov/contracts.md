---
title: contracts
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# contracts

<Tabs>
<TabItem value="model" label="Model" default>

Get government contracts for ticker [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L103)

```python
def get_contracts(symbol: str, past_transaction_days: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get congress trading data from | None | False |
| past_transaction_days | int | Number of days to get transactions for | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most recent transactions by members of U.S. Congress |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Show government contracts for ticker [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L380)

```python
def display_contracts(symbol: str, past_transaction_days: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get congress trading data from | None | False |
| past_transaction_days | int | Number of days to get transactions for | None | False |
| raw | bool | Flag to display raw data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>