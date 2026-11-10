const resturants = [
    {
        "resturant_image": "third",
        "resturant_name": "Faasos",
        "resturant_rating": "4.8",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 1521,
        "resturant_location": "FC Road, Shivajinagar, Pune",
        "resturant_distance": "14.2",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 6,
        "resturant_closing_time": 18
    },
    {
        "resturant_image": "first",
        "resturant_name": "Dunkin",
        "resturant_rating": "2.2",
        "resturant_food_type": "Thai",
        "resturantfood_price": 1450,
        "resturant_location": "Jubilee Hills, Hyderabad",
        "resturant_distance": "9.4",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 1,
        "resturant_closing_time": 13
    },
    {
        "resturant_image": "first",
        "resturant_name": "Burger King",
        "resturant_rating": "1.0",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 1039,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "19.7",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 11,
        "resturant_closing_time": 23
    },
    {
        "resturant_image": "first",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "4.3",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 982,
        "resturant_location": "DLF Mall of India, Sector 18, Noida",
        "resturant_distance": "17.8",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 18,
        "resturant_closing_time": 6
    },
    {
        "resturant_image": "first",
        "resturant_name": "Punjabi Tadka",
        "resturant_rating": "2.4",
        "resturant_food_type": "Maharashtrian",
        "resturantfood_price": 1496,
        "resturant_location": "Mall Road, Shimla",
        "resturant_distance": "12.1",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Behrouz Biryani",
        "resturant_rating": "3.3",
        "resturant_food_type": "Thai",
        "resturantfood_price": 924,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "8.3",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "first",
        "resturant_name": "Dunkin'",
        "resturant_rating": "3.3",
        "resturant_food_type": "Korean",
        "resturantfood_price": 1499,
        "resturant_location": "Sector 17, Chandigarh",
        "resturant_distance": "19.3",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 13,
        "resturant_closing_time": 1
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Pind Balluchi",
        "resturant_rating": "4.5",
        "resturant_food_type": "Maharashtrian",
        "resturantfood_price": 800,
        "resturant_location": "DLF Mall of India, Sector 18, Noida",
        "resturant_distance": "7.4",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Subway",
        "resturant_rating": "4.2",
        "resturant_food_type": "Italian",
        "resturantfood_price": 1794,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "14.2",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "first",
        "resturant_name": "Starbucks",
        "resturant_rating": "2.5",
        "resturant_food_type": "Lebanese",
        "resturantfood_price": 940,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "9.9",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 8,
        "resturant_closing_time": 20
    },
    {
        "resturant_image": "second",
        "resturant_name": "Chaayos",
        "resturant_rating": "4.7",
        "resturant_food_type": "Korean",
        "resturantfood_price": 1827,
        "resturant_location": "Hauz Khas Village, New Delhi",
        "resturant_distance": "16.4",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "third",
        "resturant_name": "McDonald's",
        "resturant_rating": "4.0",
        "resturant_food_type": "Mexican",
        "resturantfood_price": 782,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "3.8",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Pizza Hut",
        "resturant_rating": "4.1",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 1639,
        "resturant_location": "Sector 14, Gurugram",
        "resturant_distance": "19.3",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 4,
        "resturant_closing_time": 16
    },
    {
        "resturant_image": "first",
        "resturant_name": "Punjabi Tadka",
        "resturant_rating": "1.2",
        "resturant_food_type": "Mexican",
        "resturantfood_price": 1357,
        "resturant_location": "Sector 14, Gurugram",
        "resturant_distance": "9.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 13,
        "resturant_closing_time": 1
    },
    {
        "resturant_image": "first",
        "resturant_name": "Burger King",
        "resturant_rating": "1.9",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 1722,
        "resturant_location": "Koramangala, Bengaluru",
        "resturant_distance": "19.9",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 19,
        "resturant_closing_time": 7
    },
    {
        "resturant_image": "third",
        "resturant_name": "Dunkin'",
        "resturant_rating": "1.4",
        "resturant_food_type": "Thai",
        "resturantfood_price": 713,
        "resturant_location": "Sector 14, Gurugram",
        "resturant_distance": "18.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "third",
        "resturant_name": "Behrouz Biryani",
        "resturant_rating": "3.9",
        "resturant_food_type": "Italian",
        "resturantfood_price": 1340,
        "resturant_location": "Koramangala, Bengaluru",
        "resturant_distance": "7.8",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 3,
        "resturant_closing_time": 15
    },
    {
        "resturant_image": "third",
        "resturant_name": "Barbeque Nation",
        "resturant_rating": "4.9",
        "resturant_food_type": "Street Food",
        "resturantfood_price": 1592,
        "resturant_location": "MI Road, Jaipur",
        "resturant_distance": "4.7",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 8,
        "resturant_closing_time": 20
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Starbucks",
        "resturant_rating": "3.1",
        "resturant_food_type": "Thai",
        "resturantfood_price": 209,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "18.7",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Barbeque Nation",
        "resturant_rating": "4.9",
        "resturant_food_type": "Italian",
        "resturantfood_price": 1329,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "4.6",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "second",
        "resturant_name": "Sagar Ratna",
        "resturant_rating": "1.9",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 1259,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "18.8",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "third",
        "resturant_name": "Haldiram's",
        "resturant_rating": "3.5",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 406,
        "resturant_location": "Indiranagar, Bengaluru",
        "resturant_distance": "3.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "first",
        "resturant_name": "Behrouz Biryani",
        "resturant_rating": "2.1",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 1793,
        "resturant_location": "Anna Nagar, Chennai",
        "resturant_distance": "8.3",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 21,
        "resturant_closing_time": 9
    },
    {
        "resturant_image": "second",
        "resturant_name": "Biryani By Kilo",
        "resturant_rating": "4.7",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 329,
        "resturant_location": "Park Street, Kolkata",
        "resturant_distance": "12.1",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "first",
        "resturant_name": "Subway",
        "resturant_rating": "4.6",
        "resturant_food_type": "Italian",
        "resturantfood_price": 1820,
        "resturant_location": "Sector 29, Cyber Hub, Gurugram",
        "resturant_distance": "17.9",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 19,
        "resturant_closing_time": 7
    },
    {
        "resturant_image": "first",
        "resturant_name": "Havmor",
        "resturant_rating": "4.7",
        "resturant_food_type": "Punjabi",
        "resturantfood_price": 1870,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "12.7",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 19,
        "resturant_closing_time": 7
    },
    {
        "resturant_image": "first",
        "resturant_name": "Faasos",
        "resturant_rating": "3.2",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 1835,
        "resturant_location": "Banjara Hills, Hyderabad",
        "resturant_distance": "11.3",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 17,
        "resturant_closing_time": 5
    },
    {
        "resturant_image": "first",
        "resturant_name": "La Pino'z Pizza",
        "resturant_rating": "1.3",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 1975,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "16.9",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 5,
        "resturant_closing_time": 17
    },
    {
        "resturant_image": "first",
        "resturant_name": "La Pino'z Pizza",
        "resturant_rating": "2.0",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 388,
        "resturant_location": "Sector 17, Chandigarh",
        "resturant_distance": "17.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 24,
        "resturant_closing_time": 12
    },
    {
        "resturant_image": "second",
        "resturant_name": "Haldiram's",
        "resturant_rating": "2.9",
        "resturant_food_type": "Thai",
        "resturantfood_price": 1333,
        "resturant_location": "Banjara Hills, Hyderabad",
        "resturant_distance": "11.8",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 21,
        "resturant_closing_time": 9
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "3.6",
        "resturant_food_type": "Gujarati",
        "resturantfood_price": 1903,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "4.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 6,
        "resturant_closing_time": 18
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Starbucks",
        "resturant_rating": "2.6",
        "resturant_food_type": "Street Food",
        "resturantfood_price": 987,
        "resturant_location": "MI Road, Jaipur",
        "resturant_distance": "14.0",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 6,
        "resturant_closing_time": 18
    },
    {
        "resturant_image": "first",
        "resturant_name": "Sagar Ratna",
        "resturant_rating": "5.0",
        "resturant_food_type": "American",
        "resturantfood_price": 1654,
        "resturant_location": "DLF Mall of India, Sector 18, Noida",
        "resturant_distance": "16.7",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 21,
        "resturant_closing_time": 9
    },
    {
        "resturant_image": "first",
        "resturant_name": "Chai Point",
        "resturant_rating": "2.9",
        "resturant_food_type": "Punjabi",
        "resturantfood_price": 993,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "5.7",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "third",
        "resturant_name": "Moti Mahal",
        "resturant_rating": "2.0",
        "resturant_food_type": "Continental",
        "resturantfood_price": 301,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "14.2",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "second",
        "resturant_name": "La Pino'z Pizza",
        "resturant_rating": "3.9",
        "resturant_food_type": "Street Food",
        "resturantfood_price": 393,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "16.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 24,
        "resturant_closing_time": 12
    },
    {
        "resturant_image": "third",
        "resturant_name": "Subway",
        "resturant_rating": "1.4",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 1071,
        "resturant_location": "Sector 29, Cyber Hub, Gurugram",
        "resturant_distance": "5.7",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 5,
        "resturant_closing_time": 17
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "The Belgian Waffle Co.",
        "resturant_rating": "1.6",
        "resturant_food_type": "South Indian",
        "resturantfood_price": 1084,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "17.2",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 7,
        "resturant_closing_time": 19
    },
    {
        "resturant_image": "first",
        "resturant_name": "Pind Balluchi",
        "resturant_rating": "2.1",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 1902,
        "resturant_location": "Hauz Khas Village, New Delhi",
        "resturant_distance": "16.3",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 15,
        "resturant_closing_time": 3
    },
    {
        "resturant_image": "second",
        "resturant_name": "McDonald's",
        "resturant_rating": "2.2",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 1995,
        "resturant_location": "Banjara Hills, Hyderabad",
        "resturant_distance": "7.3",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "first",
        "resturant_name": "Domino's Pizza",
        "resturant_rating": "4.7",
        "resturant_food_type": "Continental",
        "resturantfood_price": 1338,
        "resturant_location": "Sector 17, Chandigarh",
        "resturant_distance": "11.3",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 15,
        "resturant_closing_time": 3
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Pind Balluchi",
        "resturant_rating": "4.3",
        "resturant_food_type": "Street Food",
        "resturantfood_price": 1735,
        "resturant_location": "Koramangala, Bengaluru",
        "resturant_distance": "1.8",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 16,
        "resturant_closing_time": 4
    },
    {
        "resturant_image": "second",
        "resturant_name": "The Great Indian Dhaba",
        "resturant_rating": "2.7",
        "resturant_food_type": "Gujarati",
        "resturantfood_price": 1643,
        "resturant_location": "Mall Road, Shimla",
        "resturant_distance": "15.1",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 6,
        "resturant_closing_time": 18
    },
    {
        "resturant_image": "first",
        "resturant_name": "Subway",
        "resturant_rating": "3.7",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 615,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "11.3",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "second",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "1.2",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 360,
        "resturant_location": "FC Road, Shivajinagar, Pune",
        "resturant_distance": "9.7",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 14,
        "resturant_closing_time": 2
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Behrouz Biryani",
        "resturant_rating": "2.0",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 1969,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "9.8",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Burger Singh",
        "resturant_rating": "1.1",
        "resturant_food_type": "Gujarati",
        "resturantfood_price": 908,
        "resturant_location": "Sector 17, Chandigarh",
        "resturant_distance": "18.7",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 18,
        "resturant_closing_time": 6
    },
    {
        "resturant_image": "second",
        "resturant_name": "Barbeque Nation",
        "resturant_rating": "1.9",
        "resturant_food_type": "American",
        "resturantfood_price": 1040,
        "resturant_location": "Banjara Hills, Hyderabad",
        "resturant_distance": "4.4",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "first",
        "resturant_name": "La Pino'z Pizza",
        "resturant_rating": "2.8",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 426,
        "resturant_location": "MI Road, Jaipur",
        "resturant_distance": "15.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 18,
        "resturant_closing_time": 6
    },
    {
        "resturant_image": "second",
        "resturant_name": "Punjabi Tadka",
        "resturant_rating": "4.9",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 1576,
        "resturant_location": "Colaba Causeway, Mumbai",
        "resturant_distance": "15.2",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 14,
        "resturant_closing_time": 2
    },
    {
        "resturant_image": "first",
        "resturant_name": "Faasos",
        "resturant_rating": "1.0",
        "resturant_food_type": "Continental",
        "resturantfood_price": 1557,
        "resturant_location": "Mall Road, Shimla",
        "resturant_distance": "8.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 21,
        "resturant_closing_time": 9
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Burger King",
        "resturant_rating": "4.6",
        "resturant_food_type": "Lebanese",
        "resturantfood_price": 1461,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "9.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "third",
        "resturant_name": "Oven Story Pizza",
        "resturant_rating": "1.5",
        "resturant_food_type": "Mexican",
        "resturantfood_price": 924,
        "resturant_location": "Anna Nagar, Chennai",
        "resturant_distance": "9.9",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 24,
        "resturant_closing_time": 12
    },
    {
        "resturant_image": "second",
        "resturant_name": "Pizza Hut",
        "resturant_rating": "2.3",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 410,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "12.4",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Behrouz Biryani",
        "resturant_rating": "3.6",
        "resturant_food_type": "Italian",
        "resturantfood_price": 753,
        "resturant_location": "Lajpat Nagar, New Delhi",
        "resturant_distance": "19.6",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 16,
        "resturant_closing_time": 4
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Dunkin'",
        "resturant_rating": "2.8",
        "resturant_food_type": "Continental",
        "resturantfood_price": 1369,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "2.3",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "second",
        "resturant_name": "Biryani By Kilo",
        "resturant_rating": "4.9",
        "resturant_food_type": "Street Food",
        "resturantfood_price": 1244,
        "resturant_location": "Sector 17, Chandigarh",
        "resturant_distance": "19.1",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 19,
        "resturant_closing_time": 7
    },
    {
        "resturant_image": "third",
        "resturant_name": "Faasos",
        "resturant_rating": "4.9",
        "resturant_food_type": "Gujarati",
        "resturantfood_price": 1121,
        "resturant_location": "Koramangala, Bengaluru",
        "resturant_distance": "5.6",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Wow! Momo",
        "resturant_rating": "4.2",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 1313,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "18.0",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "first",
        "resturant_name": "Rolls on Wheels",
        "resturant_rating": "1.5",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 747,
        "resturant_location": "Mall Road, Shimla",
        "resturant_distance": "2.3",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 8,
        "resturant_closing_time": 20
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Pizza Hut",
        "resturant_rating": "2.8",
        "resturant_food_type": "South Indian",
        "resturantfood_price": 1334,
        "resturant_location": "Colaba Causeway, Mumbai",
        "resturant_distance": "18.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 2,
        "resturant_closing_time": 14
    },
    {
        "resturant_image": "second",
        "resturant_name": "Burger Singh",
        "resturant_rating": "1.7",
        "resturant_food_type": "Italian",
        "resturantfood_price": 277,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "7.6",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "third",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "3.6",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 1150,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "11.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 19,
        "resturant_closing_time": 7
    },
    {
        "resturant_image": "third",
        "resturant_name": "Rolls on Wheels",
        "resturant_rating": "1.5",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 998,
        "resturant_location": "Sector 14, Gurugram",
        "resturant_distance": "14.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 24,
        "resturant_closing_time": 12
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Moti Mahal",
        "resturant_rating": "1.5",
        "resturant_food_type": "American",
        "resturantfood_price": 723,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "11.4",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 8,
        "resturant_closing_time": 20
    },
    {
        "resturant_image": "second",
        "resturant_name": "Domino's Pizza",
        "resturant_rating": "4.0",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 249,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "15.1",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 23,
        "resturant_closing_time": 11
    },
    {
        "resturant_image": "third",
        "resturant_name": "Bikanervala",
        "resturant_rating": "1.5",
        "resturant_food_type": "American",
        "resturantfood_price": 959,
        "resturant_location": "Sector 29, Cyber Hub, Gurugram",
        "resturant_distance": "15.4",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 17,
        "resturant_closing_time": 5
    },
    {
        "resturant_image": "third",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "4.9",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 718,
        "resturant_location": "Banjara Hills, Hyderabad",
        "resturant_distance": "4.4",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "third",
        "resturant_name": "Burger Singh",
        "resturant_rating": "4.1",
        "resturant_food_type": "Mexican",
        "resturantfood_price": 269,
        "resturant_location": "Indiranagar, Bengaluru",
        "resturant_distance": "7.0",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 21,
        "resturant_closing_time": 9
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Bikanervala",
        "resturant_rating": "2.3",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 1832,
        "resturant_location": "Anna Nagar, Chennai",
        "resturant_distance": "10.7",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 11,
        "resturant_closing_time": 23
    },
    {
        "resturant_image": "first",
        "resturant_name": "Havmor",
        "resturant_rating": "4.3",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 799,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "18.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 15,
        "resturant_closing_time": 3
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Subway",
        "resturant_rating": "2.4",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 1134,
        "resturant_location": "FC Road, Shivajinagar, Pune",
        "resturant_distance": "10.9",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 21,
        "resturant_closing_time": 9
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Bikanervala",
        "resturant_rating": "3.1",
        "resturant_food_type": "Maharashtrian",
        "resturantfood_price": 1427,
        "resturant_location": "Sector 29, Cyber Hub, Gurugram",
        "resturant_distance": "3.9",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 4,
        "resturant_closing_time": 16
    },
    {
        "resturant_image": "third",
        "resturant_name": "Starbucks",
        "resturant_rating": "3.0",
        "resturant_food_type": "Punjabi",
        "resturantfood_price": 490,
        "resturant_location": "Mall Road, Shimla",
        "resturant_distance": "15.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 6,
        "resturant_closing_time": 18
    },
    {
        "resturant_image": "third",
        "resturant_name": "Domino's Pizza",
        "resturant_rating": "4.8",
        "resturant_food_type": "Thai",
        "resturantfood_price": 1543,
        "resturant_location": "Hauz Khas Village, New Delhi",
        "resturant_distance": "9.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 13,
        "resturant_closing_time": 1
    },
    {
        "resturant_image": "third",
        "resturant_name": "Chai Point",
        "resturant_rating": "4.2",
        "resturant_food_type": "Gujarati",
        "resturantfood_price": 1365,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "4.5",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 19,
        "resturant_closing_time": 7
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Wow! Momo",
        "resturant_rating": "4.0",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 480,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "8.6",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 4,
        "resturant_closing_time": 16
    },
    {
        "resturant_image": "first",
        "resturant_name": "Chai Point",
        "resturant_rating": "1.8",
        "resturant_food_type": "Chinese",
        "resturantfood_price": 1522,
        "resturant_location": "Middle Circle, Connaught Place, New Delhi",
        "resturant_distance": "8.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "third",
        "resturant_name": "Barbeque Nation",
        "resturant_rating": "3.3",
        "resturant_food_type": "Italian",
        "resturantfood_price": 1514,
        "resturant_location": "FC Road, Shivajinagar, Pune",
        "resturant_distance": "15.0",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 7,
        "resturant_closing_time": 19
    },
    {
        "resturant_image": "second",
        "resturant_name": "Moti Mahal",
        "resturant_rating": "1.6",
        "resturant_food_type": "Gujarati",
        "resturantfood_price": 1961,
        "resturant_location": "Indiranagar, Bengaluru",
        "resturant_distance": "14.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 15,
        "resturant_closing_time": 3
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Sagar Ratna",
        "resturant_rating": "2.4",
        "resturant_food_type": "North Indian",
        "resturantfood_price": 918,
        "resturant_location": "Colaba Causeway, Mumbai",
        "resturant_distance": "2.7",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "third",
        "resturant_name": "Faasos",
        "resturant_rating": "2.3",
        "resturant_food_type": "Street Food",
        "resturantfood_price": 824,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "16.8",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 16,
        "resturant_closing_time": 4
    },
    {
        "resturant_image": "second",
        "resturant_name": "KFC",
        "resturant_rating": "3.3",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 1635,
        "resturant_location": "Banjara Hills, Hyderabad",
        "resturant_distance": "11.4",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 15,
        "resturant_closing_time": 3
    },
    {
        "resturant_image": "first",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "2.2",
        "resturant_food_type": "North Indian",
        "resturantfood_price": 1108,
        "resturant_location": "DLF Mall of India, Sector 18, Noida",
        "resturant_distance": "10.2",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Sagar Ratna",
        "resturant_rating": "1.9",
        "resturant_food_type": "Punjabi",
        "resturantfood_price": 1971,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "6.0",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Pind Balluchi",
        "resturant_rating": "4.9",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 680,
        "resturant_location": "Lajpat Nagar, New Delhi",
        "resturant_distance": "1.9",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 14,
        "resturant_closing_time": 2
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Chai Point",
        "resturant_rating": "2.9",
        "resturant_food_type": "Continental",
        "resturantfood_price": 659,
        "resturant_location": "Sector 14, Gurugram",
        "resturant_distance": "11.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 15,
        "resturant_closing_time": 3
    },
    {
        "resturant_image": "second",
        "resturant_name": "Moti Mahal",
        "resturant_rating": "3.9",
        "resturant_food_type": "Rajasthani",
        "resturantfood_price": 1043,
        "resturant_location": "Hauz Khas Village, New Delhi",
        "resturant_distance": "9.2",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Barbeque Nation",
        "resturant_rating": "3.7",
        "resturant_food_type": "North Indian",
        "resturantfood_price": 1385,
        "resturant_location": "MI Road, Jaipur",
        "resturant_distance": "6.4",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "third",
        "resturant_name": "Starbucks",
        "resturant_rating": "3.2",
        "resturant_food_type": "Italian",
        "resturantfood_price": 306,
        "resturant_location": "Sector 29, Cyber Hub, Gurugram",
        "resturant_distance": "16.0",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "second",
        "resturant_name": "Faasos",
        "resturant_rating": "1.4",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 1711,
        "resturant_location": "Khan Market, New Delhi",
        "resturant_distance": "11.2",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 12,
        "resturant_closing_time": 24
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Punjabi Tadka",
        "resturant_rating": "5.0",
        "resturant_food_type": "Thai",
        "resturantfood_price": 406,
        "resturant_location": "Elante Mall, Industrial Area Phase 1, Chandigarh",
        "resturant_distance": "4.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 6,
        "resturant_closing_time": 18
    },
    {
        "resturant_image": "second",
        "resturant_name": "Chai Point",
        "resturant_rating": "2.0",
        "resturant_food_type": "Continental",
        "resturantfood_price": 1067,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "17.4",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 9,
        "resturant_closing_time": 21
    },
    {
        "resturant_image": "first",
        "resturant_name": "Rolls on Wheels",
        "resturant_rating": "4.2",
        "resturant_food_type": "Bengali",
        "resturantfood_price": 774,
        "resturant_location": "Jubilee Hills, Hyderabad",
        "resturant_distance": "11.8",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 20,
        "resturant_closing_time": 8
    },
    {
        "resturant_image": "second",
        "resturant_name": "Cafe Coffee Day",
        "resturant_rating": "1.4",
        "resturant_food_type": "Mughlai",
        "resturantfood_price": 1418,
        "resturant_location": "Indiranagar, Bengaluru",
        "resturant_distance": "10.0",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 17,
        "resturant_closing_time": 5
    },
    {
        "resturant_image": "fourth",
        "resturant_name": "Faasos",
        "resturant_rating": "1.6",
        "resturant_food_type": "Japanese",
        "resturantfood_price": 1335,
        "resturant_location": "Bandra West, Mumbai",
        "resturant_distance": "6.8",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 13,
        "resturant_closing_time": 1
    },
    {
        "resturant_image": "second",
        "resturant_name": "Pind Balluchi",
        "resturant_rating": "1.3",
        "resturant_food_type": "Italian",
        "resturantfood_price": 281,
        "resturant_location": "Sector 17, Chandigarh",
        "resturant_distance": "18.6",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 24,
        "resturant_closing_time": 12
    },
    {
        "resturant_image": "first",
        "resturant_name": "Rolls on Wheels",
        "resturant_rating": "1.9",
        "resturant_food_type": "Maharashtrian",
        "resturantfood_price": 278,
        "resturant_location": "DLF Mall of India, Sector 18, Noida",
        "resturant_distance": "1.4",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "true",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "first",
        "resturant_name": "Rolls on Wheels",
        "resturant_rating": "4.6",
        "resturant_food_type": "Maharashtrian",
        "resturantfood_price": 1071,
        "resturant_location": "Jubilee Hills, Hyderabad",
        "resturant_distance": "1.6",
        "resturant_petfriendly": "false",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 22,
        "resturant_closing_time": 10
    },
    {
        "resturant_image": "first",
        "resturant_name": "Burger King",
        "resturant_rating": "1.7",
        "resturant_food_type": "Mediterranean",
        "resturantfood_price": 380,
        "resturant_location": "Park Street, Kolkata",
        "resturant_distance": "10.5",
        "resturant_petfriendly": "true",
        "resturant_serve_alchocol": "false",
        "resturant_opening_time": 17,
        "resturant_closing_time": 5
    }
]
// resturants array contain all the objects 



