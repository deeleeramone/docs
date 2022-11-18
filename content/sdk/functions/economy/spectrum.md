---
title: spectrum
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# spectrum

<Tabs>
<TabItem value="model" label="Model" default>

Get group (sectors, industry or country) valuation/performance data. [Source: Finviz]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L168)]

```python
def get_spectrum_data(group: str = "sector") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | sector | True |

## Returns

This function does not return anything



</TabItem>
<TabItem value="view" label="View">

Display finviz spectrum in system viewer [Source: Finviz]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_view.py#L111)]

```python
def display_spectrum(group: str = "sector", export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | sector | True |
| export | str | Format to export data |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>