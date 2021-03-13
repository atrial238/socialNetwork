import React from "react";
import { create } from "react-test-renderer";
import UserStatus from './UserStatus';

describe("UserStatus component", () => {

	test("status from props shoud by in temporaryState", () => {
		const component = create(<UserStatus userStatus="my status" />);
		const instance = component.getInstance();
		expect(instance.state.temporaryStatus).toBe("my status");
	});

	test("after creation  <div></div> should be displayed", () => {
		const component = create(<UserStatus userStatus="my status" />);
		const div = component.root.findByType("div");
		expect(div).not.toBeNull();
	});

	test("after creation  <div></div> should contains", () => {
		const component = create(<UserStatus userStatus="my status" />);
		const div = component.root.findByType("div");
		expect(div.children[0]).toBe("my status");
	});

	test("after creation  input shouldn't be displayed", () => {
		const component = create(<UserStatus userStatus="my status" />);
		expect(() => {const input = component.root.findByType("input");}).toThrow();
	}); 
	
	test("if editMode is true should be displayed input insted of span", () => {
		const component = create(<UserStatus userStatus="my status" />);
		const div = component.root.findByType("div");
		div.props.onDoubleClick();
		const input = component.root.findByType("input");

		expect(input.props.value).toBe("my status");
	});

	test("callback should be called", () => {
		const fakeFunc = jest.fn();
		const component = create(<UserStatus userStatus="my status" putMyStatusOnServerThunk ={fakeFunc}/>);
		const instance = component.getInstance();
		instance.statusUpdate();
		expect(fakeFunc.mock.calls.length).toBe(1);
	});
});