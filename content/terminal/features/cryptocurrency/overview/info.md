---
title: info
description: OpenBB Terminal Function
---

# info

Show basic coin information for all coins from CoinPaprika API You can display only N number of coins with --limit parameter. You can sort data by rank, name, symbol, price, volume_24h, circulating_supply, total_supply, max_supply, market_cap, beta_value, ath_price --sortby parameter and also with --reverse flag to sort descending. Displays: rank, name, symbol, price, volume_24h, circulating_supply, total_supply, max_supply, market_cap, beta_value, ath_price

### Usage 
```python
usage: info [--vs {BTC,ETH,USD,EUR,PLN,KRW,GBP,CAD,JPY,RUB,TRY,NZD,AUD,CHF,UAH,HKD,SGD,NGN,PHP,MXN,BRL,THB,CLP,CNY,CZK,DKK,HUF,IDR,ILS,INR,MYR,NOK,PKR,SEK,TWD,ZAR,VND,BOB,COP,PEN,ARS,ISK}] [-l LIMIT]
            [-s {rank,name,symbol,price,volume_24h,circulating_supply,total_supply,max_supply,ath_price,market_cap,beta_value}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| vs | Quoted currency. Default USD | USD | True | BTC, ETH, USD, EUR, PLN, KRW, GBP, CAD, JPY, RUB, TRY, NZD, AUD, CHF, UAH, HKD, SGD, NGN, PHP, MXN, BRL, THB, CLP, CNY, CZK, DKK, HUF, IDR, ILS, INR, MYR, NOK, PKR, SEK, TWD, ZAR, VND, BOB, COP, PEN, ARS, ISK |
| limit | display N number records | 20 | True | None |
| sortby | Sort by given column. Default: rank | rank | True | rank, name, symbol, price, volume_24h, circulating_supply, total_supply, max_supply, ath_price, market_cap, beta_value |
| reverse | Data is sorted in ascending order by default. Reverse flag will sort it in an descending way. Only works when raw data is displayed. | False | True | None |


## Examples

```python
2022 Feb 15, 08:18 (🦋) /crypto/ov/ $ info

Displaying data vs USD
                                                                    Basic Coin Information
┌──────┬───────────────────────────┬────────────┬────────┬────────────┬────────────────────┬──────────────┬────────────┬────────────┬────────────┬───────────┐
│ rank │ name                      │ symbol     │ price  │ volume_24h │ circulating_supply │ total_supply │ max_supply │ market_cap │ beta_value │ ath_price │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ ZcCoin                    │ ZCC        │ 0.004  │ 1.249 K    │ 0                  │ 0            │ 0          │ 0          │ 0.222      │ 0.014     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Icolcoin                  │ ICOL       │ 0.011  │ 0.000      │ 0                  │ 20.234 M     │ 0          │ 0          │ -0.090     │ 1.099     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Poodle Dog Coin           │ POODLE DOG │ 0.000  │ 635.137    │ 0                  │ 0            │ 0          │ 0          │ 0          │ nan       │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ REDANCOIN                 │ REDAN      │ 0.006  │ 396.232    │ 0                  │ 0            │ 0          │ 0          │ 0.967      │ 0.017     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Fado Go                   │ FADO       │ 0.010  │ 10.257 M   │ 0                  │ 1 B          │ 0          │ 0          │ 9.635      │ 0.021     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ OK Fly                    │ OKFLY      │ 0.000  │ 178.900    │ 0                  │ 0            │ 0          │ 0          │ 1.004      │ 0.000     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Leonardo SPA              │ LDO        │ 7.623  │ 53.360     │ 0                  │ 0            │ 426.388 K  │ 650.063 K  │ 0.040      │ 8.860     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ HappyDoge                 │ HAPPYDOGE  │ 0.000  │ 56.544     │ 0                  │ 0            │ 0          │ 0          │ 2.840      │ 0.000     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Hyper DAO                 │ HDAO       │ 0.030  │ 4.797      │ 0                  │ 0            │ 0          │ 0          │ 0.021      │ 0.031     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ SweetGirl                 │ SWTG       │ 0.001  │ 16.067     │ 0                  │ 0            │ 0          │ 0          │ 1.435      │ 0.001     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Gaj Finance               │ GAJ        │ 0.047  │ 598.888    │ 1.941 M            │ 1.941 M      │ 0          │ 90.617 K   │ 1.357      │ 0.568     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Noachis Terra             │ NTT        │ 0.000  │ 1.263      │ 0                  │ 0            │ 0          │ 0          │ -2.052     │ 0.000     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Connect Coin              │ XCON       │ 0.000  │ 25.370     │ 38.997 M           │ 70 M         │ 0          │ 10.359 K   │ 0.863      │ 0.696     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ ECOSCU                    │ ECU        │ 0.003  │ 21.205     │ 0                  │ 0            │ 0          │ 0          │ 1.376      │ 0.004     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Under Armour Cl A         │ UAA        │ 17.190 │ 429.750    │ 0                  │ 236.518 K    │ 236.518 K  │ 0          │ 0.181      │ 27.140    │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Multiplier                │ MXX        │ 0.007  │ 902.638    │ 137.665 M          │ 186.586 M    │ 0          │ 946.127 K  │ 0.793      │ 0.014     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ SmartPad                  │ PAD        │ 0.017  │ 4.454 K    │ 0                  │ 1 B          │ 0          │ 0          │ 1.159      │ 0.043     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Home Coin                 │ HOME       │ 0.000  │ 23.056     │ 0                  │ 0            │ 0          │ 0          │ 0.853      │ 0.000     │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Teva Pharma Ind Adr Rep 1 │ TEVA       │ 8.455  │ 8.455      │ 0                  │ 317.460 K    │ 317.460 K  │ 0          │ 0.101      │ 13.210    │
├──────┼───────────────────────────┼────────────┼────────┼────────────┼────────────────────┼──────────────┼────────────┼────────────┼────────────┼───────────┤
│ 0    │ Virtual Quest Room Coin   │ VQR        │ 0.010  │ 0.965      │ 0                  │ 567.838 K    │ 52.560 M   │ 0          │ 1.417      │ 0.055     │
└──────┴───────────────────────────┴────────────┴────────┴────────────┴────────────────────┴──────────────┴────────────┴────────────┴────────────┴───────────┘
```
