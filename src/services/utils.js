import moment from 'moment';

export const oneHundredCharacters = (string) => {
    var id = string;
    // var idString = id.toString();
    if(id.length >= 300) {
        var onehundredcharacters = id.substr(0, 300);
        return onehundredcharacters+' ...'
    }
    else {
        return id
    }
}

export const lastCaracteres = (string) => {
    var id = string;
    var lastFour = id.substr(id.length - 4);
    return lastFour
}

export const last24Caracteres = (string) => {
    var id = string;
    var last24 = id.substr(id.length - 24);
    return last24
}

//oneDecimalPlace
export const oneDecimalPlace = (string) => {
    var id = string;
    var idString = id.toString();
    var decimalPlace = idString.substr(0, 1);
    return decimalPlace
}

export const decimalPlace = (string) => {
    var id = string;
    var idString = id.toString();
    var decimalPlace = idString.substr(0, 2);
    return decimalPlace
}

export const  removerSpecials = (texto) => {
    // eliminando acentuação
        texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
        texto = texto.replace(/[àáâãäå]/,"a");
        texto = texto.replace(/[ÈÉÊË]/,"E");
        texto = texto.replace(/[úüùûū]/,"u");
        texto = texto.replace(/[ÚÜÙÛŪ]/,"U");
        texto = texto.replace(/[Ç]/,"C");
        texto = texto.replace(/[ç]/,"c");
        return texto.replace(/[^a-z0-9]/gi,''); 
}
export const formatDateString = (date) => {
    var options = { day: 'numeric', year: 'numeric', month: 'long' };

    return new Date(new Date(date).setDate(new Date(date).getDate())).toLocaleDateString([],options);
}


export const dataFormatadaParaProximaCobranca = (date) => {
    var options = { day: 'numeric', year: 'numeric', month: 'long' };

    return new Date(new Date(date).setDate(new Date(date).getDate() +1)).toLocaleDateString([],options);
}

export const formatDate = (date) => new Date(new Date(date).setDate(new Date(date).getDate() +1)).toLocaleDateString();

const leftPad = (value, totalWidth, paddingChar) => {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
}

export const startDate = () => String(new Date().getFullYear() + "-" + leftPad(parseInt(new Date().getMonth() + 1), 2) + "-01");

export const endDate = () => {
    const d = new Date();
    const lastDay = new Date(d.getFullYear(), leftPad(parseInt(d.getMonth() + 1), 2), 0).getDate();
    return String(d.getFullYear() + "-" + leftPad(parseInt(d.getMonth() + 1), 2) + "-" + lastDay);
}

// export const FormataStringData = (data) => {
//     var dia  = data.split("/")[0];
//     var mes  = data.split("/")[1];
//     var ano  = data.split("/")[2];

//     return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
//     // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
// }
export const FormataStringData = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];

    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export const FormataStringDataToAdmission = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];

    if(mes === '01') {
        var mesString = 'Janeiro';
    }
    else
    if(mes === '02') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Fevereiro';
    }
    else
    if(mes === '03') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Março';
    }
    else
    if(mes === '04') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Abril';
    }
    else
    if(mes === '05') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Maio';
    }
    else
    if(mes === '06') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Junho';
    }
    else
    if(mes === '07') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Julho';
    }
    else
    if(mes === '08') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Agosto';
    }
    else
    if(mes === '09') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Setembro';
    }
    else
    if(mes === '10') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Outubro';
    }
    else
    if(mes === '11') {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Novembro';
    }
    else {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Dezembro';
    }


    return ("0"+dia).slice(-2) + ' de ' + mesString + ' ' + ano;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}


export const FormataCurrentMonthToCalendar = (data) => {
    var mes  = data

    if(mes === 0) {
        var mesString = 'Janeiro';
    }
    else
    if(mes === 1) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Fevereiro';
    }
    else
    if(mes === 2) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Março';
    }
    else
    if(mes === 3) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Abril';
    }
    else
    if(mes === 4) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Maio';
    }
    else
    if(mes === 5) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Junho';
    }
    else
    if(mes === 6) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Julho';
    }
    else
    if(mes === 7) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Agosto';
    }
    else
    if(mes === 8) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Setembro';
    }
    else
    if(mes === 9) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Outubro';
    }
    else
    if(mes === 10) {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Novembro';
    }
    else {
        // eslint-disable-next-line no-redeclare
        var mesString = 'Dezembro';
    }

    return mesString;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export const FormataStringData_revert = (data) => {
    var ano  = data.split("-")[0];
    var mes  = data.split("-")[1];
    var dia  = data.split("-")[2];
    return  (dia).slice(+0) + '/' + ("0"+mes).slice(-2) + '/' + ano;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}



