---
title: herc
description: OpenBB Terminal Function
---

# Portfolio Optimization

## herc

### Description: 

Builds a hierarchical equal risk contribution portfolio

### Usage: 
```python
usage: herc [-cd {pearson,spearman,abs_pearson,abs_spearman,distance,mutual_info,tail}] [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-rm {MV,MAD,GMD,MSV,VaR,CVaR,TG,EVaR,RG,CVRG,TGRG,WR,FLPM,SLPM,MDD,ADD,DaR,CDaR,EDaR,UCI,MDD_Rel,ADD_Rel,DaR_Rel,CDaR_Rel,EDaR_Rel,UCI_Rel}] [-as CVAR_SIMULATIONS_LOSSES]
            [-b CVAR_SIGNIFICANCE] [-bs CVAR_SIMULATIONS_GAINS] [-lk {single,complete,average,weighted,centroid,median,ward,dbht}] [-k AMOUNT_CLUSTERS] [-mk MAX_CLUSTERS] [-bi AMOUNT_BINS] [-at ALPHA_TAIL] [-lo LEAF_ORDER] [-de SMOOTHING_FACTOR_EWMA] [-mt NAN_FILL_METHOD] [-ct CATEGORIES] [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD]
            [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]
            {sa} ...
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| co_dependence | The codependence or similarity matrix used to build the distance metric and clusters. Possible values are: 'pearson': pearson correlation matrix 'spearman': spearman correlation matrix 'abs_pearson': absolute value of pearson correlation matrix 'abs_spearman': absolute value of spearman correlation matrix 'distance': distance correlation matrix 'mutual_info': mutual information codependence matrix 'tail': tail index codependence matrix | pearson | False | pearson, spearman, abs_pearson, abs_spearman, distance, mutual_info, tail |
| covariance | Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method | hist | False | hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink |
| risk_measure | Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'GMD' : Gini Mean Difference 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'VaR' : Value at Risk 'CVaR' : Conditional Value at Risk 'TG' : Tail Gini 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'RG' : Range 'CVRG' : CVaR Range 'TGRG' : Tail Gini Range 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'DaR' : Drawdown at Risk of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns 'ADD_Rel' : Average Drawdown of compounded returns 'UCI_Rel' : Ulcer Index of compounded returns 'DaR_Rel' : Drawdown at Risk of compounded returns 'CDaR_Rel' : Conditional Drawdown at Risk of compounded returns 'EDaR_Rel' : Entropic Drawdown at Risk of compounded returns 'MDD_Rel' : Maximum Drawdown of compounded returns | MV | False | MV, MAD, GMD, MSV, VaR, CVaR, TG, EVaR, RG, CVRG, TGRG, WR, FLPM, SLPM, MDD, ADD, DaR, CDaR, EDaR, UCI, MDD_Rel, ADD_Rel, DaR_Rel, CDaR_Rel, EDaR_Rel, UCI_Rel |
| cvar_simulations_losses | Number of CVaRs used to approximate Tail Gini of losses. The default is 100 | 100 | False | None |
| cvar_significance | Significance level of CVaR and Tail Gini of gains. If empty it duplicates alpha | None | False | None |
| cvar_simulations_gains | Number of CVaRs used to approximate Tail Gini of gains. If empty it duplicates a_sim value | None | False | None |
| linkage | Linkage method of hierarchical clustering | single | False | single, complete, average, weighted, centroid, median, ward, dbht |
| amount_clusters | Number of clusters specified in advance | None | False | None |
| max_clusters | Max number of clusters used by the two difference gap statistic to find the optimal number of clusters. If k is empty this value is used | 10 | False | None |
| amount_bins | Number of bins used to calculate the variation of information | KN | False | None |
| alpha_tail | Significance level for lower tail dependence index, only used when when codependence value is 'tail' | 0.05 | False | None |
| leaf_order | Indicates if the cluster are ordered so that the distance between successive leaves is minimal | True | False | None |
| smoothing_factor_ewma | Smoothing factor for ewma estimators | 0.94 | False | None |
| ==SUPPRESS== | sensitivity analysis | None | False | sa:  ArgumentParser(prog='herc sa', usage=None, description=None, formatter_class=<class 'argparse.HelpFormatter'>, conflict_handler='error', add_help=True) |
| nan_fill_method | Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points | time | False | None |
| categories | Show selected categories | None | False | None |
| historic_period | Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset | 3y | False | None |
| start_period | Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format | None | False | None |
| end_period | End date to get yfinance data from. Must be in 'YYYY-MM-DD' format | None | False | None |
| log_returns | If use logarithmic or arithmetic returns to calculate returns | None | False | None |
| return_frequency | Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns | d | False | d, w, m |
| max_nan | Max percentage of nan values accepted per asset to be considered in the optimization process | 0.05 | False | None |
| threshold_value | Value used to replace outliers that are higher to threshold in absolute value | 0.3 | False | None |
| risk_free | Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual | 0.02924 | False | None |
| significance_level | Significance level of CVaR, EVaR, CDaR and EDaR | 0.05 | False | None |
| long_allocation | Amount to allocate to portfolio | 1 | False | None |
| name | Save portfolio with personalized or default name | HERC_0 | False | None |


## Examples

```python

2022 Apr 05, 14:40 (🦋) /portfolio/po/ $ herc

 [3 Years] Hierarchical equal risk contribution portfolio using pearson
codependence,single linkage and volatility as risk measure

     Weights
┏━━━━━━┳━━━━━━━━━┓
┃      ┃ Value   ┃
┡━━━━━━╇━━━━━━━━━┩
│ AAPL │ 10.78 % │
├──────┼─────────┤
│ AMZN │ 12.64 % │
├──────┼─────────┤
│ BA   │  9.12 % │
├──────┼─────────┤
│ FB   │  8.08 % │
├──────┼─────────┤
│ MSFT │ 12.86 % │
├──────┼─────────┤
│ T    │ 43.83 % │
├──────┼─────────┤
│ TSLA │  2.66 % │
└──────┴─────────┘

Annual (by 252) expected return: 18.09%
Annual (by √252) volatility: 24.19%
Sharpe ratio: 0.7401

```

