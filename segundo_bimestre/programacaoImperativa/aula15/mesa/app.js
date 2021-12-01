const data = require("./accounts/data"); 
const Account = require("./accounts/index");




const accounts = []; 
for(let i =0; i< data.length; i++){
    const newAccount = new Account(data[i].numero, data[i].tipo, data[i].saldo, data[i].titular)
    accounts.push(newAccount);
}

const banco = {
    clients: accounts, 
    queryClient: function(owner){
        for(let i= 0; i< this.clients.length; i++){
            if(this.clients[i].owner ===owner){
                return this.clients[i]; 
            }
             
        }
        return "Cliente não encontrado";

    }
}
console.log(banco.queryClient("Thomasin Latour"));
 