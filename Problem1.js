/* Pseudocode
1. Iterate through each number in the stock array.
2. At the ith index, get the i+1 index price and check if it is larger than the ith index price.
3. If so, set buy_price = i and sell_price = i+1. Then calculate the profit: sell_price - buy_price.
4. If a stock price is found that is cheaper than the current buy_price, set this to be the new buying price and continue from step 2.
5. Otherwise, continue changing only the sell_price and keep buy_price set.
*/

const maxProfit = (arr) =>{
    var buy = -1, sell =-1, profit = -1;
    var changeSellPrice = true;
    for(var i=0; i< arr.length; i++){
        if(buy===-1){
            buy= arr[i];
        }
        if(buy> arr[i]){
            buy = arr[i];
            changeSellPrice = true;
        }
            
            if(changeSellPrice || sell< arr[i+1] ){
            sell = arr[i+1];
            if(profit< (sell-buy)){
                profit = sell - buy;
                changeSellPrice = false;
            }
           }
    
        }
        return profit;
    }    