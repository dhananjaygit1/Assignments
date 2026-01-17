/*
Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions
*/

let bal = [50000,-2000,3000,-15000,-200,300,4000,-3000]

// 1. Print total number of credit and debit transactions completed
    console.log("1. Printing total number of credit and debit transactions completed")

for(let i=0;i<bal.length;i++)
    {
     console.log(bal[i])   
    }
 
//2. Print the total amount credited and debited in account
    console.log("2. Print the total amount credited and debited in account")

for(let i=0;i<bal.length;i++)
    {
        if(bal[i]>0){
        console.log("credited amount is ",bal[i])   
    
    }  else {
        console.log("debited amount is " ,bal[i])   
    } 
}

 //3. Print total amount remaining at the end in Bank Account
 console.log("3. Print total amount remaining at the end in Bank Account")

 let totalBalance =0;
 for(let i=0;i<bal.length;i++)
    
    {
        totalBalance = totalBalance + bal[i]    
    }
console.log("Remaining balance of account is  ",totalBalance);

//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
console.log("4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit")

for(let i=0;i<bal.length;i++)
    {
        if(bal[i]>10000){
        console.log("Suspecious credited amount is ",bal[i])   
    
    } else if(bal[i]<-10000)
        {
            console.log("Suspecious debited amount is ",bal[i]) 
        }
}