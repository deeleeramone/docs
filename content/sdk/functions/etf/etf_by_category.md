---
title: etf_by_category
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# etf_by_category

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.etf.financedatabase_model.get_etfs_by_category

```python title='openbb_terminal/etf/financedatabase_model.py'
def get_etfs_by_category(category: str) -> Dict
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_model.py#L56)

Description: Return a selection of ETFs based on category filtered by total assets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| category | str | Search by category to find ETFs matching the criteria. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary with ETFs that match a certain description |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.etf.financedatabase_view.display_etf_by_category

```python title='openbb_terminal/etf/financedatabase_view.py'
def display_etf_by_category(category: str, limit: int, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_view.py#L95)

Description: Display a selection of ETFs based on a category filtered by total assets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| description | str | Search by description to find ETFs matching the criteria. | None | False |
| limit | int | Limit of ETFs to display | None | False |
| export | str | Type of format to export data | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>