# Отчет по тарифам

## Назначение

Отчет позволяет контролировать договоры в разрезе тарифов.
В отчете отображается 4 таблицы. Рассмотрим их ниже.

## Основная таблица

В ней содержится список всех действующих договоров на дату, указанную в параметрах отчета, а также договоры, которые начнутся в будущем.
Отчет содержится в себе колонки, видимостью которых можно управлять с помощью настроек, открываемых по кнопке "Настройки".
Колонки:
*№ - порядковый номер строки. Вся нумерация в основной таблице ведется с учетом количества учреждений, указанных в договоре. Например, есть список договоров, их 10, но у 5-го договора указано 5 учреждений, тогда нумерация будет примерно такой: 1, 2, 3, 4, 5, 10. Этот принцип действует только для основной таблицы.

Если договор с клиентом заключен впервые, то рядом с номером будет стоять порядковый номер новых договоров. Например, 10.1 - это значит, что 10-ый договор в списке является первым новым.

Будущие идут следом за действующими. Нумерация не обязательно может начинаться с 1. Она может начинаться с пустой ячейки, т.к., если договор продлен, то этот клиент не считается новым (см. предыдущий абзац). То есть нумерация у будущих распространяется только для новых клиентов.

*Контрагент - ссылка на контрагента из договора.

*Тариф - тариф, по которому заключается договор. Представление тарифа формируется в зависимости от того, указан ли вид тарифа в договоре. Если указан, то название будет браться из него.

*Начало - дата начала договора.

*Конец - дата окончания договора.

*Дополнительная дата - название колонки берется из настроек реквизитов формы в тарифе (см. ОкончаниеЭЦП). Содержит дополнительную дату. Для разных категорий договоров имеет разное назначение. Но, как правило, для ИТС - это официальная дата окончания договора. Для категории Сервисы ИТС - это дата окончания ЭЦП. Для тех, кто находится у конкурента, эта дата является датой окончания договора у конкурента.

*Комментарий - содержит дополнительные сведения о договоре. Если это договор у конкурента, то будет отображен конкурент, указанный в договоре, либо причина отвала, если конкурент не указан.
Если договор находится в каком-либо статусе, то этот статус будет отображен по следующим принципам: 
Если договор находится в состоянии "В работе", то будет отображен последний звонок и его дата. При клике на ячейку, откроется список звонков в договоре. 
Если договор находится в состоянии "Согласован", то будет указана ссылка на Расходную накладную или Заказ покупателя. Соответствующее поле должно быть заполнено в договоре.
Представлением ссылки документа является краткое название документа, дата и сумма (например, РН 12.01.2022 14500).
Если какие-либо поля, отображаемые в комментарии (звонки, документы) не заполнены, то будет указано представление статуса.
Если договор не имел каких-либо статусов и не является договором конкурента, будет отображаться содержание поля Комментарий в договоре.

*Сумма - содержит сумму из договора.

*Выручка - содержит значение поля Выручка из контрагента.

*Сотр. - содержит количество сотрудников из контрагента.

*Р - поле со значениями Да/Нет. Да - есть документ Расходная накладная, отображается галочка . Нет - ячейка пустая.

*О - поле со значениями Да/Нет. Да - есть оплата, отображается галочка. Нет - ячейка пустая.

## Параметры отчета

Параметр "Вид отчета" позволяет управлять видимостью этого списка.
"Обычный" вариант позволяет просматривать весь список договоров вместе с итогами, а если выбрать "Краткий", то отобразятся только итоги.
С помощью параметра "Категория договора" можно управлять отбором по категориям договоров.
Например, если указана категория договора "ИТС", то тогда отобразятся все договоры, подчиненные только категории ИТС. Соответственно будут указаны тарифы, относящиеся только к выбранной категории.

Также с помощью параметра Тариф имеется возможность устанавливать отборы по тарифам.
Отбор можно указывать как множественный, так и одиночный. Включается/Выключается режим по кнопке с картинкой в виде маркированного списка.

Итоги считаются по тарифам, указанным в договорах. Сами тарифы хранятся в справочнике "Тарифы".

Для категории ИТС итоги по тарифам разделяются на два типа: "Проф" и "Техно".
Сначала отображаются итоги по тарифам ПРОФ. Затем по ним приводится общий итог.
Затем аналогично с тарифами типа Техно.
После итогов по Техно следуют обобщенные итоги, которые учитываются фирмой "1С".

<!-- ## Цвета отчета
Строки отчета выделяются в разных стилях, и у каждого стиля есть свое значение.
Ниже приведены эти значения. -->

<!-- [#00bfff]Облачный тариф Просрочена дополнительная дата 
Продленные Продление оплачено/опл.част. Просроченные Договор у конкурента 
Жирный шрифт - перешел от конкурента -->