function card (continent, region, type, points) {
  return {
    continent,
    region,
    type,
    points,
  };
}

var cannon = "cannon";
var cavalier = "cavalier";
var soldier = "soldier";

var africa = "africa";
var asia = "asia";
var europe = "europe";
var northAmerica = "north-america";
var oceania = "oceania";
var southAmerica = "south-america";

module.exports = [
  card(null, null, "jolly",null),
  card(null, null, "jolly",null),

  // Africa
  card(africa, "congo", cavalier,3),
  card(africa, "egypt", soldier,4),
  card(africa, "east-africa", cannon,5),
  card(africa, "madagascar", soldier,2),
  card(africa, "north-africa", soldier,6),
  card(africa, "south-africa", cannon,3),

  // Asia
  card(asia, "afghanistan", soldier,4),
  card(asia, "china", cavalier,7),
  card(asia, "india", soldier,3),
  card(asia, "irkutsk", soldier,4), // cita
  card(asia, "japan", soldier,2),
  card(asia, "kamchatka", cavalier,5),
  card(asia, "middle-east", cannon,6),
  card(asia, "mongolia", cannon,5),
  card(asia, "siam", cannon,3),
  card(asia, "siberia", cannon,5),
  card(asia, "ural", cavalier,4),
  card(asia, "yakutsk", cavalier,3), // jacuzia

  // Europe
  card(europe, "great-britain", cavalier,4),
  card(europe, "iceland", soldier,3),
  card(europe, "northern-europe", cavalier,5),
  card(europe, "scandinavia", cannon,4),
  card(europe, "southern-europe", cavalier,6),
  card(europe, "ukraine", cannon,6),
  card(europe, "western-europe", soldier,4),

  // North America
  card(northAmerica, "alaska", soldier,3),
  card(northAmerica, "alberta", soldier,4),
  card(northAmerica, "central-america", cavalier,3),
  card(northAmerica, "eastern-united-states", cannon,4),
  card(northAmerica, "greenland", cavalier,4),
  card(northAmerica, "northwest-territory", cannon,4),
  card(northAmerica, "ontario", cavalier,6),
  card(northAmerica, "quebec", cannon,3),
  card(northAmerica, "western-united-states", soldier,4),

  // Oceania
  card(oceania, "eastern-oceania", soldier,2),
  card(oceania, "indonesia", cavalier,3),
  card(oceania, "new-guniea", cavalier,3),
  card(oceania, "western-oceania", cannon,3),

  // South America
  card(southAmerica, "argentina", soldier,2),
  card(southAmerica, "brazil", cannon,4),
  card(southAmerica, "peru", cavalier,3),
  card(southAmerica, "venezuela", cannon,3),
];
