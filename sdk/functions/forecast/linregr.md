---
title: linregr
description: OpenBB SDK Function
---
# linregr

## forecast_linregr_model.get_linear_regression_data

```python
def linregr(data: Union[pd.Series, pd.DataFrame], target_column: str, n_predict: int, past_covariates: str, train_split: float, forecast_horizon: int, output_chunk_length: int, lags: Union[int, List[int]], random_state: Union[int, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/linregr_model.py#L21)

Description: Perform Linear Regression Forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| target_column | str | Target column to forecast. Defaults to "close". | s | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 1. | 1 | False |
| lags | Union[int, List[int]] | lagged target values to predict the next time step | None | False |
| random_state | Optional[int] | The state for the model | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[TimeSeries] | Adjusted Data series |

## Examples




# VIEW

# linregr

## forecast_linregr_view.display_linear_regression

```python
def linregr(data: Union[pd.Series, pd.DataFrame], target_column: str, dataset_name: str, n_predict: int, past_covariates: str, train_split: float, forecast_horizon: int, output_chunk_length: int, lags: Union[int, List[int]], export: str, residuals: bool, forecast_only: bool, start_date: Union[datetime.datetime, NoneType], end_date: Union[datetime.datetime, NoneType], naive: bool, explainability_raw: bool, export_pred_raw: bool, external_axes: Union[List[axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/linregr_view.py#L19)

Description: Display Linear Regression Forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| dataset_name | str | The name of the ticker to be predicted | None | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| target_col | str | Target column to forecast. Defaults to "close". | s | False |
| train_split (float, optional) |  | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 1. | 1 | False |
| lags | Union[int, List[int]] | lagged target values to predict the next time step | None | False |
| export | str | Format to export data | None | False |
| residuals | bool | Whether to show residuals for the model. Defaults to False. | False | False |
| forecast_only | bool | Whether to only show dates in the forecasting range. Defaults to False. | False | False |
| start_date | Optional[datetime] | The starting date to perform analysis, data before this is trimmed. Defaults to None. | None | False |
| end_date | Optional[datetime] | The ending date to perform analysis, data after this is trimmed. Defaults to None. | None | False |
| naive | bool | Whether to show the naive baseline. This just assumes the closing price will be the
same as the previous day's closing price. Defaults to False. | False | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

None

## Examples

