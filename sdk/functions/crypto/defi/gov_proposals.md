---
title: gov_proposals
description: OpenBB SDK Function
---
# gov_proposals

## crypto_defi_terramoney_fcd_model.get_proposals

```python
def gov_proposals(status: str, sortby: str, ascend: bool, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L195)

Description: Get terra blockchain governance proposals list [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| status | str | status of proposal, one from list: ['Voting','Deposit','Passed','Rejected'] | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| limit | int | Number of records to display | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Terra blockchain governance proposals list |

## Examples




# VIEW

# gov_proposals

## crypto_defi_terramoney_fcd_view.display_gov_proposals

```python
def gov_proposals(limit: int, status: str, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L107)

Description: Display terra blockchain governance proposals list [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| status | str | status of proposal, one from list: ['Voting','Deposit','Passed','Rejected'] | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascend | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

