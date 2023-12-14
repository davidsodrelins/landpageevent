export default function contador(){
    const dataDoEvento = new Date("01 25, 2024 19:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaTempo = setInterval(function(){
        const agora = new Date();
        const timeStampAtual = agora.getTime();
        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const dia  = (1000 * 60 * 60 * 24);
        const horas = (1000 * 60 * 60);
        const minutos = (1000* 60);

        const diasAteEvento = Math.floor(distanciaAteOEvento / dia);
        const horasAteEvento = Math.floor((distanciaAteOEvento % dia)/ horas) ;
        const minutosAteOEveneto = Math.floor((distanciaAteOEvento %horas) / minutos);
        const seguntosAteOEvento = Math.floor((distanciaAteOEvento %  minutos) / 1000);
        document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteOEveneto}m ${seguntosAteOEvento}s` ;
        if(distanciaAteOEvento < 0 ){
            clearInterval(contaTempo);
            document.getElementById("contador").innerHTML = `Evento expirado` ;
        }
    }, 1000)
}