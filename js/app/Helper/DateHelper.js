class DateHelper{


    constructor(){
        throw new Error("Essa classe nao pode ser instanciada")
    }

    static textoParaData(texto){
        return new Date(...
            texto
            .split('-')
            .map((item , indice) => (item - indice %2)));
    }


    static  dataParaTexto(data){
        if(!/^\d${4}-\d${2}-\d${2}$/.test(data)){
            throw new Error("Data fora do padrão");
        }
        
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    }
}