// create a copy of resturants array, using spread operator
let resturants_record = [...resturants];

// cards create karte hain
function card(resturants){ // ye function card create krega 
// mne objects ke andhar rakhi information ka use karna hain objects array ke element hain, toh foreach loop ka use krenge 
// card ek ek karka bnava ge isliye for each loop ka use kiya hain, taki one by one element ava
    resturants.forEach(element => { // element point to object one by one, object contain information of resturants 
        
        // parent ke andhar ek card ko rkhenge
        // parent ak(one)card ko point krega 
        const parent = document.createElement('div');
        parent.classList.add("firstcard");

        // add an image in resturant  
        const image = document.createElement('img');
        // image ka source sting ki form me ata hain 
        image.src = `Images/${element.resturant_image}.jpeg`
        image.classList.add("pic_resturant");
        // append image in parent 
        parent.append(image);

        // resturant name and rating put inside a div tag
        const firstlower = document.createElement('div');
        firstlower.classList.add('firstlower_class');
        const r_name = document.createElement('h3');
        r_name.innerText = element.resturant_name;
        r_name.classList.add('r_name_class');

        const r_rating = document.createElement('div');
        r_rating.innerText = `${element.resturant_rating}★`;
        r_rating.classList.add('r_rating_class');

        firstlower.append(r_name);
        firstlower.append(r_rating);
        parent.append(firstlower);



        // foodtype aur price ko add karte hain
        const secondlower = document.createElement('div');
        secondlower.classList.add('secondlower_class'); 
       const r_food =  document.createElement('p');
       r_food.innerText = element.resturant_food_type;
       r_food.classList.add('r_food_class');
        const r_food_price =  document.createElement('p');
       r_food_price.innerText = `₹${element.resturantfood_price} for two`;
       r_food_price.classList.add('r_food_price_class');

       secondlower.append(r_food);
       secondlower.append(r_food_price);
       parent.append(secondlower);


    //    add location and distance 
    const thirdlower = document.createElement('div');
    thirdlower.classList.add('thirdlower_class');
    const r_location = document.createElement('p');
    r_location.innerText = element.resturant_location;
    r_location.classList.add('r_location_class');

    const r_distance = document.createElement('p');
    r_distance.innerText = `${element.resturant_distance}km`;
    r_distance.classList.add('r_distance_class');


    thirdlower.append(r_location);
    thirdlower.append(r_distance);

    parent.append(thirdlower);

        const root = document.getElementById('root');
        root.append(parent);
    });

}
card(resturants); // function call
// mne yaha par resturants array ke elements ko copy car liya hain **spread operaor** se


