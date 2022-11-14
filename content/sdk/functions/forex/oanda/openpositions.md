---
title: openpositions
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# openpositions

<Tabs>
<TabItem value="model" label="Model" default>

## forex_oanda_model.open_positions_request

```python title='openbb_terminal/forex/oanda/oanda_model.py'
def open_positions_request(accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L378)

Description: Request information on open positions.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

None

## Examples



</TabItem>
<TabItem value="view" label="View">

## forex_oanda_view.get_open_positions

```python title='openbb_terminal/decorators.py'
def get_open_positions() -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L222)

Description: Get information about open positions.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

## Returns

None

## Examples



</TabItem>
</Tabs>