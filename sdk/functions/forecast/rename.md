---
title: rename
description: Rename a column in a dataframe
---
# rename

## forecast_model.rename_column

```python
def rename(data: pd.DataFrame, old_column: str, new_column: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L452)

Description: Rename a column in a dataframe

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | The dataframe to have a column renamed | None | False |
| old_column | str | The column that will have its name changed | None | False |
| new_column | str | The name to update to | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | The dataframe with the renamed column |

## Examples

