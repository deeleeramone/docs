---
title: redditsent
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# redditsent

<Tabs>
<TabItem value="model" label="Model" default>

Finds posts related to a specific search term in Reddit.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L864)

```python
def get_posts_about(symbol: str, limit: int, sortby: str, time_frame: str, full_search: bool, subreddits: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to search for | None | False |
| limit | int | Number of posts to get per subreddit | None | False |
| sortby | str | Search type (Possibilities: "relevance", "hot", "top", "new", or "comments") | None | False |
| time_frame | str | Relative time of post (Possibilities: "hour", "day", "week", "month", "year", "all") | None | False |
| full_search | bool | Enable comprehensive search for ticker | None | False |
| subreddits | str | Comma-separated list of subreddits | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe of submissions related to the search term,<br/>List of polarity scores,<br/>Average polarity score. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots Reddit sentiment about a search term. Prints table showing if display is True.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L392)

```python
def display_redditsent(symbol: str, sortby: str, limit: int, graphic: bool, time_frame: str, full_search: bool, subreddits: str, display: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | The ticker symbol being search for in Reddit | None | False |
| sortby | str | Type of search | None | False |
| limit | str | Number of posts to get at most | None | False |
| graphic | bool | Displays box and whisker plot | None | False |
| time_frame | str | Time frame for search | None | False |
| full_search | bool | Enable comprehensive search for ticker | None | False |
| subreddits | str | Comma-separated list of subreddits | None | False |
| display | bool | Enable printing of raw sentiment values for each post | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | If supplied, expect 1 external axis | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>