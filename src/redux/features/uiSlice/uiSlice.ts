import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenModalPayload, UiState } from "../../../types/types";

const uiInitialState: UiState = {
  modal: {
    isOpen: false,
    feedbackMessage: "",
    isError: false,
  },
  isLoading: false,
};

const uiSlice = createSlice({
  name: "modal",
  initialState: uiInitialState,
  reducers: {
    openModal: (ui, action: PayloadAction<OpenModalPayload>) => ({
      ...ui,
      modal: {
        isOpen: true,
        feedbackMessage: action.payload.feedbackMessage,
        isError: true,
      },
    }),
    closeModal: (ui) => ({
      ...ui,
      modal: {
        isOpen: false,
        isError: false,
        feedbackMessage: "",
      },
    }),
  },
});

export const uiSliceReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
