# Angular CMS Blog

This is a simple blog post that demonstrates how to use Angular with [contentful], a healdess CMS.

## Prerequisites

Before getting started, you will need to have the following tools installed:
- [Node.js]
- [Angular CLI]

## Getting started

```
git clone https://github.com/FabianGraml/angular-cms-blog.git
cd contentful-angular-demo
npm install
```

## Setup contentful

Next you will need to set up a [contentful] Account an create a new Space.
1. Go to [contentful] and sign up for a new account.
2. Once you're signed in, create a new space.
3. In the Content Model section, create a new content type called "Blog Post".
4. Add the following fields to the content type:
   - Title (Short Text)
   - Created At (Date & Time)
   - UrlHandle (Short text)
   - FeaturedImage (Media)
   - Summary (Long text)
   - Author (Short text)
   - Visible (Boolean)
   - ContentBody (Long text)
5. Publish the content type.
6. Create Content entry

## Configure [contentful] API
Now that you have created the content type, you retrieve the blog post data using the [contentful] API.

1. Go to the "APIs" section of your space and copy the Space ID and Content Delivery API Access Token.
2. Create src/environments/environment.ts file and add SPACE and add ACCESS_TOKEN for the corresponding values.
3. Save the file.

## Run the Demo

You can now run the demo locally.

```
npm run run:dev
```
Open your browser and go to http://localhost:4200. You should see a blog post with the title, author, date, and content.

## Author
Fabian Graml



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [contentful]: <https://contentful.com>
   [Node.js]: <https://nodejs.org/en/>
   [Angular CLI]: <https://angular.io/cli>
