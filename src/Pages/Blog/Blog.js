import React from 'react';

const Blog = () => {
    return (
        <div className='mx-12 my-10'>
            <div>
                <h1 className='text-4xl'> What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl'>Ans: <br />
                    There are four main types of state you need to properly manage in your React apps: <br />
                    Local state, Global state, Server state, URL state
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-4xl'> How does prototypical inheritance work?</h1>
                <p className='text-xl'>Ans: <br />
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>
            <div>
                <h1 className='text-4xl'>What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl'>Ans: <br />
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. <br />
                    They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-4xl'>React vs. Angular vs. Vue?</h1>
                <p className='text-xl'> Ans : <br />
                    Angular: <br />
                    Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works. <br />
                    React: <br />
                    React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. <br />

                    Vue: <br />
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>
            </div>
        </div>
    );
};

export default Blog;