# 🖥 Preview

## ![preview](https://i.imgur.com/SXsJ2sx.png)

# 🚀 Get started

<details>
<summary>Contentful API Keys</summary>
<p>
<br>
1. Create a <a href="https://www.contentful.com/sign-up/">Contentful</a> account <br>
2. Add a Community Space (It's free!)  <br>
3. Choose "I create content"  <br>
4. Go to content model and start to add content type  <br>

> 📌 In this portfolio website, it has 3 Content type which is:
>
> 1. BlogPosts
> 2. FeaturedProjects
> 3. Projects
>
> You must add this exact name since it's the ID that's used in the code.

5. Add the content type according to these fields: <br>

   ![](https://i.imgur.com/PhC2Quk.png)
   ![](https://i.imgur.com/OD1oWG2.png)
   ![](https://i.imgur.com/nIkloDk.png)

6. Go to settings -> API Keys -> Content Delivery / Preview tokens -> "Your space name"
   copy the Space ID and Content Delivery API access token <br>
7. Write them down, we will need them later.<br>
</p>
</details>

<details>
<summary>Google Analytics API Keys</summary>
<p>
<br>
  1. Create a <a href="https://analytics.google.com/">Google Analytics</a> account, in the <i>property settings</i> part, don't forget to <b>turn on Universal Analytics</b><br>
  2. After that, you'll see a code starting with <code>UA-</code> <br>
  3. Copy those code and write it down. We will need this later.<br>
  </p>
</details>

<details>
<summary>Environment Variables Example</summary>
  <image src="https://i.imgur.com/oSW1VT8.png"/>
</details>

### Starting the Project

Install the dependencies with `npm i` or `yarn`  
Start the project by `npm run dev` or `yarn dev`

### Deployment

You can deploy easily by using [Vercel](https://vercel.com/) 🎉

[![Deploy with Vercel](https://vercel.com/button)](<https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftyger796%2Fportfolio&env=NEXT_PUBLIC_BASE_URL,CONTENTFUL_SPACE_ID,CONTENTFUL_ACCESS_TOKEN,NEXT_PUBLIC_UA_CODE&envDescription=API%20keys%20needed%20for%20the%20project%2C%20featuredproject%20and%20blog%20information&envLink=https%3A%2F%2Fgithub.com%2Ftyger796%2Fportfolio&project-name=portfolio&repo-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Ftyger796%2Fportfolio&demo-title=Example&demo-description=My%20personal%20portfolio%2C%20made%20with%20NextJS%2C%20Contentful%20CMS%2C%20and%20Chakra%20UI%20(%20%3D%EF%BC%BE%E2%97%8F%20%E2%8B%8F%20%E2%97%8F%EF%BC%BE%3D%20)&demo-url=https%3A%2F%2Fwww.tyger796.com%2F&demo-image=https%3A%2F%2Fi.imgur.com%2FSXsJ2sx.png>)

## 📌 Overview

`pages/index.js` = Homepage  
`pages/projects/index.js` = Projects archive page  
`pages/blog/index.js` = Blog listings page  
`pages/blog/[slug].js` = Blog post page  
`pages/account/index.js` = Accounts

## ⚙ Tech Stack

- Next.js
- Chakra UI
- Contentful CMS
- MDX (next-mdx-remote)
- Supabase (Database)