export const FormataStringData_revert_to_year = (data) => {
    var ano  = data.split("-")[0];
    return  ano;
}

export const dataFormatadaParaBarra = (data) => {
    // let datebarra = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }

    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    let mes = dateSplit.split('-')[1]
    let ano = dateSplit.split('-')[0]

    let dataFormatada = dia + "/" + mes + "/" + ano;

    // let mes = datebarra.getMonth()

    // let dia = ((pad(datebarra.getDate())+1 ));

    // if(dia === 32) {

    //     let diaFormatado = 1
    //     let dataFormatada = ((pad(diaFormatado) )) + "/" + ((pad(datebarra.getMonth() + 1))) + "/" + datebarra.getFullYear();
    //     return dataFormatada;

    // }
    // else {

    //     let dataFormatada = ((pad(datebarra.getDate() + 1) )) + "/" + ((pad(datebarra.getMonth() + 1))) + "/" + datebarra.getFullYear();
    //     return dataFormatada;

    // }

    return dataFormatada


}

export const dataFormatadaParaPonto = (data) => {
    // let datebarra = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // let dataFormatada = ((pad(datebarra.getDate()) )) + "." + ((pad(datebarra.getMonth() + 1))) + "." + datebarra.getFullYear();
    // return dataFormatada;
    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    let mes = dateSplit.split('-')[1]
    let ano = dateSplit.split('-')[0]

    let dataFormatada = dia + "." + mes + "." + ano;
    return dataFormatada
}


//
export const dataFormatadaParaTraco = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
    return  ano + '-' + ("0"+mes).slice(-2) + '-' + (dia).slice(+0);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export const dataFormatadaParaTracoCalendar = (data) => {
    var ano = data.split("-")[0];
    var mes = data.split("-")[1];
    var dia = data.split("-")[2];
    return  (dia).slice(+0) + '/' + ("0"+mes).slice(-2) + '/' + ano;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export const FormataStringDataParaPonto = (data) => {

    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];

    return ("0"+dia).slice(-2) + '.' + ("0"+mes).slice(-2) + '.' + ano;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}


export const diaMesFormatadaParaPonto = (data) => {
    // let datebarra = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // let dataFormatada = ((pad(datebarra.getDate()) )) + "." + ((pad(datebarra.getMonth() + 1)));
    // return dataFormatada;
    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    let mes = dateSplit.split('-')[1]
    let ano = dateSplit.split('-')[0]

    let dataFormatada = dia + "." + mes + "." + ano;
    return dataFormatada
}

export const diaMesFormatadaParaPontoCalendar = (data) => {
    let datebarra = new Date(data);
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }
    let dataFormatada = ((pad(datebarra.getDate()) )) + "." + ((pad(datebarra.getMonth() + 1)));
    return dataFormatada;
    // let dateSplit = data.split('T')[0]

    // let dia = dateSplit.split('-')[2]
    // let mes = dateSplit.split('-')[1]
    // let ano = dateSplit.split('-')[0]

    // let dataFormatada = dia + "." + mes + "." + ano;
    // return dataFormatada
}

export const dataFormatadaParaDia = (data) => {
    // let datebarra = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // let dataFormatada = (pad(datebarra.getDate()))
    // return dataFormatada;
    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    // let mes = dateSplit.split('-')[1]
    // let ano = dateSplit.split('-')[0]

    // let dataFormatada = dia + "/" + mes + "/" + ano;
    return dia
}

