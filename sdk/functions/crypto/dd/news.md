# news

## crypto_ov_cryptopanic_model.get_news

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/cryptopanic_model.py#L156)

Description: Get recent posts from CryptoPanic news aggregator platform. [Source: https://cryptopanic.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number of news to fetch | None | False |
| post_kind | str | Filter by category of news. Available values: news or media. | None | False |
| filter_ | Optional[str] | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False |
| region | str | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),
es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | bool | Sort in ascend order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with recent news from different sources filtered by provided parameters. |

## Examples

