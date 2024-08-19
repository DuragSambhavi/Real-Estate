// import React from 'react';
// import { Helmet } from 'react-helmet';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Helmet>
//         <title>Miracle Real Estate</title>
//         <meta name="description" content="Find your dream home with Miracle Real Estate. Browse our listings for the best properties." />
//         <meta name="keywords" content="real estate, property, home, Miracle Real Estate" />
//       </Helmet>
//       <header className="App-header">
//         <h1>Welcome to Miracle Real Estate</h1>
//         <p>Your trusted partner in finding the perfect home.</p>
//       </header>
//       <main>
//         <section>
//           <h2>Featured Listings</h2>
//           <div className="listing">
//             <h3>Beautiful Family Home</h3>
//             <p>Located in the heart of the city, this home offers spacious rooms and a lovely garden.</p>
//           </div>
//           <div className="listing">
//             <h3>Modern Apartment</h3>
//             <p>A stylish apartment with modern amenities and a fantastic view of the skyline.</p>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <p>© 2024 Miracle Real Estate</p>
//       </footer>
//     </div>
//   );
// }

// export default App;




// import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';

// function App() {
//   useEffect(() => {
//     ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_TRACKING_ID');
//     ReactGA.pageview(window.location.pathname + window.location.search);
//   }, []);

//   return (
//     <div className="App">
//       <Helmet>
//         <title>Miracle Real Estate</title>
//         <meta name="description" content="Find your dream home with Miracle Real Estate. Browse our listings for the best properties." />
//         <meta name="keywords" content="real estate, property, home, Miracle Real Estate" />
//       </Helmet>
//       <header className="App-header">
//         <h1>Welcome to Miracle Real Estate</h1>
//         <p>Your trusted partner in finding the perfect home.</p>
//       </header>
//       <main>
//         <section>
//           <h2>Featured Listings</h2>
//           <div className="listing">
//             <h3>Beautiful Family Home</h3>
//             <p>Located in the heart of the city, this home offers spacious rooms and a lovely garden.</p>
//           </div>
//           <div className="listing">
//             <h3>Modern Apartment</h3>
//             <p>A stylish apartment with modern amenities and a fantastic view of the skyline.</p>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <p>© 2024 Miracle Real Estate</p>
//       </footer>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Miracle Real Estate</title>
        <meta name="description" content="Find your dream home with Miracle Real Estate. Browse our listings for the best properties." />
        <meta name="keywords" content="real estate, property, home, Miracle Real Estate" />
      </Helmet>
      <header className="App-header">
        <h1>Welcome to Miracle Real Estate</h1>
        <p>Your trusted partner in finding the perfect home.</p>
      </header>
      <main>
        <section>
          <h2>Featured Listings</h2>
          <div className="listing">
            <h3>Beautiful Family Home</h3>
            <p>Located in the heart of the city, this home offers spacious rooms and a lovely garden.</p>
          </div>
          <div className="listing">
            <h3>Modern Apartment</h3>
            <p>A stylish apartment with modern amenities and a fantastic view of the skyline.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Miracle Real Estate</p>
      </footer>
    </div>
  );
}

export default App;
