import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import ContactForm from './ContactForm'

test('All labels are appearing', () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);

});

test('placeholders are visible', () => {
    const { getByPlaceholderText } = render(<ContactForm />);

    const firstPlace = getByPlaceholderText("bill");
    const lastPlace = getByPlaceholderText("luo");
    const emailPlace = getByPlaceholderText("bluebill1049@hotmail.com")

    expect(firstPlace).toBeVisible();
    expect(lastPlace).toBeVisible();
    expect(emailPlace).toBeVisible();
})

test('test to make sure error messages show up', () => {
    async () => {const { getByTestId } = render(<ContactForm />);

    const submitButton = getByTestId("submit")
    const firstInput = getByTestId("first-input");
    fireEvent.change(firstInput, { target: { value: 'Michael' } });
    fireEvent.click(submitButton);

    const nameError = await getByTestId("firstError")
    expect(nameError).toBeVisible();
}});

test('input and submit of input fields work', () => {
    async () => {const { getByTestId } = render(<ContactForm />);

    const firstInput = getByTestId("first-input");
    const lastInput = getByTestId("last-input");
    const emailInput = getByTestId("email-input");
    const messageInput = getByTestId("message-input");
    const submitButton = getByTestId("submit")

    fireEvent.change(firstInput, { target: { value: 'Michael' } });
    fireEvent.change(lastInput, { target: { value: 'Barnes' } });
    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello! This is a test.' } });
    fireEvent.click(submitButton);

    const preMessage = await getByTestId("pre-message");

    expect(firstInput.value).toBe('Michael');
    expect(lastInput.value).toBe('Barnes');
    expect(emailInput.value).toBe('test@gmail.com');
    expect(messageInput.value).toBe('Hello! This is a test.');
    expect(preMessage).toBeVisible();
}});