// rating 4.5+ walo par event listener apply karte hain 
document.getElementById('rating').addEventListener('click',()=>{
    document.getElementById('rating').style.background ="green";

// jab m click karu toh vo resturant ana chahiye jinki rating 4.5+ hain 
// toh pehle sare resturants par filter apply karte hain 

// resturant_record naye array ko point krega, jo resturants_record.filter() se ayega
// purane array ka refernce replace ho jayega, isliye hmne let resturants_record ka use kiya hain 

resturants_record = resturants_record.filter(element=>element.resturant_rating>=4.5);
// element points to objects one by one

// cards jitne bi hain vo root ke andhar hain 100 jo bnaye the jab hum card(resturants_record) ko call krenge 
// toh vo aur cards bnayega jo ki root me hi store honge hum chahte hain ki jab rating par
// click ho toh only 4.5+ wale hi aiye toh call karne se pehle root ko clear karte hain

document.getElementById('root').innerText ="";
card(resturants_record);


})

// pet friendly wale 
document.getElementById('pet').addEventListener('click',()=>{
    document.getElementById('pet').style.background ="green";
// resturant_record naye array ko point krega, jo resturants.filter() se ayega  
// purane array ka refernce replace ho jayega  
    resturants_record = resturants_record.filter(element=>element.resturant_petfriendly=="true");

        

    document.getElementById('root').innerText ="";
card(resturants_record);
    
})

