let register = ()=>{
    let fname = document.forms["regForm"]["fname"].value;
    let arr1 = [];
    if(/^$/.test(fname)){
        arr1.push("first name can't be blank");

    }else if(!/^[a-zA-Z0-9]{4-8}$/.test(fname)){
        arr1.push("please follow rules and regulations");
    }
    document.getElementById("fname_errors").innerHTML = arr1.join("");

    let lname = document.forms["regForm"]["lname"].value;
    let arr2 = [];
    if(/^$/.test(lname)){
        arr2.push("last name can't be empty");
    }else if(!/^[a-zA-Z0-9]{4-8}$/.test(lname)){
        arr2.push("please follow rules and regulations");
    }
    document.getElementById("lname_errors").innerHTML = arr2.join("")

    let pwd = document.forms["regForm"]["pwd"].value;
    let arr3 = [];
    if (/^$/.test(pwd)){
        arr3.push("password can't be empty");
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(pwd)){
        arr3.push("please follow rules and regulations");
    }
    document.getElementById("pwd_errors").innerHTML = arr3.join("");

    // /^$/
    // /^[a-zA-Z0-9]{4-8}$/
    // /^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=>*\d)[A-Za-z\d]{4,8}$\
    // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
    // /^[0-9]{10}$\
    
    
    return false;
}