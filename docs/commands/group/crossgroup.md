## Chat

### /alliance

Dieser Command ermöglicht die Kommunikation im Bündnis-Chat. Dieser Chat ist zwischen dem Bundesnachrichtendienst, der Polizei und des Rettungsdienstes.

**Syntax**: `/alliance [Nachricht]`

**Aliase**: `/d`

| Parameter                                     | Beschreibung                                                | Beispiel |
|-----------------------------------------------|-------------------------------------------------------------|----------|
| `Nachricht` <span style="color:red;">*</span> | Die Nachricht, die in den Bündnis-Chat gesendet werden soll |          |

### /groupchat

Dieser Command ermöglicht die Kommunikation im Gruppierungs-Chat.

**Syntax**: `/groupchat [Nachricht]`

**Aliase**: `/g` `/f` `/c`

| Parameter                                     | Beschreibung                                                     | Beispiel |
|-----------------------------------------------|------------------------------------------------------------------|----------|
| `Nachricht` <span style="color:red;">*</span> | Die Nachricht, die in den Gruppierungs-Chat gesendet werden soll |          |

## Wanted-Punkte

### /wanted

Mit diesem Command können die Wanted-Punkte einer oder mehrerer Spieler gesetzt werden.

**Syntax**: `/wanted [Spieler...] [Fahndungsgrund]`

**Aliase**: `/su` `/asu`

| Parameter                                          | Beschreibung                                                                                   | Beispiel              |
|----------------------------------------------------|------------------------------------------------------------------------------------------------|-----------------------|
| `Spieler...` <span style="color:red;">*</span>     | Spieler (optional mehrere mit Leerzeichen getrennt), deren Wanted-Punkte gesetzt werden sollen | RettichLP TurnipTales |
| `Fahndungsgrund` <span style="color:red;">*</span> | Fahndungsgrund der gesetzt werden soll                                                         | Amtsanmaßung          |

### /wantedinfo

Mit diesem Command werden die Wanted-Punkte eines Spielers angezeigt.

**Syntax**: `/wantedinfo [Spieler]`

| Parameter                                   | Beschreibung                                          | Beispiel  |
|---------------------------------------------|-------------------------------------------------------|-----------|
| `Spieler` <span style="color:red;">*</span> | Spieler, dessen Wanted-Punkte angezeigt werden sollen | RettichLP |

### /wantedlist

Mit diesem Command werden alle Spieler mit Wanted-Punkten und deren Wanted-Punkte angezeigt.

**Syntax**: `/wantedlist`

### /clear

Mit diesem Command können die Wanted-Punkte einer oder mehrerer Spieler wieder entfernt werden.

**Syntax**: `/clear [Spieler...]`

| Parameter                                      | Beschreibung                                                                                    | Beispiel              |
|------------------------------------------------|-------------------------------------------------------------------------------------------------|-----------------------|
| `Spieler...` <span style="color:red;">*</span> | Spieler (optional mehrere mit Leerzeichen getrennt), deren Wanted-Punkte entfernt werden sollen | RettichLP TurnipTales |

### /modifywanteds

Mit diesem Command können die Wanted-Punkte einer oder mehrerer Spieler bearbeitet werden.

**Syntax**: `/modifywanteds [Spieler...] [add|remove] [Fahndungsgrund|Modifier]`

**Aliase**: `/mw`

| Parameter                                                     | Beschreibung                                                                                                                               | Beispiel                  |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| `Spieler...` <span style="color:red;">*</span>                | Spieler (optional mehrere mit Leerzeichen getrennt), deren Wanted-Punkte bearbeitet werden sollen                                          | RettichLP TurnipTales     |
| `add` `remove` <span style="color:red;">*</span>              | `add` fügt einen Fahndungsgrund oder Modifier hinzu<br/>`remove` entfernt einen Fahndungsgrund oder Modifier                               |                           |
| `Fahndungsgrund` `Modifier` <span style="color:red;">*</span> | `Fahndungsrund` Fahndungsgrund der hinzugefügt oder entfernt werden soll<br/>`Modifier` Modifier der hinzugefügt oder entfernt werden soll | Amtsanmaßung _oder_ -da10 |

