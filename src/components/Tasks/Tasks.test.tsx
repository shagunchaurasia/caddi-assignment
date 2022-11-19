import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tasks from './index';

test('Render Tasks when Task List is Empty', () => {
    render(<Tasks />);
    const addItemsHeading = screen.getByTestId("add-items-heading");
    expect(addItemsHeading).toBeVisible();

});

test("Add Item to List", () => {
    const list = render(<Tasks />)
    const addButton = list.getByTestId("add-button");
    const toDoInput = list.getByTestId("todo-input");

    fireEvent.change(toDoInput, { target: { value: 'Test Entry 1' } });
    fireEvent.click(addButton);

    const toDoItem = list.getByTestId("todo-item-1");
    const toDoFirstElement = toDoItem.textContent;
    // console.log(toDoFirstElement);
    expect(toDoFirstElement).toBe("Test Entry 1")

})

test("Add Multiple Items to List", () => {
    const list = render(<Tasks />)
    const addButton = list.getByTestId("add-button");
    const toDoInput = list.getByTestId("todo-input");

    fireEvent.change(toDoInput, { target: { value: 'Test Entry 1' } });
    fireEvent.click(addButton);
    fireEvent.change(toDoInput, { target: { value: 'Test Entry 2' } });
    fireEvent.click(addButton); 
    fireEvent.change(toDoInput, { target: { value: 'Test Entry 3' } });
    fireEvent.click(addButton);

    const toDoItem1 = list.getByTestId("todo-item-1");
    const toDoFirstElement = toDoItem1.textContent;
    expect(toDoFirstElement).toBe("Test Entry 1")

    const toDoItem2 = list.getByTestId("todo-item-2");
    const toDoSecondElement = toDoItem2.textContent;
    expect(toDoSecondElement).toBe("Test Entry 2")

    const toDoItem3 = list.getByTestId("todo-item-3");
    const toDoThirdElement = toDoItem3.textContent;
    expect(toDoThirdElement).toBe("Test Entry 3")



})


test("Delete Item from List", () => {
    const list = render(<Tasks />)
    const addButton = list.getByTestId("add-button");
    const toDoInput = list.getByTestId("todo-input");

    fireEvent.change(toDoInput, { target: { value: 'Test Entry 1' } });
    fireEvent.click(addButton);

    const toDoItem = list.getByTestId("todo-item-1");
    const toDoFirstElement = toDoItem.textContent;
    expect(toDoFirstElement).toBe("Test Entry 1");

    const deleteButton = list.getByTestId("complete-button-1");
    fireEvent.click(deleteButton);
    expect(toDoItem).not.toBeInTheDocument()
})




test("Add Multiple Items to List and Delete", () => {
    const list = render(<Tasks />)
    const addButton = list.getByTestId("add-button");
    const toDoInput = list.getByTestId("todo-input");

    fireEvent.change(toDoInput, { target: { value: 'Test Entry 1' } });
    fireEvent.click(addButton);
    fireEvent.change(toDoInput, { target: { value: 'Test Entry 2' } });
    fireEvent.click(addButton); 
    fireEvent.change(toDoInput, { target: { value: 'Test Entry 3' } });
    fireEvent.click(addButton);

    const toDoItem1 = list.getByTestId("todo-item-1");
    const toDoFirstElement = toDoItem1.textContent;
    expect(toDoFirstElement).toBe("Test Entry 1")

    const toDoItem2 = list.getByTestId("todo-item-2");
    const toDoSecondElement = toDoItem2.textContent;
    expect(toDoSecondElement).toBe("Test Entry 2")

    const toDoItem3 = list.getByTestId("todo-item-3");
    const toDoThirdElement = toDoItem3.textContent;
    expect(toDoThirdElement).toBe("Test Entry 3")


    const deleteButtonOne = list.getByTestId("complete-button-1");
    fireEvent.click(deleteButtonOne);
    expect(toDoItem1).not.toBeInTheDocument();

    const deleteButtonTwo = list.getByTestId("complete-button-2");
    fireEvent.click(deleteButtonTwo);
    expect(toDoItem3).not.toBeInTheDocument();




})
