import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Alert } from "react-native";
import AddCardScreen from ".";
import MockAsyncStorage from "mock-async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const mockImpl = new MockAsyncStorage();
jest.mock("@react-native-async-storage/async-storage", () => mockImpl);

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.spyOn(Alert, "alert");

describe("AddCardScreen", () => {
  test("validates card number input", () => {
    const { getByPlaceholderText, getByText } = render(<AddCardScreen />);
    const cardNumberInput = getByPlaceholderText("XXXX XXXX XXXX XXXX");

    fireEvent.changeText(cardNumberInput, "1234");
    fireEvent.press(getByText("Save"));

    expect(Alert.alert).toHaveBeenCalledWith(
      "Please enter a valid 16-digit card number."
    );
  });

  test("validates card holder input", () => {
    const { getByPlaceholderText, getByText } = render(<AddCardScreen />);
    const cardHolderInput = getByPlaceholderText("FirstName LastName");
    const cardNumberInput = getByPlaceholderText("XXXX XXXX XXXX XXXX");

    fireEvent.changeText(cardNumberInput, "1234 4567 6666 6666");
    fireEvent.changeText(cardHolderInput, "Dominik 123");
    fireEvent.press(getByText("Save"));

    expect(Alert.alert).toHaveBeenCalledWith(
      "Please enter a valid card holder name (only letters and spaces allowed)."
    );
  });

  test("validates expiration date ", () => {
    const { getByPlaceholderText, getByText } = render(<AddCardScreen />);
    const cardNumberInput = getByPlaceholderText("XXXX XXXX XXXX XXXX");
    const cardHolderInput = getByPlaceholderText("FirstName LastName");
    const expiryDateInput = getByPlaceholderText("MM/YYYY");

    fireEvent.changeText(cardNumberInput, "1234 4567 6666 6666");
    fireEvent.changeText(cardHolderInput, "John Doe");
    fireEvent.changeText(expiryDateInput, "04/20");

    fireEvent.press(getByText("Save"));

    expect(Alert.alert).toHaveBeenCalledWith(
      "Please enter a valid expiration date (format MM/YYYY)."
    );
  });

  test("displays error message when card is expired", () => {
    const { getByPlaceholderText, getByText } = render(<AddCardScreen />);
    const cardNumberInput = getByPlaceholderText("XXXX XXXX XXXX XXXX");
    const cardHolderInput = getByPlaceholderText("FirstName LastName");
    const expiryDateInput = getByPlaceholderText("MM/YYYY");

    fireEvent.changeText(cardNumberInput, "1234 5678 9012 3456");
    fireEvent.changeText(cardHolderInput, "John Doe");
    fireEvent.changeText(expiryDateInput, "04/2020");

    fireEvent.press(getByText("Save"));

    expect(Alert.alert).toHaveBeenCalledWith("Card expired.");
  });
});
