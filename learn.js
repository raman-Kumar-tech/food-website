// resturants ki information create karte hain 

const resturants = []; // empty array that will store all the objects 

// array that 30 retsurant names
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

// array for images of 4 size 
const pics = ['first','second','third','fourth'];

// array for different types of food of size 20
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

// array of size 30 that contain resturants location
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

// array for true or false, iska use serve alchocol aur pet friendly ke liye hoga 
let condition = ['true','false'];


// 100 cards ke liye dummy data create karte hain 
for(let i=0; i<100; i++){
       let obj ={};
        obj['resturant_image'] =  pics[Math.floor(Math.random()*4)];
        obj['resturant_name'] = restaurantnames[Math.floor(Math.random()*30)];
        obj['resturant_rating'] = ((Math.random()*4)+1).toFixed(1); // 1 to 5 Rating 
        obj['resturant_food_type'] = foodTypes[Math.floor(Math.random()*20)];
        obj['resturantfood_price'] = Math.floor(Math.random()*(2000-200+1))+200;
        obj['resturant_location'] = locations[Math.floor(Math.random()*20)];
        obj['resturant_distance'] = ((Math.random()*19)+1).toFixed(1); // 1km to 20 km distance
        obj['resturant_petfriendly'] = condition[Math.floor(Math.random()*2)];
        obj['resturant_serve_alchocol'] = condition[Math.floor(Math.random()*2)];
        // resturant open hone ke 12 hours baad band hoga 
        obj['resturant_opening_time'] = Math.floor(Math.random()*24)+1;
        obj['resturant_closing_time'] = (obj['resturant_opening_time']+12-1)%24+1;
// -1 aur +1 isliye kiya agr 12 bje open uske 12 hours baad close 24bje toh 24%24 is 0, 0 ko hnadle karne ke liye -1 aur +1 liya hain
// modulus 24 lisliye kiya kyuki din me 24 hours hote hain    
// modulus 24 se value 24 te chooti hi rhegi  


        resturants.push(obj);
    }
    
console.log(resturants);
// ab jo array me data aiya hain objects ki form me uska use karna pdega lekin pehle usko apni 
// file me lekar ana pdega tabi hum use kar payenge kyuki abhi toh sirf hme ye data output m e
// dikh rha hain iska use bi karna pdega , use karne ke liye file me lekar ana pdega 
