import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AdminDeleteScreen from ".";
import MockAsyncStorage from "mock-async-storage";

// Mock AsyncStorage
const mockImpl = new MockAsyncStorage();
jest.mock("@react-native-async-storage/async-storage", () => mockImpl);

describe("AdminDeleteScreen", () => {
  test("calls onDelete function and navigates back after confirming deletion", () => {
    const onDeleteMock = jest.fn();
    const navigationMock = {
      goBack: jest.fn(),
    };
    const routeParams = {
      mySale: {
      },
      onDelete: onDeleteMock,
    };

    const { getByText } = render(
      <AdminDeleteScreen
        navigation={navigationMock}
        route={{ params: routeParams }}
      />
    );

    fireEvent.press(getByText("Return"));

    expect(onDeleteMock).toHaveBeenCalledWith(routeParams.mySale);

    expect(navigationMock.goBack).toHaveBeenCalled();
  });

  test("navigates back when canceling deletion", () => {
    const navigationMock = {
      goBack: jest.fn(),
    };

    const { getByText } = render(
      <AdminDeleteScreen
        navigation={navigationMock}
        route={{
          params: {
          },
        }}
      />
    );

    fireEvent.press(getByText("Cancel"));

    expect(navigationMock.goBack).toHaveBeenCalled();
  });

});
