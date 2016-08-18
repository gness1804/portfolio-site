Ian's advice about centering my two article divs:
<!-- create new div inside original container; position outer one relative; inner one absolute; inner one gets auto margins -->

.proj1, .proj2 {
  float: left;
  width: 300px;
  border: 1px solid rgb(73, 82, 70);
  border-radius: 5px;
  margin: 60px 30px 0px 30px;
}

///
#wrap {
    background: #e7e7e7;
    padding: 40px;
    text-align: center;
    width: 600px;  
}

#left, #right {
     background: #ccc;
     display: inline-block;    
     padding: 20px;   
}
///

#wrap {
    background: #e7e7e7;
    display: flex;
    justify-content: center;
    padding: 40px;
    width: 600px;  
}

#left, #right {
    background: #ccc;
    padding: 20px;   
}
