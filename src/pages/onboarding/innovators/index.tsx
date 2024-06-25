import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { useState } from "react";
const genderStatus = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
var cities = [
  "Aberdeen",
  "Abilene",
  "Akron",
  "Albany",
  "Albuquerque",
  "Alexandria",
  "Allentown",
  "Amarillo",
  "Anaheim",
  "Anchorage",
  "Ann Arbor",
  "Antioch",
  "Apple Valley",
  "Appleton",
  "Arlington",
  "Arvada",
  "Asheville",
  "Athens",
  "Atlanta",
  "Atlantic City",
  "Augusta",
  "Aurora",
  "Austin",
  "Bakersfield",
  "Baltimore",
  "Barnstable",
  "Baton Rouge",
  "Beaumont",
  "Bel Air",
  "Bellevue",
  "Berkeley",
  "Bethlehem",
  "Billings",
  "Birmingham",
  "Bloomington",
  "Boise",
  "Boise City",
  "Bonita Springs",
  "Boston",
  "Boulder",
  "Bradenton",
  "Bremerton",
  "Bridgeport",
  "Brighton",
  "Brownsville",
  "Bryan",
  "Buffalo",
  "Burbank",
  "Burlington",
  "Cambridge",
  "Canton",
  "Cape Coral",
  "Carrollton",
  "Cary",
  "Cathedral City",
  "Cedar Rapids",
  "Champaign",
  "Chandler",
  "Charleston",
  "Charlotte",
  "Chattanooga",
  "Chesapeake",
  "Chicago",
  "Chula Vista",
  "Cincinnati",
  "Clarke County",
  "Clarksville",
  "Clearwater",
  "Cleveland",
  "College Station",
  "Colorado Springs",
  "Columbia",
  "Columbus",
  "Concord",
  "Coral Springs",
  "Corona",
  "Corpus Christi",
  "Costa Mesa",
  "Dallas",
  "Daly City",
  "Danbury",
  "Davenport",
  "Davidson County",
  "Dayton",
  "Daytona Beach",
  "Deltona",
  "Denton",
  "Denver",
  "Des Moines",
  "Detroit",
  "Downey",
  "Duluth",
  "Durham",
  "El Monte",
  "El Paso",
  "Elizabeth",
  "Elk Grove",
  "Elkhart",
  "Erie",
  "Escondido",
  "Eugene",
  "Evansville",
  "Fairfield",
  "Fargo",
  "Fayetteville",
  "Fitchburg",
  "Flint",
  "Fontana",
  "Fort Collins",
  "Fort Lauderdale",
  "Fort Smith",
  "Fort Walton Beach",
  "Fort Wayne",
  "Fort Worth",
  "Frederick",
  "Fremont",
  "Fresno",
  "Fullerton",
  "Gainesville",
  "Garden Grove",
  "Garland",
  "Gastonia",
  "Gilbert",
  "Glendale",
  "Grand Prairie",
  "Grand Rapids",
  "Grayslake",
  "Green Bay",
  "GreenBay",
  "Greensboro",
  "Greenville",
  "Gulfport-Biloxi",
  "Hagerstown",
  "Hampton",
  "Harlingen",
  "Harrisburg",
  "Hartford",
  "Havre de Grace",
  "Hayward",
  "Hemet",
  "Henderson",
  "Hesperia",
  "Hialeah",
  "Hickory",
  "High Point",
  "Hollywood",
  "Honolulu",
  "Houma",
  "Houston",
  "Howell",
  "Huntington",
  "Huntington Beach",
  "Huntsville",
  "Independence",
  "Indianapolis",
  "Inglewood",
  "Irvine",
  "Irving",
  "Jackson",
  "Jacksonville",
  "Jefferson",
  "Jersey City",
  "Johnson City",
  "Joliet",
  "Kailua",
  "Kalamazoo",
  "Kaneohe",
  "Kansas City",
  "Kennewick",
  "Kenosha",
  "Killeen",
  "Kissimmee",
  "Knoxville",
  "Lacey",
  "Lafayette",
  "Lake Charles",
  "Lakeland",
  "Lakewood",
  "Lancaster",
  "Lansing",
  "Laredo",
  "Las Cruces",
  "Las Vegas",
  "Layton",
  "Leominster",
  "Lewisville",
  "Lexington",
  "Lincoln",
  "Little Rock",
  "Long Beach",
  "Lorain",
  "Los Angeles",
  "Louisville",
  "Lowell",
  "Lubbock",
  "Macon",
  "Madison",
  "Manchester",
  "Marina",
  "Marysville",
  "McAllen",
  "McHenry",
  "Medford",
  "Melbourne",
  "Memphis",
  "Merced",
  "Mesa",
  "Mesquite",
  "Miami",
  "Milwaukee",
  "Minneapolis",
  "Miramar",
  "Mission Viejo",
  "Mobile",
  "Modesto",
  "Monroe",
  "Monterey",
  "Montgomery",
  "Moreno Valley",
  "Murfreesboro",
  "Murrieta",
  "Muskegon",
  "Myrtle Beach",
  "Naperville",
  "Naples",
  "Nashua",
  "Nashville",
  "New Bedford",
  "New Haven",
  "New London",
  "New Orleans",
  "New York",
  "New York City",
  "Newark",
  "Newburgh",
  "Newport News",
  "Norfolk",
  "Normal",
  "Norman",
  "North Charleston",
  "North Las Vegas",
  "North Port",
  "Norwalk",
  "Norwich",
  "Oakland",
  "Ocala",
  "Oceanside",
  "Odessa",
  "Ogden",
  "Oklahoma City",
  "Olathe",
  "Olympia",
  "Omaha",
  "Ontario",
  "Orange",
  "Orem",
  "Orlando",
  "Overland Park",
  "Oxnard",
  "Palm Bay",
  "Palm Springs",
  "Palmdale",
  "Panama City",
  "Pasadena",
  "Paterson",
  "Pembroke Pines",
  "Pensacola",
  "Peoria",
  "Philadelphia",
  "Phoenix",
  "Pittsburgh",
  "Plano",
  "Pomona",
  "Pompano Beach",
  "Port Arthur",
  "Port Orange",
  "Port Saint Lucie",
  "Port St. Lucie",
  "Portland",
  "Portsmouth",
  "Poughkeepsie",
  "Providence",
  "Provo",
  "Pueblo",
  "Punta Gorda",
  "Racine",
  "Raleigh",
  "Rancho Cucamonga",
  "Reading",
  "Redding",
  "Reno",
  "Richland",
  "Richmond",
  "Richmond County",
  "Riverside",
  "Roanoke",
  "Rochester",
  "Rockford",
  "Roseville",
  "Round Lake Beach",
  "Sacramento",
  "Saginaw",
  "Saint Louis",
  "Saint Paul",
  "Saint Petersburg",
  "Salem",
  "Salinas",
  "Salt Lake City",
  "San Antonio",
  "San Bernardino",
  "San Buenaventura",
  "San Diego",
  "San Francisco",
  "San Jose",
  "Santa Ana",
  "Santa Barbara",
  "Santa Clara",
  "Santa Clarita",
  "Santa Cruz",
  "Santa Maria",
  "Santa Rosa",
  "Sarasota",
  "Savannah",
  "Scottsdale",
  "Scranton",
  "Seaside",
  "Seattle",
  "Sebastian",
  "Shreveport",
  "Simi Valley",
  "Sioux City",
  "Sioux Falls",
  "South Bend",
  "South Lyon",
  "Spartanburg",
  "Spokane",
  "Springdale",
  "Springfield",
  "St. Louis",
  "St. Paul",
  "St. Petersburg",
  "Stamford",
  "Sterling Heights",
  "Stockton",
  "Sunnyvale",
  "Syracuse",
  "Tacoma",
  "Tallahassee",
  "Tampa",
  "Temecula",
  "Tempe",
  "Thornton",
  "Thousand Oaks",
  "Toledo",
  "Topeka",
  "Torrance",
  "Trenton",
  "Tucson",
  "Tulsa",
  "Tuscaloosa",
  "Tyler",
  "Utica",
  "Vallejo",
  "Vancouver",
  "Vero Beach",
  "Victorville",
  "Virginia Beach",
  "Visalia",
  "Waco",
  "Warren",
  "Washington",
  "Waterbury",
  "Waterloo",
  "West Covina",
  "West Valley City",
  "Westminster",
  "Wichita",
  "Wilmington",
  "Winston",
  "Winter Haven",
  "Worcester",
  "Yakima",
  "Yonkers",
  "York",
  "Youngstown",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];

