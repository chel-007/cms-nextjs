
## Integrating Affinidi Products into a Novel Application

In this writeup, I delve into the integration process of Affinidi Login & Vault into a real-world application, as part of the bounty sponsored by Stackup.



### Implementing Affinidi with CMS Fandom Site

#### Quick Introduction to My Idea

After Learning about Affinidi and recognizing its potential in various Web3 applications, I was intrigued and decided to incorporate it into an ongoing personal project, and saw this bounty as a perfect opportunity to do so.

CMS (Call Me Super) Fandom is a site I've been designing some concepts about, now built to a pre-alpha stage, with plans for continuous development. As the name suggests, it serves as a fan site for my upcoming animated series.

The integration of Affinidi seamlessly aligned with my initial vision for the site, and it even inspired me to push further in one particular aspect: **creating an app experience that offers unlimited possibilities for players**. Leveraging Affinidi, I introduced a new set of features that not only enhanced the app's functionality but also made it more intuitive and comprehensive.

## Features Implemented with Affinidi Products

### Multilingual Support

In envisioning a fan site that could be accessible to a global audience, i wanted to test out the integration of multilingual support to ensure inclusivity and user comfort. I opted to support five primary languages/countries from the outset: **Nigeria, Spanish, French, Singapore, and India**.

The choice of languages was to showcase the cool translation capabilities of the app, specifically focusing on Spanish and French for broader accessibility, while Singapore and Indian languages were added for comfortable testing with the Stackup team and Users.

***NB: And Nigeria, to comfortably test with my userData from Affinidi xD.***

Utilizing Affinidi's functionality to determine the user's country, I seamlessly redirected them to the appropriate **country-specific homepage**. Notably, i executed this process without relying on external libraries, resulting in significantly enhanced translation speed.

### Page Translation and Routing for Scenes, UserProfile, Merch Pages

Beyond the implementation of a multilingual application, the core focus was ensuring that each component and its elements are presented in the user's country language. With **dedicated pages tailored for each supported country**, the application seamlessly routes users to key pages, such as scenes, user profiles, merchandise, and a countdown page.

Utilizing the user's country retrieved from Affinidi's vault or (passed & queried)  from the URL parameters, the application dynamically fetches the corresponding translation JSON. Subsequently, it translates the page components, ensuring that each element is shown in the user's native language.


#### Scenes
In the Scenes section, there are three (3) scenes which are translated accordingly, covering titles, durations, and plot summaries. Additionally, navigation links, scene next/prev button and  are also translated, ensuring a comprehensive understanding of the page for users.

#### User Profile
Taking inspiration from Stackup's Affinidi Quest examples, I enhanced the PEX Query within the app's Affinidi Project portal to include additional user data such as **profile pictures, gender, and date of birth**. Using these, basic user data is displayed in the user profile section, while seamlessly translating input labels for enhanced understanding.



### Content Age Restriction Feature

Utilizing Affinidi's seamless access to user data, I implemented a straightforward yet effective feature in the CMS Fandom App: **Content Age Restriction**. This feature restricts access to Scene 2 for users under 18 years of age due to the presence of some hard words in the plot and title. xD 🤔

To test this feature, users can simply adjust their age in Affinidi's Vault, triggering the restriction for those under 18. 
Leveraging Affinidi's capabilities, this feature was effortlessly integrated into a single component within the Scene section of the app.

### Currency and Rate Conversion

On the Merch page, various products are displayed with their ***names, images, age group, preferred gender, and other details***. To enhance user experience, I implemented a feature that automatically **converts the prices of these items into the user's local currency**. Supported currencies include NGN, EUR, SGD, and INR, depending on the user's country (Nigeria, Spain, France, Singapore, and India).

The implementation involved determining the appropriate conversion rate for each supported country and then applying this rate to convert the prices accordingly. If the user's country is not supported, **the default currency is set to USD**.

This intuitive feature enhances the shopping experience for users browsing CMS merchandise.

### Personalized Shopping Experience

Another feature i integrated was a personalized shopping feature into the Merch Page, allowing users to view products tailored specifically to them. This feature utilizes basic user data such as **age group and gender**, which has been collected from the Vault after User Login with Affinidi.