export const somartempos = (tempo1, tempo2, tempo3, tempo4, tempo5, tempo6, tempo7) => {

    var array1 = tempo1.split(':');

    var tempo_seg1 = (parseInt(array1[0]) * 3600) + (parseInt(array1[1]) * 60);

    var array2 = tempo2.split(':');

    var tempo_seg2 = (parseInt(array2[0]) * 3600) + (parseInt(array2[1]) * 60);

    var array3 = tempo3.split(':');

    var tempo_seg3 = (parseInt(array3[0]) * 3600) + (parseInt(array3[1]) * 60);

    var array4 = tempo4.split(':');

    var tempo_seg4 = (parseInt(array4[0]) * 3600) + (parseInt(array4[1]) * 60);

    var array5 = tempo5.split(':');

    var tempo_seg5 = (parseInt(array5[0]) * 3600) + (parseInt(array5[1]) * 60);

    var array6 = tempo6.split(':');

    var tempo_seg6 = (parseInt(array6[0]) * 3600) + (parseInt(array6[1]) * 60);

    var array7 = tempo7.split(':');

    var tempo_seg7 = (parseInt(array7[0]) * 3600) + (parseInt(array7[1]) * 60);

    var tempofinal = parseInt(tempo_seg1) + parseInt(tempo_seg2) + parseInt(tempo_seg3) + parseInt(tempo_seg4) + parseInt(tempo_seg5) + parseInt(tempo_seg6) + parseInt(tempo_seg7);

    var hours = Math.floor(tempofinal / (60 * 60));

    var divisorMinutos = tempofinal % (60 * 60);

    var minutes = Math.floor(divisorMinutos / 60);

    //var divisorSeconds = divisorMinutos % 60;

    //var seconds = Math.ceil(divisorSeconds);

    var contador = "";

    if (hours < 10) { contador = "0" + hours + ":"; } else { contador = hours + ":"; }

    if (minutes < 10) { contador += "0" + minutes; } else { contador += minutes; }

    //if (seconds < 10) { contador += "0" + seconds; } else { contador += seconds; }

    return contador;

    }


export const dateFormatedToHistory = (data) => {
    // let datehistory = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // let dataFormatada = ((pad(datehistory.getDate()) )) + "." + ((pad(datehistory.getMonth() + 1))) + "." + datehistory.getFullYear() + " às " + datehistory.getHours() + ":" + datehistory.getMinutes();
    // return dataFormatada;
    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    let mes = dateSplit.split('-')[1]
    let ano = dateSplit.split('-')[0]

    let dataFormatada = dia + "." + mes + "." + ano;
    return dataFormatada
}

export const dateFormatedHours = (data) => {
    let datehistory = new Date(data);
    let dataFormatada = " às " + datehistory.getHours() + ":" + datehistory.getMinutes();
    return dataFormatada;
}

export const dateFormatedToDetailVacation= (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];

    return  (dia).slice(+0) + '.' + ("0"+mes).slice(-2) + '.' + ano;
}



// export const FormataStringRetiraBarra = (data) => {
//     var dia  = data.split("/")[0];
//     var mes  = data.split("/")[1];
//     var ano  = data.split("/")[2];
// }
export const FormataTiraBarrar = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];

    return ano + ("0"+mes).slice(-2) + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export const dateFormatedToShutDown= (data) => {
    // let datehistory = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // let dataFormatada = ((pad(datehistory.getDate()) )) + "/" + ((pad(datehistory.getMonth() + 1))) + "/" + datehistory.getFullYear();
    // return dataFormatada;
    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    let mes = dateSplit.split('-')[1]
    let ano = dateSplit.split('-')[0]

    let dataFormatada = dia + "/" + mes + "/" + ano;
    return dataFormatada
}

export const dateFormatedPoint= (data) => {
    // let datehistory = new Date(data);
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // let dataFormatada = ((pad(datehistory.getDate()) )) + "." + ((pad(datehistory.getMonth() + 1))) + "." + datehistory.getFullYear();
    // return dataFormatada;
    let dateSplit = data.split('T')[0]

    let dia = dateSplit.split('-')[2]
    let mes = dateSplit.split('-')[1]
    let ano = dateSplit.split('-')[0]

    let dataFormatada = dia + "." + mes + "." + ano;
    return dataFormatada
}


// export const splitJourneyDescription = (data) => {
//     var dia  = data.split("/")[0];
//     var mes  = data.split("/")[1];
//     var ano  = data.split("/")[2];

//     return ano + ("0"+mes).slice(-2) + ("0"+dia).slice(-2);
//     // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
// }

export const firstChargeNotice = (data) => {

    let tenDaysAfter_ = moment(data).add(10, 'days').format('YYYY-MM-DD');;

    let tuesdayDate   = new Date(tenDaysAfter_)

    var options = { day: 'numeric', year: 'numeric', month: 'long' };

    let tuesdayDate_b = new Date(new Date(tuesdayDate).setDate(new Date(tuesdayDate).getDate() +1)).toLocaleDateString([],options);


    return tuesdayDate_b

}

