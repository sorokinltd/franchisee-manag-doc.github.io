---
layout: default
nav_order: 1
title: Прайс для магазина расширений 1С:Фреш
parent: Ценообразование
permalink: /pricing/fresh/
---

# {{ page.title }}

<table>
  <thead>
    <tr>
      <th>Тариф</th>
      <th>Кол-во ИТС</th>
      <th>Стоимость, Руб.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>До 100 ИТС, 12 мес</td>
      <td></td>
      <td>29 164,00</td>
    </tr>
    <tr>
      <td>До 200 ИТС, 12 мес</td>
      <td></td>
      <td>44 586,40</td>
    </tr>
    <tr>
      <td>До 300 ИТС, 12 мес</td>
      <td></td>
      <td>60 008,80</td>
    </tr>
    <tr>
      <td>До 400 ИТС, 12 мес</td>
      <td></td>
      <td>73 228,00</td>
    </tr>
    <tr>
      <td>От 400 ИТС, 12 мес</td>
      <td><input type="number" value="400" oninput="calculatePrice(this, 'fullYear')" min="400"></td>
      <td>73 228,00</td>
    </tr>
    <tr>
      <td>До 100 ИТС, 6 мес</td>
      <td></td>
      <td>15 583,00</td>
    </tr>
    <tr>
      <td>До 200 ИТС, 6 мес</td>
      <td></td>
      <td>23 767,05</td>
    </tr>
    <tr>
      <td>До 300 ИТС, 6 мес</td>
      <td></td>
      <td>31 951,10</td>
    </tr>
    <tr>
      <td>До 400 ИТС, 6 мес</td>
      <td></td>
      <td>38 242,00</td>
    </tr>
    <tr>
      <td>От 400 ИТС, 6 мес</td>
      <td><input type="number" value="400" oninput="calculatePrice(this, 'halfYear')" min="400"></td>
      <td>38 242,00</td>
    </tr>
  </tbody>
</table>

<script>
  function calculatePrice(input, priceType) {
    const row = input.closest('tr');
    const cells = row.getElementsByTagName('td');
    let itcCount = parseFloat(input.value);
    const priceCell = cells[2];
    const basePrice = parseFloat(priceCell.textContent.replace(/\s/g, '').replace(',', '.'));

    let profRatio = 44064;
    let korpRatio = 88128;
    let baseRatio = 14900;
    const until200Ratio = 1.35;
    const until300Ratio = 1.7;

    if (priceType == 'halfYear') {
        profRatio = 23383;
        korpRatio = 46042;
        baseRatio = 7800;            
    }

    if (!isNaN(itcCount) && itcCount > 0) {
        
        let newPrice;
        if (itcCount < 400) {
            itcCount = 400;
        }
        rounded =  Math.round(itcCount / 10) * 10;
        newPrice = ((rounded / 400) * korpRatio - baseRatio).toFixed(2);      
        priceCell.textContent = new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(newPrice);
    }
  }
</script>