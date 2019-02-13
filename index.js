function card (continent, region, type) {
  return {
    continent,
    region,
    type,
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
  card(null, null, "jolly"),
  card(null, null, "jolly"),

  // Africa
  card(africa, "congo", cavalier),
  card(africa, "egypt", soldier),
  card(africa, "east-africa", cannon),
  card(africa, "madagascar", soldier),
  card(africa, "north-africa", soldier),
  card(africa, "south-africa", cannon),

  // Asia
  card(asia, "afghanistan", soldier),
  card(asia, "china", cavalier),
  card(asia, "india", soldier),
  card(asia, "irkutsk", soldier), // cita
  card(asia, "japan", soldier),
  card(asia, "kamchatka", cavalier),
  card(asia, "middle-east", cannon),
  card(asia, "mongolia", cannon),
  card(asia, "siam", cannon),
  card(asia, "siberia", cannon),
  card(asia, "ural", cavalier),
  card(asia, "yakutsk", cavalier), // jacuzia

  // Europe
  card(europe, "great-britain", cavalier),
  card(europe, "iceland", soldier),
  card(europe, "northern-europe", cavalier),
  card(europe, "scandinavia", cannon),
  card(europe, "southern-europe", cavalier),
  card(europe, "ukraine", cannon),
  card(europe, "western-europe", soldier),

  // North America
  card(northAmerica, "alaska", soldier),
  card(northAmerica, "alberta", soldier),
  card(northAmerica, "central-america", cavalier),
  card(northAmerica, "eastern-united-states", cannon),
  card(northAmerica, "greenland", cavalier),
  card(northAmerica, "northwest-territory", cannon),
  card(northAmerica, "ontario", cavalier),
  card(northAmerica, "quebec", cannon),
  card(northAmerica, "western-united-states", soldier),

  // Oceania
  card(oceania, "eastern-oceania", soldier),
  card(oceania, "indonesia", cavalier),
  card(oceania, "new-guniea", cavalier),
  card(oceania, "western-oceania", cannon),

  // South America
  card(southAmerica, "argentina", soldier),
  card(southAmerica, "brazil", cannon),
  card(southAmerica, "peru", cavalier),
  card(southAmerica, "venezuela", cannon),
];
