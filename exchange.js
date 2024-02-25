let currency = prompt('enter your currency ("MAD or DZD or EGP or AED"):');
let money = prompt("enter your money:");
let exchange;

switch(currency){
    case "MAD":
        exchange = 0.1;
        break;
    case "DZD":
        exchange = 0.01;
        break;  
        case "EGP":
            exchange = 0.03;
            break;
        case "AED":
            exchange = 0.27;
            break;
        default:
            console.error('unknown currency ',currency);
}
console.log(`your money in dollares is ${exchange * money}`);