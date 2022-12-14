import mockInitialUiState from "../../../mocks/mockInitialUiState";
import { OpenModalPayload, UiState } from "../../../types/types";
import {
  closeModalActionCreator,
  openModalActionCreator,
  uiSliceReducer,
} from "./uiSlice";

describe("Given a function uiSlice", () => {
  describe("When receives an empty initial state and a modal with text 'Error' and isError 'true'", () => {
    test("Then it should return a new state with the received text and isError true", () => {
      const currentState: UiState = mockInitialUiState;

      const actionPayload: OpenModalPayload = {
        feedbackMessage: "Error",
        isError: true,
      };

      const openModalAction = openModalActionCreator(actionPayload);
      const newUiState = uiSliceReducer(currentState, openModalAction);
      const expectedUiState: UiState = {
        modal: {
          isOpen: true,
          feedbackMessage: "Error",
          isError: true,
        },
        isLoading: false,
      };

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
  describe("When it receives a current state isOpen true and a closemodal action", () => {
    test("Then it should return a new state isOpen = false", () => {
      const currentUiState: UiState = {
        modal: {
          isOpen: true,
          feedbackMessage: "Error",
          isError: true,
        },
        isLoading: false,
      };
      const expectedUiState: UiState = mockInitialUiState;
      const closemodalAction = closeModalActionCreator;
      const newUiState = uiSliceReducer(currentUiState, closemodalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
