# lt

## crypto_onchain_bitquery_model.get_dex_trades_by_exchange

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L265)

Description: Get trades on Decentralized Exchanges aggregated by DEX [Source: https://graphql.bitquery.io/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| trade_amount_currency | str | Currency of displayed trade amount. Default: USD | USD | False |
| limit | int | Last n days to query data. Maximum 365 (bigger numbers can cause timeouts
on server side) | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Trades on Decentralized Exchanges aggregated by DEX |

## Examples

