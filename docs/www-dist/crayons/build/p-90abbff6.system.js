System.register([],(function(e){"use strict";return{execute:function(){var i=e("datepicker",{cancel:"Скасувати",update:"Оновити",to:"до"});var a=e("dropdown",{add:"Додати",cancel:"Скасувати"});var l=e("fileUploader",{text:"Передати файл",description:"або перетягніть сюди",acceptError:"Неприйнятний формат файлу",maxFileSizeError:"Перевищено максимальний розмір файлу",maxFilesLimitError:"Перевищено максимальну кількість файлів",fileUploadError:"Помилка завантаження файлу",uploading:"Завантаження",selectedFiles:"Вибрані файли",remove:"видалити"});var r=e("modal",{cancel:"Скасувати",ok:"ОК"});var o=e("search",{search:"Пошук",noItemsFound:"Елементи не знайдено",noDataAvailable:"Немає доступних даних"});var d=e("form",{required:"{{field}} є обов'язковим",invalidUrl:"Введіть припустиму URL-адресу",invalidEmail:"Введіть припустиму адресу ел. пошти",invalidNumber:"Введіть припустиме число"});var t=e("pagination",{buttonGroupLabel:"Керування нумерацією сторінок",previousButtonLabel:"Попередня",nextButtonLabel:"Далі",content:"<span class='record'>{{start}}</span> до <span class='record'>{{end}}</span> з {{total}}"});var n=e("datatable",{chooseColumns:"Виберіть стовпці",actions:"Дії",hide:"Приховати",show:"Показати"});var s=e("platformTable",{delete:"Видалити",sortby:"Сортувати за",orderby:"Впорядкувати за"});var p=e("formBuilder",{fieldRequired:"Потрібно під час надсилання форми",fieldRequiredTag:"Обов'язково",fieldUnique:"Приймати унікальні значення",fieldUniqueHoverText:"Якщо параметр увімкнено, система не дозволить двом записам мати поля з однаковим значенням. Врахуйте, що після створення поля цю поведінку змінити не можна.",fieldUniqueTag:"Унікальне",fieldFilter:"Показувати у фільтрах",fieldFilterHoverText:"Якщо параметр увімкнено, список записів можна фільтрувати по цьому полю. Врахуйте, що після створення поля цю поведінку змінити не можна.",fieldFilterTag:"Можна фільтрувати",fieldTypeRelationship:"Пошук стосунків",fieldTypeRelationshipDesc:"Створення зв'язків між об'єктами за допомогою поля пошуку",fieldTypeRelationshipDescHoverText:"За допомогою цього поля можна вибрати значення зі списку натисканням на піктограму пошуку. Цільовий об'єкт є джерелом значень списку.",fieldTypeText:"Текст",fieldTypeParagraph:"Абзац",fieldTypeNumber:"Номер",fieldTypeDecimal:"Десятковий",fieldTypeDate:"Дата",fieldTypeDropdown:"Розкривний список",fieldTypeCheckbox:"Прапорець",fieldTypeMultiselect:"Множинний вибір",lookupUniqueTag:"Унікальний",primaryFieldTag:"Основне поле",primaryFieldHeader:"Основне поле",primaryFieldNameHint:"Це основне поле об'єкту, яке не можна видалити. Воно створене, щоби бути унікальним образом кожного запису. Його ж буде видно в результатах пошуку.",deleteFieldTitle:"Точно бажаєте видалити це поле?",deleteFieldMessage:"Це поле буде видалено разом з усіма пов'язаними з ним даними без можливості відновлення. Бажаєте продовжити?",deleteFieldSubmit:"Видалити",searchFields:"Пошук полів",customizeWidget:"Налаштування віджета",addChoices:"Додати варіанти вибору",addChoice:"Додати варіант вибору",choicePlaceholderSuffix:"Варіант вибору",headerFieldTypes:"Типи полів",headerFields:"Поля",fieldTypesDragDrop:"Перетягніть звідси",behaviour:"Поведінка",fieldLabel:"Мітка поля",fieldLabelPlaceholder:"Введіть мітку поля",addFieldBtn:"Додати поле",saveFieldBtn:"Зберегти",cancelFieldBtn:"Скасувати",disabledFilterCheck:"Унікальні поля завжди будуть доступні для фільтрування записів у вигляді списку",lookupSourceObject:"Вихідний об'єкт",lookupRelationshipPlaceholder:"Виберіть стосунки",lookupRelationshipLabel:"Тип стосунків",lookupTargetPlaceholder:"Виберіть цільовий об'єкт",lookupTargetLabel:"Цільовий об'єкт",dropdownChoiceDeleteMessage:"Видалення варіанту вибору вплине на пов’язані заявки, автоматизацію та звіти.",relationshipManyToOne:"Багато до одного",relationshipManyToOneDesc:"Багато записів вихідного об'єкта можна прив'язати до одного запису цільового об'єкта. Наприклад, клієнт може створити відразу декілька заявок.",relationshipOneToOne:"Один-до-одного",relationshipOneToOneDesc:"Один запис вихідного об'єкта прив'язується тільки до одного запису цільового об'єкта. Наприклад, у людини може бути лише один паспорт.",customizeWidgetModalHeader:"Налаштування віджета",customizeWidgetModalHint:"Виберіть до 5 полів, які буде видно у віджеті та результатах пошуку",customizeWidgetModalSaveBtn:"Зберегти",customizeWidgetModalCancelBtn:"Скасувати",noSearchItemsFound:"Відповідні поля не знайдено!",errors:{emptyFieldName:"Мітка поля є обов'язковою!",emptyRelationshipType:"Тип стосунків є обов'язковим!",emptyTargetObject:"Цільовий об'єкт є обов'язковим!",emptyChoice:"Текст варіанту вибору є обов'язковим!",duplicate:"Розкривний варіант вибору вже існує!",minimum:"Введіть принаймні один варіант вибору!",formErrors:"Форма містить помилки!",fieldNameExists:"Поле з такою міткою вже існує!"},maximumLimits:{filterable:"Для фільтрування записів у вигляді списку можна використати не більше 25 полів.",unique:"Як унікальні можна позначити не більше 5 полів.",fields:"Досягнуто ліміт у 100 полів. Щоб створити нове поле, видалите наявне.",lookups:"Досягнуто ліміт у 5 полів пошуку. Щоб створити нове поле, видалите наявне."}});var c=e("filters",{title:"Фільтрувати",addFilter:"Додати фільтр",noFilter:"Ви ще не додали жодного фільтра",validation:{required:"Обов'язкове поле",minMax:"Мусить бути більше за {{fromValue}}"},placeholder:{startRange:"Початковий діапазон",endRange:"Кінцевий діапазон",and:"та"}});var u=e("searchDropdown",{placeholder:{search:"Введіть для пошуку"}});var m=e("default",{datepicker:i,dropdown:a,fileUploader:l,modal:r,search:o,form:d,pagination:t,datatable:n,platformTable:s,formBuilder:p,filters:c,searchDropdown:u})}}}));