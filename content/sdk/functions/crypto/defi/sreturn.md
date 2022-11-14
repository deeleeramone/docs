---
title: sreturn
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sreturn

<Tabs>
<TabItem value="model" label="Model" default>

## crypto_defi_terramoney_fcd_model.get_staking_returns_history

```python title='openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py'
def get_staking_returns_history(limit: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L310)

Description: Get terra blockchain staking returns history [Source: https://fcd.terra.dev/v1]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | The number of returns to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical staking returns |

## Examples



</TabItem>
<TabItem value="view" label="View">

## crypto_defi_terramoney_fcd_view.display_staking_returns_history

```python title='openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py'
def display_staking_returns_history(limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L254)

Description: Display terra blockchain staking returns history [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples



</TabItem>
</Tabs>