---
title: newsletters
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# newsletters

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.defi.substack_model.get_newsletters

```python title='openbb_terminal/cryptocurrency/defi/substack_model.py'
def get_newsletters() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/substack_model.py#L54)

Description: Scrape all substack newsletters from url list.

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with recent news from most popular DeFi related newsletters. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.defi.substack_view.display_newsletters

```python title='openbb_terminal/cryptocurrency/defi/substack_view.py'
def display_newsletters(limit: int, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/substack_view.py#L16)

Description: Prints table showing DeFi related substack newsletters.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>