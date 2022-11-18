---
title: treasury
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# treasury

<Tabs>
<TabItem value="model" label="Model" default>

Get U.S. Treasury rates [Source: EconDB]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_model.py#L732)

```python
def get_treasuries(instruments: list, maturities: list, frequency: str, start_date: str, end_date: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instruments | list | Type(s) of treasuries, nominal, inflation-adjusted (long term average) or secondary market.<br/>Available options can be accessed through economy.treasury_maturities(). | None | False |
| maturities | list | Treasury maturities to get. Available options can be accessed through economy.treasury_maturities(). | None | False |
| frequency | str | Frequency of the data, this can be annually, monthly, weekly or daily. | None | False |
| start_date | str | Starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | End date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Holds data of the selected types and maturities |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display U.S. Treasury rates [Source: EconDB]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_view.py#L145)

```python
def show_treasuries(instruments: list, maturities: list, frequency: str, start_date: str, end_date: str, raw: bool, external_axes: Optional[List[axes]], export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instruments | list | Type(s) of treasuries, nominal, inflation-adjusted or secondary market.<br/>Available options can be accessed through economy.treasury_maturities(). | None | False |
| maturities | list | Treasury maturities to display. Available options can be accessed through economy.treasury_maturities(). | None | False |
| frequency | str | Frequency of the data, this can be daily, weekly, monthly or annually | None | False |
| start_date | str | Starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | End date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| raw | bool | Whether to display the raw output. | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |
| export | str | Export data to csv,json,xlsx or png,jpg,pdf,svg file | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Plots the Treasury Series. |  |

---

## Examples

---



</TabItem>
</Tabs>