const currentPosition = [
  { label: "Student" },
  { label: "Employee" },
  { label: "Unemployed" },
  { label: "Freelance" },
  { label: "Own a business" },
  { label: "Other" },
];
const careerBackground = [
  { checkbox: <input type="checkbox" />, label: "Marketing & Communications" },
  { checkbox: <input type="checkbox" />, label: "Design & Graphics" },
  { checkbox: <input type="checkbox" />, label: "Development" },
  { checkbox: <input type="checkbox" />, label: "Finance & Accounting" },
  { checkbox: <input type="checkbox" />, label: "Human Resources" },
  { checkbox: <input type="checkbox" />, label: "Consulting & Strategy" },
  {
    checkbox: <input type="checkbox" />,
    label: "Entrepreneurship & Innovation",
  },
  { checkbox: <input type="checkbox" />, label: "Education & Training" },
];
const startUpFounder = [
  {
    heading: "Early-Stage Dreamer",
    subheading: "I have a great idea and am looking to explore its potential",
  },
  {
    heading: "Aspiring Entrepreneur",
    subheading:
      "I'm eager to start a business but need guidance to get started",
  },
  {
    heading: "Startup Builder",
    subheading: "I’m developing a startup and working on its launch",
  },
  {
    heading: "Growth Seeker",
    subheading:
      "My startup is up and running, and I’m focused on scaling and growing it",
  },
  {
    heading: "Serial Entrepreneur",
    subheading: "I've started multiple businesses and aim to keep innovating",
  },
  {
    heading: "Tech Innovator",
    subheading: "I’m focused on developing cutting-edge technology solutions.",
  },
  {
    heading: "Market Strategist",
    subheading:
      "I excel at spotting market opportunities and crafting success strategies",
  },
  {
    heading: "Impact Creator",
    subheading:
      "I’m driven by creating social or environmental impact through my ventures",
  },
  {
    heading: "Creative Visionary ",
    subheading:
      "I excel at turning creative ideas into innovative business models",
  },
  {
    heading: "Regional Pioneers",
    subheading: "I’m committed to pioneering startup success in my community",
  },
];
const skills = [
  {
    checkbox: <input type="checkbox" />,
    label: "Technical (coding, engineering)",
  },
  { checkbox: <input type="checkbox" />, label: "Marketing and sales" },
  { checkbox: <input type="checkbox" />, label: "Business development" },
  { checkbox: <input type="checkbox" />, label: "Product design" },
  { checkbox: <input type="checkbox" />, label: "Finance and accounting" },
  { checkbox: <input type="checkbox" />, label: "Legal and compliance" },
  {
    checkbox: <input type="checkbox" />,
    label: "Other (please specify below)",
  },
  {
    checkbox: <input type="checkbox" />,
    label: "Entrepreneurship & Innovation",
  },
  { checkbox: <input type="checkbox" />, label: "Education & Training" },
];

