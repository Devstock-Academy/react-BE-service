### Wprowadzenie

Ten folder zawiera serwer do zarządzania finansami osobistymi, który umożliwia odczytywanie, dodawanie i usuwanie transakcji.

### Uruchomienie serwera

Aby uruchomić serwer, wykonaj w terminalu na poziomie folderu back-end następujące komendy:

```
npm i
npm run dev
```

Możesz również wywołać te same komendy o poziom wyżej, aby uruchomić jednocześnie serwer i projekt frontendowy.

### Model danych

Serwer obsługuje dwa główne rodzaje danych: kategorie i transakcje.

- **Kategorie** mają następującą strukturę:

  ```
  {
    "id": 1,
    "name": "Groceries",
    "type": "expense"
  }
  ```

- **Transakcje** są strukturyzowane w następujący sposób:
  ```
  {
    "id": 1,
    "categoryId": 1,
    "type": "expense",
    "amount": 100,
    "date": "2024-04-01",
    "description": "Weekly groceries"
  }
  ```

### Opis endpointów

| Ścieżka            | Metoda | Opis                                                                                                                                                         |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/categories`      | GET    | Pobiera wszystkie kategorie.                                                                                                                                 |
| `/categories`      | POST   | Dodaje nową kategorię. Wymaga przesłania danych nowej kategorii w formacie JSON, np.: `{name: 'Insurance', type: 'expense'}`.                                |
| `/categories/ID`   | DELETE | Usuwa kategorię o podanym ID.                                                                                                                                |
| `/transactions`    | GET    | Pobiera wszystkie transakcje.                                                                                                                                |
| `/transactions`    | POST   | Dodaje nową transakcję. Wymaga przesłania danych nowej transakcji w formacie JSON, np.: `{categoryId: 1, type: 'expense', amount: 50, description: 'Taxi'}`. |
| `/transactions/ID` | DELETE | Usuwa transakcję o podanym ID.                                                                                                                               |

### Przykłady użycia

- Pobieranie wszystkich kategorii: `[GET] - /categories`
- Dodawanie nowej kategorii: `[POST] - /categories`
- Usuwanie kategorii: `[DELETE] - /categories/1`
- Pobieranie wszystkich transakcji: `[GET] - /transactions`
- Dodawanie nowej transakcji: `[POST] - /transactions`
- Usuwanie transakcji: `[DELETE] - /transactions/1`