### /wantedreason

Mit diesem Command können die Fahndungsgründe bearbeitet werden.

**Syntax**: `/wantedreason [add|remove|edit] [Fahndungsgrund] (Wanted-Punkte)`

| Parameter                                               | Beschreibung                                                                                                                        | Beispiel     |
|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------|
| `add` `remove` `edit` <span style="color:red;">*</span> | `add` fügt einen neuen Fahndungsgrund hinzu<br/>`remove` entfernt einen Fahndungsgrund<br/>`edit` überarbeitet einen Fahndungsgrund |              |
| `Fahndungsgrund` <span style="color:red;">*</span>      | Name des Fahndungsgrunds                                                                                                            | Amtsanmaßung |
| `Wanted-Punkte`                                         | Anzahl der Wanted-Punkte                                                                                                            | 20           |

## Equip

### /equip

Mit diesem Command kann ein Spieler mit Ausrüstung ausgestattet werden. Dafür muss der Spieler am Equip-Punkt der Fraktion sein. Für die Fraktion fallen Kosten an, die je nach Fraktion von den Membern zurückverlangt werden können.

**Syntax**: `/equip`

### /unequip

Mit diesem Command kann Ausrüstung an die Fraktion zurückgegeben werden.

**Syntax**: `/unequip [Equip]`

| Parameter                                 | Beschreibung                         | Beispiel     |
|-------------------------------------------|--------------------------------------|--------------|
| `Equip` <span style="color:red;">*</span> | Equip, das zurückgegeben werden soll | Handschellen |

### /equiplog

Mit diesem Command kann das Equip-Log eingesehen werden. Das Equip-Log zeigt an, wer wann welche Ausrüstung erhalten hat.

**Syntax**: `/equiplog (clear)`

| Parameter | Beschreibung        | Beispiel |
|-----------|---------------------|----------|
| `clear`   | Leert den Equip-Log |          |

## Subfraktion

### /subfaction

Mit diesem Command kann die Subfraktion verwaltet werden. Aktuell haben nur der Bundesnachrichtendienst, die Polizei und der Rettungsdienst eine Subfraktion.

**Syntax**: `/subfaction [subfrakinvite|subfrakuninvite] [Spieler]`

| Parameter                                                           | Beschreibung                                                                                                              | Beispiel  |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-----------|
| `subfrakinvite` `subfrakuninvite` <span style="color:red;">*</span> | `subfrakinvite` Fügt einen Spieler zur Subfraktion hinzu<br/>`subfrakuninvite` Entfernt einen Spieler aus der Subfraktion |           |
| `Spieler` <span style="color:red;">*</span>                         | Spieler, der in die Subfraktion hinzugefügt oder aus der Subfraktion entfernt werden soll                                 | RettichLP |

### /subfactionchat

Dieser Command ermöglicht die Kommunikation im Subfraktions-Chat.

**Syntax**: `/subfactionchat [Nachricht]`

**Aliase**: `/sf`

| Parameter                                     | Beschreibung                                                     | Beispiel |
|-----------------------------------------------|------------------------------------------------------------------|----------|
| `Nachricht` <span style="color:red;">*</span> | Die Nachricht, die in den Subfraktions-Chat gesendet werden soll |          |

### /subfactionname

Dieser Command legt den Namen des Rangs der Subfraktion fest.

**Syntax**: `/subfactionname [Name]`

| Parameter                                | Beschreibung         | Beispiel              |
|------------------------------------------|----------------------|-----------------------|
| `Name` <span style="color:red;">*</span> | Name der Subfraktion | Feuerwehr _oder_ SWAT |

## HQ

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

### /küche

Wie in einem Haus kann mit diesem Command am Equip-Punkt der Fraktion auf die Küche zugegriffen werden.

**Syntax**: `/küche`

## Sonstiges

### /gov

Mit diesem Command kann eine Nachricht als Broadcast/Staatsmeldung an alle Spieler gesendet werden.

**Syntax**: `/gov [Nachricht]`

| Parameter   | Beschreibung                                        | Beispiel |
|-------------|-----------------------------------------------------|----------|
| `Nachricht` | Nachricht, die an alle Spieler gesendet werden soll |          |
