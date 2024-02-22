// It is array like objects
function add(num1,num2)
{
    console.log(num1,num2);
    // arguments er vitor je value gula comma diye pass kora hoeche se gulo map akare thakbe like this :  { '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }
    console.log(arguments);
    // we can access individual value by calling their key\
    console.log(arguments[2]);
}

add(12,13,45,89,78);