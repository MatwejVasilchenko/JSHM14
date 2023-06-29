apartament = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr:"Spacious apartment in the city center",
    rating:4,
    price: 2153,
    tags: ["premium", "promoted", "top"]
}

apartament.owner.ownerDiscription = {
    name:"Henry",
    phone:"982-126-1588",
    email:"henry.carter@aptmail.com"
};

let aptRating = apartament.rating;

let aptDescr = apartament.descr;

let aptPrice = apartament.price;

let aptTags = apartament.tags;

ownerName = ownerDiscription.name;

ownerPhone = ownerDiscription.phone;

ownerEmail = ownerDiscription.email;

let numberOfTags = apartament.tags.length;

firstTag = apartament.tags[0];

lastTag = apartament.tags[2]

aptRating = apartament["rating"];

aptDescr = apartament["descr"];

aptPrice = apartament["price"];

aptTags = apartament["tags"];

apartament.price = 5000;
apartament.rating = 4.7;
apartament.owner.name = "Henry Sibola";
apartament.tags.push("trusted");

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston"
};