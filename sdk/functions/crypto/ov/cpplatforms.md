---
title: cpplatforms
description: OpenBB SDK Function
---
# cpplatforms

## crypto_ov_coinpaprika_model.get_all_contract_platforms

```python
def cpplatform) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L397)

Description: List all smart contract platforms like ethereum, solana, cosmos, polkadot, kusama ... [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | index, platform_id |

## Examples




# VIEW

# cpplatforms

## crypto_ov_coinpaprika_view.display_all_platforms

```python
def cpplatforms(export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L323)

Description: List all smart contract platforms like ethereum, solana, cosmos, polkadot, kusama.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

