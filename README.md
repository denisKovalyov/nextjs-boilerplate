# NestJS Vercel Starter
This repository serves as a comprehensive starter template for building applications using NestJS, with deployment ready for Vercel. It provides a solid foundation with essential features and best practices pre-configured, allowing you to jumpstart your development process.

## Features
- **Authentication System**: Fully implemented authentication flow, including:
    - **Sign-In**: Secure user login functionality.
    - **Sign-Up**: New user registration with validation.
    - **Password Reset**: Mechanism for users to reset their passwords via email.

- **NestJS Framework**: Utilizes NestJS, a powerful and extensible Node.js framework, designed for building efficient and scalable server-side applications.

- **Vercel Integration**: Optimized for deployment on Vercel, enabling easy and quick deployment with continuous integration and delivery.

## Getting Started
Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/nestjs-vercel-starter.git
    cd nestjs-vercel-starter
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment Variables** (copy content of `.env.example` to `.env` file):
    ```bash
    APP_NAME=your-application-name
    GOOGLE_CLIENT_ID=google-client-id
    RESEND_API_KEY=email-provider-api-key
    ...
    ```

4. **Configure database**:
    ```bash
    npm run db:setup
    ```

5. **Run the Development Server**:
    ```bash
    npm run dev
    ```

## Deployment

To deploy the application to Vercel:
1. Sign Up or Log In to Vercel.
2. Create a New Project and link your GitHub repository.
3. Set Environment Variables in the Vercel dashboard to match those in your .env file.
4. Deploy your application with a single click.
