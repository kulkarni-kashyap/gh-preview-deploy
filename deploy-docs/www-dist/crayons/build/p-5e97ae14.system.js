System.register([],(function(e){"use strict";return{execute:function(){var i=e("datepicker",{cancel:"Abbrechen",update:"Aktualisieren",to:"zu"});var n=e("dropdown",{add:"Hinzufügen",cancel:"Abbrechen"});var t=e("fileUploader",{text:"Datei hochladen",description:"oder hierher ziehen und ablegen",acceptError:"Dateiformat nicht akzeptiert",maxFileSizeError:"Maximale Dateigröße überschritten",maxFilesLimitError:"Maximale Anzahl an Dateien überschritten",fileUploadError:"Hochladen der Datei fehlgeschlagen",uploading:"Wird hochgeladen",selectedFiles:"Ausgewählte Dateien",remove:"entfernen"});var l=e("modal",{cancel:"Abbrechen",ok:"OK"});var a=e("search",{search:"Suchen",noItemsFound:"Keine Elemente gefunden",noDataAvailable:"Keine Daten verfügbar"});var r=e("form",{required:"{{field}} ist erforderlich",invalidUrl:"Geben Sie eine gültige URL ein",invalidEmail:"Geben Sie eine gültige E-Mail ein",invalidNumber:"Geben Sie eine gültige Nummer ein"});var s=e("pagination",{buttonGroupLabel:"Nummerierungssteuerung",previousButtonLabel:"Vorherig",nextButtonLabel:"Weiter",content:"<span class='record'>{{start}}</span> bis <span class='record'>{{end}}</span> von {{total}}"});var d=e("datatable",{chooseColumns:"Spalten auswählen",actions:"Aktionen",hide:"Ausblenden",show:"Anzeigen"});var h=e("platformTable",{delete:"Löschen",sortby:"Sortieren nach",orderby:"Ordnen nach"});var o=e("formBuilder",{fieldRequired:"Pflichtfeld zum Senden des Tickets",fieldRequiredTag:"Obligatorisch",fieldUnique:"Eindeutige Werte akzeptieren",fieldUniqueHoverText:"Wenn ausgewählt, lässt das System nicht zu, dass zwei Datensätze den gleichen Wert für das Feld haben. Bitte beachten Sie, dass dieses Verhalten nicht aktualisiert werden kann, sobald das Feld erstellt wurde.",fieldUniqueTag:"Einzigartig",fieldFilter:"In Filtern anzeigen",fieldFilterHoverText:"Wenn ausgewählt, können Sie Ihre Datensatzlistenansicht mit diesem Feld filtern. Bitte beachten Sie, dass dieses Verhalten nicht aktualisiert werden kann, sobald das Feld erstellt wurde.",fieldFilterTag:"Filterbar",fieldTypeRelationship:"Nachschlagbeziehung",fieldTypeRelationshipDesc:"Erstellen Sie mithilfe eines Nachschlagefelds Beziehungen zwischen Objekten",fieldTypeRelationshipDescHoverText:"Dieses Feld lässt Benutzer auf ein Nachschlagesymbol klicken, um einen Wert aus einer Liste auszuwählen. Das Zielobjekt ist die Quelle der Werte in der Liste.",fieldTypeText:"Text",fieldTypeParagraph:"Absatz",fieldTypeNumber:"Nummer",fieldTypeDecimal:"Dezimalzahl",fieldTypeDate:"Datum",fieldTypeDropdown:"Auswahlfeld",fieldTypeCheckbox:"Kontrollkästchen",fieldTypeMultiselect:"Mehrfachauswahl",lookupUniqueTag:"Einzigartig",primaryFieldTag:"Primäres Feld",primaryFieldHeader:"Primäres Feld",primaryFieldNameHint:"Dies ist das primäre Feld des Objekts und kann nicht gelöscht werden. Es soll eine eindeutige Repräsentation jedes Datensatzes sein und erscheint in Nachschlagvorgängen und Suchergebnissen.",deleteFieldTitle:"Möchten Sie das Feld wirklich löschen",deleteFieldMessage:"Dieses Feld wird dauerhaft gelöscht und alle zugehörigen Daten gehen verloren. Möchten Sie trotzdem fortfahren?",deleteFieldSubmit:"Löschen",searchFields:"Felder durchsuchen",customizeWidget:"Widget anpassen",addChoices:"Auswahlmöglichkeiten hinzufügen",addChoice:"Auswahlmöglichkeit hinzufügen",choicePlaceholderSuffix:"Auswahlmöglichkeit",headerFieldTypes:"Feldtypen",headerFields:"Felder",fieldTypesDragDrop:"Von hier aus ziehen und ablegen",behaviour:"Verhalten",fieldLabel:"Feldlabel",fieldLabelPlaceholder:"Geben Sie das Feldlabel ein",addFieldBtn:"Feld hinzufügen",saveFieldBtn:"Speichern",cancelFieldBtn:"Abbrechen",disabledFilterCheck:"Es werden immer eindeutige Felder verfügbar sein, um Datensätze in der Listenansicht zu filtern",lookupSourceObject:"Quellobjekt",lookupRelationshipPlaceholder:"Beziehung auswählen",lookupRelationshipLabel:"Beziehungstyp",lookupTargetPlaceholder:"Zielobjekt auswählen",lookupTargetLabel:"Zielobjekt",dropdownChoiceDeleteMessage:"Das Löschen einer Auswahl wirkt sich auf zugehörige Tickets, Automatisierungen und Berichte aus.",relationshipManyToOne:"Viele zu einem",relationshipManyToOneDesc:"Verknüpfen Sie viele Datensätze des Quellobjekts mit einem Datensatz des Zielobjekts, d.h. viele Tickets können von einem Kunden erstellt werden.",relationshipOneToOne:"Eins zu eins",relationshipOneToOneDesc:"Verknüpfen Sie einen Datensatz des Quellobjekts mit nur einem Datensatz des Zielobjekts, d.h. eine Person kann nur einen Reisepass haben.",customizeWidgetModalHeader:"Widget anpassen",customizeWidgetModalHint:"Wählen Sie bis zu 5 Felder aus, die im Widget und in den Suchergebnissen angezeigt werden",customizeWidgetModalSaveBtn:"Speichern",customizeWidgetModalCancelBtn:"Abbrechen",noSearchItemsFound:"Keine passenden Felder gefunden!",errors:{emptyFieldName:"Feldbezeichnung ist obligatorisch!",emptyRelationshipType:"Beziehungstyp ist obligatorisch!",emptyTargetObject:"Zielobjekt ist obligatorisch!",emptyChoice:"Auswahltext ist obligatorisch!",duplicate:"Dropdown-Auswahlmöglichkeit existiert bereits!",minimum:"Geben Sie mindestens eine Auswahlmöglichkeit ein!",formErrors:"Formular enthält Fehler!",fieldNameExists:"Ein Feld mit demselben Label existiert bereits!"},maximumLimits:{filterable:"Es können maximal 25 Felder verwendet werden, um Datensätze in der Listenansicht zu filtern.",unique:"Es können maximal 5 Felder als eindeutig markiert werden.",fields:"Höchstgrenze von 100 Feldern erreicht. Löschen Sie ein existierendes Feld, um ein neues zu erstellen.",lookups:"Höchstgrenze von 5 Nachschlagfeldern erreicht. Löschen Sie ein existierendes Nachschlagfeld, um ein neues zu erstellen."}});var u=e("filters",{title:"Filter",addFilter:"Filter hinzufügen",noFilter:"Sie haben noch keine Filter hinzugefügt",validation:{required:"Obligatorisches Feld",minMax:"Muss größer sein als {{fromValue}}"},placeholder:{startRange:"Startbereich",endRange:"Endbereich",and:"und"}});var c=e("searchDropdown",{placeholder:{search:"Zum Suchen tippen"}});var g=e("default",{datepicker:i,dropdown:n,fileUploader:t,modal:l,search:a,form:r,pagination:s,datatable:d,platformTable:h,formBuilder:o,filters:u,searchDropdown:c})}}}));