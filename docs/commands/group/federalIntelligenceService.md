!!! note ""
    Diese Gruppierung hat Commands, die sie sich mit anderen Gruppierungen teilt. Diese Commands findest du [hier](crossgroup.md).

## Spionage

### /checkpalpay

Mit diesem Command können die PalPay-Transaktionen einer Person überwacht werden um illegale Vorgänge aufklären zu können.

**Syntax**: `/checkpalpay [Person]`

| Parameter | Beschreibung                         | Beispiel         |
|-----------|--------------------------------------|------------------|
| `Person`  | Person, die kontrolliert werden soll | Raphanus-Sativus |

### /locate

Mit diesem Command kann eine Person geortet werden. Die Ortung basiert auf dem nächstgelegenen Navi-Punkt. Im städtischen Raum ist somit eine Ortung genauer, da dort mehr Navi-Punkte existieren.

**Syntax**: `/locate [Person]`

| Parameter | Beschreibung                    | Beispiel         |
|-----------|---------------------------------|------------------|
| `Person`  | Person, die geortet werden soll | Raphanus-Sativus |

### /spycall

Mit diesem Command kann der Anruf zwischen zwei Personen mitgehört werden.

**Syntax**: `/spycall [Person]`

| Parameter | Beschreibung                                                              | Beispiel         |
|-----------|---------------------------------------------------------------------------|------------------|
| `Person`  | Person, dessen Telefonat (mit einer anderen Person) mitgehört werden soll | Raphanus-Sativus |

### /suspectlist

Mit diesem Command kann die Beobachtungsliste eingesehen (kein Parameter) und verwaltet werden.

**Syntax**: `/suspectlist (add|remove) (Person) (Grund)`

| Parameter      | Beschreibung                                                                                                       | Beispiel         |
|----------------|--------------------------------------------------------------------------------------------------------------------|------------------|
| `add` `remove` | `add` fügt eine Person auf die Beobachtungsliste hinzu<br/>`remove` entfernt eine Person von der Beobachtungsliste |                  |
| `Person`       | Person, die als verdächtiger auf die Beobachtungsliste gesetzt oder von der Beobachtungsliste entfernt werden soll | Raphanus-Sativus |
| `Grund`        | Grund, für den die Person auf die Beobachtungsliste gesetzt werden soll                                            |                  |

## Beweismittel

### /asservatenkammer

Für die Bürgermeisterwahl können Spieler als Kandidaten aufgestellt werden. Mit diesem Command kann ein neuer Spieler als Kandidat
hinzugefügt, entfernt oder die Liste aller Kandidaten angezeigt werden.

**Syntax**: `/asservatenkammer [drop|get|burn] [Droge] [Reinheit] (Menge)`

| Parameter                                             | Beschreibung                                                                                                                                                                                              | Beispiel |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `drop` `get` `burn` <span style="color:red;">*</span> | `drop` Legt illegale Substanzen in die Asservatenkammer<br/>`get` Nimmt illegale Substanzen aus der Asservatenkammer heraus<br/>`burn` Verbrennt Beweise und generiert dadurch Geld für die Fraktionsbank |          |
| `Droge` <span style="color:red;">*</span>             | Illegale Substanz, die eingelagert, entfernt oder verbrannt werden soll                                                                                                                                   | Pulver   |
| `Reinheit` <span style="color:red;">*</span>          | Reinheit der illegalen Substanz                                                                                                                                                                           | 1        |
| `Menge`                                               | Menge der illegalen Substanzen                                                                                                                                                                            | 50       |
