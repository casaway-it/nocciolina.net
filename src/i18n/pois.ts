// Shared POI directory. Names and map URLs are language-neutral;
// per-locale notes and category titles live in src/i18n/content/<locale>.ts
// keyed by `id`.

export type PoiRef = { id: string; name: string; url: string };
export type PoiCategoryRef = { id: string; pois: PoiRef[] };

export const poiCategories: PoiCategoryRef[] = [
  {
    id: "restaurants",
    pois: [
      { id: "i-rebbi", name: "Osteria I Rebbi", url: "https://www.google.com/maps/place/Osteria+I+Rebbi/data=!4m2!3m1!1s0x12d2baae4d359f5d:0x6f485b43c7c227a8" },
      { id: "da-davide", name: "Agriturismo Da Davide", url: "https://www.google.com/maps/place/Agriturismo+Da+Davide/data=!4m2!3m1!1s0x12d2bbb582f0e5f3:0x37241a62bc698903" },
      { id: "giro-di-vite", name: "Osteria Giro Di Vite", url: "https://www.google.com/maps/place/Osteria+Giro+Di+Vite/data=!4m2!3m1!1s0x12d2a57f352feb1f:0xe4feca581773cbbb" },
      { id: "angolo-rosina", name: "L'Angolo di Rosina", url: "https://www.google.com/maps/place/L'Angolo+di+Rosina/data=!4m2!3m1!1s0x12d2af90be6b8c61:0x705b6f7265bdb3b1" },
      { id: "verso-ghiottone", name: "Il Verso del Ghiottone", url: "https://www.google.com/maps/place/Il+Verso+del+Ghiottone/data=!4m2!3m1!1s0x12d2a4d00dd154ab:0xe12bfa64c4d1febd" },
      { id: "il-torchio", name: "Osteria Vineria Il Torchio", url: "https://www.google.com/maps/place/Osteria+Vineria+Il+Torchio/data=!4m2!3m1!1s0x12d2a4c556ea4d3d:0x2ab9fa431a247bd0" },
      { id: "tantovale", name: "TantoVale Osteria, Pizzeria", url: "https://www.google.com/maps/place/TantoVale+Osteria,+Pizzeria/data=!4m2!3m1!1s0x12d2bb8502d2d79b:0xca4e1dbc0fc8bb43" },
      { id: "frabea", name: "Osteria Frabea", url: "https://www.google.com/maps/place/Osteria+pizzeria+frabea/data=!4m2!3m1!1s0x12d2b19b1c30f18b:0x694ce6f45dcf2491" },
      { id: "il-faro", name: "Pizzeria Il Faro di Peloso Giovanni", url: "https://www.google.com/maps/place/Pizzeria+Il+Faro+di+Peloso+Giovanni/data=!4m2!3m1!1s0x12d2a4d5d21be893:0xccfd02fe86975b58" },
      { id: "la-lanterna", name: "Pizzeria La Lanterna", url: "https://www.google.com/maps/place/Pizzeria+La+Lanterna/data=!4m2!3m1!1s0x12d2a4daaa0e3339:0xd41fe9637897eeb5" },
      { id: "insolito", name: "Bar Circolo l'insolito", url: "https://www.google.com/maps/place/Bar+Circolo+l%E2%80%99insolito/data=!4m2!3m1!1s0x12d2bb00220049c9:0xcd6ffb0157a57b33" },
    ],
  },
  {
    id: "wineries",
    pois: [
      { id: "ratti", name: "Cantina Ratti", url: "https://www.google.com/maps/place/Cantina+Ratti/data=!4m2!3m1!1s0x12d2ae1c6c202365:0x31823b7eec2ba412" },
      { id: "ceretto", name: "Ceretto", url: "https://www.google.com/maps/place/Ceretto+-+Visit/data=!4m2!3m1!1s0x12d2b2445e8f227d:0xdc4c7ce39d53c44f" },
      { id: "einaudi", name: "Poderi Luigi Einaudi", url: "https://www.google.com/maps/place/Poderi+Luigi+Einaudi+Azienda+Agricola+Srl/data=!4m2!3m1!1s0x12d2a4bb95a84115:0x449ed733a56c0ca0" },
      { id: "astemia", name: "L'Astemia Pentita", url: "https://www.google.com/maps/place/L'%E2%80%99Astemia+Pentita/data=!4m2!3m1!1s0x12d2ae214c5971cf:0x74456d05e2400a04" },
      { id: "vinicola23", name: "Vinicola23", url: "https://www.google.com/maps/place/Vinicola23/data=!4m2!3m1!1s0x12d2a5d272aba27d:0xcad159e0876611cb" },
      { id: "barolo-bar", name: "Barolo Bar", url: "https://www.google.com/maps/place/Barolo+Bar/data=!4m2!3m1!1s0x12d2b01ace95aa27:0xdd476ddc737352bf" },
      { id: "rivetto", name: "Az. Agr. Alessandro Rivetto", url: "https://www.google.com/maps/place/Az.+Agr.+Alessandro+Rivetto/data=!4m2!3m1!1s0x12d2ae1c9ab79ddd:0x7f55cce854a66995" },
    ],
  },
  {
    id: "food",
    pois: [
      { id: "albero-galline", name: "L'Albero delle Galline", url: "https://www.google.com/maps/place/L'Albero+delle+Galline/data=!4m2!3m1!1s0x12cd595a79103481:0x31d1c3ca647ae164" },
      { id: "precis", name: "Précis pastrygelateria", url: "https://www.google.com/maps/place/Pr%C3%A9cis+pastrygelateria/data=!4m2!3m1!1s0x12d2b1d55c1e1231:0x54c293e5425ea895" },
      { id: "cremeria-fontana", name: "Cremeria La Fontana", url: "https://www.google.com/maps/place/Cremeria+La+Fontana+Di+Pellegrino+Alessandra+%26+C.+Snc/data=!4m2!3m1!1s0x12d2a4880dc79e97:0x18c3ad6ff3ad21fd" },
      { id: "macelleria-doglianese", name: "Macelleria Doglianese", url: "https://www.google.com/maps/place/Macelleria+Doglianese/data=!4m2!3m1!1s0x12d2a4d0bd359901:0x67ec102929ced23f" },
      { id: "tastelanghe", name: "TASTELANGHE", url: "https://www.google.com/maps/place/TASTELANGHE+Azienda+Agricola+Quazzo+Paolo/data=!4m2!3m1!1s0x12d2bb76854bf1df:0x5102d0c1bac1930d" },
      { id: "mercato", name: "Mercatò", url: "https://www.google.com/maps/place/Mercat%C3%B2/data=!4m2!3m1!1s0x12d2a4de666d40f7:0x44ce00dabb184170" },
    ],
  },
  {
    id: "sights",
    pois: [
      { id: "bossolasco", name: "Bossolasco", url: "https://www.google.com/maps/place/Bossolasco/data=!4m2!3m1!1s0x12d2b97f0e4b8f03:0x63e971e3c2b2d89b" },
      { id: "castiglione-falletto", name: "Castiglione Falletto", url: "https://www.google.com/maps/place/Castiglione+Falletto/data=!4m2!3m1!1s0x12d2b1c6ac329fd5:0xf3b79fb229d03f0e" },
      { id: "bench-niella", name: "Big Bench Niella Belbo", url: "https://www.google.com/maps/place/Big+Bench+Niella+Belbo/data=!4m2!3m1!1s0x12d2b8fb414ae709:0xc8f1d4e49e23ae53" },
      { id: "parco-safari", name: "Parco Safari delle Langhe", url: "https://www.google.com/maps/place/Parco+Safari+delle+Langhe/data=!4m2!3m1!1s0x12d2bc08485976e5:0xd18db45edd6f6671" },
      { id: "resistenza", name: "Monumento alla Resistenza", url: "https://www.google.com/maps/place/Monumento+alla+Resistenza/data=!4m2!3m1!1s0x12d2ba491114570f:0x864408fb93674c90" },
      { id: "madonna-neve", name: "Chiesa della Madonna della Neve", url: "https://www.google.com/maps/place/Chiesa+della+Madonna+della+Neve/data=!4m2!3m1!1s0x12d2bbdc455c4357:0xc9731b22ccfd032" },
      { id: "parco-rose", name: "Park of the Roses — Bossolasco", url: "https://www.google.com/maps/search/?api=1&query=Parco+delle+Rose+Bossolasco" },
      { id: "angelo-alta-langa", name: "Angel of Alta Langa — Bossolasco", url: "https://www.google.com/maps/search/?api=1&query=Angelo+dell%27Alta+Langa+Bossolasco" },
      { id: "sale-san-giovanni", name: "Sale San Giovanni — Lavender Fields", url: "https://www.google.com/maps/search/?api=1&query=Sale+San+Giovanni+lavanda" },
      { id: "madonna-hal", name: "Sanctuary of the Virgin of Hal — Bonvicino", url: "https://www.google.com/maps/search/?api=1&query=Santuario+Madonna+di+Hal+Bonvicino" },
    ],
  },
  {
    id: "big-benches",
    pois: [
      { id: "bench-100", name: "Big Bench #100 — Bossolasco", url: "https://www.google.com/maps/search/?api=1&query=Big+Bench+100+Bossolasco" },
      { id: "bench-216", name: "Big Bench #216 — Bossolasco (Cascina Facelli)", url: "https://www.google.com/maps/search/?api=1&query=Big+Bench+216+Bossolasco+Cascina+Facelli" },
      { id: "bench-85", name: "Big Bench #85 — San Benedetto Belbo", url: "https://www.google.com/maps/search/?api=1&query=Big+Bench+85+San+Benedetto+Belbo" },
      { id: "bench-paroldo", name: "Big Bench — Paroldo", url: "https://www.google.com/maps/search/?api=1&query=Panchina+Gigante+Paroldo" },
      { id: "bench-santo-stefano", name: "Big Bench — Santo Stefano Belbo", url: "https://www.google.com/maps/search/?api=1&query=Panchina+Gigante+Santo+Stefano+Belbo" },
      { id: "bench-clavesana", name: "Big Bench — Clavesana", url: "https://www.google.com/maps/search/?api=1&query=Panchina+Gigante+Clavesana" },
      { id: "bench-dogliani", name: "Big Bench — Dogliani", url: "https://www.google.com/maps/search/?api=1&query=Panchina+Gigante+Dogliani" },
      { id: "bench-monforte", name: "Big Bench — Monforte d'Alba", url: "https://www.google.com/maps/search/?api=1&query=Panchina+Gigante+Monforte+d%27Alba" },
      { id: "panca-serenita", name: "Panca della Serenità — La Morra", url: "https://www.google.com/maps/search/?api=1&query=Panca+della+Serenita+La+Morra" },
      { id: "cappella-brunate", name: "Cappella delle Brunate (Cappella del Barolo)", url: "https://www.google.com/maps/search/?api=1&query=Cappella+del+Barolo+Brunate+La+Morra" },
      { id: "belvedere-la-morra", name: "Belvedere La Morra", url: "https://www.google.com/maps/search/?api=1&query=Belvedere+La+Morra" },
      { id: "belvedere-verduno", name: "Belvedere Verduno (Parco del Belvedere)", url: "https://www.google.com/maps/search/?api=1&query=Parco+del+Belvedere+Verduno" },
      { id: "belvedere-diano", name: "Belvedere Diano d'Alba", url: "https://www.google.com/maps/search/?api=1&query=Belvedere+Diano+d%27Alba" },
    ],
  },
  {
    id: "castles",
    pois: [
      { id: "castello-barolo", name: "Castello di Barolo (WiMu)", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Barolo+WiMu" },
      { id: "castello-grinzane", name: "Castello di Grinzane Cavour", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Grinzane+Cavour" },
      { id: "castello-serralunga", name: "Castello di Serralunga d'Alba", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Serralunga+d%27Alba" },
      { id: "castello-castiglione", name: "Castello di Castiglione Falletto", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Castiglione+Falletto" },
      { id: "castello-verduno", name: "Castello di Verduno", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Verduno" },
      { id: "castello-roddi", name: "Castello di Roddi", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Roddi" },
      { id: "castello-novello", name: "Castello di Novello", url: "https://www.google.com/maps/search/?api=1&query=Castello+di+Novello" },
    ],
  },
  {
    id: "practical",
    pois: [
      { id: "farmacia-bossolasco", name: "Farmacia di Bossolasco", url: "https://www.google.com/maps/place/Farmacia+di+Bossolasco+di+Corte+Vittorio+e+C.+Sas/data=!4m2!3m1!1s0x12d2b98062785e55:0xd96417d8ce1b9798" },
      { id: "ellena-cicli", name: "Ellena cicli", url: "https://www.google.com/maps/place/Ellena+cicli/data=!4m2!3m1!1s0x12d2a162fcc5f0ff:0xf38192591bafbf98" },
    ],
  },
];
