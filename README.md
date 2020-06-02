# Grupparbete - AirBean

Joel Degerman
Fabian Berger
Mikael Sondel

https://github.com/JoelDegerman1999/airbean-api

Du ska bygga en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

**Figmaskiss:** https://www.figma.com/file/UeUGVefSdgio0sRxPFccJI/AirBean-v.1.0?node-id=0%3A1

## Instruktioner

### Arbetssätt
Arbetet ska ske enligt en komprimerad variant på scrum i 2st sprintar där varje spring är en dag. 
Varje sprint ska bestå av: 

* en sprintplanering med estimering och ska mynna ut i en sprintbacklog
* ett "daily scrum" i mitten där ni samlas och svarar på de tre frågorna
* en sprint review i slutet med ett demo
* en sprint retrospective

Varje sådant möte skall vara inspelat och lämnas in i ITHSDistans.

Skapa en trelloboard enligt templaten "Agile Sprint Board".


### Kravspecifikation

**För att få Godkänt ska ni:**
* Gjort enligt Figma skissen
* Är en single file application (SPA) med vue-router
* Använder sig av Vuex med en Vuex store
* Gå att lägga till produkter i en varukorg
* I varukorgen ändra antal/ta bort produkter
* Hämta alla produkter med fetch
* Kunna skicka sin order och få ett svar med en ETA och ordernummer

**För att Väl Godkänt ska ni:**
* Bygga ett API för applikationen
* Integrera API:et med SPAn
* Lägga till en profilsida där du kan skapa konto/logga in (enbart namn och email)
* Om man gör en beställning när man är inloggad ska ordern kopplas till den inloggade användaren
* Det ska även finnas en orderhistorik-sida där den inloggade användarens ordrar listas

**För att få stilpoäng ska ni:**
* Göra applikationen säkrare genom att lägga till lösenord på användaren
* Authentication ska ske med hjälp av JWT

Inlämning via ITHSDistans och Github med ert gruppnamn som repo-namn.

**Deadline:** 1/6 23:59
