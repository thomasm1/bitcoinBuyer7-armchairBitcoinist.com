## [ArmchairBitcoinist.com](https://armchairbitcoinist.com)
###### Thomas Maestas


### BitcoinBuyer Trading Bot Architecture
#### Exchange API Objective: 
Identify best daily volume of trades on the exchange:
Exchanges with very low volumes tend to lag behind in price movements, as well as make it harder for limit orders to be filled.
List of the top exchanges, their volumes, and various other important pieces of information to help you choose.

### Overarching Philosophy

“Typically, momentum trading is effective in markets that 1) do not have valuation models, 2) have large amounts of volatility, and 3) have frequent mispricings. Momentum investing is not typically used in US stocks, bonds, or options – as they have clear valuation models (e.g. discounted cash flow analysis for stocks and black Scholes for options). However, for commodities and assets like crypto – momentum trading can be an effective strategy that allows protection from losses in downtrends and capture subside on the uptrends. Based on historical data, this may be an extremely effective strategy – until a valuation model has been figured out.” 1


[using a strategy to] "... edit deep reinforcement learning agents that learn to make money trading Bitcoin. ... to experiment with state-of-the-art deep reinforcement learning technologies to see if we can edit profitable Bitcoin trading bots. It seems to be the status quo to quickly shut down any attempts to edit reinforcement learning algorithms, as it is “the wrong way to go about building a trading algorithm”. However, recent advances in the field have shown that RL agents are often capable of learning much more than supervised learning agents within the same problem domain." 2


### Bot Constraints
*The bot will only ever be in one of two states: BUY or SELL. It will not place various buy or sell orders consecutively at multiple price points. If its last operation was a sale, it will try to buy next.

*It will use fixed thresholds for buying and selling. A smarter bot might be able to tinker with the thresholds based on various indicators, but our bot will have its strategy and thresholds set manually.

*It will only trade one currency pair e.g. BTC/USD.

### Codebase Plan
Variable to indicate the state the Bot is currently in. This is either BUY or SELL. A boolean or enum should fit this purpose well.
Then we need to set our thresholds for buying and selling. These indicate the percentage decrease or increase in price since we last made an operation.
For example, if I bought the asset at 100$, and its price is now at 102$, we have a 2% increase. If we have a SELL threshold set to a 1% increase, our bot will then sell, because it has made a profit above our threshold.

Thresholds will be constants. We need 4 of them, two for each state:

#### BUY Thresholds (If the Bot is in SELL State)

DIP_THRESHOLD : Buys the asset if its price decreased by more than the threshold. The idea of this is to follow the “buy low, sell high” strategy, where you attempt to buy an asset when it is undervalued, expecting its value to rise so you can sell.

UPWARD_TREND_THRESHOLD : Buys the asset if its price increased by more than the threshold. This goes against the “buy low, sell high” philosophy, but aims to identify when the price is going up and we don’t want to miss an opportunity to buy before it goes even higher.

If we performed a SELL operation at the point marked “SELL” in the picture above, we now have our thresholds set for the buy operation.
If the price ever goes below the bottom green line or above the top green line we will perform a BUY operation. In this case, we surpassed the upper threshold first, so we bought based on the BUY_DIP_THRESHOLD .

#### SELL Thresholds (If the Bot is in BUY State)
PROFIT_THRESHOLD : Sells the asset if its price has increased above the threshold since we bought it. This is how we profit. We sell at a higher price than we bought.

STOP_LOSS_THRESHOLD : Ideally, we would only want our bot to sell when it makes a profit. However, maybe the market is just going down significantly and we want to get out before it’s too late and then buy at a lower price. Therefore, this threshold is used to sell at a loss, but with the goal of stopping a bigger loss from happening.

Here, we bought at the point marked with “BUY”. Then, we met our upper threshold before the lower one, meaning we sold our asset for a profit.

