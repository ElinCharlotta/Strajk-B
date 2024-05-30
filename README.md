User Story 1: Boka datum och tid för banor
Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera en eller flera banor i bowlinghallen.


Acceptanskriterier:
Användaren kan välja ett datum från en kalender.

Användaren kan välja en tid för bokningen.

Användaren kan ange antalet spelare för bokningen.

Användaren kan välja en eller flera banor.

Kontrollera att input fälten för datum, tid, antal spelare och banor renderas korrekt.



User Story 2: Välj skostorlek för varje spelare
Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.


Acceptanskriterier:
Användaren kan skriva in skostorlek i fältet för varje spelare.

Användaren ska kunna lägga till fler skostorleksfält genom att klicka på en "Lägg till skor" knapp.

Kontrollera att ett nytt skostorleksfält renderas när man klickar på "Lägg till skor".



User Story 3: Ta bort skostorleksfält

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte bokar skor i onödan.



Acceptanskriterier:
Användaren kan ta bort ett skostorleksfält genom att klicka på en "Ta bort" knapp bredvid fältet.

Kontrollera att skostorleksfältet inte längre visas efter att det har tagits bort.

User Story 4: Skicka iväg bokningsförfrågan och få tillbaka bokningsnummer och totalsumma
Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr/person + 100 kr/bana).

Acceptanskriterier:
Användaren kan skicka iväg bokningsförfrågan genom att klicka på en "Skicka bokning" knapp.

Kontrollera att bokningsförfrågan skickas med korrekta värden till API.

Kontrollera att användaren omdirigeras till en bekräftelsesida ("See you soon") efter att bokningen skickats.

Efter att bokningen har skickats, ska ett bokningsnummer visas.
Kontrollera att den totala summan som visas är korrekt beräknad (120 kr/person + 100 kr/bana).



User Story 5: Navigera tillbaka till bokningsvyn efter bekräftelse
Som användare vill jag kunna navigera tillbaka till bokningsvyn efter att ha fått en bokningsbekräftelse.
s
Acceptanskriterier:
Användaren kan navigera tillbaka till bokningsvyn genom att klicka på en "Sweet, Let’s go" knapp.

Bekräfta att användaren navigeras tillbaka till bokningsvyn efter att ha klickat på knappen.
Felmeddelanden:

Vid tomma fält:
Om användaren försöker skicka iväg en bokning utan att fylla i alla obligatoriska fält, ska ett felmeddelande visas när man klickar på "Skicka bokning".

Vid otillräckligt antal skor:
Om antalet valda skostorlekar inte matchar antalet spelare som bokats, ska ett felmeddelande visas när man klickar på "Skicka bokning".

Vid ogiltigt antal spelare per bana:
Om antalet spelare överskrider 4 per bana, ska ett felmeddelande visas när man klickar på "Skicka bokning".




