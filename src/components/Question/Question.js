import React from 'react';
import "./Question.css";

const Question = () => {
    return (
        <div className="question">
            <h1 className="title-text">Question And Answer</h1>
            <div>
                <h2>How React Works?</h2>
                <p>React defines the logical structure of documents and the way a document is penetrated and manipulated.). So, to make it briskly, React tools a virtual DOM that's principally a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it'll use the virtual representation of it. Also the virtual DOM will try to find the most effective way to modernize the cybersurfer’s DOM.React DOM takes care of streamlining the DOM to match the React rudiments. The reason for this is that JavaScript is veritably fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                </p>
                <h2>Props Vs State</h2>
                <table>
                    <tr>
                        <th>SL</th>
                        <th>Props</th>
                        <th>Statae</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Props are read-only.</td>
                        <td>State changes can be asynchronous.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Props are immutable.</td>
                        <td>State is mutable.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Stateless element can have Props.</td>
                        <td>Stateless element can not have Props. </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Props make components reusable.	</td>
                        <td>State cannot make components reusable.</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Props can be penetrated by the child element. </td>
                        <td>Props can not be penetrated by the child element. </td>
                    </tr>
                    <td></td>
                </table>
                <h2>How use state works?</h2>
                <p>The state is a erected-in React object that's used to contain data or information about the element. A element's state can change over time; whenever it changes, the elementre-renders.
                    useState is a Hook ( function) that allows I have to  state variables in functional factors. I pass the original state to this function and it returns a variable with the current state value (not inescapably the original state) and another function to modernize this value.
                </p>
            </div>
        </div>
    );
};

export default Question;