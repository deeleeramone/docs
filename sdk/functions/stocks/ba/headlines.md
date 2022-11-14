---
title: headlines
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# headlines

<Tabs>
<TabItem value="model" label="Model" default>

## stocks_ba_finbrain_model.get_sentiment

```python title='openbb_terminal/common/behavioural_analysis/finbrain_model.py'
def get_sentiment(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_model.py#L15)

Description: Gets Sentiment analysis provided by FinBrain's API [Source: finbrain]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| DataFrame() | Empty if there was an issue with data retrieval |

## Examples



</TabItem>
<TabItem value="view" label="View">

## stocks_ba_finbrain_view.display_sentiment_analysis

```python title='openbb_terminal/common/behavioural_analysis/finbrain_view.py'
def display_sentiment_analysis(symbol: str, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_view.py#L36)

Description: Sentiment analysis from FinBrain

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |
| raw | False | Display raw table data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples



</TabItem>
</Tabs>