When users opt for personalized shopping, the system **filters all available products and displays a curated selection of up to six items that match their age group** (*child, teen, youth, adult, or senior*) **and gender** (*male, female, or unisex*). 

This customization enhances the shopping experience by presenting users with merch products that align more closely with their preferences.


Here's a refined version of your description:

---

### Timezone Feature - Countdown Timer

The purpose of this feature is to display the correct release time for the next episode or scene video of CMS on YouTube, **in the user's local timezone**. 

Given that the app already supports multiple languages, it's made sense to show users the release date in their own timezone for better convenience.

Due to the vast number of timezones worldwide, the current implementation focuses on ***supporting timezones closely related*** to the supported countries:

- Nigeria: 'Africa/Lagos'
- Spain: 'Europe/Madrid'
- France: 'Europe/Paris'
- Singapore: 'Asia/Singapore'
- India: 'Asia/Kolkata'

Using JavaScript's Date and Time functions, i calculate the time difference between the supported timezones and GMT(greenwich meridian time). Then determine the ***difference between this adjusted time and the specified release date***. Currently, the release date is a static value but could be dynamically retrieved from a database much later.

Here's a refined version of your sentence:

That concludes an overview of the features of CMS Fandom, all made possible through the seamless integration of Affinidi's Login & Vault functionalities.


## How to Use the App

Using and accessing the CMS Fandom app is a breeze. Follow these steps to experience the full website features:

