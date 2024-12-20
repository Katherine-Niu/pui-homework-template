
<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

Describe your website (300 words).

* What is the purpose of your website?  
The goal is to create a fun quiz to help people discover new fragrances. The quiz will contain a series of questions that are meant to be playful and evocative. Based on the user's answers, the website will generate a recommended fragrance. For the recommended fragrance, there will be an image, description, and notes. The user can also see all of their answers to the quiz questions and change their answers to generate a different recommended fragrance.

* Who is the target audience?  
The target audience is anyone who is interested in finding a new fragrance or learning more about fragrances in general!

* What information do you convey with your website?   
I convey information about fragrances. 

* How is it interesting and engaging?
The questions are playful and provocative rather than overly utilitarian. After landing on the results page, users can change the answers to genrerate a different result. They can see how different answers lead to different results.  

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. The quiz begins on the first question. The user clicks on one of the answers and the next question will show up.  
2. After answering all of the questions, the user lands on the results page. Here, the user can click on an alternative answer to see how that would change their result. They can also click on the restart button to restart the quiz. 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Name of tool1: GSAP (Javascript library)  
   * Why did you choose to use it over other alternatives? (2 sentences max) 
   I chose GSAP because I wanted a javascript library that I could use to create animations. It seemed not to hard to learn and unlike anime.js, there were tutorials on how to set it up.
   * How you used it? (2 sentences max)  
   I used it to animate the answer buttons. After the user clicks on an answer, all of the answer buttons will rotate and fade away, and the next question loads after the animation ends. 
   * What does it add to your website? (2 sentences max)  
   It serves as feedback for the user when they click on an answer and it adds a feeling of playfulness.


## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

1. In my Figma prototype, I wanted to have navigation buttons to allow the user to go back and change their answers. However, after exploring similar quizzes online, I found out that most of them jump directly to the next question after the user clicks on an answer. When I did user testing with my prototype, one participant was expecting the same thing. Whe making the real website, I eliminated the back and forth buttons. 
2. In my Figma prototype, I wanted to show multiple fragrance recommendations on the results page. When building the real website, I realized it would add unnecessary complexity without adding new interactions, so I decided to only show 1 fragrance recommendation. 
3. In my Figma prototype, I wanted to have a question that the user could select by sliding a slider. When building the real website, I decided to keep it simple and only have single-select multiple choice questions.
4. During lab, Marshall suggested that I add a feature on the results page which allows the user to change their answers and generate different a result. Adding this feature offered more interactivity for the user. 

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max) 
1. Figuring out how to populate the HTML using javascript was challenging because there are many ways to do it. Oftentimes, nothing would show up on the screen and I had to figure out why. 
2. Generating a result based on the user's answers was challenging also because I had to figure out how to capture the user's answers, how to store information about the fragrance, how to match the user's answers to a fragrance, and how to access information about the fragrance to populate the HTML.


## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

I used Chat GPT to help me generate quiz questions and answers. I used this prompt: "The goal is to create a fun quiz to help people discover new perfumes. The quiz will contain a series of questions that are meant to be playful and evocative. Based on the user's answers, the website will generate a recommended fragrance. Based on this information, can you come up with 10 quiz questions?" From ChatGPT's output, I selected the question "Which of these scenes feel most inviting to you?" To come up with more evocative responses, I provided ChatGPT with quiz content from an existing fragrance quiz that I was inspired by and asked it to come up with questions with a similar tone. That's how I came up with the question "If your life had a soundtrack, which genre would it be?" and the corresponding answers which I went back and forth with ChatGPT to fine tune. 

I also asked ChatGPT "I want to code a personality quiz with 4 multiple choice questions. Each question will have 4 answers and only one answer can be chosen. The user will receive 1 perfume recommendation based on their answers. How do you write javascript code to calculate the recommendations?" It told me to assign a value to each answer and to tally the user's selections. Since my quiz was only 3 questions, it didn't make sense to tally the user's selections. I also wanted the result to be based on the specific combination of answers, not which value occurred the most, so I ended up not using ChatGPT's suggestion. Overall, I relied more on other internet resources other than Gen AI. 

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | Design: No | Plan: Yes | Write code: Yes | Debug: No |
| ChatGPT | Productivity | Design: N/A | Plan: 5 | Write code: 4 | Debug: N/A | 


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that it helped me generate quiz questions and answers. For example, 
  1. ChatGPT helped me come up with questions and answers that matched the tone that I was going after so I didn't have to write them from scratch. 
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that it didn't help me write code. For example, 
  1. I thought I would be able to use chatGPT to help me write code but the output wasn't helpful, so I ended up using other online resources and tutorials.
