import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import '../styles.css';

const slidesData = [
    {
        title: "Kaushik Chandrasekhar",
        content: (
            <>
                <p>Edinburgh, United Kingdom</p>
                <p>+44 7776596367</p>
                <p>kaushik315@gmail.com</p>
                <p>Portfolio: <a href="https://kaushik-portfolio-phi.vercel.app/" target="_blank" rel="noopener noreferrer">https://kaushik-portfolio-phi.vercel.app/</a></p>
            </>
        ),
        image: "" 
    },
    {
        title: "A Hobby to Maintain a Healthy Body",
        content: (
            <>
                <p>To maintain a healthy mind, I hit the gym regularly. This helps me focus on my other endeavors and hobbies.</p>
            </>
        ),
        image: "" // Update with a gym-related image
    },
    {
        title: "A Hobby to Keep Me Curious and Learn New Things",
        content: (
            <>
                <p>I chose to study computing and build my career in this field because of my curiosity. The computing realm is always changing, and there are always new things to learn.</p>
            </>
        ),
        image: "" // Update with a computing-related image
    },
    {
        title: "A Hobby to Keep Me Creative",
        content: (
            <>
                <p>When life gets boring, you should always have something creative to do. For me, it was learning new instruments. Over the years, I have learned several instruments, and with that knowledge, I'm creating music for pets at the moment, which is satisfying my creative need.</p>
            </>
        ),
        image: "" // Update with a music-related image
    },
    {
        title: "A Hobby to Follow My Passion",
        content: (
            <>
                <p>I have been interested in 2 wheels my whole life, from push bikes to motorcycles to mountain bikes. Glasgow City Council promotes and hosts cycling events in Scotland, and working as a junior developer here will help me be a part and contribute to upcoming cycling events.</p>
            </>
        ),
        image: "" // Update with a cycling-related image
    },
    {
        title: "Professional Summary",
        content: (
            <>
                <p>Motivated Software Engineer with advanced degrees in Computing and Data Analytics.</p>
                <p>Solid foundation in web application development and a diverse technical skill set.</p>
                <p>Proficient in various programming languages and frameworks.</p>
                <p>Experienced in data analysis and visualization.</p>
            </>
        ),
        image: "" // Generic tech background or collage of programming languages
    },
    {
        title: "Technical Skills",
        content: (
            <>
                <p><strong>Programming Languages:</strong> JavaScript, C++, C#, HTML, PHP, CSS, Java, Python</p>
                <p><strong>Data Analysis and Visualization:</strong> SAS, Microsoft Excel, Tableau</p>
                <p><strong>Web Development:</strong> WordPress, Wix.com</p>
                <p><strong>Additional Skills:</strong> SQL, Git, Social Media Ads</p>
                <p><strong>Development Tools:</strong> Visual Studio ASP.NET MVC, MERN</p>
            </>
        ),
        image: "" // Icons or logos of the mentioned skills
    },
    
    {
        title: "Professional Experience",
        content: (
            <>
                <p><strong>Full Stack Developer:</strong> Advanced skills in web application development using MERN stack, HTML, PHP, CSS, ASP.NET, python, SAS, Excel and Java.</p>
                {/* <p><strong>Developed Web Applications:</strong> Food delivery system, petition filing website.</p> */}
                <p><strong>Treasurer at Edinburgh Napier Mountain Bike Club:</strong> Managed finances, organized events, created promotional materials.</p>
                <p><strong>Media Volunteer at UCI World Downhill Championship 2024:</strong> Managed media activities and issued passes.</p>
                <p><strong>Healthcare Experience:</strong> Provided essential care to clients with learning difficulties, administered medication, maintained patient records.</p>
            </>
        ),
        image: "" // Logos or icons representing each role or activity
    },
    {
        title: "Education",
        content: (
            <>
                <p><strong>Master of Science – Computing with Professional Placement:</strong> Edinburgh Napier University, 2023 - Present</p>
                <ul>
                    <li>Developed web applications, Battleship Game, and scripting using Python.</li>
                </ul>
                <p><strong>Master of Science - MS: Data Analytics:</strong> De Montfort University, 2022</p>
                <ul>
                    <li>Dissertation on customer behavior, data exploration, and visualization.</li>
                </ul>
                <p><strong>Bachelor of Science: Computer Application:</strong> VLB Janakiammal College of Arts and Science, 2018</p>
            </>
        ),
        image: "" // University logos or graduation cap icon
    },
    {
        title: "Key Projects",
        content: (
            <>
                <p><strong>Food Delivery System:</strong> Developed using HTML, PHP, CSS.</p>
                <p><strong>Battleship Game:</strong> Created using Java.</p>
                <p><strong>Petition Filing Website:</strong> Cloned using ASP.NET.</p>
                <p><strong>Customer Behavior Study:</strong> Data exploration and cleansing on SAS, visualization using Excel and SAS base.</p>
                <p><strong>West Midlands Police Data Analysis:</strong> Analyzed crime data pre and post-COVID-19.</p>
            </>
        ),
        image: "" // Screenshots or icons representing each project
    },
    
    {
        title: "Visit My Portfolio",
        content: (
            <>
                <p>To see more of my work, visit my portfolio:</p>
                <p><a href="https://kaushik-portfolio-phi.vercel.app/" target="_blank" rel="noopener noreferrer">https://kaushik-portfolio-phi.vercel.app/</a></p>
            </>
        ),
        image: "" // Screenshot of your portfolio homepage
    },
    {
        title: "Contact Information",
        content: (
            <>
                <p><strong>Email:</strong> kaushik315@gmail.com</p>
                <p><strong>Phone:</strong> +44 7776596367</p>
                <p><strong>Location:</strong> Edinburgh, United Kingdom</p>
            </>
        ),
        image: "" // Icon of an envelope, phone, and location marker
    }
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('slide-in');

    const goToNextSlide = () => {
        setAnimationClass('slide-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
            setAnimationClass('slide-in');
        }, 300);
    };

    const goToPreviousSlide = () => {
        setAnimationClass('slide-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
            setAnimationClass('slide-in');
        }, 300);
    };

    return (
        <div className="slideshow">
            <button onClick={goToPreviousSlide}>Previous</button>
            <Slide slide={slidesData[currentIndex]} animationClass={animationClass} />
            <button onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default Slideshow;
