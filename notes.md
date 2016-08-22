Link to portfolio directions: http://frontend.turing.io/projects/portfolio-first-draft.html


(code from Stack Overflow on aligning columns at center of page)
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