// alchocol serve karne wale 
document.getElementById('alcohol').addEventListener('click',()=>{
    document.getElementById('alcohol').style.background ="green";
    // resturant_record naye array ko point krega, jo resturants.filter() se ayega  
// purane array ka refernce replace ho jayega 
 resturants_record = resturants_record.filter(element=>element.resturant_serve_alchocol=="true");
 
document.getElementById('root').innerText ="";
card( resturants_record);
  
})

// filter button par click karne par fliterpage show ho
document.getElementById('fliter').addEventListener('click',()=>{
// filter page ko access karte hain fir usko display krana hainn
// filterpage ko access karo usko display:block bna do ab deekha ge click karne par 
const element = document.getElementById('filterpage');
// display="block" se dikhega 
element.style.display ="block";
})


//filter select karke  Apply par click karna, kyuki apply par click karke ki filter apply hoga apply button hain 
document.getElementById('x').addEventListener('click',(event)=>{
    event.preventDefault();

    // dekhte hain kis input ke andhar value gyi hain,  
    const element = document.querySelector('input[name="applyfilter"]:checked'); // isme ye ho 
// rha hain ==> hmtl me dekhne ge kis input ka name applyfilter hain aur us input ka radio button 
// click/select  ho chuka hain , is se vo input pta lag jayega jo select ho chuka hain
// element variable us input ko point kar rha hain

if(element === null){// agr koi input slect nahi kiya hain aur user apply par click kar de toh
// usko handle karte hain , tab elemnt ke andhar kuch nahi ayega mtlb element kisi input ko point
// nahi krega 
    return;
}

else if(element.value == "Distance"){
    // distnace ko sort karna hain asscending order me b
    resturants_record.sort((a,b)=>a.resturant_distance - b.resturant_distance);
    // resturants ke andhar objects distance ke basis par asscending order me sort ho gye hain 
    // root ko empty kar dete hain fir cards banaen ke liye call krenge 
    document.getElementById('root').innerText="";
    card(resturants_record);
}

else if(element.value == "Cost: High to Low"){
    // descending order me karna hain 
   resturants_record.sort((a,b)=>b.resturantfood_price - a.resturantfood_price);
    document.getElementById('root').innerText="";
    card(resturants_record);
}

else if(element.value == "Cost: Low to High"){
   resturants_record.sort((a,b)=> a.resturantfood_price - b.resturantfood_price);
    document.getElementById('root').innerText="";
    card(resturants_record);
}
else{
    // rating ko descending order gat te karam me select karte hain 
   resturants_record.sort((a,b)=>b.resturant_rating - a.resturant_rating);
    document.getElementById('root').innerText="";
    card(resturants_record);

}

// jese hi filter select kiya aur apply par click kiya toh filterpage gayab ho ja
const element1 = document.getElementById('filterpage');
element1.style.display ="none";
    
   

})

// ab clear all wala
document.getElementById('y').addEventListener('click',(event)=>{

    event.preventDefault();
    const element = document.querySelector('input[name="applyfilter"]:checked');
    if(element != null){ // ye agr koi input select nahi hua usko bi handle krega 
    element.checked = false;


    // jese hi radio button unselect honge m page ko display:none kar dunga
    const element1 = document.getElementById('filterpage');
    element1.style.display ="none";
    // ab button ke color ko normal kar dete hain 
     document.getElementById('pet').style.background ="white";
     document.getElementById('rating').style.background ="white";
     document.getElementById('alcohol').style.background ="white";

    // ab jese pehle the normal resturants without any filter vese kar denge 
    document.getElementById('root').innerText ="";
    card(resturants);
    }
})


// extra 
// parent par event listnere
// document.querySelector('.firstcard').addEventListener('click',()=>{
//     // document.getElementById('root').innerText= " ";
//     console.log("abc");
// })