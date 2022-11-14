---
title: il
description: OpenBB SDK Function
---
# il

## crypto_tools_model.calculate_il

```python
def il(price_changeA: float, price_changeB: float, proportion: float, initial_pool_value: float) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/tools/tools_model.py#L56)

Description: Calculates Impermanent Loss in a custom liquidity pool

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| price_changeA | float | price change of crypto A in percentage | None | False |
| price_changeB | float | price change of crypto B in percentage | None | False |
| proportion | float | percentage of first token in pool | None | False |
| initial_pool_value | float | initial value that pool contains | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | - pd.DataFrame: dataframe with results
- str: narrative version of results |

## Examples




# VIEW

# il

## crypto_tools_view.display_il

```python
def il(price_changeA: int, price_changeB: int, proportion: int, initial_pool_value: int, narrative: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/tools/tools_view.py#L55)

Description: Displays Impermanent Loss in a custom liquidity pool

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| price_changeA | float | price change of crypto A in percentage | None | False |
| price_changeB | float | price change of crypto B in percentage | None | False |
| proportion | float | percentage of first token in pool | None | False |
| initial_pool_value | float | initial value that pool contains | None | False |
| narrative | str | display narrative version instead of dataframe | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

