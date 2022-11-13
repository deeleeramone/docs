# tft

## forecast_tft_model.get_tft_data

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tft_model.py#L25)

Description: Performs Temporal Fusion Transformer forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data (Union[pd.Series, pd.DataFrame]) |  | Input Data | None | False |
| target_column (str, optional) |  | Target column to forecast. Defaults to "close". | s | False |
| n_predict (int, optional) |  | Days to predict. Defaults to 5. | 5 | False |
| train_split (float, optional) |  | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates (str, optional) |  | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon (int, optional) |  | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| input_chunk_length (int, optional) |  | Number of past time steps that are fed to the forecasting module at prediction time.
Defaults to 14. | 14 | False |
| output_chunk_length (int, optional) |  | The length of the forecast of the model. Defaults to 5. | 5 | False |
| hidden_size (int, optional) |  | Hidden state size of the TFT. Defaults to 16. | 16 | False |
| lstm_layers (int, optional) |  | Number of layers for the Long Short Term Memory Encoder and Decoder. Defaults to 16. | 16 | False |
| num_attention_headers (int, optional) |  | Number of attention heads. Defaults to 4. | 4 | False |
| full_attention (bool, optional) |  | Whether to apply a multi-head attention query. Defaults to False> | False | False |
| dropout (float, optional) |  | Fraction of neurons affected by dropout. Defaults to 0.1. | 0.1 | False |
| hidden_continuous_size (int, optional) |  | Default hidden size for processing continuous variables. Defaults to 8. | hidden | False |
| n_epochs (int, optional) |  | Number of epochs to run during training. Defaults to 200. | 200 | False |
| batch_size (int, optional) |  | Number of samples to pass through network during a single epoch. Defaults to 32. | 32 | False |
| model_save_name (str, optional) |  | The name for the model. Defaults to tft_model | tft_model | False |
| force_reset (bool, optional) |  | If set to True, any previously-existing model with the same name will be reset
(all checkpoints will be discarded). Defaults to True. | True | False |
| save_checkpoints (bool, optional) |  | Whether or not to automatically save the untrained model and checkpoints from training.
Defaults to True. | True | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[float] | Adjusted Data series |

## Examples

