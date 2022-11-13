# fmp_balance

## stocks_fa_fmp_model.get_balance

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L279)

Description: Get balance sheets

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number to get | None | False |
| quarterly | bool | Flag to get quarterly data, by default False | False | True |
| ratios | bool | Shows percentage change, by default False | False | False |
| plot | bool | If the data shall be formatted ready to plot | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of balance sheet |

## Examples

