---
title: wma
description: OpenBB Terminal Function
---

# Technical Analysis

## wma

### Description: 

A Weighted Moving Average puts more weight on recent data and less on past data. This is done by multiplying each bar’s price by a weighting factor. Because of its unique calculation, WMA will follow prices more closely than a corresponding Simple Moving Average.

### Usage: 
```python
usage: wma [-l N_LENGTH] [-o N_OFFSET]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window lengths. Multiple values indicated as comma separated values. | 20, 50 | False | None |
| n_offset | offset | None | False | None |