* ChatGPT tool did not influence my final design and implementation plan because I didn't know how to prompt chatGPT to give me specific code suggestions and I wanted to have fun designing the website myself using inspiration from existing websites. 

> Use patterns
* I accepted the generations when I asked it to generate content and I thought the content matched the tone that I was going for. For example, 
  1. ChatGPT once suggested that I use the question "If your life had a soundtrack, which genre would it be?" and I incorporated that question because I thought it was provocative. The corresponding answers included "Reggae beats, relaxed and rhythmic."
* I critiqued/evaluated the generated suggestions by thinking about whether or not it made sense for my project. For example, 
  1. ChatGPT once suggested that I assign a value to each question and tally up the user's selections, but I rejected the suggestion because I wanted the quiz result to be based on the specific combination of answers, rather than value has the most counts. Given that the quiz was only 3 questions, it didn't make sense to count the user's selections. 


> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: It helped me come up with quiz questions and answers that matched the tone I was going after. Since the content is not the focus of the project, it helped me save time that I couuld use on writing code. 
* Cons
  1. ChatGPT: The output won't be specific or helpful unless you prompt it the right way. Oftentimes, the output is inaccurate or nonsense. 


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT] 
https://chatgpt.com/share/67567baa-fa00-8009-9c87-01717d206957
https://chatgpt.com/share/67567c04-1224-8009-b7e1-17e73ea961b4 


### Accessibility Check

![Wave summary](images/wave-summary.png)
![Wave details](images/wave-details.png)

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

The goal is to create a fun quiz to help people discover new perfumes. The quiz will contain a series of questions that are meant to be playful and evocative. Based on the user's answers, the website will generate a recommended fragrance. For the recommended fragrance, there will be a list of notes and an explanation for why that fragrance was chosen. The user can also see all of their answers to the quiz questions and change their answers to generate a different recommended fragrance.

Users have the option of exploring the "fragrance wall". This will be another page in the website which shows all of the fragrances in the data set according to the fragrance categories. Clicking on a specific fragrance will open up information about the fragrance.

The data set can be a set of fragrances from a single fragrance brand, a set of fragrances by a single perfumer, or some internet list of "top 50 perfumes of the 2020s". Information about fragrances are publicly available on the fragrance database Fragrantica.

## High-Fi Prototypes

### *Prototype 1*

![title for prototype1](images/FP21.0.png)

Good visibility of system status. Participants knew which question they were on and how many were left. The effects for the hover state and selected state gave the participants feedback that the system was responding to their actions. One participant thought that selecting an answer would take her directly to the next question before she noticed the next button because she was used to online quizzes having this kind of interaction pattern. Another participant was unsure of whether she was supposed to select one answer or multiple because the question suggests selecting one answer but the prototype enabled multiple selections. 



![title for prototype1](images/FP21.2.png)

Participants understood that they should click on the circle to select the answer. However they associate this type of selection pattern with a slider, but found that the selection doesn’t function exactly the way a slider would function (i.e. you select by clicking not sliding). 

### *Prototype 2*

![title for prototype1](images/FP21.5.png)

One participant asked if there could be a way to show a more granular breakdown of the scent categories, similar to how they’re depicted on a fragrance wheel. She also asked if there could be a way to display the categories as a spectrum (e.g. more floral vs. less floral) because she associates quadrants with spectrums and currently the quadrants do not represent a spectrum.


![title for prototype1](images/FP21.4.png)

Participants wanted to see a visual representation of the notes in the fragrance, not just a text description. They thought that there should be more continuity between the individual fragrance page and the fragrance wall. Currently, the category that the fragrance falls under is only mentioned in the fragrance wall, but not mentioned in the individual fragrance page. 
…

## Usability Test

User feedback that I implemented in my design:

