System.register(["./p-c66836e9.system.js"],(function(e){"use strict";var a,r,t,n;return{setters:[function(e){a=e.b;r=e.a;t=e.c;n=e.d}],execute:function(){var o={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}};var i=function e(a,r,t){var n;var i=o[a];if(typeof i==="string"){n=i}else if(r===1){n=i.one}else{n=i.other.replace("{{count}}",r.toString())}if(t!==null&&t!==void 0&&t.addSuffix){if(t.comparison&&t.comparison>0){return"en "+n}else{return"hace "+n}}return n};var d={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"};var s={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var m={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var u={date:a({formats:d,defaultWidth:"full"}),time:a({formats:s,defaultWidth:"full"}),dateTime:a({formats:m,defaultWidth:"full"})};var l={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"};var c={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"};var h=function e(a,r,t,n){if(r.getUTCHours()!==1){return c[a]}else{return l[a]}};var v={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]};var f={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]};var b={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]};var g={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]};var p={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}};var y={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}};var w=function e(a,r){var t=Number(a);return t+"º"};var M={ordinalNumber:w,era:r({values:v,defaultWidth:"wide"}),quarter:r({values:f,defaultWidth:"wide",argumentCallback:function e(a){return Number(a)-1}}),month:r({values:b,defaultWidth:"wide"}),day:r({values:g,defaultWidth:"wide"}),dayPeriod:r({values:p,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})};var j=/^(\d+)(º)?/i;var W=/\d+/i;var P={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i};var k={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]};var x={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i};var H={any:[/1/i,/2/i,/3/i,/4/i]};var C={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i};var T={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]};var z={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i};var X={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]};var S={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i};var A={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}};var D={ordinalNumber:t({matchPattern:j,parsePattern:W,valueCallback:function e(a){return parseInt(a,10)}}),era:n({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:n({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function e(a){return a+1}}),month:n({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),day:n({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:S,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})};var E=e("default",{code:"es",formatDistance:i,formatLong:u,formatRelative:h,localize:M,match:D,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));