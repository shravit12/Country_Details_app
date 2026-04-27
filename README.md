
🌍 REST Countries Explorer (React + Tailwind)

This is my solution to the REST Countries API Challenge from Frontend Mentor.
The project focuses on building a modern, responsive UI with real-time data fetching, filtering, and dark mode support.

🚀 Overview

This app allows users to explore countries across the world using real-time data from the REST Countries API.

✨ Features
🌐 View all countries on homepage
🔍 Search countries by name
🌎 Filter countries by region
📄 Detailed country page
🔗 View border countries
🌙 Dark / Light mode toggle


🔗 Links
🔗 Live Site: https://country-details-app-seven.vercel.app/
💻 GitHub Repo: https://github.com/shravit12/Country_Details_app.git

⚙️ Built With
⚛️ React (Vite)
🎨 Tailwind CSS (v4)
🌐 REST Countries API
🔁 React Router DOM
📦 Axios
🧠 What I Learned

During this project, I improved my understanding of:

API data fetching with Axios
Handling dynamic routes using React Router
Managing global state using Context API
Implementing Dark Mode using Tailwind + Context
Conditional rendering and UI states
Handling nested API data (languages, currencies, etc.)
Example (API Call)
export const getAllCountries = async () => {
  const res = await api.get(
    "/all?fields=name,flags,population,region,capital,cca3"
  );
  return res.data;
};
🔥 Continued Development

In future improvements, I want to:

Add loading skeleton UI
Improve animations & transitions
Optimize performance (memo, lazy loading)
Add error handling UI
Persist dark mode using localStorage
Make border countries clickable (navigation)
📚 Useful Resources
REST Countries API
React Router Docs
Tailwind CSS Docs
🤖 AI Collaboration

I used AI tools like ChatGPT during this project for:

Debugging API issues
Fixing React errors
Structuring components properly
Improving UI logic (dark mode, filtering)
What worked well:
Faster debugging
Cleaner architecture suggestions
What didn’t:
Some suggestions needed manual fixes (API fields issue)


👨‍💻 Author
Name: Shravit
GitHub: https://github.com/shravit12
Frontend Mentor: https://www.frontendmentor.io/profile/shravit12
🙌 Acknowledgments

Thanks to Frontend Mentor for providing such an amazing real-world project challenge.

⭐ Final Thoughts

This project helped me level up my React skills and understand real-world API integration deeply.
More advanced features and improvements coming soon 🚀