---
title: season
description: OpenBB Terminal Function
---

# Forecasting

## season

### Description: 

The seasonality for a given column

### Usage: 
```python
usage: season [-v VALUES] [-m M] [--max_lag MAX_LAG] [-a ALPHA]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| values | Dataset.column values to be displayed in a plot | None | False | None |
| m | A time lag to highlight on the plot | None | False | None |
| max_lag | The maximal lag order to consider | 24 | False | None |
| alpha | The confidence interval to display | 0.05 | False | None |


## Examples

```python

(🦋) /forecast/ $ load TSLA.csv

(🦋) /forecast/ $ season TSLA.volume
TODO: screen shot


```