#### API Helper Functions
```java
 private static List<Balance> balances = new ArrayList<>();
public class ApiHelpFunction {
 
 @Autowired
 private BalanceService balanceService;

 @GetMapping(path="/_SOME_EXCHANGE/api/balances")
 public List<Balance> getAllBalances(@PathVariable String username) {
    // GET request to exchange API for account's balances     
    return balanceService.findAll();
 }
 @GetMapping(path="/_SOME_EXCHANGE/api/marketprice")
 public  <MarketPrice> getAssetMarketPrice(@PathVariable String username,@PathVariable String assetname) {
    // GET request to exchange API for current price of asset   
    return balanceService.findAll();
 }
// FUNCTION placeSellorder() {
// DO 1. Calculate amount to sell ... based on threshold, e.g. 50% of total balance.
// DO 2. Send a POST request to exchange API to do a SELLL operation
// RETURN Price at operation execution
// }

// FUNCTION placeBuyOrder() {
// DO 1. Calculate amount to buy ... based on threshold, e.g. 50% of total balance.
// DO 2. Send a POST request to exchange API to do a Buy operation
// RETURN Price at operation execution
// }

// FUNCTION getOperationDetails(String operationId) {
// DO 1. GET Request to API for the details of operation
// RETURN operationDetails
```

#### Bot Loop Cycle decision-making Workflow of the bot
1.  infinite loop with some sleep time & operation every 30 seconds.
```shell
// Function startBot() {
// INFINITE LOOP 
// 1. attemptToMakeTrade()
// 2. sleep(30)
}
```

#### Loop Function decision-making flow 
Paired up with the helper functions and the loop function, which could also be main
```shell
private static boolean isNextOperationBuy = true;
private static float upwardTrendThreshold = 2.25;
private static float dipThreshold = 2.25;
private static float profitThreshold = 1.25;
private static float stopLossThreshold = -2.00;

private static float lastOpPrice = 100.00

// Function attemptToMakeTrade() {
    private float currentPrice = getMarketPrice()
    private float percentageDiff = (currentPrice - lastOpPrice)/lastOpPrice*100
    
    if (isNextOperationBuy) {
        tryToBuy(percentgeDiff)
    } else { 
        tryToSell(percentageDiff)
}

// FUNCTION tryToBuy(float percentageDiff) {
    if (percentageDiff >= upwardTrendThreshold || percentageDiff <= dipThreshold {
        lastOpPrice = placeBuyOrder();
        isNextOperationBuy = false;
}
// FUNCTION tryToSell(float percentageDiff) {
    if  (percentageDiff >= upwardTrendThreshold || percentageDiff <= dipThreshold {
               lastOpPrice = placeSellOrder();
               isNextOperationBuy = true;
       }
```

### LOGS
The logs that went to the file would also get a timestamp added to them, so when I accessed the server after a whole day and found an error, for example, I could trace it back exactly to where it happened, as well as find out everything else the bot did along the way.
```shell
"""
[BALANCE] USD Balance = 22.15$
[BUY] Bought 0.002 BTC for 22.15 USD
[PRICE] Last Operation Price updated to 11,171.40 (BTC/USD)
[ERROR] Could not perform SELL operation - Insufficient balance
"""
```

#### CreateLog
Setup of a createLog function that is called at every step. 
```shell
// FUNCTION createLog(String message) {
//DO 1. Print message to terminal
// DO 2. append message to log file with timestamp
}
```
### Identifying Trends
The main goal of our bot should be to buy at a low price and sell at a profit. However, we have two thresholds that kind of contradict this idea:UPWARD_TREND_THRESHOLD and STOP_LOSS_THRESHOLD .

These thresholds supposedly tell us when we should sell at a loss or buy at a price increase. The idea is that we try to identify trends that fall outside of the general strategy but may be harmful or beneficial to us so we should act.
However, the way I structured it above is quite limited. A static snapshot of a price is far from an indication of a trend.
 
