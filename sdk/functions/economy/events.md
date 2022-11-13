# events

## economy_investingcom_model.get_economic_calendar

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/investingcom_model.py#L372)

Description: Get economic calendar [Source: Investing.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country selected. List of available countries is accessible through get_events_countries(). | None | False |
| importance | str | Importance selected from high, medium, low or all | None | False |
| category | str | Event category. List of available categories is accessible through get_events_categories(). | None | False |
| start_date | datetime.date | First date to get events. | None | False |
| end_date | datetime.date | Last date to get events. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, str] | Economic calendar Dataframe and detail string about country/time zone. |

## Examples

