System.register(["./p-c66836e9.system.js"],(function(e){"use strict";var t,a,n,r;return{setters:[function(e){t=e.b;a=e.a;n=e.c;r=e.d}],execute:function(){var i={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}};var o=function e(t,a,n){var r;var o=i[t];if(typeof o==="string"){r=o}else if(a===1){r=o.one}else{r=o.other.replace("{{count}}",a.toString())}if(n!==null&&n!==void 0&&n.addSuffix){if(n.comparison&&n.comparison>0){return r+" 후"}else{return r+" 전"}}return r};var d={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"};var s={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var u={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var m={date:t({formats:d,defaultWidth:"full"}),time:t({formats:s,defaultWidth:"full"}),dateTime:t({formats:u,defaultWidth:"full"})};var h={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"};var l=function e(t,a,n,r){return h[t]};var c={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]};var v={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]};var f={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]};var g={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]};var b={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}};var w={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}};var p=function e(t,a){var n=Number(t);var r=a||{};var i=String(r.unit);switch(i){case"minute":case"second":return String(n);case"date":return n+"일";default:return n+"번째"}};var y={ordinalNumber:p,era:a({values:c,defaultWidth:"wide"}),quarter:a({values:v,defaultWidth:"wide",argumentCallback:function e(t){return t-1}}),month:a({values:f,defaultWidth:"wide"}),day:a({values:g,defaultWidth:"wide"}),dayPeriod:a({values:b,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})};var W=/^(\d+)(일|번째)?/i;var P=/\d+/i;var M={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i};var k={any:[/^(bc|기원전)/i,/^(ad|서기)/i]};var x={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i};var H={any:[/1/i,/2/i,/3/i,/4/i]};var S={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i};var X={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]};var z={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/};var C={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]};var D={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i};var E={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}};var Q={ordinalNumber:n({matchPattern:W,parsePattern:P,valueCallback:function e(t){return parseInt(t,10)}}),era:r({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:r({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:r({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),day:r({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:D,defaultMatchWidth:"any",parsePatterns:E,defaultParseWidth:"any"})};var Y=e("default",{code:"ko",formatDistance:o,formatLong:m,formatRelative:l,localize:y,match:Q,options:{weekStartsOn:0,firstWeekContainsDate:1}})}}}));