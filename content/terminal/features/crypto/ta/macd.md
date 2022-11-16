---
title: macd
description: OpenBB Terminal Function
---

# Technical Analysis

## macd

### Description: 

The Moving Average Convergence Divergence (MACD) is the difference between two Exponential Moving Averages. The Signal line is an Exponential Moving Average of the MACD. The MACD signals trend changes and indicates the start of new trend direction. High values indicate overbought conditions, low values indicate oversold conditions. Divergence with the price indicates an end to the current trend, especially if the MACD is at extreme high or low values. When the MACD line crosses above the signal line a buy signal is generated. When the MACD crosses below the signal line a sell signal is generated. To confirm the signal, the MACD should be above zero for a buy, and below zero for a sell.

### Usage: 
```python
usage: macd [--fast N_FAST] [--slow N_SLOW] [--signal N_SIGNAL]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_fast | The short period. | 12 | False | None |
| n_slow | The long period. | 26 | False | None |
| n_signal | The signal period. | 9 | False | None |


