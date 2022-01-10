function calculate(){
    let x = document.getElementById('dob').value;
    let y = document.getElementById('cd').value;
    let z = document.getElementById('result');
    let e = document.getElementById('error');

    e.setAttribute("class","dis-appear");
    let x_arr = x.split("-");
    let y_arr = y.split("-");
    // console.log(x_arr)
    // console.log(x);
    // console.log(y);
    console.log(x_arr);
    var dob_day = Number(x_arr[2]);
    var dob_month = Number(x_arr[1]);
    var dob_year = Number(x_arr[0]);

    var curr_date = Number(y_arr[2]);
    var curr_month = Number(y_arr[1]);
    var curr_year = Number(y_arr[0]);

   // calculation

   if(curr_date<dob_day){
       curr_date = curr_date+30;
       curr_month = curr_month-1;
   }

   if(curr_month<dob_month){
       curr_month = curr_month+12;
       curr_year = curr_year-1;
   }

   if(dob_year>curr_year){
       e.setAttribute("class","appear");
       e.innerHTML = "input invalid";
   }else{ 
   let ans_day = curr_date - dob_day;
   let ans_month = curr_month-dob_month;
   let ans_year = curr_year-dob_year;

   console.log("Year: "+ans_year+" Month: "+ans_month+" Day: "+ans_day);
   z.innerHTML = ans_year+" Year, "+ans_month+" Month, "+ans_day+"Day";
   }

}
