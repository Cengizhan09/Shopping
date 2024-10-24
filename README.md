# SINUS Webshop

## Arbetssätt
Samla era erfarenheter från Kanban, Scrum och diskussionerna av Modern Agile och kom överens i 
gruppen om vilka delar och hur ni ska inkorporera detta i ert arbete. 
Dokumentera vad ni kommer överens om i README.md i ert repository.

Arbetssättet som tänkts användas är inspirerat av agila metoder. Varje morgon har vi ett möte som innehåller code reviews och en allmän uppdatering på hur vi ligger till i tidsplanen. Varje eftermiddag har vi en kort show-and-tell där vi visar upp vad vi gjort under dagen. Features är definierade efter vad användarna behöver. På github skapas en develop branch och utifrån den skapas en egen branch för specifika features.

För att dokumentera och strukturera arbetet används webbappen Trello. I Trello har arbetet strukturerats på följande vis i kolumner. 
		
Features
*	Korten i denna kolumn beskriver övergripande vad produkten innehåller
*	Dessa refereras till i resten av projektet

Backlog
*	Här bryts Features ned till vyer och komponenter som kan arbetas på självständigt
*	Korten i backlog innehåller en lista med dependencies (vilka andra komponenter som påverkas av eller påverkar vald komponent)
*	Korten i backlog innehåller en lista med Dod (definitions of done)
*	Dependencies som måste vara klara innan en komponent börjar utvecklas är markerade med en varningsskylt (emoji)

Todo
*	Här ligger kort som bryts ut från dependencies eller komponenter i Backlog-korten
*	I korten ligger en lista med Dod som kopieras från Backlog-kortet
*	Korten i denna kolumn färgkodas för att kopplas till motsvarande Backlog-kort

Doing
*	Hit flyttas korten från Todo-kolumnen som arbetas med för tillfället

Testing
*	När ett kort är färdigt flyttas det hit för att testas

Review
*	Hit flyttas ett färdigtestat kort för att utvärderas av samtliga inom teamet

Done
*	Hit flyttas helt färdiga kort


## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd. Se `SINUS Webshop - REST API` nedan för mer information.

Inom gruppen har ni en uppsättning mockups från UI-kursen i höstas, välj en av dessa mockups att utgå ifrån.
Om ni inte kommer överens om vilken ni ska använda så får ni be läraren om en annan.

Skapa en trello board och bjud alla i gruppen, inkl läraren.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin (VG-krav)

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär.
En order kan genomföras som anonym användare.

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik.

### Inloggad Admin (VG-krav)
Det ska finnas en `Admin Area`-view med ett CRUD-gränssnitt för alla produkter.

### Övriga Views och Features
* En view för produktlista
* En view utcheckning med formulär för kontaktinfo och betalinfo, fylls i automagiskt om man är inloggad
* modal för enstaka produkt
* Modal för kundkorg
* Modal för inloggningsformulär

# SINUS Webshop - REST API

## Getting Started

1. `cd backend`
2. Install dependencies `npm install`
3. Start the server `npm run start`

## EndPoint Specifikation

| Resurs | Metod | Detaljer | Request Body |
| ------ | ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. | {"email": "...", "password" : "..."} |
| /api/register/ | POST | Registrerar en användare. | Se User-modellen |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. | ❌ | 
| /api/products/:id | GET | Returnerar en enstaka produkt. | ❌ |
| /api/products/ | POST | Skapar en ny produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | PATCH | Uppdaterar produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins | ❌ |
| /api/orders | GET | Returnerar en lista på den användarens ordrar eller samtliga ordrar för admins. | ❌ |
| /api/orders | POST | Skapar en ny order | Se Order-modellen |
| /api/me | GET | Hämtar den inloggade användren | ❌ |
| /api/me | PATCH | Uppdaterar profilen för den inloggade användren | Se User-modellen |

### Datamodeller

#### Product

##### Request Body
```javascript
 {
  "title": 'Gretas Fury',
  "price": 999,
  "shortDesc": 'Unisex',
  "longDesc": 'Skate ipsum dolor sit amet...',
  "imgFile": 'skateboard-greta.png'
} 
```

##### Document Model
```javascript
 {
  _id: '39y7gbbZk1u4ABnv', // generated serverside
  title: 'Gretas Fury',
  price: 999,
  shortDesc: 'Unisex',
  longDesc: 'Skate ipsum dolor sit amet...',
  imgFile: 'skateboard-greta.png' // Asset logic on clientside
} 
```

#### Order
##### Request Body
```js
{
  "items": ["productId1", "productId1", "productId2"]
}
```

##### Document Model
```javascript
 {
  _id: 123,
  timeStamp: Date.now(), 
  status: 'inProcess',
  items: [ 
    {
      title: "Tricky",
      price: 799,
      imgFile: "skateboard-generic.png",
      _id: "9E6KXMIdRglW0wbL",
      amount: 2
    }, 
    {
      <etc>
    }, 
    ... 
  ],
  orderValue: 999
} 
```

#### User

##### Request Body
```js
{
  "email": 'greta.thunberg@example.se',
  "password": 'grillkorv123',
  "name": 'Johan Kivi',

  "address": {
    "street": 'Tokitokvägen 3',
    "zip": '123 45',
    "city": 'Tokberga'
  }
} 
```

##### Document Model

```javascript
{
  _id: '6b521d3f-3d15...' // generated server side
  email: 'johan.kivi@zocom.se',
  password: '$$$hashed password$$$', // hashed serverside
  name: 'Johan Kivi',
  role: 'admin', // or customer
  address: {
    street: 'Tokitokvägen 3',
      zip: '123 45',
      city: 'Tokberga'
  },
  orderHistory: [ <orderId1>, <orderId2>, ... ]
} 
```

## Bedömningskritierer

### Godkänt

* State management i Vuex
* Vue Router för navigation
* Demonstrera komponenter, props, emits, data, computed, events
* API-abstraktion till egen modul
* Tydlig feature breakdown i Trello
* Dokumenterat agilt arbetssätt i README
* Inlämnad utvärdering i slutet


### Väl godkänt
* {...godkänt}
* Admin-view för CRUD av produkter
# Shopping
