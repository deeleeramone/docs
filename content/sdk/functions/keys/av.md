---
title: av
description: OpenBB SDK Function
---
# av

## keys_model.set_av_key

```python
def av(key: str, persist: bool, show_output: bool) -> str:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L269)

Description: Set Alpha Vantage key

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.
If True, api key change will be global, i.e. it will affect terminal environment variables.
By default, False. | None | False |
| show_output | bool | Display status string or not. By default, False. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| str | None |

## Examples

