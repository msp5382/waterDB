const { PerformanceObserver, performance } = require('perf_hooks');
const fetch = require('node-fetch')
function postData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

let j = [
  {
    "_id": "5c3c92bd1944c739cf0ddcc9",
    "index": 0,
    "guid": "047b9a2d-3ccb-4382-9d50-6a8a07849519",
    "isActive": false,
    "balance": "$3,461.23",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Wiley Lynn",
    "gender": "male",
    "company": "ZIPAK",
    "email": "wileylynn@zipak.com",
    "phone": "+1 (900) 448-3009",
    "address": "626 Terrace Place, Edenburg, Maine, 1393",
    "about": "Deserunt esse amet velit nisi amet veniam sint fugiat reprehenderit irure sunt in aliqua nisi. Laborum irure sit pariatur aute commodo do dolore esse ad. Adipisicing ipsum ad ex sunt tempor velit nostrud sint cupidatat do. Tempor consequat excepteur nisi non anim laborum voluptate deserunt mollit sit exercitation dolor. Adipisicing labore deserunt labore minim incididunt minim sint velit aliqua sint reprehenderit sint qui nisi. Sunt officia culpa cupidatat ipsum duis incididunt ullamco elit magna. Irure exercitation aliquip aute officia commodo irure excepteur ea officia sit adipisicing ex adipisicing.\r\n",
    "registered": "2017-06-27T08:37:39 -07:00",
    "latitude": 87.579903,
    "longitude": -126.503947,
    "tags": [
      "aliquip",
      "enim",
      "consectetur",
      "cillum",
      "occaecat",
      "quis",
      "aliquip"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Sargent Perkins"
      },
      {
        "id": 1,
        "name": "Hernandez Vang"
      },
      {
        "id": 2,
        "name": "Delia Vaughan"
      }
    ],
    "greeting": "Hello, Wiley Lynn! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c3c92bd560da6fc4af9b6c5",
    "index": 1,
    "guid": "b848ce3b-113e-4d94-a287-da2ecde1720d",
    "isActive": false,
    "balance": "$2,640.04",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "green",
    "name": "Angela Hill",
    "gender": "female",
    "company": "PUSHCART",
    "email": "angelahill@pushcart.com",
    "phone": "+1 (961) 483-2208",
    "address": "771 Strickland Avenue, Sparkill, North Dakota, 2922",
    "about": "Magna aliquip anim sit ea est cupidatat eiusmod id est occaecat fugiat. Officia minim cillum eu duis deserunt veniam. Minim et culpa do cillum in ea. Pariatur eiusmod eu sit laboris culpa occaecat eu consequat occaecat Lorem deserunt consectetur anim qui. Magna mollit est veniam nulla laboris. Nulla consectetur eu tempor incididunt irure irure amet culpa cupidatat culpa cillum eu sunt minim. Id Lorem nisi deserunt eu aliqua minim fugiat veniam exercitation tempor aliquip.\r\n",
    "registered": "2016-08-29T03:07:04 -07:00",
    "latitude": 73.579975,
    "longitude": -174.886191,
    "tags": [
      "fugiat",
      "in",
      "anim",
      "reprehenderit",
      "ad",
      "in",
      "nisi"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Flora Hardy"
      },
      {
        "id": 1,
        "name": "Rosa Brewer"
      },
      {
        "id": 2,
        "name": "Colon Forbes"
      }
    ],
    "greeting": "Hello, Angela Hill! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c3c92bd2a9b15356a6a0c32",
    "index": 2,
    "guid": "bb22cb96-bf0a-45c5-861f-cd62e17b5ab1",
    "isActive": false,
    "balance": "$2,430.28",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": "Dickerson Slater",
    "gender": "male",
    "company": "BIZMATIC",
    "email": "dickersonslater@bizmatic.com",
    "phone": "+1 (933) 536-3263",
    "address": "856 Guider Avenue, Robinette, Guam, 9563",
    "about": "Laborum aliqua velit aliqua qui culpa aliqua in adipisicing cillum. Ex aliqua proident do ex ullamco culpa incididunt. Magna do quis aliquip eu excepteur commodo exercitation mollit consequat cillum fugiat irure eu. Exercitation tempor deserunt nostrud enim enim. Exercitation velit laboris amet officia consequat ut esse Lorem anim commodo cupidatat esse.\r\n",
    "registered": "2016-08-27T12:33:38 -07:00",
    "latitude": -41.150095,
    "longitude": 89.998862,
    "tags": [
      "anim",
      "cupidatat",
      "exercitation",
      "irure",
      "Lorem",
      "commodo",
      "eiusmod"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Acosta Hurley"
      },
      {
        "id": 1,
        "name": "Knight Gomez"
      },
      {
        "id": 2,
        "name": "Margie Bray"
      }
    ],
    "greeting": "Hello, Dickerson Slater! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c3c92bd2d07e0912c6d4700",
    "index": 3,
    "guid": "6d3acad5-3194-45b9-a658-0348dfcefdef",
    "isActive": true,
    "balance": "$1,786.63",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": "Dee Mcmillan",
    "gender": "female",
    "company": "NIPAZ",
    "email": "deemcmillan@nipaz.com",
    "phone": "+1 (880) 508-2855",
    "address": "797 Herkimer Court, Deputy, Wyoming, 3554",
    "about": "Magna ut ullamco dolor culpa excepteur quis laboris id. Proident ipsum ullamco voluptate laborum labore esse voluptate duis. Laboris elit labore dolore elit eu ad enim veniam in non voluptate magna ullamco. Sit adipisicing et id enim Lorem reprehenderit. Do nisi sit magna ut aliquip voluptate anim ipsum aute. Cillum reprehenderit mollit consequat laboris reprehenderit adipisicing mollit qui eiusmod occaecat nisi. Elit aute enim eu incididunt id velit sunt aliquip.\r\n",
    "registered": "2015-11-29T10:57:10 -07:00",
    "latitude": -81.29895,
    "longitude": 6.145988,
    "tags": [
      "magna",
      "deserunt",
      "nostrud",
      "fugiat",
      "culpa",
      "pariatur",
      "ullamco"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hobbs Burke"
      },
      {
        "id": 1,
        "name": "Staci Potter"
      },
      {
        "id": 2,
        "name": "Lakisha Guerra"
      }
    ],
    "greeting": "Hello, Dee Mcmillan! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c3c92bd0c3bcf80314a0da5",
    "index": 4,
    "guid": "6c082bd2-da70-4c00-89e7-a58e3ba612b1",
    "isActive": false,
    "balance": "$3,250.80",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": "Henderson Chandler",
    "gender": "male",
    "company": "KATAKANA",
    "email": "hendersonchandler@katakana.com",
    "phone": "+1 (961) 540-3017",
    "address": "967 Caton Place, Somerset, Massachusetts, 8912",
    "about": "Proident aliqua quis id ullamco. Cillum adipisicing Lorem ut ullamco anim officia labore. Officia anim sunt veniam proident in aute exercitation non nulla amet incididunt veniam. Consectetur laboris elit deserunt minim aliqua sint ipsum. Sint esse in ex in officia elit amet consequat. In et ad reprehenderit cillum elit. Incididunt consectetur velit nisi duis sint et anim in.\r\n",
    "registered": "2018-03-05T12:08:19 -07:00",
    "latitude": -62.3971,
    "longitude": -28.999762,
    "tags": [
      "incididunt",
      "reprehenderit",
      "sit",
      "exercitation",
      "non",
      "eiusmod",
      "magna"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Deana Trujillo"
      },
      {
        "id": 1,
        "name": "Glass Gilbert"
      },
      {
        "id": 2,
        "name": "Oneil Rogers"
      }
    ],
    "greeting": "Hello, Henderson Chandler! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c3c92bd6ae21f07ba8e5b3c",
    "index": 5,
    "guid": "15651cb3-347a-4c66-98b4-37790f0a400a",
    "isActive": false,
    "balance": "$2,840.73",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Alvarado Wooten",
    "gender": "male",
    "company": "AUTOGRATE",
    "email": "alvaradowooten@autograte.com",
    "phone": "+1 (899) 430-3239",
    "address": "582 Doughty Street, Dyckesville, Kentucky, 8598",
    "about": "Pariatur ut sit esse dolore ut elit ea. Ullamco ullamco do nulla cillum labore. Commodo voluptate consectetur dolore duis cupidatat esse dolor sunt eiusmod amet sit velit consequat. Est minim aute irure qui eu enim cupidatat velit. Cillum deserunt ullamco voluptate amet aliqua sint cillum aute. Deserunt voluptate mollit duis cupidatat esse mollit labore esse aliquip elit. Ea ea nisi reprehenderit dolore adipisicing nostrud proident minim elit sunt.\r\n",
    "registered": "2014-05-30T02:03:38 -07:00",
    "latitude": -45.756517,
    "longitude": -32.872886,
    "tags": [
      "do",
      "sit",
      "nulla",
      "cillum",
      "duis",
      "est",
      "sit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Tia Fleming"
      },
      {
        "id": 1,
        "name": "Alba Coffey"
      },
      {
        "id": 2,
        "name": "Jeannine Justice"
      }
    ],
    "greeting": "Hello, Alvarado Wooten! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c3c92bd0f2729f97b6c090b",
    "index": 6,
    "guid": "8e8daf19-d6ec-4d67-adbf-49a79687a025",
    "isActive": false,
    "balance": "$3,041.63",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Williamson Brennan",
    "gender": "male",
    "company": "AQUAMATE",
    "email": "williamsonbrennan@aquamate.com",
    "phone": "+1 (946) 439-2485",
    "address": "723 Noll Street, Klondike, Idaho, 366",
    "about": "Labore irure cillum aute id cupidatat nisi fugiat nostrud ad do eu. Incididunt incididunt enim occaecat sunt ea eiusmod aute dolor magna ex ea elit laborum. Ea fugiat Lorem anim in nulla.\r\n",
    "registered": "2017-07-04T05:56:26 -07:00",
    "latitude": 74.578112,
    "longitude": -110.18822,
    "tags": [
      "ea",
      "pariatur",
      "amet",
      "sint",
      "pariatur",
      "minim",
      "in"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Tucker Roberts"
      },
      {
        "id": 1,
        "name": "Pope Durham"
      },
      {
        "id": 2,
        "name": "Marquez Cunningham"
      }
    ],
    "greeting": "Hello, Williamson Brennan! You have 9 unread messages.",
    "favoriteFruit": "apple"
  }
]

j = {
  path:"/",
  content:j
}
let s = performance.now()
let e;
postData(`http://localhost:5500/set`, j)
  .then(data => {
    console.log(JSON.stringify(data))
     e = performance.now()
     console.log(e-s)}) // JSON-string from `response.json()` call
  .catch(error => console.error(error));


console.log(e-s)
console.log()