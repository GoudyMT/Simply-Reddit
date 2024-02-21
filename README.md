# Reddit Viewer App

A modern web application designed to provide a seamless and interactive way to browse Reddit content. Utilizing the Reddit API, this app offers a user-friendly interface to display posts, enable detailed post views with comments, and support responsive design for optimal usability across various devices.

## Core Features and Functionalities

### User Interface (UI)
- **Home Page**: Displays a list of posts fetched from the Reddit API, serving as the initial view for users.
- **Search Functionality**: Allows users to search for posts based on terms within specific subreddits or across Reddit.
- **Feeling Lucky**: Enables a random subreddit for the user to interact with and explore.
- **Detailed View**: Shows a detailed view of the post, including comments, when a user selects a post. This can be a modal or a new page/route.
- **Responsive Design**: The application is fully responsive, ensuring usability on desktops to mobile phones.

### Data Management and State
- Centralized state management with Redux for handling application state like posts, search terms, and selected post.
- Actions and reducers implemented to fetch, store, and manipulate data from the Reddit API.

### API Integration
- Integration with the Reddit API to fetch posts, comments, and other relevant data.
- Asynchronous API requests handling with loading states for user feedback.

### Navigation and Routing
- Use of React Router for managing transitions between different views such as the home page and detailed post views.

### Performance and Optimization
- Application performance optimization for fast load times and smooth interactions, including lazy loading for images and components.

### Accessibility and Browser Compatibility
- Accessibility considerations following WCAG guidelines to ensure the application is accessible.
- Compatibility testing across modern browsers like Chrome, Firefox, Safari, and Edge.

### Additional Features for Enhancement
- **Animations and Transitions**: Enhanced user experience with engaging animations and transitions.
- **Error Handling**: Robust error handling for informative messaging on application issues.

## Future Work
- **Social Sharing**: Functionality for sharing posts or comments on social media platforms.
- **Subreddit Subscription**: Feature to follow specific subreddits for updates on new posts.
- **User Commenting and Authentication**: If implemented, these features would allow users to interact more deeply with the content by commenting, upvoting, or downvoting.

## Core Libraries and Tools

### API Integration and Data Fetching
- `axios`: For making requests to the Reddit API.

### Routing
- `react-router-dom`: For navigation and routing within the app.

### UI Components and Styling
- `styled-components` and `sass`: For component styling.
- `material-ui` (@mui/material, @emotion/react, @emotion/styled) and `react-bootstrap`: For Material Design and Bootstrap components.

### Performance Optimization
- `react-lazy-load-image-component`: To lazy-load images.

### Accessibility
- `eslint-plugin-jsx-a11y` and `react-axe`: For ensuring accessibility best practices.

### Animations and Transitions
- `framer-motion` and `react-spring`: For creating engaging animations.

### Error Handling
- `sentry-react` (@sentry/react, @sentry/tracing): For error and performance tracking.

### Testing
- `jest`, `enzyme`, `@testing-library/react`, and `cypress`: For various levels of testing from unit to end-to-end.

### Development Tools
- `eslint`, `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`: For code quality and formatting.

## How to Contribute

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

For any questions or suggestions, please feel free to contact me. 
