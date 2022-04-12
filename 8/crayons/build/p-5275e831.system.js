System.register(["./p-6fb516eb.system.js"],(function(a){"use strict";var i,e,n,t;return{setters:[function(a){i=a.b;e=a.a;n=a.c;t=a.d}],execute:function(){var r={lessThanXSeconds:{one:"inqas minn sekonda",other:"inqas minn {{count}} sekondi"},xSeconds:{one:"sekonda",other:"{{count}} sekondi"},halfAMinute:"nofs minuta",lessThanXMinutes:{one:"inqas minn minuta",other:"inqas minn {{count}} minuti"},xMinutes:{one:"minuta",other:"{{count}} minuti"},aboutXHours:{one:"madwar siegħa",other:"madwar {{count}} siegħat"},xHours:{one:"siegħa",other:"{{count}} siegħat"},xDays:{one:"ġurnata",other:"{{count}} ġranet"},aboutXWeeks:{one:"madwar ġimgħa",other:"madwar {{count}} ġimgħat"},xWeeks:{one:"ġimgħa",other:"{{count}} ġimgħat"},aboutXMonths:{one:"madwar xahar",other:"madwar {{count}} xhur"},xMonths:{one:"xahar",other:"{{count}} xhur"},aboutXYears:{one:"madwar sena",two:"madwar sentejn",other:"madwar {{count}} snin"},xYears:{one:"sena",two:"sentejn",other:"{{count}} snin"},overXYears:{one:"aktar minn sena",two:"aktar minn sentejn",other:"aktar minn {{count}} snin"},almostXYears:{one:"kważi sena",two:"kważi sentejn",other:"kważi {{count}} snin"}};function o(a,i,e){e=e||{};var n=a.match(/years/i);var t;if(typeof r[a]==="string"){t=r[a]}else if(i===1){t=r[a].one}else if(i===2&&n){t=r[a].two}else{t=r[a].other.replace("{{count}}",i)}if(e.addSuffix){if(e.comparison>0){return"f'"+t}else{return t+" ilu"}}return t}var s={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"};var l={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var d={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var m={date:i({formats:s,defaultWidth:"full"}),time:i({formats:l,defaultWidth:"full"}),dateTime:i({formats:d,defaultWidth:"full"})};var u={lastWeek:"eeee 'li għadda' 'fil-'p",yesterday:"'Il-bieraħ fil-'p",today:"'Illum fil-'p",tomorrow:"'Għada fil-'p",nextWeek:"eeee 'fil-'p",other:"P"};function f(a,i,e,n){return u[a]}var h={narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]};var w={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]};var g={narrow:["J","F","M","A","M","Ġ","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ"],wide:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru"]};var v={narrow:["Ħ","T","T","E","Ħ","Ġ","S"],short:["Ħa","Tn","Tl","Er","Ħa","Ġi","Si"],abbreviated:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],wide:["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"]};var b={narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"}};var c={narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"}};function j(a){var i=Number(a);return i+"º"}var y={ordinalNumber:j,era:e({values:h,defaultWidth:"wide"}),quarter:e({values:w,defaultWidth:"wide",argumentCallback:function a(i){return Number(i)-1}}),month:e({values:g,defaultWidth:"wide"}),day:e({values:v,defaultWidth:"wide"}),dayPeriod:e({values:b,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})};var p=/^(\d+)(º)?/i;var M=/\d+/i;var k={narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i};var W={any:[/^(q|b)/i,/^(w|c)/i]};var x={narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i};var P={any:[/1/i,/2/i,/3/i,/4/i]};var S={narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,wide:/^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i};var q={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^ġ/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^ġ/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]};var T={narrow:/^[ħteġs]/i,short:/^(ħa|tn|tl|er|ħa|ġi|si)/i,abbreviated:/^(ħad|tne|tli|erb|ħam|ġim|sib)/i,wide:/^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i};var H={narrow:[/^ħ/i,/^t/i,/^t/i,/^e/i,/^ħ/i,/^ġ/i,/^s/i],any:[/^(il-)?ħad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?ġi/i,/^(is-)?si/i]};var A={narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i};var I={any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/għodwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filgħaxija/i,night:/lejl/i}};var z={ordinalNumber:n({matchPattern:p,parsePattern:M,valueCallback:function a(i){return parseInt(i,10)}}),era:t({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:W,defaultParseWidth:"any"}),quarter:t({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any",valueCallback:function a(i){return i+1}}),month:t({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),day:t({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),dayPeriod:t({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:I,defaultParseWidth:"any"})};var E=a("default",{code:"mt",formatDistance:o,formatLong:m,formatRelative:f,localize:y,match:z,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));