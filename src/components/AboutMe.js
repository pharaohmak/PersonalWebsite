import React from 'react';
import './AboutMe.css';
import headshot from '../assets/headshot.jpeg';
import resume from '../assets/resume.pdf'
import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import js from '../assets/skills/js.svg';
import react from '../assets/skills/python.svg';
import python from '../assets/skills/python.svg';

const AboutMe = () => {
    return (
        <div>

            <section className="About__AboutStyles-sc-1ti1baf-0 tUrMA grid-wrapper ">
                    <div class="headshotContainer "><img src={ headshot } alt="Head-shot of Makram. They have short curly black hair, with a big smile, and they are wearing a white and blue button-up. They look very sophisticated. " /></div>
                    <div class="aboutInfo ">
                        <h2>About me</h2>
                        <p class="visualHeading ">Hey, I&#x27;m Mak!</p>
                        <p>Are You Looking For a Reliable, Hardworking, and Effective Problem Solver? Good News, You Can Stop looking!</p>

                        <p>I am a Software Engineer with a specialization in Mobile App Development, eCommerce Development, and Front-End Web Development and Design. I have a strong grasp of user interface know-how with HTML, CSS, and Javascript; A strong understanding of industry trends and emerging technologies; and experience with responsive, interactive, and adaptive design.</p>

                        <article>
                        <p>Problem: It's difficult to stay up-to-date with the latest and greatest technologies and practices, and it's even more difficult to stay current with emerging trends.</p>
                        <br/>
                       <p> Agitate: Lack of knowledge of the latest trends can lead to a steep decline in productivity, customer satisfaction, and employee engagement. How will you keep your company ahead of the curve?</p>
                        <br/>
                        <p>Solve: We're here to help! Innovative programs, applications, tutorials, and software are just a few clicks away. Get started now with our vast library of resources that will cater to every need and industry. What are you waiting for?</p>
                        </article>

                        <a href='https://pharaohmak.wordpress.com' target="_blank " rel="noopener " class="button ">View Blog</a>

                    <h3 class="skills ">Skills</h3>
                    <ul class="skillsBox ">
                        <li class="skill html ">

                        <svg xmlns={ html } width="65 " height="91.731 " viewBox="0 0 65 91.731 " class="HtmlLogo__SvgStyles-sc-1im9ulq-0 Odpek ">
                            <g transform="translate(-74.6) ">
                            <path class="a " d="M108.4,0h4.121V4.085h3.8V0h4.121V12.362h-4.121V8.241h-3.762v4.121H108.4m17.486-8.241h-3.637V0h11.413V4.121h-3.655v8.241h-4.121M135.471,0h4.318l2.652,4.354L145.092,0h4.318V12.362h-4.121V6.235L142.4,10.678,139.52,6.235v6.127h-4.049M151.453,0h4.121V8.277h5.841v4.085h-9.961" transform="translate(-27.744) "></path>
                            <path class="b " d="M80.512,166.962,74.6,100.6h65l-5.912,66.326-26.641,7.381 " transform="translate(0 -82.576) "></path>
                            <path class="c " d="M256,193.617V131h26.57l-5.07,56.615 " transform="translate(-148.9-107.53) "></path>
                            <path class="d " d="M142,176.3h20.424v8.134h-11.5l.752,8.331h10.75v8.116h-18.2m.358,4.085h8.17l.573,6.5,9.1,2.437V222.4l-16.7-4.658 " transform="translate(-55.324 -144.714) "></path><path class="e " d="M276.189,176.3H255.8v8.134h19.636m-.735,8.331H255.8V200.9h10.033l-.95,10.571-9.084,2.437v8.456l16.662-4.622" transform="translate(-148.736 -144.714) "></path></g></svg>
                            <p>HTML 5</p>
                        </li>
                        <li class="skill css ">
                        <svg xmlns={ css } width="65 " height="91.748 " viewBox="0 0 65 91.748 " class="CssLogo__SvgStyles-sc-p6grrk-0 cdBqIs "><g transform="translate(-193.633 -276.362) "><g transform="translate(193.633 276.362) "><path class="a " d="M139.633,100.62l-5.922,66.338-26.618,7.379-26.545-7.369L74.633,100.62Z " transform="translate(-74.633 -82.589) "></path><path class="b " d="M277.509,187.583l5.06-56.689H256v62.652Z" transform="translate(-223.5 -107.438) "></path><path class="c " d="M150.31,268.217l.729,8.137h18.21v-8.137Z " transform="translate(-136.749 -220.154) "></path><path class="c " d="M162.537,176.3h-20.4l.74,8.137h19.665Z " transform="translate(-130.037-144.712) "></path><path class="c " d="M174.255,353.727V345.26l-.036.009-9.063-2.447-.579-6.49h-8.169l1.14,12.777,16.669,4.627Z " transform="translate(-141.755 -276.064) "></path><path class="d " d="M160,0h9.856V4.121h-5.734V8.243h5.734v4.121H160Z" transform="translate(-144.703) "></path><path class="d " d="M226,0h9.856V3.584h-5.734V4.3h5.734v8.243H226V8.781h5.734V8.064H226Z " transform="translate(-198.876) "></path><path class="d " d="M292,0h9.856V3.584h-5.734V4.3h5.734v8.243H292V8.781h5.734V8.064H292Z" transform="translate(-253.049) "></path><path class="e " d="M265.863,200.912l-.945,10.553-9.076,2.45v8.466l16.682-4.623.122-1.375,1.912-21.423.2-2.185,1.469-16.47H255.843v8.137h11.466l-.74,8.333H255.843v8.137Z " transform="translate(-223.371-144.712) "></path></g></g></svg>
                            <p>CSS 3</p>
                        </li>
                        <li class="skill javascript ">
                        <svg xmlns={ js } width="65 " height="65 " viewBox="0 0 65 65 " class="JavascriptLogo__SvgStyles-sc-hyfsbm-0 fqnprh "><g transform="translate(-6 -6) "><path class="a " d="M6,71V6H71V71Z" transform="translate(0 0) "></path><path class="b " d="M40.981,41.765c1.249,2.029,2.607,3.974,5.483,3.974,2.416,0,3.683-1.2,3.683-2.862,0-1.988-1.311-2.694-3.969-3.851l-1.457-.621c-4.205-1.784-7-4.019-7-8.741,0-4.351,3.331-7.663,8.537-7.663,3.707,0,6.37,1.284,8.291,4.646l-4.539,2.9c-1-1.784-2.078-2.486-3.752-2.486a2.531,2.531,0,0,0-2.79,2.486c0,1.741,1.083,2.445,3.584,3.523l1.457.621c4.956,2.111,7.751,4.267,7.751,9.113,0,5.222-4.124,8.083-9.66,8.083a10.653,10.653,0,0,1-10.2-6.081Zm-20.919.148a4.931,4.931,0,0,0,4.3,2.894c1.91,0,3.01-.755,3.01-3.689V22h6.018V42.043c0,6.079-3.526,8.845-8.676,8.845a10.56,10.56,0,0,1-9.38-6.081Z" transform="translate(7.518 12.889) "></path></g></svg>
                            <p>JavaScript</p>
                        </li>
                        <li class="skill react ">
                            <svg xmlns={ react } width="65 " height="65 " viewBox="0 0 65 57.885 " class="ReactLogo__SvgStyles-sc-1o0azil-0 bJOHas "><g transform="translate(-175.7 -78) "><path class="a" d="M240.7,106.949c0-4.306-5.392-8.387-13.66-10.917,1.908-8.426,1.06-15.13-2.676-17.277a5.809,5.809,0,0,0-2.968-.742v2.955a3.068,3.068,0,0,1,1.51.344c1.8,1.033,2.584,4.968,1.974,10.03-.146,1.245-.384,2.557-.676,3.9a64.207,64.207,0,0,0-8.413-1.444,64.629,64.629,0,0,0-5.512-6.625c4.319-4.014,8.373-6.214,11.129-6.214V78h0c-3.643,0-8.413,2.6-13.236,7.1-4.823-4.478-9.592-7.049-13.236-7.049v2.955c2.743,0,6.81,2.186,11.129,6.174a62.576,62.576,0,0,0-5.472,6.611,61.871,61.871,0,0,0-8.426,1.457c-.3-1.325-.53-2.61-.689-3.842-.623-5.061.146-9,1.934-10.043a2.949,2.949,0,0,1,1.524-.344V78.066h0a5.908,5.908,0,0,0-2.994.742c-3.723,2.146-4.558,8.837-2.637,17.237-8.241,2.544-13.607,6.611-13.607,10.9s5.392,8.387,13.66,10.917c-1.908,8.426-1.06,15.13,2.676,17.277a5.824,5.824,0,0,0,2.981.742c3.644,0,8.413-2.6,13.236-7.1,4.823,4.478,9.592,7.049,13.236,7.049a5.907,5.907,0,0,0,2.994-.742c3.723-2.146,4.558-8.837,2.637-17.237C235.334,115.323,240.7,111.242,240.7,106.949Zm-17.25-8.837c-.49,1.709-1.1,3.471-1.789,5.233-.543-1.06-1.113-2.12-1.736-3.18s-1.259-2.093-1.908-3.1C219.9,97.344,221.714,97.688,223.45,98.112Zm-6.068,14.11c-1.033,1.789-2.093,3.485-3.193,5.061-1.974.172-3.975.265-5.989.265s-4-.093-5.962-.252q-1.65-2.365-3.206-5.035-1.51-2.6-2.756-5.273c.821-1.775,1.749-3.551,2.743-5.286,1.033-1.789,2.093-3.485,3.193-5.061,1.974-.172,3.975-.265,5.989-.265s4,.093,5.962.252q1.65,2.365,3.206,5.035,1.51,2.6,2.756,5.273C219.29,108.711,218.375,110.487,217.382,112.222Zm4.279-1.722c.715,1.775,1.325,3.551,1.828,5.273-1.736.424-3.564.782-5.459,1.06.649-1.02,1.3-2.067,1.908-3.14S221.118,111.56,221.661,110.5Zm-13.435,14.137a54.618,54.618,0,0,1-3.683-4.24c1.192.053,2.411.093,3.643.093s2.478-.026,3.683-.093A51.712,51.712,0,0,1,208.227,124.637Zm-9.857-7.8c-1.881-.278-3.7-.623-5.432-1.047.49-1.709,1.1-3.471,1.789-5.233.543,1.06,1.113,2.12,1.736,3.18S197.72,115.826,198.369,116.833Zm9.791-27.571a54.621,54.621,0,0,1,3.683,4.24c-1.192-.053-2.411-.093-3.643-.093s-2.478.026-3.683.093A51.713,51.713,0,0,1,208.16,89.262Zm-9.8,7.8c-.649,1.02-1.3,2.067-1.908,3.14s-1.179,2.12-1.722,3.18c-.715-1.775-1.325-3.551-1.828-5.273C194.633,97.7,196.461,97.344,198.356,97.065Zm-11.99,16.588c-4.69-2-7.724-4.624-7.724-6.7s3.034-4.717,7.724-6.7c1.139-.49,2.385-.927,3.67-1.338a63.634,63.634,0,0,0,2.981,8.069A62.735,62.735,0,0,0,190.075,115C188.764,114.594,187.518,114.144,186.366,113.653Zm7.128,18.933c-1.8-1.033-2.584-4.968-1.974-10.03.146-1.245.384-2.557.676-3.9a64.207,64.207,0,0,0,8.413,1.444,64.631,64.631,0,0,0,5.512,6.625c-4.319,4.014-8.373,6.214-11.129,6.214A3.162,3.162,0,0,1,193.494,132.586Zm31.427-10.1c.623,5.061-.146,9-1.934,10.043a2.948,2.948,0,0,1-1.524.344c-2.743,0-6.81-2.186-11.129-6.174a62.58,62.58,0,0,0,5.472-6.611,61.87,61.87,0,0,0,8.426-1.457A37.093,37.093,0,0,1,224.92,122.49Zm5.1-8.837c-1.139.49-2.385.927-3.67,1.338a63.63,63.63,0,0,0-2.981-8.069,62.735,62.735,0,0,0,2.941-8.029c1.312.411,2.557.861,3.723,1.351,4.69,2,7.724,4.624,7.724,6.7S234.711,111.666,230.021,113.653Z"></path><path class="a " d="M320.8,78.4Z " transform="translate(-125.875 -0.347) "></path><circle class="a " cx="6.055 " cy="6.055 " r="6.055 " transform="translate(202.132 100.894) "></circle><path class="a " d="M520.5,78.1Z " transform="translate(-299.117-0.087) "></path></g></svg>
                            <p>React</p>
                        </li>
                        <li class='skill python'>
                            <svg class="python" width="65 " height="65 " viewBox="0 0 256 255" xmlns={ python } preserveAspectRatio="xMinYMin meet"><defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stop-color="#387EB8" offset="0%"></stop><stop stop-color="#366994" offset="100%"></stop></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stop-color="#FFE052" offset="0%"></stop><stop stop-color="#FFC331" offset="100%"></stop></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)"></path><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)"></path></svg>
                           <p>Python</p>
                        </li>
                    </ul>
                    </div>
                </section>
        </div>
    );
};

export default AboutMe;