import { Injectable } from '@angular/core';

export class Wildcat {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public gallery: string[],
    public title: string,
    public desc: string,
    public desc2: string) { }
}

let WILDCATS = [
  new Wildcat(
    1,
    'Snow Leopard',
    '../../../assets/images/snow-leo.jpg',
    [
      '../../../assets/images/snow-leo2.jpg'
    ],
    'The snow mountain predator',
    `
        The snow leopard (Panthera uncia syn. Uncia uncia) is a large cat native to the mountain ranges of Central and South
        Asia. It is listed as endangered on the IUCN Red List of Threatened Species because as of 2003, the size of the global
        population was estimated at 4,080–6,590 adults, of which fewer than 2,500 individuals may reproduce in the wild.[1]
        <br><br> Drawing from the latest available data, the Global Snow Leopard and Eco-System Protection Program (GSLEP)[3]
        uses an estimate of between 3,920 and 6,390 individuals in the wild.<br><br> Snow leopards inhabit alpine and subalpine
        zones at elevations from 3,000 to 4,500 m (9,800 to 14,800 ft). In the northern range countries, they also occur
        at lower elevations.[4]<br><br> Taxonomically, the snow leopard was classified as Uncia uncia since the early 1930s.[2]
        Based on genotyping studies, the cat has been considered a member of the genus Panthera since 2008.[1][5] Two subspecies
        have been attributed, but genetic differences between the two have not been settled.[1]
    `,
    `
      The snow leopard is distributed from the west of Lake Baikal through southern Siberia, in the Kunlun Mountains, in the
      Russian Altai mountains, Sayan and Tannu-Ola Mountains, in the Tian Shan, across Kazakhstan, Kyrgyzstan, Tajikistan,
      and Uzbekistan to the Hindu Kush in eastern Afghanistan, Karakoram in northern Pakistan, in the Pamir Mountains, and
      in the high altitudes of the Himalayas in India, Nepal, and Bhutan, and the Tibetan Plateau. In Mongolia, it is found
      in the Mongolian and Gobi Altai Mountains and the Khangai Mountains. In Tibet, it is found up to the Altyn-Tagh in
      the north.[4][25]
      <br><br> Potential snow leopard habitat in the Indian Himalayas is estimated at less than 90,000 km2 (35,000 sq mi)
      in the states of Jammu and Kashmir, Uttarakhand, Himachal Pradesh, Sikkim, and Arunachal Pradesh, of which about 34,000
      km2 (13,000 sq mi) is considered good habitat, and 14.4% is protected. In the beginning of the 1990s, the Indian snow
      leopard population was estimated at roughly 200–600 individuals living across about 25 protected areas.[4]<br><br>      In summer, snow leopards usually live above the tree line on mountainous meadows and in rocky regions at altitudes
      from 2,700 to 6,000 m (8,900 to 19,700 ft). In winter, they come down into the forests to altitudes around 1,200 to
      2,000 m (3,900 to 6,600 ft). Snow leopards prefer rocky, broken terrain, and can travel without difficulty in snow
      up to 85 cm (33 in) deep, although they prefer to use existing trails made by other animals.[19]<br><br> Global warming
      has caused the tree line to be increased in altitude, resulting in the decrease of wild prey that depend on the plants
      for food.
`
  ),
  new Wildcat(
    2
    ,
    'Tiger',
    '../../../assets/images/tiger.jpg',
    [
      '../../../assets/images/tiger-dinasty-1.jpg',
      '../../../assets/images/tiger-dinasty-2.jpg'
    ],
    '', '', ''),
  new Wildcat(
    3,
    'Lion',
    '../../../assets/images/lion-bg.jpg',
    [
      '../../../assets/images/lions.jpg'
    ],
    'Lion (disambiguation)',
    `The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae. The commonly used term African lion collectively denotes the several subspecies in Africa. With some males exceeding 250 kg (550 lb) in weight,[4] it is the second-largest living cat after the tiger. Wild lions currently exist in sub-Saharan Africa and in India (where an endangered remnant population resides in Gir Forest National Park). In ancient historic times, their range was in most of Africa, including North Africa, and across Eurasia from Greece and southeastern Europe to India. In the late Pleistocene, about 10,000 years ago, the lion was the most widespread large land mammal after humans: Panthera leo spelaea lived in northern and western Europe and Panthera leo atrox lived in the Americas from the Yukon to Peru.[5] The lion is classified as a vulnerable species by the IUCN, having seen a major population decline in its African range of 30–50% per two decades during the second half of the twentieth century.[2] Lion populations are untenable outside designated reserves and national parks. Although the cause of the decline is not fully understood, habitat loss and conflicts with humans are the greatest causes of concern. Within Africa, the West African lion population is particularly endangered.
    `,
    `
    In Africa, lions can be found in savanna grasslands with scattered Acacia trees, which serve as shade;[155] their habitat in India is a mixture of dry savanna forest and very dry deciduous scrub forest.[156] The habitat of lions originally spanned the southern parts of Eurasia, ranging from Greece to India, and most of Africa except the central rainforest-zone and the Sahara desert. Herodotus reported that lions had been common in Greece in 480 BC; they attacked the baggage camels of the Persian king Xerxes on his march through the country. Aristotle considered them rare by 300 BC. By 100 AD they were extirpated.[157] A population of Asiatic lions survived until the tenth century in the Caucasus, their last European outpost.[158]

The species was eradicated from Palestine by the Middle Ages and from most of the rest of Asia after the arrival of readily available firearms in the eighteenth century. Between the late nineteenth and early twentieth centuries, they became extinct in North Africa and Southwest Asia. By the late nineteenth century, the lion had disappeared from Turkey and most of northern India,[20][159] while the last sighting of a live Asiatic lion in Iran was in 1941 (between Shiraz and Jahrom, Fars Province), although the corpse of a lioness was found on the banks of the Karun river, Khūzestān Province in 1944. There are no subsequent reliable reports from Iran.[95] The subspecies now survives only in and around the Gir Forest of northwestern India.[34] Approximately 500 lions live in the area of the 1,412 km2 (545 sq mi) sanctuary in the state of Gujarat, which covers most of the forest. Their numbers have increased from 180 to 523 animals mainly because the natural prey species have recovered.
    `)
];

let wildcatsPromise = Promise.resolve(WILDCATS);

@Injectable()
export class WildcatsService {

  getWildcats() { return wildcatsPromise; }

  getWildcat(id: number | string) {
    return wildcatsPromise
      .then(wildcats => wildcats.find(wildcat => wildcat.id === +id));
  }
}