const workOnStartUp = [
  { checkbox: <input type="checkbox" />, label: "Workshops" },
  { checkbox: <input type="checkbox" />, label: "Webinars" },
  { checkbox: <input type="checkbox" />, label: "Networking" },
  { checkbox: <input type="checkbox" />, label: "Sessions" },
  { checkbox: <input type="checkbox" />, label: "Not interested" },
];
const participatingEvents = [
  {
    label: "yes",
  },
  {
    label: "No",
  },
];
const community = [
  {
    checkbox: <input type="checkbox" />,
    label: "Networking with other founders",
  },
  { checkbox: <input type="checkbox" />, label: "Seeking mentorship" },
  { checkbox: <input type="checkbox" />, label: "Gaining market insights" },
  { checkbox: <input type="checkbox" />, label: "Learning new skills" },
  {
    checkbox: <input type="checkbox" />,
    label: "Finding co-founders or team members",
  },
  {
    checkbox: <input type="checkbox" />,
    label: "Other (please specify below)",
  },
];

function InnovatorsOnboardingPage() {
  const [stapperstate, setStapperState] = useState(1);
  return (
    <>
      {stapperstate == 1 && (
        <div>
          <MainHeading heading="Welcome to the community! Almost there." />
          <div className="flex justify-end items-end text-secondary">
            <span className="text-foreground font-semibold text-2xl">1</span>/
            <span>3</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2  mb-5">
              <div className="h-2 w-full rounded-full bg-primary"></div>
              <div className="h-2 w-full rounded-full bg-secondary"></div>
              <div className="h-2 w-full rounded-full bg-secondary"></div>
            </div>

            <p className="text-muted-foreground">
              Please provide your personal data to help us understand you better
              :)
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <Label> First Name</Label>
              <Input />
            </div>
            <div>
              <Label> Last Name</Label>
              <Input />
            </div>
            <div>
              <Label> Date of Birth</Label>
              <DatePicker />
            </div>
            <div className="w-full">
              <Label> Gender</Label>
              <Select>
                <SelectTrigger id="personal-info-country">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  {genderStatus.map((gender) => (
                    <SelectItem key={gender.value} value={gender.value}>
                      {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label> Country</Label>
              <Select>
                <SelectTrigger id="personal-info-country">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label>City</Label>
              <Select>
                <SelectTrigger id="personal-info-country">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex justify-end items-end mt-5">
                <Button
                  type="submit"
                  variant="default"
                  onClick={() => setStapperState(2)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {stapperstate == 2 && (
        <div>
          <MainHeading heading="Welcome to the community! Almost there." />
          <div className="flex justify-end items-end text-secondary">
            <span className="text-foreground font-semibold text-2xl">2</span>/
            <span>3</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2  mb-5">
              <div className="h-2 w-full rounded-full bg-primary"></div>
              <div className="h-2 w-full rounded-full bg-primary"></div>
              <div className="h-2 w-full rounded-full bg-secondary"></div>
            </div>

            <p className="text-muted-foreground">
              Please provide your professional data
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-5">
            <div>
              <Label> My career background</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Design & Graphics" />
                </SelectTrigger>
                <SelectContent>
                  {careerBackground.map((gender) => (
                    <SelectItem key={gender.label} value={gender.label}>
                      {gender.checkbox} {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label> Current position</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Freelance" />
                </SelectTrigger>
                <SelectContent>
                  {currentPosition.map((gender) => (
                    <SelectItem key={gender.label} value={gender.label}>
                      {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>
            <div>
              <Label> Skills (multiple selection)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Technical (coding, engineering), Product design" />
                </SelectTrigger>
                <SelectContent>
                  {skills.map((gender) => (
                    <SelectItem key={gender.label} value={gender.label}>
                      {gender.checkbox} {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>

            <div className="w-full">
              <div className="flex justify-end items-end mt-5">
                <Button
                  type="submit"
                  variant="default"
                  onClick={() => setStapperState(3)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {stapperstate == 3 && (
        <div>
          <MainHeading heading="Welcome to the community! Almost there." />
          <div className="flex justify-end items-end text-secondary">
            <span className="text-foreground font-semibold text-2xl">3</span>/
            <span>3</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2  mb-5">
              <div className="h-2 w-full rounded-full bg-primary"></div>
              <div className="h-2 w-full rounded-full bg-primary"></div>
              <div className="h-2 w-full rounded-full bg-primary"></div>
            </div>

            <p className="text-muted-foreground">
              Please provide additional info about your entrepreneurial
              experience{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-5">
            <div>
              <Label>
                {" "}
                What describes your current focus and goals as a startup
                founder?
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Early-Stage Dreamers: I have a great idea and am looking to explore its poten..." />
                </SelectTrigger>
                <SelectContent>
                  {startUpFounder.map((gender) => (
                    <SelectItem key={gender.heading} value={gender.heading}>
                      <div className="flex flex-col">
                        <div className="font-bold"> {gender.heading} </div>
                        <div>{gender.subheading}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>
                {" "}
                What are your main goals for joining our community?
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Networking with other founders, Seeking mentorship" />
                </SelectTrigger>
                <SelectContent>
                  {community.map((gender) => (
                    <SelectItem key={gender.label} value={gender.label}>
                      {gender.checkbox} {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>
            <div>
              <Label>
                {" "}
                Would you be interested in participating in community events in
                your city
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Workshops" />
                </SelectTrigger>
                <SelectContent>
                  {workOnStartUp.map((gender) => (
                    <SelectItem key={gender.label} value={gender.label}>
                      {gender.checkbox} {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>
            <div>
              <Label>
                Have you previously launched or worked on a startup?
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No" />
                </SelectTrigger>
                <SelectContent>
                  {participatingEvents.map((gender) => (
                    <SelectItem key={gender.label} value={gender.label}>
                      {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>

            <div className="w-full">
              <div className="flex justify-end items-end mt-5">
                <Button
                  type="submit"
                  variant="default"
                  onClick={() => setStapperState(3)}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InnovatorsOnboardingPage;
