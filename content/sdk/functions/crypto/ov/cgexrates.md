---
title: cgexrates
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cgexrates

<Tabs>
<TabItem value="model" label="Model" default>

Get list of crypto, fiats, commodity exchange rates from CoinGecko API [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L398)

```python
def get_exchange_rates(sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Index, Name, Unit, Value, Type |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Shows  list of crypto, fiats, commodity exchange rates. [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L200)

```python
def display_exchange_rates(sortby: str, ascend: bool, limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>