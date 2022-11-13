---
title: nhits
description: Display Nhits forecast
---
# nhits

## forecast_nhits_view.display_nhits_forecast

```python
def nhits(data: Union[pd.Series, pd.DataFrame], target_column: str, dataset_name: str, n_predict: int, past_covariates: str, train_split: float, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, num_stacks: int, num_blocks: int, num_layers: int, layer_widths: int, pooling_kernel_sizes: Union[Tuple[Tuple[int]], NoneType], n_freq_downsample: Union[Tuple[Tuple[int]], NoneType], dropout: float, activation: str, max_pool_1d: bool, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool, export: str, residuals: bool, forecast_only: bool, start_date: Union[datetime.datetime, NoneType], end_date: Union[datetime.datetime, NoneType], naive: bool, export_pred_raw: bool, external_axes: Union[List[axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/nhits_view.py#L19)

Description: Display Nhits forecast

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| target_column | str | Target column to forecast. Defaults to "close". | s | False |
| dataset_name | str | The name of the ticker to be predicted | None | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| input_chunk_length | int | Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14. | 14 | False |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 5. | 5 | False |
| num_stacks | int | The number of stacks that make up the whole model. | None | False |
| num_blocks | int | The number of blocks making up every stack. | None | False |
| num_layers | int | The number of fully connected layers preceding the final forking layers in each block
of every stack. | None | False |
| layer_widths | int | Determines the number of neurons that make up each fully connected layer in each
block of every stack. If a list is passed, it must have a length equal to num_stacks
and every entry in that list corresponds to the layer width of the corresponding stack.
If an integer is passed, every stack will have blocks with FC layers of the same width. | None | False |
| pooling_kernel_size | Optional[Tuple[Tuple[int]]] | If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),
specifying the kernel size for each block in each stack used for the input pooling
layer. If left to None, some default values will be used based on input_chunk_length. | values | False |
| n_freq_downsample | Optional[Tuple[Tuple[int]]] | If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),
specifying the downsampling factors before interpolation, for each block in each stack.
If left to None, some default values will be used based on output_chunk_length. | values | False |
| dropout | float | The dropout probability to be used in fully connected layers. | None | False |
| activation | str | Supported activations: [[‘ReLU’,’RReLU’, ‘PReLU’, ‘Softplus’, ‘Tanh’, ‘SELU’, ‘LeakyReLU’, ‘Sigmoid’] | None | False |
| max_pool_1d | bool | Use max_pool_1d pooling. False uses AvgPool1d. | None | False |
| batch_size | int | Number of time series (input and output sequences) used in each training pass. Defaults to 32. | 32 | False |
| n_epochs | int | Number of epochs over which to train the model. Defaults to 100. | 100 | False |
| learning_rate | float | Defaults to 1e-3. | 1e-3 | False |
| model_save_name | str | Name for model. Defaults to "brnn_model". | s | False |
| force_reset | bool | If set to True, any previously-existing model with the same name will be reset
(all checkpoints will be discarded). Defaults to True. | True | False |
| save_checkpoints | bool | Whether or not to automatically save the untrained model and checkpoints from training.
Defaults to True. | True | False |
| export | str | Format to export data | None | False |
| residuals | bool | Whether to show residuals for the model. Defaults to False. | False | False |
| forecast_only | bool | Whether to only show dates in the forecasting range. Defaults to False. | False | False |
| start_date | Optional[datetime] | The starting date to perform analysis, data before this is trimmed. Defaults to None. | None | False |
| end_date | Optional[datetime] | The ending date to perform analysis, data after this is trimmed. Defaults to None. | None | False |
| naive | bool | Whether to show the naive baseline. This just assumes the closing price will be the same
as the previous day's closing price. Defaults to False. | False | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

None

## Examples

