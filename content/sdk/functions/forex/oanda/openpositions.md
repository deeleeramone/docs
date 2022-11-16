---
title: openpositions
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# openpositions

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.forex.oanda.oanda_model.open_positions_request

```python title='openbb_terminal/forex/oanda/oanda_model.py'
def open_positions_request(accountID: str) -> Union
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L378)

Description: Request information on open positions.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

This function does not return anything

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.forex.oanda.oanda_view.get_open_positions

```python title='openbb_terminal/forex/oanda/oanda_view.py'
def get_open_positions(accountID: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L222)

Description: Get information about open positions.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>