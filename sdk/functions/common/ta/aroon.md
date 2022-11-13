---
title: aroon
description: OpenBB SDK Function
---
# aroon

## common_ta_trend_indicators_model.aroon

```python
def aroon(data: pd.DataFrame, window: int, scalar: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/trend_indicators_model.py#L55)

Description: Aroon technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe with OHLC price data | None | False |
| window | int | Length of window | None | False |
| scalar | int | Scalar variable | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with aroon indicator |

## Examples




# VIEW

# aroon

## common_ta_trend_indicators_view.display_aroon

```python
def aroon(data: pd.DataFrame, window: int, scalar: int, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/trend_indicators_view.py#L120)

Description: Plot Aroon indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe with OHLC price data | None | False |
| window | int | Length of window | None | False |
| symbol | str | Ticker | None | False |
| scalar | int | Scalar variable | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

