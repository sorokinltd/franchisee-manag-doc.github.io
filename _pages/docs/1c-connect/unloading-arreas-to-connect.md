---
layout: default
title: Выгрузка задолженности в 1С-Коннект
grand_parent: Документация
parent: 1С-Коннект
nav_order: 3
permalink: /unloading-arreas-to-connect/
---

# {{ page.title }}

Производит выгрузку задолженности из 1С в 1С-Коннект.

Если у вас не настроена синхронизация с 1С-Коннект, то узнать, как настроить, можно [здесь]({{ site.baseurl }}/one-c-connect/)

Выгружаемые параметры:

**Стоимость услуг** - стоимость часа договора, рассчитывается по принципу, применяемому в отчете Учет рабочего времени.

**Задолженность** - значение задолженности по договорам клиента. Для корректного расчета в разделе "Настройки подсистемы" необходимо заполнить следующие настройки:

 *Дата начала получения договоров* - это дата, с которой отбираются все действующие договоры по текущий день.
 По этим договорам рассчитывается задолженность по документам.

 *Дата последней реализации* - это дата последнего выставленного документа "Расходная накладная" клиенту.
 На следующий день после этой даты рассчитывается задолженность по отработанному времени (см. отчет Учет рабочего времени).

Таким образом, расчет задолженности определяется следующим образом:
Задолженность по документам складывается с задолженностью по отработанному времени, которое начинается со следующего дня после последнего выставленного документа на оплату.

**Предоплата** - это значение, рассчитываемое аналогично задолженности по документам.

## Как работать

* Для выгрузки задолженности нужно нажать на кнопку "Выгрузить задолженность". Если указать контрагента, то задолженность выгрузится только по нему, если значение пустое, то задолженность выгрузится по всем клиентам.

В таблице ниже отобразится информация о выгруженной задолженности.
В колонке "Сумма на дату реализации" отобразится задолженность по документам. То есть это задолженность рассчитанная программой.
В колонке "Сумма после даты реализации" отобразится задолженность по оказанным услугам клиенту уже после того, как был выставлен последний документ на оплату, т.е. задолженность по договору.
