---
title: cpis
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cpis

<Tabs>
<TabItem value="model" label="Model" default>

Get number of companies per industry in a specific sector (and specific market cap).

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L309)

```python
def get_companies_per_industry_in_sector(sector: str, mktcap: str, exclude_exchanges: bool) -> dict
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sector | str | Select sector to get number of companies by each industry | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of industries and number of companies in a specific sector |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display number of companies per industry in a specific sector. [Source: Finance Database]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_view.py#L525)

```python
def display_companies_per_industry_in_sector(sector: str, mktcap: str, exclude_exchanges: bool, export: str, raw: bool, max_industries_to_display: int, min_pct_to_display_industry: float, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sector | str | Select sector to get number of companies by each industry | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |
| export | str | Format to export data as | None | False |
| raw | bool | Output all raw data | None | False |
| max_industries_to_display | int | Maximum number of industries to display | None | False |
| min_pct_to_display_industry | float | Minimum percentage to display industry | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>