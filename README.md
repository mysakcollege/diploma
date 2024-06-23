# diploma
# Розділ 3: Налаштування локального середовища, робота з Markdown та інтеграція з сервісами створення Status badges

## 3.1 Status badges та їх використання у GitHub Workflows

**Status badges** - це графічні елементи, які відображають поточний стан проекту, зокрема стан збірки, покриття коду тестами, стан залежностей та інші показники. Вони можуть бути інтегровані в файл README, документацію або інші місця, де можна використовувати Markdown. Status badges надають швидкий і зручний спосіб для відображення важливої інформації про проект.

**Основні типи статусних значків:**
1. **Build Status Badge** - відображає стан збірки проекту (успішна, провалена).
2. **Coverage Badge** - показує відсоток покриття коду тестами.
3. **Dependencies Status Badge** - вказує на стан залежностей проекту.
4. **Custom Badges** - можуть містити будь-яку іншу інформацію, яка є важливою для проекту.

**Приклад використання статусних значків у GitHub Workflows:**

1. **Створення workflow з підтримкою статусних значків:**

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
