import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import EditAddressScreen from ".";
import { Alert } from "react-native";
jest.spyOn(Alert, "alert");

describe("EditAddressScreen", () => {
  test("displays error message when all fields are not filled out", () => {
    const { getByText } = render(<EditAddressScreen route={{ params: {} }} />);
    const saveButton = getByText("Save");
    fireEvent.press(saveButton);
    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "All fields must be filled out."
    );
  });

  test("displays error message when first or last name contains non-letter characters", () => {
    const { getByPlaceholderText, getByText } = render(
      <EditAddressScreen route={{ params: {} }} />
    );
    const firstNameInput = getByPlaceholderText("First Name");
    const lastNameInput = getByPlaceholderText("Last Name");
    const saveButton = getByText("Save");

    fireEvent.changeText(firstNameInput, "123");
    fireEvent.changeText(lastNameInput, "456");
    fireEvent.press(saveButton);

    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "All fields must be filled out."
    );
  });

  test("calls onSave and navigates to SuccessAddress on successful save", () => {
    const onSaveMock = jest.fn();
    const navigateMock = jest.fn();
    const route = {
      params: {
        onSave: onSaveMock,
        address: {"id": 1,
        "userid": 1,
        "name": "My Addres 1",
        "country": "Polska",
        "first": "Dominik",
        "last": "Jaroszek",
        "street": "Świętokrzyska 4",
        "city": "Kielce",
        "region": "Świętokrzyskie",
        "zip": "40-051",
        "phone": "+48501747037"}, 
      },
    };

    const { getByText } = render(
      <EditAddressScreen
        route={route}
        navigation={{ navigate: navigateMock }}
      />
    );
    const saveButton = getByText("Save");
    fireEvent.press(saveButton);

    expect(onSaveMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("SucessAddress");
  });
});
