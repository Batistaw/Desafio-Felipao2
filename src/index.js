let nivel = ""
// calcular os saldos de vitórias e o nível
function calculoRanqueadas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    if (saldoVitorias < 10){
        nivel = "Ferro" 
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze" 
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata" 
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro" 
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante" 
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendário" 
    }
    else {
        nivel = "Imortal" 
    }

    return saldoVitorias 
}
// saida
let totalDePontos = calculoRanqueadas(50,10)
console.log(`O Herói tem ${totalDePontos} saldos de vitorias e está no nível ${nivel}` )

totalDePontos = calculoRanqueadas(120,10)
console.log(`O Herói tem ${totalDePontos} saldos de vitorias e está no nível ${nivel}` ) 

    