All you need to do is also keep track of more prices than just lastOpPrice . You could, for instance, keep track of price 10 or 20 iterations ago, and compare that with the current price instead of lastOpPrice . This would probably be better at identifying a trend because it checks for rapid shifts in price rather than a shift that occurred over a long period of time.

### DATABASE 
While it is running, this simple bot doesn’t actually need a database, since it is handling very little data and can keep all the information in memory.
However, what happens when the bot fails, for example? How could it determine the lastOpPrice without you checking it manually?

To prevent manual work on your end, you might want to keep some sort of lightweight database to keep track of a few things, like lastOpPrice .
This way, when the bot starts up, rather than using the default values, it will actually check its stored values and continue from there.

Depending on how simple you want to make this, you can even consider a “database” of .txt or json files, since you might just be storing a few values anyway.

### DASHBOARD 
If you want to facilitate the visualization of your bot’s operations, as well as manage it without having to go in and manually tinker with the code, you may want to consider connecting your bot to a dashboard.
This would require that your bot be connected to a web server/API of its own that allows you to control its functionality.
This way, you could change thresholds more easily, for example.
There are many free dashboard templates available so you don’t even have to make your own. Check out Start Bootstrap and Creative Tim for some examples.

### TESTING STRATEGIES ON PAST DATA 
Many exchanges will offer you access to past price data, as well as you can usually easily get that data elsewhere if you need to.
This is very useful if you want to test your strategy before putting it to action. You can run a simulation of your bot with past data and “fake money” to see how well your defined thresholds would have worked and adjust them for the real deal.

### Thresholds and Orders
There are a few things you need to watch out for when placing orders.
First, you should understand that there are two types of orders: limit orders and market orders. You should really read a little into this if you’re not familiar with the concepts, but I’ll give you a basic overview here.
Market orders are orders that execute at the current market price, effectively executing immediately in most cases.
Limit orders, on the other hand, happen when you place an order for a price lower than market price (in the case of a BUY order) or higher than market price (in the case of a SELL order). These are not guaranteed to execute, since the price might not reach the threshold you set.
The benefit of limit orders is that you can anticipate market movements and place an order regarding where you expect the market to go before such movement happens.
In addition, limit orders are usually subject to lower fees than market orders. This is because market orders are subject to what is commonly called a “taker fee” whereas limit orders are subject to “maker fees”.
The reason for the names and their respective fees is that market orders are just accepting (“taking”) the current market price, whereas limit orders outside the market price are adding liquidity and hence “making a market”, for which they are “rewarded” with lower fees.
Note that the bot in this article is best suited for market orders.
Lastly, on the topic of fees, when setting your PROFIT_THRESHOLD , remember to take fees into consideration.
In order to make a profit, you need to perform a BUY and then a SELL operation, which leaves you subject to 2 fees.
As such, you need to make sure that you only sell for a profit once you’re able to at least cover your fees, otherwise you will actually be making a loss.
Think about it, assuming fees were flat, if you bought an asset for 100.00$, incurring a 0.50$ fee, and then sold it for 100.75$, again with a 0.50$ fee, you would have made a gross profit of 0.75%, but, in actuality, you would have a net loss of 0.25%.

##### Server Hardware I
Cloud Provider.... AWS 

##### Hardware Phase II
Raspberry Pi 
 
#### Software UI - Angular 10
#### Software APP - Java 8/ Hibernate/ Oracle 12 SQL
 
#### References
###### BTC, ETH datasource  
###### 0. https://www.cryptodatadownload.com/data/northamerican/
###### 1. https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy
###### 2: https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29
###### 3. https://medium.com/@yakko.majuri/a-step-by-step-guide-to-building-a-trading-bot-in-any-programming-language-d202ffe91569 
###### Exchanges 
###### 4. https://www.coingecko.com/en/exchanges
###### Dashboards
###### 5. https://startbootstrap.com/themes/
###### 6. https://www.creative-tim.com/ 
###### UI
###### 7. https://github.com/angular/angular-cli/blob/master/README.md
  
