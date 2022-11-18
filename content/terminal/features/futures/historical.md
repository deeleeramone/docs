---
title: historical
description: OpenBB Terminal Function
---

# historical

Display futures historical. [Source: YahooFinance]

### Usage 
```python
usage: historical -t TICKER [-s START] [-e EXPIRY]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| ticker | Future ticker to display timeseries separated by comma when multiple, e.g.: BLK,QI |  | False | None |
| start | Initial date. Default: 3 years ago | 2019-11-18 15:42:05.880579 | True | None |
| expiry | Select future expiry date with format YYYY-MM |  | True | None |


![blk](https://user-images.githubusercontent.com/25267873/196562549-1251b0fd-ca36-4e0f-bca6-b6bfe473effa.png)

![Figure_31](https://user-images.githubusercontent.com/25267873/196562627-79f9ffa1-8582-457c-91e8-5c18d6d4304f.png)