- Begin by visiting the site at [https://callmesuper-fandom.netlify.app/](https://callmesuper-fandom.netlify.app/)
- Look for the Affinidi Login Button positioned at the Top Right corner.
- Once logged in successfully, you'll be redirected to one of the five country pages or the General Homepage.
- On the Homepage, you can dive into the Scenes by clicking the "Read Scene" buttons below.
- Which will transport you to the respective Scene (1/2/3) pages, seamlessly translated for your convenience.
- Navigate through the scenes using the Next & Prev buttons or return Home whenever you please.
- If you're under 18, Scene 2 is temporarily off-limits.
**NB:** *To test this feature, simply tweak your age info briefly in Affinidi's Vault, log out, and log back in.*
- Next, you can visit the Userprofile Page, where all your user details are beautifully displayed, including your Avatar Profile Picture.
- Drop by the Countdown page to catch a glimpse of the ticking timer, ***counting down to the next release of my YouTube video*** for the Call Me Super animated series. It would be displayed in your local timezone.
- Explore the Merch Page and browse the adorable products listed. Click the "Use Personalized Shopping" button to have items filtered for your preference.
- Check out the prices of items in your local currency, enhancing the shopping experience more (You can't add Items to Cart and Checkout in this Build).
- Double Click on the Logout Button to well, ***Logout***.
- Rinse and repeat for endless enjoyment! 🔄





***Next, Let's delve into the codes powering this application and explore how it's been constructed.***

## Integrating Basic Login Auth (Next.js) from Affinidi Docs
The initial step involved cloning the directory of the ***Affinidi Next.js Basic Login Auth***. The project came with most of the necessary packages, components, and imports, making it seamless to set up the application connected to my Affinidi Portal(cms fandom).

While there was a slight learning curve, especially concerning the callback URL, once I grasped this concept, toggling between local and production environments became straightforward.

## Developing the Main App Page, Navbar, and Implementing Country-Specific Redirect

* The main app page serves as the introduction to the application, acting as the landing page alongside the Navbar component. Initially, it shows only the login button since users couldn't navigate to other pages like Merch, Scenes, or UserProfile without specifying the country ID.

> The Code for this Component can be Found in 
> * pages/index.tsx
> * component/landingpage
> * component/navbar

Here's how it works: The Navbar utilizes the authenticated state of the user to render the full set of links, revealing them only after a successful login.

Upon user login, the Navbar, present on every page, verifies if the user's country is among the five supported ones. If so, it ***directs them to the appropriate homepage and displays the links***. Otherwise, it redirects them to the general page.

Additionally, I've implemented logic to switch to the logout button upon successful user login. Notably, the Navbar redirects users to the country homepage ***only if they are on the MainPage*** (isSigninPage), eliminating the need for redirects on other pages (which would be weird behavior).


## Country Pages, Translation, Dynamic Routing

After landing on their respective country homepage (or the general one), users are presented with their first view. To streamline the process, I decided to create separate homepage layouts for each of the five supported countries. This approach was also necessary since i would be creating individual country-specific pages within the pages directory.

> The Code for these Features can be Found in 
> * pages/india, pages/nigeria, pages/france, pages/spain, pages/singapore
> * component/India {Nigeria, France, Spain, Singapore}

Each of the country pages features a `loadTranslations` function responsible for retrieving the appropriate translation file based on the country provided as a string. By using the country as a key, the function fetches the corresponding translation file and returns it. In cases where the country isn't found, the function defaults to English translation. 

Throughout the app, I ensure uniformity by ***converting the country ID to lowercase***.

The returned components in the page utilize this translation by passing a string for each element containing text.

Dynamic routing occurs primarily from two main points: ***the Navbar and the Read Scene buttons***. I begin by creating a `[country]` folder inside the `pages` directory, which serves as the variable for passing the user's country. Routing is then established using paths like **`/${user.country?.toLowerCase()}/userprofile`**



## Translation Json Objects 
I utilize five translated JSON files containing objects with key-value pairs used for translation purposes throughout the application. These translation files, along with a language utilities function (`languageutils.js`), reside within the `utils` folder. Each file encompasses objects, such as `navigation`, `country`, `userprofile`, `merch`, `countdown`, and `scenes` (1, 2, 3), tailored to specific areas of the application.

> The Code for this can be Found in 
> * src/utils/translations (en,json, es.json, fr.json, mn.json, hi.json) 
> * src/utils/languageutils.js (used only by the navbar to get translation)
> * **loadTranslation** function in each Country Homepage and Navbar Link Pages


## Countdown Page Elements
The Countdown Page was more advanced because of the feature i wanted to build compared to other sections of the application (*which mostly involved fetching user data, implementing translations, and styling components*). 
However, I wanted to approach the countdown functionality in a dynamic manner.

Initially, one approach could have involved querying the user's country and using it to define five target time zones: Africa/Lagos, Europe/Madrid, Europe/Paris, Asia/Singapore, and Asia/Kolkata. From there, I could have specified the time zone differences from UTC and utilized this data to calculate the timer countdown. However, this method wasn't really cool as it didn't ***account for changes in Daylight Savings Time*** and wasn't intuitive overall.

So I used Luxon, a robust and user-friendly JavaScript library designed for handling dates and times. It uses the IANA Database to Track and Update Timezones with precision.

Using Luxon, I began by establishing the user's time zone and storing it within a variable. Additionally, I formatted the release date (countdown timeline) into a DateTime string, facilitating a detailed and direct comparison between the two time points (***releaseDate & users Local Time***) across days, hours, minutes, and seconds.

I then integrated this time difference within a setInterval function, where the timer deducts one second every second, ensuring an interactive countdown for the user. Accordingly, in cases where the user's time zone isn't supported, the function defaults to ***GMT*** TimeZone.

> The Code for this can be Found in 
> * src/components/countdown


***That concludes most of the Component and Feature Breakdown Integrated into CMS Fandom Using Affinidi Login & Vault.***


## Merch Items for CMS :example (built with AI)

<img src="https://i.ibb.co/0rY5Ghy/perfecttshirt.png" alt="perfecttshirt" border="0">
<img src="https://i.ibb.co/zx2Q2yV/perfecthood.png" alt="perfecthood" border="0">
<img src="https://i.ibb.co/ph9nx3R/wbrubberhands.png" alt="wbrubberhands" border="0">
<img src="https://i.ibb.co/1s9Q9Zw/bpfly.png" alt="bpfly" border="0">
<img src="https://i.ibb.co/192WCvv/redbluesneakers.png" alt="redbluesneakers" border="0">
<img src="https://i.ibb.co/0XpxhdX/hoodie2.png" alt="hoodie2" border="0">
<img src="https://i.ibb.co/vYmM0VR/mp.png" alt="mp" border="0">



- ### Thanks for reading my writeup on the process of Building and Integrating Affinidi Products into a Novel Application.