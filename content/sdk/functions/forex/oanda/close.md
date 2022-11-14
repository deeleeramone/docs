---
title: close
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# close

<Tabs>
<TabItem value="model" label="Model" default>

## forex_oanda_model.close_trades_request

```python title='openbb_terminal/forex/oanda/oanda_model.py'
def close_trades_request(orderID: str, units: Union[int, NoneType], accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L526)

Description: Close a trade.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| orderID | str | ID of the order to close | None | False |
| units | Union[int, None] | Number of units to close. If empty default to all. | to | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Close trades data or False |

## Examples



</TabItem>
<TabItem value="view" label="View">

## forex_oanda_view.close_trade

```python title='openbb_terminal/decorators.py'
def close_trade() -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L280)

Description: Close a trade.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| orderID | str | ID of the order to close | None | False |
| units | Union[int, None] | Number of units to close. If empty default to all. | to | False |

## Returns

None

## Examples



</TabItem>
</Tabs>