1. One participant mentioned that the fragrance notes is something that she always looks for when browsing fragrance online. Currently, the only description provided is a block of text, which users typically don’t read. In my iteration, I added a list of notes to the individual fragrance page. Each note has a colored circle next to it symbolizing the note (e.g. brown for vetiver). 
2. One participant mentioned that the only time that she sees any mention of the fragrance’s category is on the fragrance wall. She thinks it would be useful to have this information on the individual fragrance page as well. In my iteration, I added the fragrance category to the individual fragrance page to make a connection between this page and the fragrance wall. 
3. I added more granular categories to the fragrance wall. 
4. I got rid of the quadrant in the fragrance wall page and decided to have each fragrance category stacked on top of each other.

## Updated Designs

Show screenshots of your updated design based on the user feedback (\<100 words, \~2 images).
![title for prototype1](images/FP21.6.png)

![title for prototype1](images/FP2A1.7.png)

## Feedback Summary

Summarize the feedback you received in the lab session and discuss how it influenced your design (\~300 words). 

Marshall suggested that I stick with single-select quiz questions and use a static data set to keep the scope of the project manageable. Originally, I considered creating multiple-select quiz questions, but I decided to stick with single-select for now. 

Emme suggested that I ask questions that are not too abstract but not too literal either. She suggested that the questions can be metaphorical, so that instead of directly asking what notes someone likes, the quiz can ask them to choose a scene that resonates with them and the scene can represent something related to fragrance. Originally, I wanted to make the questions super abstract, but I decided to make them more grounded in reality.

## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- [ ] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [ ] ...
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due

- [ ] Week 11 Nov 11 \- Nov 15:  
- [ ] Week 12 Nov 18 \- Nov 22:   
- [ ] Week 13 Nov 25 \- Nov 29:  

  - [ ] Thanksgiving  
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due 

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
* 


## Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (\~300 words).

I aim to use chat GPT to generate ideas for quiz questions and generate the user description in the perfume recommendations page. I will obtain fragrance descriptions from online sources but I might use chat gpt to make the descriptions meet a certain length. I can also ask chat gpt for help with creating specific elements or interactions in javascript, css, and html. Chat GPT is good for generating copy for the website and it can be a good starting point for writing code. Using gen AI responsibly means that I need to be able to understand whatever code they write and double check with other sources such as w2school for accuracy. It also means that I need to cite whenever I use it.  

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* ChatGPT  
  * I will use it for … because it can help me …  
  * I will not use it for … because it might not be able to help me with …   
* GitHub Copilot  
* ...

### *Responsible Use*

How would you use Generative AI responsibly? 

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1* Portfolio

![Portfolio](images/idea1sketch1.jpg)

* What is the basic idea of your final project?

The goal is to create a portfolio website which showcases my design work to potential employers and industry professionals. Every page will have the navigation at the the top and contact info at the bottom. The main page will have a work section which contains an overview of 4 case studies and a brief (1-2 sentence) introduction. Each card under the work section will link to a case study for that project. The about page will contain a short bio and some interesting info.

* How do you plan to make your design interactive and engaging?  

I will create a sidebar menu on each case study page to enable users to jump to specific sections, create slideshows for users to browse through images, embed Figma prototypes, and use scroll effects to showcase different content as the user scrolls. I will use playful visual design and UX writing to show more personality. 


* How do you plan to make your design accessible?  

I plan to make my design accessible by using well-structured HTML, alt text for all images, large-enough targets, and good contrast between text and background. To reduce cognitive load, I will add descriptions under each image so that people know what it conveys and I will add use headings, bullet points, cards, and bolded text to draw attention to important things and make the content more digestible. 

* What information do you specifically want to convey and include on your website?

Under each card under the work section, I want to include a visually compelling mockup, a descriptive title that conveys why that project matters, labels that highlight the domain (e.g. UX Design, UX Research, Game Design, etc.), and button that says "View Project." 
The navigation will contain links to the work section, about page, and resume.


### *Idea 2* Perfume Recommendation Quiz

![Perfume Recommendation Quiz](images/idea2sketch1.jpg)

* What is the basic idea of your final project?

The goal is to create a fun quiz to help people discover new perfumes. The quiz will contain a series of questions that are meant to be playful and evocative. Questions can be a combination of single-select, multiple-select, sliders, and drag and drop. Based on the user's answers, the website will generate a recommended fragrance. For the recommended fragrance, there will be a list of notes and an explanation for why that fragrance was chosen. The user can also see all of their answers to the quiz questions and change their answers to generate a different recommended fragrance. 

