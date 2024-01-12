## Post Manager | View, Search & Bookmark Post
A NextJS 13 based web app for viewing, searching, and bookmarking posts.

## How to Install
First, install node modules. On the root folder open terminal and write:

```bash
npm install
```
This command will install all the dependencies of the project

## Run the project
After succesfully installing dependencies. Run
```bash
npm run dev
```
This will open the project on [http://localhost:3000](http://localhost:3000)

## Brief Explanation
#### App Level
 - At the top level, you have the main app folder. Inside it you will find page.js which is the main entry point of the app.

#### Folder Structure
There are 4 sub folders in the project.

```1. Api```
```2. Bookmark```
```3. Components```
```4. Post```


- The api folder contains usePosts.js file which is responsible for interacting with external APIs and  fetching data. It encapsulates logic related to data retrieval and provides a clean separation of concerns within the project.

- Bookmark folder displays bookmarked posts within the app. It serves as a dedicated section for users to view their bookmarked content

- Components folder has 2 sepearte files. ```Header.js ``` and ```Footer.js```. These two components are utilized on multiple pages to ensure uniformity and improved rendering efficiency.

 - The Post folder contains a dynamic routing page that displays a single post when clicked on Read More button

## Features

- Pagination functionality
- Search post by title
- Bookmark post
- View individual post
- Mobile responsive



 ### Summary
 The Post Manager application is designed to enable users to view, search, and manage posts efficiently. Utilizing Next.js for seamless rendering, the app offers dynamic routing to view individual posts and bookmark functionality to personalize saved posts. With a structured hierarchy, components ensure reusability and maintainability, while the API folder simplifies fetching posts from an external source. 