export const momentDuration = (data) => {


    var a = moment(new Date());//now
    var b = moment(data);//now
    // var b = moment(new Date());

    const minutes = a.diff(b, 'minutes');
    const hours = a.diff(b, 'hours');
    const days = a.diff(b, 'days');
    const year = a.diff(b, 'year');

    if(minutes <= 59) {
        return  minutes +' minutos'
    }
    else
    if(hours >= 1 && hours <=23) {
        return hours +' horas'
    }
    else
    if(days >= 1 && days <= 355) {
        return days +' dias'
    }
    else
    if(year >= 1) {
        return year +' anos'
    }

}

export const momentDurationToCommunication = (data) => {


    var a = moment(new Date());//now
    var b = moment(data);//now
    // var b = moment(new Date());

    const minutes = a.diff(b, 'minutes');
    const hours = a.diff(b, 'hours');
    const days = a.diff(b, 'days');
    const year = a.diff(b, 'year');

    if(minutes === 0) {
        return  'segundos atrás'
    }
    else
    if(minutes === 1) {
        return  minutes +' minuto'
    }
    else
    if(minutes > 1 && minutes <= 59) {
        return  minutes +' minutos'
    }
    else
    if(hours === 1) {
        return hours +' hora'
    }
    else
    if(hours > 1 && hours <=23) {
        return hours +' horas'
    }
    else
    if(days === 1) {
        return days +' dia'
    }
    else
    if(days > 1 && days <= 355) {
        return days +' dias'
    }
    else
    if(year === 1) {
        return year +' ano'
    }
    else
    if(year >= 1) {
        return year +' anos'
    }

}


export const momentDurationToMessageCommunication = (data) => {


    var a = moment(new Date());//now
    var b = moment(data);//now
    // var b = moment(new Date());

    const minutes = a.diff(b, 'minutes');
    const hours = a.diff(b, 'hours');
    const days = a.diff(b, 'days');
    const year = a.diff(b, 'year');

    if(minutes === 0) {
        return  'Agora mesmo'
    }
    else
    if(minutes === 1) {

        return  minutes +' minuto atrás'
    }
    else
    if(minutes > 1 && minutes <= 59) {

        let datehistory = new Date(data);
        let dataFormatada = " às " + datehistory.getHours() + ":" + datehistory.getMinutes();
        return dataFormatada;
        // return  minutes +' minutos'
    }
    else
    if(hours === 1) {
        return hours +' hora'
    }
    else
    if(hours > 1 && hours <=23) {
        // return hours +' horas'
        let datehistory = new Date(data);
        let dataFormatada = " às " + datehistory.getHours() + ":" + datehistory.getMinutes();
        return dataFormatada;
    }
    else
    if(days === 1) {
        return days +' dia atrás'
    }
    else
    if(days > 1 && days <= 355) {
        return days +' dias atrás'
    }
    else
    if(year === 1) {
        return year +' ano atrás'
    }
    else
    if(year >= 1) {
        return year +' anos atrás'
    }

}

export const momentDurationToFeed = (data) => {


    var a = moment(new Date());//now
    var b = moment(data);//now
    // var b = moment(new Date());

    const minutes = a.diff(b, 'minutes');
    const hours = a.diff(b, 'hours');
    const days = a.diff(b, 'days');
    const year = a.diff(b, 'year');

    if(minutes === 1) {
        return  minutes +' minuto atrás'
    }
    else
    if(minutes > 1 && minutes <= 59) {
        return  minutes +' minutos atrás'
    }
    else
    if(hours === 1) {
        return hours +' hora atrás'
    }
    else
    if(hours > 1 && hours <=23) {
        return hours +' horas atrás'
    }
    else
    if(days === 1) {
        return days +' dia atrás'
    }
    else
    if(days > 1 && days <= 355) {
        return days +' dias atrás'
    }
    else
    if(year === 1) {
        return year +' ano atrás'
    }
    else
    if(year >= 1) {
        return year +' anos atrás'
    }

}

export const momentDurationTotalDay = (initial, final) => {

    var diaInicial  = initial.split("/")[0];
    var mesInicial  = initial.split("/")[1];
    var anoInicial  = initial.split("/")[2];
    var initialDate =anoInicial + '-' + mesInicial + '-' + diaInicial;

    var diaFinal  = final.split("/")[0];
    var mesFinal  = final.split("/")[1];
    var anoFinal  = final.split("/")[2];
    var finalDate =anoFinal + '-' + mesFinal + '-' + diaFinal;

    var a = moment(new Date(initialDate));
    var b = moment(new Date(finalDate));

    const days = b.diff(a, 'days');

    const dia = days + 1;

    if(dia > 1) {
        return dia +' dias';
    }
    else {
        return dia +' dia';
    }





}