Users have the option of viewing their recommended fragrance on a "fragrance wall". This will be another page in the website which maps out all of the fragrances in the data set according to the fragrance wheel or fragrance categories. Users can browse the fragrance wall by dragging the screen with their mouse. Clicking on a specific fragrance will open up information about the fragrance. 

The data set can be a set of fragrances from a single fragrance brand, a set of fragrances by a single perfumer, or some internet list of "top 50 perfumes of the 2020s". Information about fragrances are publicly available on the fragrance database Fragrantica. 


* How do you plan to make your design interactive and engaging?

I will incorporate different interaction patterns for the quiz questions such as single-select, multiple-select, sliders, and drag and drop. I will use creative UI elements, playful copywriting, and animated effects (if it's technically feasible) to create a visually appealing interactive experience. 

* How do you plan to make your design accessible?  

I plan to make my design accessible by using well-structured HTML, alt text for all images, large-enough targets, and good contrast between text and background. 

* What information do you specifically want to convey and include on your website?

I want to convey information about specific fragrances (their notes, fragrance category, accords, perfumer, description) and how the fragrance relates to the answers that users chose in the quiz. 
…

### *Idea 3* Mapping Food Insecurity in Pittsburgh

* What is the basic idea of your final project?

The goal is to create a data visualization website which maps where food insecurity exists in Pittsburgh geographically and shows the relationship between food insecurity, health outcomes, and demographics such as race and income. 

* How do you plan to make your design interactive and engaging?

As the user scrolls, different information and visualizations will be shown. The user might start by seeing a map which represents the food insecurity level of each census tract with colors (darker colors means more food insecure). As the user scrolls, the website will zoom in on a food insecure neighborhood such as the Hill District and they might see a another visualization which shows how long it takes for the average person in the Hill District to get to the nearest grocery store, another visualization which shows the average prices for specific items at the local stores (which are probably more expensive), and what kinds of food are available (probably mostly processed food). The stats for the Hill District will be compared to the stats for a food-secure neighborhood such as Shadyside to show the disparity. 

* How do you plan to make your design accessible?  

I plan to make my design accessible by using well-structured HTML, alt text for all images, large-enough targets, and good contrast between text and background. To reduce cognitive load, I will add descriptions under each image so that people know what it conveys. I will showcase small amounts of information at a time and use simple language to reduce cognitive load. 


* What information do you specifically want to convey and include on your website?

How long it takes for the average person in a food insecure neighborhood to get to a grocery store, the cost and availablity of healthy food in their local stores, and obesity level compared to a food-secure neighborhood. 
…


## Feedback Summary
Perfume Recommendation Quiz: Marshall suggested that I focus on defining clear user needs and user stories. For the result page, he suggested adding explanations that connect quiz answers to the perfume recommendation. I need to decide if the quiz questions will be single or multi-select and I need to consider how users will review and change answers to get a different recommendation. He recommended using a sample of real data to guide question design and limit the scope of the project. Classmates gravitated towards this idea because they found it to be fun and playful. 

Mapping Food Insecurity in Pittsburgh: Marshall thought this project is impactful and could benefit from a list of data inquiries that users would explore. He recommended finding similar projects online to get design inspiration and adopt useful features and address limitations. He also recommended on limiting the scope and focusing on essential usability-driven features to demonstrate my skills without being too ambitious. 

Design Portfolio: Marshall encouraged me to pursue creative ideas. The challenge this project would be to make myself stand out among the crowd of design portfolios. 

A key takeaway is being strategic about the scope of the project. 


## Feedback Digestion

Digest the feedback you got in the lab (\~300 words). Indicate which critique you will act on in your next design and why you chose to incorporate/dismiss pieces of critique.

I want to expand on my second idea which is the perfume recommendation quiz. Before I create a prototype, I will first write out a list of potential user stories and prioritize the most important ones. One user story could be "As a user, I want to be able to go back to a previous question so that I have the freedom to change my answer." I will have to decide on what data set to use, the style of questions (provocative vs. realistic), the user selection UI patterns(single select, multi-selecdt, slider, etc.), and how the answers will determine the final outcome. I also need to ensure that the user can navigate back and forth between questions during the quiz to change their answers, start over, know their progress, and change their answers after they complete the quiz to change the recommendation. I think all of the critique is valuable and there's nothing that I want to dismiss. 