(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1075:function(i,s){},1105:function(i,s,r){"use strict";var t=r(69),n=(r(111),r(191),r(349),r(615),r(616),{squiggles:!1,data:function(){return{showCode:!1}},methods:{toggle:function(){this.showCode=!this.showCode},copyToClipboard:function(){var i=this;return Object(t.a)(regeneratorRuntime.mark((function s(){var r,t;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r=i.$slots.editor.reduce((function(i,s){return i+s.context.model}),""),(t=document.createElement("textarea")).value=r,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),i.$refs.copyBtn.innerText="Copied!",s.next=10,setTimeout((function(){return i.reset()}),2e3);case 10:case"end":return s.stop()}}),s)})))()},reset:function(){this.$refs.copyBtn.innerText="Copy"}}}),e=(r(617),r(618),r(47)),a=Object(e.a)(n,(function(){var i=this,s=i.$createElement,r=i._self._c||s;return r("div",{staticClass:"container"},[r("div",{staticClass:"preview block preview-container"},[i._t("preview"),i._v(" "),r("div",{staticClass:"seeCode",on:{click:i.toggle}},[i._v(i._s(i.showCode?"Hide Code":"Show Code"))])],2),i._v(" "),i.showCode?r("div",{class:"language-jsx editor block code"},[i._t("editor"),i._v(" "),r("div",{ref:"copyBtn",staticClass:"copy",on:{click:i.copyToClipboard}},[i._v("Copy")])],2):i._e()])}),[],!1,null,"96ceab10",null);s.a=a.exports},383:function(i,s,r){},384:function(i,s,r){},617:function(i,s,r){"use strict";r(383)},618:function(i,s,r){"use strict";r(384)},640:function(i,s,r){var t={"./Binary_Property/ASCII.js":641,"./Binary_Property/ASCII_Hex_Digit.js":642,"./Binary_Property/Alphabetic.js":643,"./Binary_Property/Any.js":644,"./Binary_Property/Assigned.js":645,"./Binary_Property/Bidi_Control.js":646,"./Binary_Property/Bidi_Mirrored.js":647,"./Binary_Property/Case_Ignorable.js":648,"./Binary_Property/Cased.js":649,"./Binary_Property/Changes_When_Casefolded.js":650,"./Binary_Property/Changes_When_Casemapped.js":651,"./Binary_Property/Changes_When_Lowercased.js":652,"./Binary_Property/Changes_When_NFKC_Casefolded.js":653,"./Binary_Property/Changes_When_Titlecased.js":654,"./Binary_Property/Changes_When_Uppercased.js":655,"./Binary_Property/Dash.js":656,"./Binary_Property/Default_Ignorable_Code_Point.js":657,"./Binary_Property/Deprecated.js":658,"./Binary_Property/Diacritic.js":659,"./Binary_Property/Emoji.js":660,"./Binary_Property/Emoji_Component.js":661,"./Binary_Property/Emoji_Modifier.js":662,"./Binary_Property/Emoji_Modifier_Base.js":663,"./Binary_Property/Emoji_Presentation.js":664,"./Binary_Property/Extended_Pictographic.js":665,"./Binary_Property/Extender.js":666,"./Binary_Property/Grapheme_Base.js":667,"./Binary_Property/Grapheme_Extend.js":668,"./Binary_Property/Hex_Digit.js":669,"./Binary_Property/IDS_Binary_Operator.js":670,"./Binary_Property/IDS_Trinary_Operator.js":671,"./Binary_Property/ID_Continue.js":672,"./Binary_Property/ID_Start.js":673,"./Binary_Property/Ideographic.js":674,"./Binary_Property/Join_Control.js":675,"./Binary_Property/Logical_Order_Exception.js":676,"./Binary_Property/Lowercase.js":677,"./Binary_Property/Math.js":678,"./Binary_Property/Noncharacter_Code_Point.js":679,"./Binary_Property/Pattern_Syntax.js":680,"./Binary_Property/Pattern_White_Space.js":681,"./Binary_Property/Quotation_Mark.js":682,"./Binary_Property/Radical.js":683,"./Binary_Property/Regional_Indicator.js":684,"./Binary_Property/Sentence_Terminal.js":685,"./Binary_Property/Soft_Dotted.js":686,"./Binary_Property/Terminal_Punctuation.js":687,"./Binary_Property/Unified_Ideograph.js":688,"./Binary_Property/Uppercase.js":689,"./Binary_Property/Variation_Selector.js":690,"./Binary_Property/White_Space.js":691,"./Binary_Property/XID_Continue.js":692,"./Binary_Property/XID_Start.js":693,"./General_Category/Cased_Letter.js":694,"./General_Category/Close_Punctuation.js":695,"./General_Category/Connector_Punctuation.js":696,"./General_Category/Control.js":697,"./General_Category/Currency_Symbol.js":698,"./General_Category/Dash_Punctuation.js":699,"./General_Category/Decimal_Number.js":700,"./General_Category/Enclosing_Mark.js":701,"./General_Category/Final_Punctuation.js":702,"./General_Category/Format.js":703,"./General_Category/Initial_Punctuation.js":704,"./General_Category/Letter.js":705,"./General_Category/Letter_Number.js":706,"./General_Category/Line_Separator.js":707,"./General_Category/Lowercase_Letter.js":708,"./General_Category/Mark.js":709,"./General_Category/Math_Symbol.js":710,"./General_Category/Modifier_Letter.js":711,"./General_Category/Modifier_Symbol.js":712,"./General_Category/Nonspacing_Mark.js":713,"./General_Category/Number.js":714,"./General_Category/Open_Punctuation.js":715,"./General_Category/Other.js":716,"./General_Category/Other_Letter.js":717,"./General_Category/Other_Number.js":718,"./General_Category/Other_Punctuation.js":719,"./General_Category/Other_Symbol.js":720,"./General_Category/Paragraph_Separator.js":721,"./General_Category/Private_Use.js":722,"./General_Category/Punctuation.js":723,"./General_Category/Separator.js":724,"./General_Category/Space_Separator.js":725,"./General_Category/Spacing_Mark.js":726,"./General_Category/Surrogate.js":727,"./General_Category/Symbol.js":728,"./General_Category/Titlecase_Letter.js":729,"./General_Category/Unassigned.js":730,"./General_Category/Uppercase_Letter.js":731,"./Script/Adlam.js":732,"./Script/Ahom.js":733,"./Script/Anatolian_Hieroglyphs.js":734,"./Script/Arabic.js":735,"./Script/Armenian.js":736,"./Script/Avestan.js":737,"./Script/Balinese.js":738,"./Script/Bamum.js":739,"./Script/Bassa_Vah.js":740,"./Script/Batak.js":741,"./Script/Bengali.js":742,"./Script/Bhaiksuki.js":743,"./Script/Bopomofo.js":744,"./Script/Brahmi.js":745,"./Script/Braille.js":746,"./Script/Buginese.js":747,"./Script/Buhid.js":748,"./Script/Canadian_Aboriginal.js":749,"./Script/Carian.js":750,"./Script/Caucasian_Albanian.js":751,"./Script/Chakma.js":752,"./Script/Cham.js":753,"./Script/Cherokee.js":754,"./Script/Chorasmian.js":755,"./Script/Common.js":756,"./Script/Coptic.js":757,"./Script/Cuneiform.js":758,"./Script/Cypriot.js":759,"./Script/Cypro_Minoan.js":760,"./Script/Cyrillic.js":761,"./Script/Deseret.js":762,"./Script/Devanagari.js":763,"./Script/Dives_Akuru.js":764,"./Script/Dogra.js":765,"./Script/Duployan.js":766,"./Script/Egyptian_Hieroglyphs.js":767,"./Script/Elbasan.js":768,"./Script/Elymaic.js":769,"./Script/Ethiopic.js":770,"./Script/Georgian.js":771,"./Script/Glagolitic.js":772,"./Script/Gothic.js":773,"./Script/Grantha.js":774,"./Script/Greek.js":775,"./Script/Gujarati.js":776,"./Script/Gunjala_Gondi.js":777,"./Script/Gurmukhi.js":778,"./Script/Han.js":779,"./Script/Hangul.js":780,"./Script/Hanifi_Rohingya.js":781,"./Script/Hanunoo.js":782,"./Script/Hatran.js":783,"./Script/Hebrew.js":784,"./Script/Hiragana.js":785,"./Script/Imperial_Aramaic.js":786,"./Script/Inherited.js":787,"./Script/Inscriptional_Pahlavi.js":788,"./Script/Inscriptional_Parthian.js":789,"./Script/Javanese.js":790,"./Script/Kaithi.js":791,"./Script/Kannada.js":792,"./Script/Katakana.js":793,"./Script/Kayah_Li.js":794,"./Script/Kharoshthi.js":795,"./Script/Khitan_Small_Script.js":796,"./Script/Khmer.js":797,"./Script/Khojki.js":798,"./Script/Khudawadi.js":799,"./Script/Lao.js":800,"./Script/Latin.js":801,"./Script/Lepcha.js":802,"./Script/Limbu.js":803,"./Script/Linear_A.js":804,"./Script/Linear_B.js":805,"./Script/Lisu.js":806,"./Script/Lycian.js":807,"./Script/Lydian.js":808,"./Script/Mahajani.js":809,"./Script/Makasar.js":810,"./Script/Malayalam.js":811,"./Script/Mandaic.js":812,"./Script/Manichaean.js":813,"./Script/Marchen.js":814,"./Script/Masaram_Gondi.js":815,"./Script/Medefaidrin.js":816,"./Script/Meetei_Mayek.js":817,"./Script/Mende_Kikakui.js":818,"./Script/Meroitic_Cursive.js":819,"./Script/Meroitic_Hieroglyphs.js":820,"./Script/Miao.js":821,"./Script/Modi.js":822,"./Script/Mongolian.js":823,"./Script/Mro.js":824,"./Script/Multani.js":825,"./Script/Myanmar.js":826,"./Script/Nabataean.js":827,"./Script/Nandinagari.js":828,"./Script/New_Tai_Lue.js":829,"./Script/Newa.js":830,"./Script/Nko.js":831,"./Script/Nushu.js":832,"./Script/Nyiakeng_Puachue_Hmong.js":833,"./Script/Ogham.js":834,"./Script/Ol_Chiki.js":835,"./Script/Old_Hungarian.js":836,"./Script/Old_Italic.js":837,"./Script/Old_North_Arabian.js":838,"./Script/Old_Permic.js":839,"./Script/Old_Persian.js":840,"./Script/Old_Sogdian.js":841,"./Script/Old_South_Arabian.js":842,"./Script/Old_Turkic.js":843,"./Script/Old_Uyghur.js":844,"./Script/Oriya.js":845,"./Script/Osage.js":846,"./Script/Osmanya.js":847,"./Script/Pahawh_Hmong.js":848,"./Script/Palmyrene.js":849,"./Script/Pau_Cin_Hau.js":850,"./Script/Phags_Pa.js":851,"./Script/Phoenician.js":852,"./Script/Psalter_Pahlavi.js":853,"./Script/Rejang.js":854,"./Script/Runic.js":855,"./Script/Samaritan.js":856,"./Script/Saurashtra.js":857,"./Script/Sharada.js":858,"./Script/Shavian.js":859,"./Script/Siddham.js":860,"./Script/SignWriting.js":861,"./Script/Sinhala.js":862,"./Script/Sogdian.js":863,"./Script/Sora_Sompeng.js":864,"./Script/Soyombo.js":865,"./Script/Sundanese.js":866,"./Script/Syloti_Nagri.js":867,"./Script/Syriac.js":868,"./Script/Tagalog.js":869,"./Script/Tagbanwa.js":870,"./Script/Tai_Le.js":871,"./Script/Tai_Tham.js":872,"./Script/Tai_Viet.js":873,"./Script/Takri.js":874,"./Script/Tamil.js":875,"./Script/Tangsa.js":876,"./Script/Tangut.js":877,"./Script/Telugu.js":878,"./Script/Thaana.js":879,"./Script/Thai.js":880,"./Script/Tibetan.js":881,"./Script/Tifinagh.js":882,"./Script/Tirhuta.js":883,"./Script/Toto.js":884,"./Script/Ugaritic.js":885,"./Script/Vai.js":886,"./Script/Vithkuqi.js":887,"./Script/Wancho.js":888,"./Script/Warang_Citi.js":889,"./Script/Yezidi.js":890,"./Script/Yi.js":891,"./Script/Zanabazar_Square.js":892,"./Script_Extensions/Adlam.js":893,"./Script_Extensions/Ahom.js":894,"./Script_Extensions/Anatolian_Hieroglyphs.js":895,"./Script_Extensions/Arabic.js":896,"./Script_Extensions/Armenian.js":897,"./Script_Extensions/Avestan.js":898,"./Script_Extensions/Balinese.js":899,"./Script_Extensions/Bamum.js":900,"./Script_Extensions/Bassa_Vah.js":901,"./Script_Extensions/Batak.js":902,"./Script_Extensions/Bengali.js":903,"./Script_Extensions/Bhaiksuki.js":904,"./Script_Extensions/Bopomofo.js":905,"./Script_Extensions/Brahmi.js":906,"./Script_Extensions/Braille.js":907,"./Script_Extensions/Buginese.js":908,"./Script_Extensions/Buhid.js":909,"./Script_Extensions/Canadian_Aboriginal.js":910,"./Script_Extensions/Carian.js":911,"./Script_Extensions/Caucasian_Albanian.js":912,"./Script_Extensions/Chakma.js":913,"./Script_Extensions/Cham.js":914,"./Script_Extensions/Cherokee.js":915,"./Script_Extensions/Chorasmian.js":916,"./Script_Extensions/Common.js":917,"./Script_Extensions/Coptic.js":918,"./Script_Extensions/Cuneiform.js":919,"./Script_Extensions/Cypriot.js":920,"./Script_Extensions/Cypro_Minoan.js":921,"./Script_Extensions/Cyrillic.js":922,"./Script_Extensions/Deseret.js":923,"./Script_Extensions/Devanagari.js":924,"./Script_Extensions/Dives_Akuru.js":925,"./Script_Extensions/Dogra.js":926,"./Script_Extensions/Duployan.js":927,"./Script_Extensions/Egyptian_Hieroglyphs.js":928,"./Script_Extensions/Elbasan.js":929,"./Script_Extensions/Elymaic.js":930,"./Script_Extensions/Ethiopic.js":931,"./Script_Extensions/Georgian.js":932,"./Script_Extensions/Glagolitic.js":933,"./Script_Extensions/Gothic.js":934,"./Script_Extensions/Grantha.js":935,"./Script_Extensions/Greek.js":936,"./Script_Extensions/Gujarati.js":937,"./Script_Extensions/Gunjala_Gondi.js":938,"./Script_Extensions/Gurmukhi.js":939,"./Script_Extensions/Han.js":940,"./Script_Extensions/Hangul.js":941,"./Script_Extensions/Hanifi_Rohingya.js":942,"./Script_Extensions/Hanunoo.js":943,"./Script_Extensions/Hatran.js":944,"./Script_Extensions/Hebrew.js":945,"./Script_Extensions/Hiragana.js":946,"./Script_Extensions/Imperial_Aramaic.js":947,"./Script_Extensions/Inherited.js":948,"./Script_Extensions/Inscriptional_Pahlavi.js":949,"./Script_Extensions/Inscriptional_Parthian.js":950,"./Script_Extensions/Javanese.js":951,"./Script_Extensions/Kaithi.js":952,"./Script_Extensions/Kannada.js":953,"./Script_Extensions/Katakana.js":954,"./Script_Extensions/Kayah_Li.js":955,"./Script_Extensions/Kharoshthi.js":956,"./Script_Extensions/Khitan_Small_Script.js":957,"./Script_Extensions/Khmer.js":958,"./Script_Extensions/Khojki.js":959,"./Script_Extensions/Khudawadi.js":960,"./Script_Extensions/Lao.js":961,"./Script_Extensions/Latin.js":962,"./Script_Extensions/Lepcha.js":963,"./Script_Extensions/Limbu.js":964,"./Script_Extensions/Linear_A.js":965,"./Script_Extensions/Linear_B.js":966,"./Script_Extensions/Lisu.js":967,"./Script_Extensions/Lycian.js":968,"./Script_Extensions/Lydian.js":969,"./Script_Extensions/Mahajani.js":970,"./Script_Extensions/Makasar.js":971,"./Script_Extensions/Malayalam.js":972,"./Script_Extensions/Mandaic.js":973,"./Script_Extensions/Manichaean.js":974,"./Script_Extensions/Marchen.js":975,"./Script_Extensions/Masaram_Gondi.js":976,"./Script_Extensions/Medefaidrin.js":977,"./Script_Extensions/Meetei_Mayek.js":978,"./Script_Extensions/Mende_Kikakui.js":979,"./Script_Extensions/Meroitic_Cursive.js":980,"./Script_Extensions/Meroitic_Hieroglyphs.js":981,"./Script_Extensions/Miao.js":982,"./Script_Extensions/Modi.js":983,"./Script_Extensions/Mongolian.js":984,"./Script_Extensions/Mro.js":985,"./Script_Extensions/Multani.js":986,"./Script_Extensions/Myanmar.js":987,"./Script_Extensions/Nabataean.js":988,"./Script_Extensions/Nandinagari.js":989,"./Script_Extensions/New_Tai_Lue.js":990,"./Script_Extensions/Newa.js":991,"./Script_Extensions/Nko.js":992,"./Script_Extensions/Nushu.js":993,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":994,"./Script_Extensions/Ogham.js":995,"./Script_Extensions/Ol_Chiki.js":996,"./Script_Extensions/Old_Hungarian.js":997,"./Script_Extensions/Old_Italic.js":998,"./Script_Extensions/Old_North_Arabian.js":999,"./Script_Extensions/Old_Permic.js":1e3,"./Script_Extensions/Old_Persian.js":1001,"./Script_Extensions/Old_Sogdian.js":1002,"./Script_Extensions/Old_South_Arabian.js":1003,"./Script_Extensions/Old_Turkic.js":1004,"./Script_Extensions/Old_Uyghur.js":1005,"./Script_Extensions/Oriya.js":1006,"./Script_Extensions/Osage.js":1007,"./Script_Extensions/Osmanya.js":1008,"./Script_Extensions/Pahawh_Hmong.js":1009,"./Script_Extensions/Palmyrene.js":1010,"./Script_Extensions/Pau_Cin_Hau.js":1011,"./Script_Extensions/Phags_Pa.js":1012,"./Script_Extensions/Phoenician.js":1013,"./Script_Extensions/Psalter_Pahlavi.js":1014,"./Script_Extensions/Rejang.js":1015,"./Script_Extensions/Runic.js":1016,"./Script_Extensions/Samaritan.js":1017,"./Script_Extensions/Saurashtra.js":1018,"./Script_Extensions/Sharada.js":1019,"./Script_Extensions/Shavian.js":1020,"./Script_Extensions/Siddham.js":1021,"./Script_Extensions/SignWriting.js":1022,"./Script_Extensions/Sinhala.js":1023,"./Script_Extensions/Sogdian.js":1024,"./Script_Extensions/Sora_Sompeng.js":1025,"./Script_Extensions/Soyombo.js":1026,"./Script_Extensions/Sundanese.js":1027,"./Script_Extensions/Syloti_Nagri.js":1028,"./Script_Extensions/Syriac.js":1029,"./Script_Extensions/Tagalog.js":1030,"./Script_Extensions/Tagbanwa.js":1031,"./Script_Extensions/Tai_Le.js":1032,"./Script_Extensions/Tai_Tham.js":1033,"./Script_Extensions/Tai_Viet.js":1034,"./Script_Extensions/Takri.js":1035,"./Script_Extensions/Tamil.js":1036,"./Script_Extensions/Tangsa.js":1037,"./Script_Extensions/Tangut.js":1038,"./Script_Extensions/Telugu.js":1039,"./Script_Extensions/Thaana.js":1040,"./Script_Extensions/Thai.js":1041,"./Script_Extensions/Tibetan.js":1042,"./Script_Extensions/Tifinagh.js":1043,"./Script_Extensions/Tirhuta.js":1044,"./Script_Extensions/Toto.js":1045,"./Script_Extensions/Ugaritic.js":1046,"./Script_Extensions/Vai.js":1047,"./Script_Extensions/Vithkuqi.js":1048,"./Script_Extensions/Wancho.js":1049,"./Script_Extensions/Warang_Citi.js":1050,"./Script_Extensions/Yezidi.js":1051,"./Script_Extensions/Yi.js":1052,"./Script_Extensions/Zanabazar_Square.js":1053,"./index.js":1054,"./unicode-version.js":1055};function n(i){var s=e(i);return r(s)}function e(i){if(!r.o(t,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return t[i]}n.keys=function(){return Object.keys(t)},n.resolve=e,i.exports=n,n.id=640}}]);