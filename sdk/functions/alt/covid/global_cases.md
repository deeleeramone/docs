---
title: global_cases
description: Get historical cases for given countryooooo
---
# global_cases

## alt_covid_model.get_global_cases

```python
def global_cases(country: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L25)

Description: Get historical cases for given countryooooo

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to search for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical cases |

## Examples

Dataframe of historical cases for United States


```python
df = get_global_cases("United States")
```

Dataframe of historical cases for Portugal


```python
df = get_global_cases("Portugal")
```

Dataframe of historical cases for Spain
```python
df = get_global_cases("Spain")
```

