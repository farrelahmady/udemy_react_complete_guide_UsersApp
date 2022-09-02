# Users App

> Udemy React Complete Guide

## Components

**React** is basically a component-based Javascript framework that makes it easier for developers to break the interface into parts. There are 2 main components that I made in this application. The `AddUser` component is a form component that is intended for **User** to add a new **User**. While the `UsersList` component is intended to display **Users** that have been created in the form of a list.

## Props

Props are used to provide input to components. For example, the `ErrorModal` component will receive **props** _title_ and _message_ which will then be the contents of the element in it.

## State

Another thing I've learned in this React course is `State`. `State` is an object to store data in React and will be rendered or reloaded when the data changes. For example, in this application there are `state` _name_ and _age_ in the `AddUser` component which will reload the input elements on the form when there is a change in the value of the `state`.

## Fragment

React cannot return more than 1 element but each element must be in 1 element root. This can be a problem known as `div soup`.

```html
<div>
	<div>
		<div>
			<h1>This is div Soup</h1>
		</div>
	</div>
</div>
```

Developers can work around this by using a React Fragment as their root element. One example is found in the `App` Component which uses `<React.Fragment></React.Fragment>` as a wrapper element for the component it contains.

## Portal

In this application there is an `ErrorModal` component which will be rendered in the `AddUser` component. It's not a big problem if that happens however, it would be better if we can render these components outside of the main root in this application. Therefore we use `React Portal` which will render a component on the specified element.
