# Mirius - Personal Profile in Political Economy through History

## Code Institute MS1 Project in User-Centric Frontend Development

The purpose of this project is to create a static (front-end) website with a minimum of three separate page areas using HTML and CSS while following UX industry conventions. This website is created for educational purposes.

[View website in GitHub pages](https://mirofrankovic.github.io/m-profile-project-01/)

![responsiveMiro](https://user-images.githubusercontent.com/28025554/115990177-c9e9af00-a5b9-11eb-96d8-1aefea10f453.PNG)

Image produced from [Am I responsive?](http://ami.responsivedesign.is/#)

[# Mirius](https://mirofrankovic.github.io/m-profile-project-01/)

The website is created to showcase my personal portfolio. In this website I highlight the historical process of the "rise and fall" of the Roman Empire. I can call this website my personal blog, where I can create a platform for audience interested for discussions in historical research. I use only credible sources for my research. I created a contact form where a new user who is interested for discussions would be able to contact me. 

## UX

I would like to show my audience what was going good and was going wrong in Ancient Rome.
This Roman Empire as we know now was a great empire two thousend years ago. Having said that, as we know now, Roman empire does not exist enymore. It is because during this time
we had a good time and a bad time. The good time was when the Rome was growing and centralized his power in capital city Rome. And bad time when Rome 
could not take a deep breath and had got to big problems likewise corruption, economic crissis and problems on the borders starting from third Century [A.D.](https://time.com/4462775/bc-ad-dating-history/) stands for anno domini, Latin for “in the year of the lord,” and refers specifically to the birth of Jesus Christ.  

**Project goals**

* Show where in historical context was Rome situated and how powerful was in terms of period of time.
* Show good emperors who helped Rome to grow and those emperors who were living in very complex live changing economical and political society in that time.
* Show how was society devided in social classes before crisis and during the crisis and find the reasons of that Roman crisis in third century A.D..
* Put Roman Empire to comparison with another similar empires who came alongs later. 

**USER STORIES**

**Comon user stories**

* As a user, I expect to access the website from any device, so that I can use the website anytime and anywhere. 
* As a user, I expect that this link will have a good access to historical facts.
* As a user, I expect to find on this website a credible sources for my study.

**New users**

* As a user, I expect to find an answer why Roman empire was so big and what happent later.
* As a user, I expect to find anoter links to this topic for more resources.
* As a user, I expect to find what was the Roman empire and when was the most powerfull.
* As a user, I expect to find a contact form where I would be able to ask a question related to my topic.


**DESIGN**

**Scope**

To achieve the strategic goals, I wanted to include the following features in this production release:

* **Navigation Bar** containing my name on the left side and navigation links.
* **Introduction page** and **Profile Page** containing informations about my background.
* **Timeline** containing timeline of my topic based on my story.
* **Info Link** containing links to each emperor to internet for more informations.
* **Basic Form**
* **Footer** containing social links.

**Structure**

I decided to create a single-page website incorporating only the necessary actions and info required by the ideal users to reduce cognitive overload.
The navigation bar would include the links to all six sections on the right and my name logo/home link placed on the left to follow industry standard and create familiarity with the user.
This allows the user to easily learn and understand the structure and effortlessly navigate through the site when using it for the first time. I decided that the links would also be strategically
placed in the intended user flow. i.e. Main Page->About->Timeline->Political Content->Gallery->Contact Form.
This would allow the user to learn about the experience the creator of this education blog has, their credibility in the industry with the references represent,
the large number of credible links presented to gain the user's trust propelling them towards the long term research.


**WIREFRAMES**

**Sceleton** 

* [Wireframes](https://github.com/mirofrankovic/m-profile-project-01/blob/main/assets/wireframes/wireframejpgAbout.jpg): Website contains 4 sections:About Me(My Basic Profile), Timeline(Timeline section with images), Gallery(Images and their profile), Contact Form(Contact Me) section. The website is based on scrolling effect.

**Surface**

I wanted to keep the majority of the website monochrome white stone bacground with black text and a few of buttons to keep my website minimalistic. I have created my logo with dual collors black and white. The full logo contains a text and a globe on the top. The globe because in my personal portfolio I cover all world history, especially world wide empires of the past. The text in my logo is basicly romanised *Mirius* version of my name *Miro*. Also, "Mir" in Russian language means worls/peace. I wanted to have my logo transparent.


## FEATURES

The fully responsive website consists of the navigation bar, footer and six sections: Main (Introduction), About (My Background), Timeline (What period of time I will introduce), 
Political Content (What was the current situation and outcomes), Gallery (Images of emperors representing their current time), Contact Form.
I used the Bootstrap​ plugin, Scrollspy, to automatically update links in the navigation list based on the current scroll position.
I also wanted to highlight the colour of the current section with the accent colour to remind the user of their location on the site.
I wanted to adjust the opacity of the navbar to allow it to blend in with the site and not take too much attention away from the content.
On small devices, I decided to code the navbar to collapse into a hamburger menu as it is ubiquitous and users understand it's purpose on mobile sites.

**Existing Features**

**Navigation Bar:** My navigation bar is fully responsive with links pointing to each section appart from one where the user will get from the main link to another. 
The links are on the right-hand side with the logo placed on the left to follow standard industry practice.
The navbar is fixed to allow the user ease of access to the site’s core functionalities and as a result, generates high usability for the one-page website. 

**Main Page:** The main page features the background image of a person who is a creator of this website. This sections contains an introduction text and a button to navigate
current user to the next section **About** . 

**About:** This section contains another image of a creator with a usefull text describing the bacground and the purpose of creating this website. This section is devided in two parts. The first part is an image and another part contains a text.

**Timeline:** In this section I use a timeline creted in HTML and CSS only. To keep my website minimalistic, I use Modal collapsed text or 
pop ups buttons which I will introduce in the next section. In this section I am using scroll plugin name "read more" to keep my website running smoohtly. The scrolling
effect will user active by clicking the button in this sections and will navigate the user to another section below. I use type effect where user can by hovering on the image find out what emperor is describing this period on my timeline.

**Political Content:** This sections features two main time period representing the "rise" and the "fall" of the Roman Empire. I used Bootstrap cards to implemant 
my images representing each period of time. Also, I use Modal pop ups buttons and for more informations I am introducing for an user an URL link to each text
inside Modal pop ups for more informations to relevant websites. By clicking "want to see more" the button will navigate the user to the gallery.

**Gallery:** In this section I had a unique opportunity to find a link where I would be able to show the user almost identical image of real Roman emperors
created digitally based on original shapes of their statues. I used Modal cards and for each emperor I put a link "click here" info link with URL link to find out more about each emperor in that period of time.
I have used only nine images in this gallery. Five emperors called "Good emperors" and 4 emperors "In crissis" althought we know more Roman emperors ruling in third century during this
crissis in that time. For better visual experience I separated emperors with different color. For "Five Goood Emperors" I used amber background image and for emperoros "In crissis" I used ametist color with bacground image.

**Contact Form:** Finally, once the user has gained knowledge and confidence from the content, they are presented with a simple Contact Form.
The form is compiled of only the necessary information required to avoid the user losing interest and not making contact.

**Footer:** The footer section contains contact, logo and copyright information as well as external links to the Social Media channels and email.
The link to the email makes it easier to get in touch if the user does not want to fill out the contact form. 
I also wanted to add a link to allow the user to jump back to the top instead of scrolling to further improve the overall UX.


**Features Left to Implement**

Due to time restraints, I was unable to include the following features but hope to implement them in a future release:

* Implement a Bootstrap Carousel of cards for the rest of Roman emperors from the third century AD.
* Implement a Carousel Timeline to show more features and make timeline more active.
* Live Chat app - To provide an instant connection between the user and company with high visibility on the site.


## TECHNOLOGIES USED

In the construction of this project I have utilised the following languages, frameworks, libraries and tools:

* **HTML**, **CSS** and **Java Script** programming languages.

* [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* The project used Bootstrap to simplify the website layout by integrating the Modals for further artist info and the Cards for event listings and company info.
  Also to provide overall responsive behaviour on all devices.

* [GitPod](https://www.gitpod.io/)
* I used **GitPod** as the development environment for my website. I also used Git for Version Control in the project.  

* [GiHub](https://github.com/)
* The project used **GitHub** to host my code that was created and pushed from GitPod.

* [Balsamiq](https://balsamiq.com/)
* I used **Balsamiq**, the rapid low-fidelity UI wireframing tool during the prototyping phase to structure the website and its content following best UX practices.

* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
* **Chrome Dev Tools** was used to consistently test the site and run reports from Lighthouse.

* [Google Fonts](https://fonts.google.com/)
* **Google Fonts** was used to style the website fonts.

* [Font Awesome](https://fontawesome.com/)
* I used the font & icon toolkit **Font Awesome** in the company section, artist Modals and footer links to define elements by a visual means.

* [YouTube](https://www.youtube.com/)
* For all my emperor images, I used the video-sharing platform **YouTube** and made a screenshot of images.

* [W3C Markup Validation Service](https://validator.w3.org/)
* The **W3C Markup Validation Service** checked the markup validity of Web documents in HTML.

* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* **W3C CSS Validation Service** was used to check the validity of my CSS in the project.

* [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
* I used **WAVE** to make my site more accessible to individuals with disabilities by detecting any potential issues.

* [Optimizilla Image Compressor](https://imagecompressor.com/) and [ResizeImage.net](https://resizeimage.net/).
* **Optimizilla** was used to further compress the images with custom compression options.
![optimizilla](https://user-images.githubusercontent.com/28025554/113716949-01fc8100-96e3-11eb-8204-c0b53026876c.PNG)


## TESTING

**UX STORIES TESTING**

As a ...

**VALIDATION**

I used the [W3C Markup Validation Service](https://validator.w3.org/) to check the [Markup and W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to check the CSS validity of the site.

![htmlvalidator](https://user-images.githubusercontent.com/28025554/116007345-42c32800-a607-11eb-90d1-7f257cea9f6c.PNG)

After fixing the errors on both testing sites, the site eventually passed the W3C Validation.

![htmlvalidatorFinal](https://user-images.githubusercontent.com/28025554/116007456-bbc27f80-a607-11eb-962a-9f2932a9bdd7.PNG)

Fix Markup and W3C CSS Validation Service.

![cssvalidator](https://user-images.githubusercontent.com/28025554/116007602-6f2b7400-a608-11eb-9a91-407d0af463be.PNG)

* The [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/) was used to test for colour contrast on the project.
![colorContrast](https://user-images.githubusercontent.com/28025554/114379599-e7158b00-9b80-11eb-8e84-ee4170d44156.PNG)
Add another contast.
![colorContrastFinal](https://user-images.githubusercontent.com/28025554/114379900-51c6c680-9b81-11eb-894a-a0eec127498e.PNG)

* I constantly tested the code in [Chrome Dev Tools](https://developer.chrome.com/docs/) and often ran Lighthouse audits to identify and fix issues that affected the site's performance, accessibility and user experience.
![lighthouse](https://user-images.githubusercontent.com/28025554/113860855-6b8d9580-979e-11eb-87d7-9f7f1d7e2fcc.PNG)

After fixing the errors in the lighthouse.

![lighthouseval](https://user-images.githubusercontent.com/28025554/116007708-0bee1180-a609-11eb-8100-091ab936f4f7.PNG)

In order to have optimal user experience, the site needs to be accessible. I would continually run the URL through WAVE Web Accessibility Evaluation Tool to highlight potential issues. I continued until no further errors were given.

![wavevalidatoraccesibility](https://user-images.githubusercontent.com/28025554/116007866-b23a1700-a609-11eb-9057-4628d3856e6c.PNG)

## DEPLOYMENT

This site is hosted using GitHub pages, deployed directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.
For the site to deploy correctly on GitHub pages, the landing page must be named index.html.

**LOCAL DEPLOYMENT**

To run locally, you can clone this repository directly into the editor of your choice by using the following command:
```
git clone https://mirofrankovic.github.io/m-profile-project-01/
```
To cut ties with this GitHub repository, type:
```
git remote rm origin
```
into the terminal.

My project was developed using the IDE, Gitpod. I deployed my website from the GitHub repository to GitHub Pages using the following steps:

1. I selected the Settings tab in my GitHub repository.

2. I located the GitHub Pages section and chose the Main branch as the source to enable GitHub Pages.

3. Once I saved the Main Branch as the source, the page refreshed and I located the URL to the deployed website.

4. I then followed the link to observe and verify the published GitHub page.

## CREDITS

The source for my website I was using from credible website such as [Britannica](https://www.britannica.com/).

**CODE**

**CONTENT AND MEDIA**

The images used in this site were obtained from the following sources: [Youtube](https://www.youtube.com/watch?v=BmCvKM_Y2tE)


**ACKNOWLEDGEMENTS**

I decided to develop this project in honour of my passion to the history and political-economy, based on that I demonstrated my project.

I took inspiration from the following sources however I did implement my own custom code with each snippet also:

* **Bootstrap** was used to implement [Scrollspy](https://getbootstrap.com/docs/5.0/components/scrollspy/) for the Navigation and the [Contact Form](https://getbootstrap.com/docs/5.0/forms/form-control/).

* I came across **Bootstrap** when I was searching for inspiration for the Emperors' [Gallery Cards](https://getbootstrap.com/docs/5.0/components/card/).

* During development I found solutions to my coding queries in [Stack Overflow](https://stackoverflow.com/) when I had difficulties maintaining equal height in the **Bootstrap Cards** and when I wanted my [Horizontal Timeline](https://stackoverflow.com/questions/42491338/positioning-of-elements-in-a-horizontal-timeline) I found solutions in [CodePen](https://codepen.io/).


To conclude, I would like to thank my mentor Guido Cecilio Garcia Bernal for his support and advice.













