---
title: etf_by_category
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# etf_by_category

<Tabs>
<TabItem value="model" label="Model" default>

Return a selection of ETFs based on category filtered by total assets.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_model.py#L56)]

```python
def get_etfs_by_category(category: str) -> Dict
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| category | str | Search by category to find ETFs matching the criteria. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary with ETFs that match a certain description |



</TabItem>
<TabItem value="view" label="View">

Display a selection of ETFs based on a category filtered by total assets.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_view.py#L95)]

```python
def display_etf_by_category(category: str, limit: int = 10, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| description | str | Search by description to find ETFs matching the criteria. | None | True |
| limit | int | Limit of ETFs to display | 10 | True |
| export | str | Type of format to export data |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>