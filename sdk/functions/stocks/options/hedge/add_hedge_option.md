---
title: add_hedge_option
description: OpenBB SDK Function
---
# add_hedge_option

## stocks_options_hedge_model.add_hedge_option

```python
def add_hedge_option(price: float, implied_volatility: float, strike: float, days: float, sign: int) -> tuple:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/hedge/hedge_model.py#L143)

Description: Determine the delta, gamma and vega value of the portfolio and/or options.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| price | float | The price. | None | False |
| implied_volatility | float | The implied volatility. | None | False |
| strike | float | The strike price. | None | False |
| days | float | The amount of days until expiration. Use annual notation thus a month would be 30 / 360. | None | False |
| sign | int | Whether you have a long (1) or short (-1) position | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| float | None |

## Examples




# VIEW

# add_hedge_option

## stocks_options_hedge_view.add_and_show_greeks

```python
def add_hedge_option(price: float, implied_volatility: float, strike: float, days: float, sign: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/hedge/hedge_view.py#L15)

Description: Determine the delta, gamma and vega value of the portfolio and/or options and show them.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| price | float | The price. | None | False |
| implied_volatility | float | The implied volatility. | None | False |
| strike | float | The strike price. | None | False |
| days | float | The amount of days until expiration. Use annual notation thus a month would be 30 / 360. | None | False |
| sign | int | Whether you have a long (1) or short (-1) position | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| float | None |

## Examples

