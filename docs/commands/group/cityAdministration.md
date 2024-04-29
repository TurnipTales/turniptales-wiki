!!! note ""
    Diese Fraktion hat fraktionsübergreifende Commands, die sie sich mit anderen Fraktionen teilt. Diese Commands findest du [hier](/commands/group).

## Bürgermeisteramt

### /candidate

Für die Bürgermeisterwahl können Spieler als Kandidaten aufgestellt werden. Mit diesem Command kann ein neuer Spieler als Kandidat
hinzugefügt, entfernt oder die Liste aller Kandidaten angezeigt werden.

**Syntax**: `/candidate [add|remove|list] (Person)`

| Parameter                                               | Beschreibung                                                                                              | Beispiel         |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------------|
| `add` `remove` `list` <span style="color:red;">*</span> | `add` Fügt einen Kandidaten hinzu<br/>`remove` Entfernt einen Kandidaten<br/>`list` Zeigt alle Kandidaten |                  |
| `Person`                                                | Person die hinzugefügt oder entfernt werden soll                                                          | Raphanus-Sativus |

### /voting

Mit diesem Command wird die Wahl des Bürgermeisters gestartet.

**Syntax**: `/voting [start|stop]`

| Parameter                                        | Beschreibung                                        | Beispiel |
|--------------------------------------------------|-----------------------------------------------------|----------|
| `start` `stop` <span style="color:red;">*</span> | `start` Startet die Wahl<br/>`stop` Stoppt die Wahl |          |

## Hochzeit und Ehevertrag

### /ehevertrag

Mit diesem Command kann ein Ehevertrag zwischen zwei Personen geschlossen werden.

??? info "Was bringt mir ein Ehevertrag?"
    Durch einen Ehevertrag haben die verheirateten Personen gegenseitigen Zugriff auf Häuser und dessen Funktionen, Fahrzeuge und müssen
    weniger Steuern zahlen. Außerdem wird bei einer Trennung keine Gebühr fällig. Ohne Ehevertrag fallen Kosten in Höhe von 2000$ an.

**Syntax**: `/ehevertrag [Person 1] [Person 2]`

| Parameter                                    | Beschreibung                                               | Beispiel         |
|----------------------------------------------|------------------------------------------------------------|------------------|
| `Person 1` <span style="color:red;">*</span> | Person 1, die mit Person 2 den Ehevertrag schließen möchte | Raphanus-Sativus |
| `Person 2` <span style="color:red;">*</span> | Person 2, die mit Person 1 den Ehevertrag schließen möchte | Turnip-Tales     |

### /marry

Mit diesem Command können zwei bereits verlobte Personen miteinander verheiratet werden.

**Syntax**: `/marry [Person 1] [Person 2]`

| Parameter                                    | Beschreibung                                       | Beispiel         |
|----------------------------------------------|----------------------------------------------------|------------------|
| `Person 1` <span style="color:red;">*</span> | Person 1, die mit Person 2 verheiratet werden soll | Raphanus-Sativus |
| `Person 2` <span style="color:red;">*</span> | Person 2, die mit Person 1 verheiratet werden soll | Turnip-Tales     |

## Verwaltung

### /givewaffenschein

Gibt einem Spieler einen Waffenschein.

**Syntax**: `/givewaffenschein [Person]`

| Parameter                                  | Beschreibung                                         | Beispiel         |
|--------------------------------------------|------------------------------------------------------|------------------|
| `Person` <span style="color:red;">*</span> | Person, dem ein Waffenschein ausgestellt werden soll | Raphanus-Sativus |

### /internswitch

Ermöglicht es einer Person (in einer Fraktion) die Fraktion zu wechseln. Der Wechsel kann nur zwischen Staatsfraktionen und nicht zwischen der Stadtverwaltung erfolgen.

**Syntax**: `/internswitch [Person] [Fraktion]`

| Parameter                                    | Beschreibung                             | Beispiel         |
|----------------------------------------------|------------------------------------------|------------------|
| `Person` <span style="color:red;">*</span>   | Person, die die Fraktion wechseln möchte | Raphanus-Sativus |
| `Fraktion` <span style="color:red;">*</span> | Fraktion, in die gewechselt werden soll  | Rettungsdienst   |

### /sellhouse

Mit diesem Command kann ein Haus an einen Spieler verkauft werden.

**Syntax**: `/sellhouse [Hausnummer] [Person] [Preis]`

| Parameter                                      | Beschreibung                       | Beispiel         |
|------------------------------------------------|------------------------------------|------------------|
| `Hausnummer` <span style="color:red;">*</span> | Hausnummer des Hauses              | 2                |
| `Person` <span style="color:red;">*</span>     | Person, die das Haus kaufen möchte | Raphanus-Sativus |
| `Preis` <span style="color:red;">*</span>      | Preis des Hauses                   | 10000            |

## Lagerhalle

!!! question ""
    Dieses Feature ist noch in der Entwicklung.

### /rentstorage

Mit diesem Command kann eine Person eine Lagerhalle mieten.

**Syntax**: `/rentstorage [Person] [Lagerhalle]`

| Parameter                                      | Beschreibung                                | Beispiel         |
|------------------------------------------------|---------------------------------------------|------------------|
| `Person` <span style="color:red;">*</span>     | Person, die eine Lagerhalle erwerben möchte | Raphanus-Sativus |
| `Lagerhalle` <span style="color:red;">*</span> | Lagerhalle                                  | -                |

### /unrentstorage

Mit diesem Command wird der Mietvertrag für eine Lagerhalle aufgelöst.

**Syntax**: `/unrentstorage [Lagerhalle]`

| Parameter                                      | Beschreibung | Beispiel |
|------------------------------------------------|--------------|----------|
| `Lagerhalle` <span style="color:red;">*</span> | Lagerhalle   | -        |
