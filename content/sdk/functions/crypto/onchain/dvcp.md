---
title: dvcp
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# dvcp

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.onchain.bitquery_model.get_daily_dex_volume_for_given_pair

```python title='openbb_terminal/cryptocurrency/onchain/bitquery_model.py'
def get_daily_dex_volume_for_given_pair(limit: int, symbol: str, to_symbol: str, sortby: str, ascend: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L400)

Description: Get daily volume for given pair [Source: https://graphql.bitquery.io/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Last n days to query data | None | False |
| symbol | str | ERC20 token symbol | None | False |
| to_symbol | str | Quote currency. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Daily volume for given pair |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.onchain.bitquery_view.display_daily_volume_for_given_pair

```python title='openbb_terminal/cryptocurrency/onchain/bitquery_view.py'
def display_daily_volume_for_given_pair(symbol: str, to_symbol: str, limit: int, sortby: str, ascend: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_view.py#L87)

Description: Prints table showing daily volume for given pair

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ERC20 token symbol or address | None | False |
| to_symbol | str | Quote currency. | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Token volume on different decentralized exchanges |

## Examples



</TabItem>
</Tabs>