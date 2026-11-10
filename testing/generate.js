const fs = require('fs');

const resturants = [];
    let restaurantnames = [
    "Domino's Pizza",
    "Pizza Hut",
    "McDonald's",
    "KFC",
    "Burger King",
    "Subway",
    "Taco Bell",
    "Starbucks",
    "Barbeque Nation",
    "Haldiram's",
    "Bikanervala",
    "Wow! Momo",
    "Havmor",
    "Faasos",
    "Behrouz Biryani",
    "Biryani By Kilo",
    "The Belgian Waffle Co.",
    "Dunkin'",
    "Cafe Coffee Day",
    "Burger Singh",
    "La Pino'z Pizza",
    "Oven Story Pizza",
    "Chaayos",
    "Chai Point",
    "Moti Mahal",
    "Sagar Ratna",
    "Pind Balluchi",
    "The Great Indian Dhaba",
    "Rolls on Wheels",
    "Punjabi Tadka"
];
const pics = ['first','second','third','fourth'];
let foodTypes = [
    "North Indian",
    "South Indian",
    "Chinese",
    "Italian",
    "Mexican",
    "Thai",
    "Japanese",
    "Korean",
    "Mughlai",
    "Punjabi",
    "Gujarati",
    "Rajasthani",
    "Bengali",
    "Maharashtrian",
    "Continental",
    "Mediterranean",
    "American",
    "Lebanese",
    "Street Food",
    "Fast Food"
];
let locations = [
    "Middle Circle, Connaught Place, New Delhi",
    "Sector 29, Cyber Hub, Gurugram",
    "Elante Mall, Industrial Area Phase 1, Chandigarh",
    "Sector 17, Chandigarh",
    "DLF Mall of India, Sector 18, Noida",
    "Hauz Khas Village, New Delhi",
    "Khan Market, New Delhi",
    "Lajpat Nagar, New Delhi",
    "Park Street, Kolkata",
    "Bandra West, Mumbai",
    "Colaba Causeway, Mumbai",
    "FC Road, Shivajinagar, Pune",
    "Indiranagar, Bengaluru",
    "Koramangala, Bengaluru",
    "Jubilee Hills, Hyderabad",
    "Banjara Hills, Hyderabad",
    "Anna Nagar, Chennai",
    "MI Road, Jaipur",
    "Sector 14, Gurugram",
    "Mall Road, Shimla"
];
let condition = ['true','false'];

for(let i=0; i<100; i++){


       let obj ={};
        obj['resturant_image'] =  pics[Math.floor(Math.random()*4)];
        obj['resturant_name'] = restaurantnames[Math.floor(Math.random()*30)];
        obj['resturant_rating'] = ((Math.random()*4)+1).toFixed(1);
        obj['resturant_food_type'] = foodTypes[Math.floor(Math.random()*20)];
        obj['resturantfood_price'] = Math.floor(Math.random()*(2000-200+1))+200;
        obj['resturant_location'] = locations[Math.floor(Math.random()*20)];
        obj['resturant_distance'] = ((Math.random()*19)+1).toFixed(1); 
        obj['resturant_petfriendly'] = condition[Math.floor(Math.random()*2)];
        obj['resturant_serve_alchocol'] = condition[Math.floor(Math.random()*2)];
        obj['resturant_opening_time'] = Math.floor(Math.random()*24)+1;
        obj['resturant_closing_time'] = (obj['resturant_opening_time']+12-1)%24+1;
        resturants.push(obj);
    }
    
    console.log(resturants);

    const jsonData = JSON.stringify(resturants, null, 4);
    fs.writeFileSync('arrayData.json', jsonData, 'utf8');