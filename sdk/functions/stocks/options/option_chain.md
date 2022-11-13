---
title: option_chain
description: Gets option chain from yf for given ticker and expiration
---
# option_chain

## stocks_options_yfinance_model.get_option_chain

```python
def option_chain(symbol: str, expiry: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L157)

Description: Gets option chain from yf for given ticker and expiration

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get options for | None | False |
| expiry | str | Date to get options for. YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| yf.ticker.Options | Options chain |

## Examples

