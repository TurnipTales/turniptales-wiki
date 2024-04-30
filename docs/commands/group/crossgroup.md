### /dienstwagen

Mit diesem Command kann ein Dienstwagen an eine Person gegeben oder von einer Person wieder genommen werden. Wenn kein Parameter angegeben wird, wird eine Liste der Dienstwagen angezeigt.

**Syntax**: `/dienstwagen (give|take) (Person)`

| Parameter     | Beschreibung                                                                                          | Beispiel         |
|---------------|-------------------------------------------------------------------------------------------------------|------------------|
| `give` `take` | `give` Gibt einem Spieler einen Dienstwagen<br/>`take` Nimmt von einem Spieler den Dienstwagen zurück |                  |
| `Person`      | Aktueller oder zukünftiger Dienstwagen-Besitzer                                                       | Raphanus-Sativus |

### /duty

Mit diesem Command können Spieler in den Duty-Modus wechseln. Sobald ein Spieler im Dienst ist, wird dieser farblich in der Spieler-Liste angezeigt und kann fraktionsinterne Funktionen nutzen.

**Syntax**: `/duty`

### /equip

Mit diesem Command kann ein Spieler mit Ausrüstung ausgestattet werden. Dafür muss der Spieler am Equip-Punkt der Fraktion sein. Für die Fraktion fallen Kosten an, die je nach Fraktion von den Membern zurückverlangt werden können.

**Syntax**: `/equip`

### /equiplog

Mit diesem Command kann das Equip-Log eingesehen werden. Das Equip-Log zeigt an, wer wann welche Ausrüstung erhalten hat.

**Syntax**: `/equiplog (clear)`

| Parameter | Beschreibung        | Beispiel |
|-----------|---------------------|----------|
| `clear`   | Leert den Equip-Log |          |

### /küche

Wie in einem Haus kann mit diesem Command am Equip-Punkt der Fraktion auf die Küche zugegriffen werden.

**Syntax**: `/küche`

### /subfaction

Mit diesem Command kann die Subfraktion verwaltet werden. Aktuell haben nur der Bundesnachrichtendienst, die Polizei und der Rettungsdienst eine Subfraktion.

**Syntax**: `/subfaction [subfrakinvite|subfrakuninvite] [Spieler]`

| Parameter                                                           | Beschreibung                                                                                                              | Beispiel  |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-----------|
| `subfrakinvite` `subfrakuninvite` <span style="color:red;">*</span> | `subfrakinvite` Fügt einen Spieler zur Subfraktion hinzu<br/>`subfrakuninvite` Entfernt einen Spieler aus der Subfraktion |           |
| `Spieler` <span style="color:red;">*</span>                         | Spieler, der in die Subfraktion hinzugefügt oder aus der Subfraktion entfernt werden soll                                 | RettichLP |

### /unequip

Mit diesem Command kann Ausrüstung an die Fraktion zurückgegeben werden.

**Syntax**: `/unequip [Equip]`

| Parameter                                 | Beschreibung                         | Beispiel     |
|-------------------------------------------|--------------------------------------|--------------|
| `Equip` <span style="color:red;">*</span> | Equip, das zurückgegeben werden soll | Handschellen |







