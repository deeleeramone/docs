---
title: close
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# close

<Tabs>
<TabItem value="model" label="Model" default>

Close a trade.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L526)

```python
def close_trades_request(orderID: str, units: Optional[int], accountID: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| orderID | str | ID of the order to close | None | False |
| units | Union[int, None] | Number of units to close. If empty default to all. | to | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Close trades data or False |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Close a trade.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L271)

```python
def close_trade(accountID: str, orderID: str, units: Optional[int]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| orderID | str | ID of the order to close | None | False |
| units | Union[int, None] | Number of units to close. If empty default to all. | to | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>