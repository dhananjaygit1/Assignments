let customerName:String = "John Doe";  
let creditScore:number = 750;  
let income:number = 55000.0;  
let isEmployed:boolean = true;  
let debtToIncomeRatio:number = 75.0;

// A bank evaluates loan applicants based on the following criteria: 
//1. Credit Score:  If the credit score is above 750, the loan is automatically approved. 
//If the credit score is between 650 and 750, 
// additional checks are performed. o If the credit score is below 650, the loan is denied. 


function verify_Credit_Score(creditScore:number):String {
if(creditScore>750)
{
    return "kindly approve the loan automatically.";
}
else if(creditScore>=650 && creditScore <=750)
{
    return "additional check is required";
}else
{
    return " sorry your loan application is rejected.";
}

}
//2. Income: 
// for credit scores between 650 and 750, the customer’s income must be at least $50,000 
// for the loan to be considered. 

function verify_Income(creditScore:number, income:number ):String{

 if (creditScore>=650 && creditScore <=750 && income>=50000)
{
    return " congratualations!!  you are eligible for loan.";
}
else
{
    return "sorry ! you are not eligible for loan.";
}
}
// 3. Employment Status: 
// If the customer’s income is at least 50,000, the system checks whether the customer is  employed. 
// If the customer is unemployed, the loan is denied. 
    
function verify_Employment_Status(income:number ,isEmployed:boolean ):String{ 

    if(income>=50000 && isEmployed===true)
    
    {
        return" your employee status is successfully verified for loan eligibility";  
    }
    else
    {
        return "sorry ! you are employemnt status is not eligible for loan.";
    }
    }
  
   // 4. Debt-to-Income Ratio: 
  // If the customer is employed, the system checks the debt-to-income (DTI) ratio. o
  // If the DTI ratio is less than 40%, the loan is approved. 
  // If the DTI ratio is 40% or greater, the loan is denied.  

function verify_Debt_to_Income_Ratio(debtToIncomeRatio:number , isEmployed:boolean):String {
        if(debtToIncomeRatio <=40 && isEmployed ===true){
        return " your DTI is ok for loan approval";
        }
        else
        {
            return" your DTI is rejected for loan approval";
        }
    }

   console.log(verify_Credit_Score(800)); 
   console.log(verify_Income(750,50000));
   console.log(verify_Employment_Status(50000, true));
   console.log(verify_Debt_to_Income_Ratio(40, true));