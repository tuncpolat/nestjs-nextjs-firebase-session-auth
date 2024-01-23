# Session-Based Authentication System

This repository contains the code for a session-based authentication system using NestJS, Next.js 14, Firebase, and MongoDB. It's designed to provide a secure and efficient way for handling user authentication and gated content access.

## Blog Post

For a detailed explanation of the concepts, user flows, and key implementation details, check out my blog post: [Implementing Session-Based Authentication with NestJS, Next.js 14, Firebase, and MongoDB](https://www.tuncpolat.dev/implementing-session-based-authentication-with-nestjs-nextjs14-firebase-mongodb).

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. **Clone the Repository:**
   ```
   git clone [Repository URL]
   cd [Repository Name]
   ```

2. **Install Dependencies:**
   - For the server:
     ```
     cd server
     npm install
     ```
   - For the web app:
     ```
     cd web
     npm install
     ```

3. **Environment Configuration:**
   - Make sure to set up your `.env` files in both the server and web directories based on the provided `.env.example` files.
   - For the web app, you'll need to configure `firebaseConfig` with your Firebase project settings.

## Running the Application

- To run the server:
  ```
  cd backend
  npm run start:dev
  ```
- To run the web app:
  ```
  cd web
  npm run dev
  ```

## Support

Whether you use this project, have learned something from it, or just like it, please consider supporting it by including the blog post above in your blog/website. If you have a question, don't hesitate to ask me... in that sense, let's connect 🤜🤛

[<img align="left" alt="www.simplweb.ch" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="www.softverse.ch" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website 2]
[<img align="left" alt="www.tuncpolat.dev" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][personal website]
[<img align="left" alt="Tunç Polat | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]

## License

This project is MIT licensed.

[website]: https://www.simplweb.ch
[website 2]: https://www.softverse.ch
[personal website]: https://www.tuncpolat.dev
[linkedin]: https://www.linkedin.com/in/tun%C3%A7-polat-b8203a116/