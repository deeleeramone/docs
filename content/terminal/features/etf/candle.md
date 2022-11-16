---
title: candle
description: OpenBB Terminal Function
---

# ETFs

## candle

### Description: 

Shows historic data for an ETF

### Usage: 
```python
usage: candle [-p] [--sort {adjclose,open,close,high,low,volume,returns,logret}] [-r] [--raw] [-n NUM] [-t] [--ma MOV_AVG]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| plotly | Flag to show interactive plotly chart. | True | False | None |
| sort | Choose a column to sort by | None | False | adjclose, open, close, high, low, volume, returns, logret |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| raw | Shows raw data instead of chart | None | False | None |
| num | Number to show if raw selected | 20 | False | None |
| trendlines | Flag to add high and low trends to candle. | None | False | None |
| mov_avg | Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1. | None | False | None |


