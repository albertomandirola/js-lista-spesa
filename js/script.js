//definisco un arrey che avra la funzione di lista
let listaSpesa = ['cocomero','detersivo','pane','cereali','sacchi'];
//inizializzo prima del ciclo while la variabile i
let i = 0
//inizializo il ciclo while con la condizione di uscita il fatto che i rimanga minore della lista
while(i<listaSpesa.length){
    //scrivo sul file index.htlm tramite il comando writeln
    document.writeln(' '+listaSpesa[i])
    //incrementop della variabile i 
    i++;
}